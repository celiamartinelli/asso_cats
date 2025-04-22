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
import { motion, AnimatePresence } from "framer-motion";

export default function VolunteerGroup() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedVolunteer, setSelectedVolunteer] = useState<any | null>(null);
  const [expandedFormId, setExpandedFormId] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getVolunteerForm();
        setVolunteers(res);
      } catch (err: any) {
        setError(err.message || "Une erreur est survenue.");
      }
    };
    getData();
  }, []);

  // Regrouper les bénévoles par type
  const volunteersByType = volunteers.reduce((acc: any, volunteer) => {
    (volunteer.volunteer_form_types || []).forEach((entry: any) => {
      const typeTitle = entry.volunteer_types?.title || "Autre";
      if (!acc[typeTitle]) {
        acc[typeTitle] = [];
      }
      acc[typeTitle].push(volunteer);
    });
    return acc;
  }, {});

  const handleSwitchChange = async (formId: string, newValue: boolean) => {
    if (!formId || typeof formId !== "string") {
      console.error("formId invalide :", formId);
      return;
    }

    const { success, error } = await updateVolunteerRequestReadStatus(
      formId,
      newValue
    );

    if (success) {
      setVolunteers((prev) =>
        prev.map((v) => (v.form_id === formId ? { ...v, read: newValue } : v))
      );
    } else {
      console.error("Erreur de mise à jour:", error);
    }
  };

  // Affichage de la page
  return (
    <div>
      {selectedVolunteer ? (
        // Vue individuelle d’un formulaire
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedVolunteer(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>
          <VolunteerContent volunteer={selectedVolunteer} />
        </div>
      ) : selectedType ? (
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => {
              setSelectedType(null);
              setExpandedFormId(null);
            }}
          >
            <ArrowLeft size={20} /> Retour aux types
          </button>

          <h2 className="text-xl font-semibold mb-4">{selectedType}</h2>
          <ul className="space-y-4">
            {volunteersByType[selectedType].map(
              (volunteer: any, index: number) => {
                const isOpen = expandedFormId === volunteer.form_id;

                return (
                  <li key={index} className="border p-4 rounded">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setExpandedFormId(isOpen ? null : volunteer.form_id)
                      }
                    >
                      <p>
                        <strong>Nom :</strong> {volunteer.first_name}{" "}
                        {volunteer.last_name}
                      </p>
                      <span className="text-gray-500">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="p-4 bg-gray-50 rounded-md border">
                            <VolunteerContent volunteer={volunteer} />
                            <div className="mt-4">
                              <label className="flex items-center gap-2 text-sm text-gray-700">
                                <Switch
                                  checked={volunteer.read}
                                  onCheckedChange={(checked) =>
                                    handleSwitchChange(
                                      volunteer.form_id,
                                      checked
                                    )
                                  }
                                />
                                Marquer comme lu
                              </label>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      ) : volunteers === null ? (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      ) : (
        // Vue des types de bénévolat
        <div>
          {error && <p className="text-red-500">Erreur : {error}</p>}
          {Object.keys(volunteersByType).length === 0 ? (
            <p>Aucun formulaire de bénévole trouvé.</p>
          ) : (
            <ul className="space-y-4">
              {Object.entries(volunteersByType).map(
                ([typeTitle, group]: [string, any[]]) => (
                  <li
                    key={typeTitle}
                    className="border p-4 rounded cursor-pointer flex items-center justify-between"
                    onClick={() => setSelectedType(typeTitle)}
                  >
                    <span className="font-semibold">{typeTitle}</span>
                    <span className="bg-black text-white text-sm rounded-full px-2 py-1">
                      {group.length}
                    </span>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
