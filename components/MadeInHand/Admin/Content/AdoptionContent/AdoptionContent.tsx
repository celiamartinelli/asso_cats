"use client";
import { useState, useEffect } from "react";
import {
  getAdoptionRequests,
  updateAdoptionRequestReadStatus,
} from "@/utils/actions";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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
    <div className="w-full h-full bg-red-500">
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
      <div className="flex flex-wrap mt-2 gap-2 justify-start">
        {adoptionRequests.map((request, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>titre</CardTitle>
              <CardDescription>ici le contenu du form:</CardDescription>
            </CardHeader>
            <CardContent>
              {" "}
              <p>Request ID: {request.adoption_form_id}</p>
              <p>
                Requester Name: {request.first_name} {request.last_name}
              </p>
              <p>Requester Email: {request.email}</p>
              <p>Animal: {request.cat.name_cat}</p>
            </CardContent>
            <CardFooter>
              <p>Lu:</p>
              <Switch
                id={`read-${request.adoption_form_id}`}
                checked={request.read}
                onCheckedChange={(checked) =>
                  handleSwitchChange(request.adoption_form_id, checked)
                }
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default AdoptionContent;
