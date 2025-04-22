import React, { useEffect, useState } from "react";
import {
  getVolunteerForm,
  updateVolunteerRequestReadStatus,
} from "@/utils/actions";
import { ArrowLeft } from "lucide-react";
import Player from "lottie-react";
import loader from "../../../../../public/lottie/loader.json";
import VolunteerContent from "./VolunteerContent";
import { Switch } from "@/components/ui/switch";

export default function VolunteerGroup() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [volunteerRequests, setVolunteerRequests] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getVolunteerForm();
        // console.log("Données des volontaires :", res);
        setVolunteers(res);
      } catch (err: any) {
        // console.error("Erreur lors de la récupération :", err.message);
        setError(err.message || "Une erreur est survenue.");
      }
    };
    getData();
  }, []);

  const handleCardClick = (volunteer: {
    form_id: number;
    first_name: string;
    last_name: string;
    motivation: number;
    why_volunteer: string;
    email: string;
    phone_number: string;
    read: boolean;
  }) => {
    setSelectedVolunteer(volunteer);
  };

  // Fonction qui met à jour le statut "read" dans la DB et l'état local
  const handleSwitchChange = async (requestId: string, newValue: boolean) => {
    // Appel de la fonction depuis actions.ts
    const { success, error } = await updateVolunteerRequestReadStatus(
      Number(requestId),
      newValue
    );

    if (success) {
      // Mise à jour de l'état local pour refléter le changement dans l'UI
      setVolunteerRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.form_id === requestId
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
      {selectedVolunteer ? (
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedVolunteer(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>

          <VolunteerContent volunteer={selectedVolunteer} />
        </div>
      ) : volunteers === null ? (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      ) : (
        <>
          {error && <p className="text-red-500">Erreur : {error}</p>}

          {!volunteers || volunteers.length === 0 ? (
            <p>Aucun formulaire de bénévole trouvé.</p>
          ) : (
            <ul className="space-y-4">
              {volunteers.map((volunteer, index) => {
                console.log("Un bénévole :", volunteer);
                return (
                  <li
                    key={index}
                    className="border p-4 rounded"
                    onClick={() => handleCardClick(volunteer)}
                  >
                    <Switch
                      id={`read-${volunteer.adoption_form_id}`}
                      checked={volunteer.read}
                      onCheckedChange={(checked) =>
                        handleSwitchChange(volunteer.form_id, checked)
                      }
                      className="switch"
                    />
                    <p>
                      <strong>Nom :</strong> {volunteer.first_name}{" "}
                      {volunteer.last_name}
                    </p>
                    <p>
                      <strong>Type(s) de bénévolat :</strong>{" "}
                      {volunteer.volunteer_form_types?.map(
                        (entry: any, idx: number) => (
                          <span key={idx}>
                            {entry.volunteer_types?.title}
                            {idx < volunteer.volunteer_form_types.length - 1
                              ? ", "
                              : ""}
                          </span>
                        )
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
