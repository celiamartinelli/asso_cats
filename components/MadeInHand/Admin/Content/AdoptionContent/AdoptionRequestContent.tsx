"use client";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { updateAdoptionRequestReadStatus } from "@/utils/actions";

interface AdoptionRequestContentProps {
  request: {
    adoption_form_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    city_name: string;
    postal_code: string;
    date_of_birth: string;
    occupation: string;
    type_of_housing: string;
    living_area: string;
    have_animals: boolean;
    wich_ones: string;
    allergies_description: string;
    sterelization_opinion: string;
    house_description: string;
    why_adopt: string;
    have_you_garden: string;
    read: boolean;
    created_at: string;
    cat_id: string;
  };
}

const AdoptionRequestContent: React.FC<AdoptionRequestContentProps> = ({
  request,
}) => {
  const [adoptionRequests, setAdoptionRequests] = useState<any[]>([]);

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
    <div>
      <p>
        {" "}
        Demande reçue le:{" "}
        {new Date(request.created_at).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
      <div className="w-full h-full flex flex-wrap">
        <div className="border border-1-gray-500 rounded-lg p-4 w-1/4">
          <h2>Informations sur la personne</h2>
          <p>Nom:{request.last_name}</p>
          <p>Prénom:{request.first_name}</p>
          <p>
            {" "}
            {new Date(request.date_of_birth).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            {" ("}
            {(() => {
              const birthDate = new Date(request.date_of_birth);
              const today = new Date();
              const ageInMonths =
                (today.getFullYear() - birthDate.getFullYear()) * 12 +
                today.getMonth() -
                birthDate.getMonth();
              const years = Math.floor(ageInMonths / 12);
              return `${years} an${years > 1 ? "s" : ""}`;
            })()}
            {")"}
          </p>
        </div>
        <div className="border border-1-gray-500 rounded-lg p-4 w-1/4">
          <h2>Informations sur la loclisation du logement</h2>
          <p>Adresse:{request.address}</p>
          <p>Code postal:{request.postal_code}</p>
          <p>Ville:{request.city_name}</p>
        </div>
        <div className="border border-1-gray-500 rounded-lg p-4 w-1/4">
          <h2>Informations de contact</h2>
          <p>Email: {request.email}</p>
          <p>Téléphone: {request.phone_number}</p>
          <p>Occupation: {request.occupation}</p>
        </div>

        <div className="border border-1-gray-500 rounded-lg p-4 w-1/4">
          <h2>Informations Tiers</h2>
          <p>
            Déjà des animaux: {request.have_animals === true ? "OUI" : "NON"}
          </p>
          {request.have_animals ? <p>Lesquels: {request.wich_ones}</p> : null}
          <p>Allergies: {request.allergies_description}</p>
          <p>Opinion sur la Stérilisation: {request.sterelization_opinion}</p>
        </div>
        <div className="border border-1-gray-500 rounded-lg p-4 w-full mt-2">
          <h2>Informations sur le logement</h2>
          <p>Type de Logement: {request.type_of_housing}</p>
          <p>Surface Habitation: {request.living_area} m&sup2;</p>
          <p>Ils ont: {request.have_you_garden}</p>
          <p>Description du logement: {request.house_description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="p-2">Lu:</p>
        <Switch
          id={`read-${request.adoption_form_id}`}
          checked={request.read}
          onCheckedChange={(checked) =>
            handleSwitchChange(request.adoption_form_id, checked)
          }
        />
      </div>
    </div>
  );
};
export default AdoptionRequestContent;
