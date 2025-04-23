import React, { useEffect, useState } from "react";
import {
  getFosterFamilyForm,
  updateFosterFamilyRequestReadStatus,
} from "@/utils/actions";
import { ArrowLeft, Dog, Cat, Rabbit, Turtle, Bird, Fish } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import { HOUSING_TYPE_LABELS } from "@/utils/enumLabels";

interface HostFamily {
  created_at: string;
  foster_family_form_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone_number: string;
  address: string;
  type_foster_family: string[];
  type_of_housing: string;
  living_area: string;
  capacity_number_animals: number;
  type_animals: string[];
  specific_part: boolean;
  have_you_other_animals: boolean;
  home_description: string;
  why_foster_family: string;
  transported: boolean;
  other_details: string;
  specific_part_details: string;
  have_you_other_animals_details: string;
  read: boolean;
}

export default function HostFamilyGroup() {
  const [hostFamilies, setHostFamilies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<any | null>(null);
  const [expandedFormId, setExpandedFormId] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await getFosterFamilyForm();
        const parsed = res.map((family: any) => ({
          ...family,
          type_animals:
            typeof family.type_animals === "string"
              ? JSON.parse(family.type_animals)
              : family.type_animals,
        }));

        // console.log("Données transformées :", parsed);

        setHostFamilies(parsed);
      } catch (err: any) {
        setError(err.message || "Une erreur est survenue.");
      }
    };

    fetchForms();
  }, []);

  // Regrouper les familles d'accueil par type
  const hostFamiliesByType = hostFamilies.reduce((acc: any, family) => {
    (family.type_foster_family || []).forEach((type: string) => {
      if (!acc[type]) {
        acc[type] = {
          families: [],
        };
      }
      acc[type].families.push(family);
    });
    return acc;
  }, {});

  // Gérer le changement d'état du switch "Lu / Non Lu"
  const handleSwitchChange = async (formId: string, newValue: boolean) => {
    if (!formId || typeof formId !== "string") {
      console.error("formId invalide :", formId);
      return;
    }

    const { success, error } = await updateFosterFamilyRequestReadStatus(
      formId,
      newValue
    );

    if (success) {
      setHostFamilies((prev) =>
        prev.map((family) =>
          family.foster_family_form_id === formId
            ? { ...family, read: newValue }
            : family
        )
      );
    } else {
      console.error("Erreur de mise à jour:", error);
    }
  };

  // Ta liste d'animaux avec les icônes
  const typeofanimalsList = [
    { value: "Chat", label: "Chat", icon: Cat },
    { value: "Chien", label: "Chien", icon: Dog },
    { value: "Oiseaux", label: "Oiseaux", icon: Bird },
    { value: "Lapin", label: "Lapin", icon: Rabbit },
    { value: "Poisson", label: "Poisson", icon: Fish },
    { value: "Nac", label: "Nac", icon: Turtle },
  ];

  // On génère une map pour accès rapide : { "Chat": <Icon />, ... }
  const animalIcons: { [key: string]: JSX.Element } = typeofanimalsList.reduce(
    (acc, animal) => {
      acc[animal.value] = <animal.icon size={24} />;
      return acc;
    },
    {} as { [key: string]: JSX.Element }
  );

  // Fonction pour afficher les icônes
  const renderAnimalIcons = (typeAnimals: any) => {
    if (!Array.isArray(typeAnimals)) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {typeofanimalsList.map((animal, index) => {
          const isSelected = typeAnimals.includes(animal.value);

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl border-2 p-2 text-xs ${
                isSelected
                  ? "bg-blue-500 border-blue-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              <animal.icon size={24} />
              <span className="mt-1 text-[10px]">{animal.label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Familles d'accueil</h1>
      {selectedFamily ? (
        // Vue individuelle d’une famille d'accueil
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedFamily(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>
          {/* Tu peux ici afficher plus de détails sur la famille d'accueil */}
          <h2 className="text-xl font-semibold">
            {selectedFamily.first_name} {selectedFamily.last_name}
          </h2>
          {/* Tu peux utiliser une autre structure pour afficher les détails du formulaire */}
        </div>
      ) : selectedType ? (
        // Vue des familles pour un type sélectionné
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
          <h2 className="text-xl font-semibold">{selectedType}</h2>
          <ul className="space-y-4">
            {hostFamiliesByType[selectedType].families.map((family: any) => {
              const isOpen = expandedFormId === family.foster_family_form_id;
              const safeTypeAnimals = Array.isArray(family.type_animals)
                ? family.type_animals
                : [];
              // console.log(
              //   "Animaux sélectionnés pour",
              //   family.first_name,
              //   safeTypeAnimals
              // );
              return (
                <li
                  key={family.foster_family_form_id}
                  className="border p-4 rounded"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setExpandedFormId(
                        isOpen ? null : family.foster_family_form_id
                      )
                    }
                  >
                    <p>
                      <strong>Nom :</strong> {family.first_name}{" "}
                      {family.last_name}
                    </p>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <Switch
                        checked={family.read}
                        onCheckedChange={(checked) =>
                          handleSwitchChange(
                            family.foster_family_form_id,
                            checked
                          )
                        }
                      />
                      Marquer comme lu
                    </label>
                    <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
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
                          {/* Détails supplémentaires de la famille */}
                          <p className="text-sm text-zinc-600 mb-4">
                            {" "}
                            Demande reçue le:{" "}
                            {new Date(family.created_at).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
                          </p>
                          <p>
                            <strong>Email :</strong> {family.email}
                          </p>
                          <p>
                            <strong>Téléphone :</strong> {family.phone_number}
                          </p>
                          <p>
                            <strong>Adresse :</strong> {family.address}
                          </p>
                          <p>
                            <strong>Date de naissance :</strong>{" "}
                            {new Date(family.date_of_birth).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
                          </p>
                          <p>
                            <strong>Type de logement :</strong>{" "}
                            {HOUSING_TYPE_LABELS[family.type_of_housing] ||
                              family.type_of_housing}
                          </p>
                          <p>
                            <strong>Superficie :</strong> {family.living_area}
                          </p>
                          <p>
                            <strong>Capacité d'accueil :</strong>{" "}
                            {family.capacity_number_animals}
                          </p>
                          <div className="p-4 bg-gray-50 rounded-md border">
                            <div>
                              <strong>Type d'animaux :</strong>
                              <div className="flex flex-wrap">
                                {renderAnimalIcons(safeTypeAnimals)}
                              </div>
                            </div>
                          </div>
                          <p>
                            <strong>Partie spécifique :</strong>{" "}
                            {family.specific_part ? "Oui" : "Non"}
                          </p>
                          {family.specific_part && (
                            <p>
                              <strong>Détails :</strong>{" "}
                              {family.specific_part_details}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      ) : hostFamilies === null ? (
        <div>Chargement...</div>
      ) : (
        // Vue des types de famille d'accueil
        <div>
          {error && <p className="text-red-500">Erreur : {error}</p>}
          {Object.keys(hostFamiliesByType).length === 0 ? (
            <p>Aucune famille d'accueil trouvée.</p>
          ) : (
            <ul className="space-y-4">
              {Object.entries(hostFamiliesByType).map(
                ([typeTitle, group]: [string, any]) => (
                  <li
                    key={typeTitle}
                    className="border p-4 rounded cursor-pointer flex items-center justify-between"
                    onClick={() => setSelectedType(typeTitle)}
                  >
                    <span className="font-semibold">{typeTitle}</span>
                    <span className="bg-black text-white text-sm rounded-full px-2 py-1">
                      {group.families.length}
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
