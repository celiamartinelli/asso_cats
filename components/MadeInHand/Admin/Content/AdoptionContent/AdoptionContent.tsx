"use client";
import { useState, useEffect } from "react";
import {
  getAdoptionRequests,
  updateAdoptionRequestReadStatus,
} from "@/utils/actions";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import AdoptionRequestContent from "./AdoptionRequestContent";

interface AdoptionContentProps {
  cat: {
    cat_id: string;
    name_cat: string;
    sex_cat: string;
    age_of_cat: number;
    cat_url_image: string[];
    date_of_birth: string;
    read: boolean;
  };
}

const AdoptionContent: React.FC<AdoptionContentProps> = ({ cat }) => {
  const [adoptionRequests, setAdoptionRequests] = useState<any[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);

  useEffect(() => {
    async function fetchAdoptionRequests() {
      const requests = await getAdoptionRequests(cat.cat_id);
      setAdoptionRequests(requests);
    }

    fetchAdoptionRequests();
  }, [cat.cat_id]);

  // Fonction qui met à jour le statut "read" dans la DB et l'état local
  const handleSwitchChange = async (requestId: string, newValue: boolean) => {
    // Appel de la fonction depuis actions.ts
    const { success, error } = await updateAdoptionRequestReadStatus(
      requestId,
      newValue
    );

    if (success) {
      // Mise à jour de l'état local pour refléter le changement dans l'UI
      setAdoptionRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.adoption_form_id === requestId
            ? { ...request, read: newValue }
            : request
        )
      );
    } else {
      // Gérer l'erreur ici (si besoin)
      console.error("Erreur de mise à jour du statut de lecture:", error);
    }
  };

  return (
    <div className="w-full h-full ">
      <h1>AdoptionContent</h1>
      <Card>
        <CardHeader>
          <CardTitle>{cat.name_cat}</CardTitle>
          <CardDescription>
            Date de naissance:{" "}
            {new Date(cat.date_of_birth).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            {" ("}
            {(() => {
              const birthDate = new Date(cat.date_of_birth);
              const today = new Date();
              const ageInMonths =
                (today.getFullYear() - birthDate.getFullYear()) * 12 +
                today.getMonth() -
                birthDate.getMonth();
              const years = Math.floor(ageInMonths / 12);
              const months = ageInMonths % 12;
              return `${years > 0 ? `${years} an${years > 1 ? "s" : ""} ` : ""}${
                months > 0 ? `${months} mois` : ""
              }`;
            })()}
            {")"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={
              cat.cat_url_image[0] ? cat.cat_url_image[0] : "/placeholder.jpg"
            }
            alt={cat.name_cat || "Image non disponible"}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </CardContent>
        <CardFooter>
          <p>{cat.sex_cat}</p>
        </CardFooter>
      </Card>
      <div className="flex flex-wrap justify-start">
        {selectedRequest && (
          <div>
            <button
              className="flex items-center gap-2 text-gray-500 hover:underline mb-4 mt-2"
              onClick={() => setSelectedRequest(null)}
            >
              <ArrowLeft size={20} /> Retour
            </button>
            <AdoptionRequestContent request={selectedRequest} />
          </div>
        )}
        {!selectedRequest && (
          <div className="flex flex-wrap justify-start w-full">
            {adoptionRequests.map((request, index) => (
              <Card
                className="w-1/3 mt-3 cursor-pointer"
                key={index}
                onClick={(e) => {
                  // Prevent card click when switch is toggled
                  if ((e.target as HTMLElement).closest(".switch")) return;
                  setSelectedRequest(request);
                }}
              >
                <CardHeader>
                  <CardTitle>
                    {request.first_name} {request.last_name}
                  </CardTitle>

                  <CardDescription>
                    Demande reçue le:{" "}
                    {new Date(request.created_at).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {" "}
                  <p>Pourquoi je veux adopter:{request.why_adopt}</p>
                  <p>Téléphone: {request.phone_number}</p>
                  <p>Email: {request.email}</p>
                  <p>Ville: {request.city_name}</p>
                </CardContent>
                <CardFooter>
                  <p className="p-2">Lu:</p>
                  <Switch
                    id={`read-${request.adoption_form_id}`}
                    checked={request.read}
                    onCheckedChange={(checked) =>
                      handleSwitchChange(request.adoption_form_id, checked)
                    }
                    className="switch"
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AdoptionContent;
