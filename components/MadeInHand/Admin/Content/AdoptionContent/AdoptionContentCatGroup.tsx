"use client";
import { useState, useEffect } from "react";
import { getCatsWithAdoptionCount } from "@/utils/actions";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Player from "lottie-react";
import loader from "../../../../../public/lottie/loader.json";
import AdoptionContent from "./AdoptionContent";

export default function AdoptionContentCatGroup() {
  const [cats, setCats] = useState<any[] | null>(null);
  const [selectedCat, setSelectedCat] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatsWithAdoptionCount();
      setCats(data ?? []);
    };

    fetchData();
  }, []);

  const handleCardClick = (cat: {
    cat_id: number;
    name_cat: string;
    sex_cat: string;
    age_of_cat: number;
    cat_url_image: string[];
    date_of_birth: string;
    adoption: boolean;
  }) => {
    setSelectedCat(cat); // Met à jour l'état avec le chat sélectionné
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Formulaire d'Adoption</h1>

      {selectedCat ? ( // Si un chat est sélectionné, afficher le composant AdoptionContent
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedCat(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>

          <AdoptionContent cat={selectedCat} />
        </div>
      ) : cats === null ? (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      ) : (
        <div className="flex justify-center flex-wrap">
          {cats?.map((item) => (
            <div
              key={item.cat_id}
              className={`w-80 border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md flex flex-col relative dark:bg-zinc-900 ${
                item.adoption ? "opacity-50" : ""
              }`}
              onClick={() => {
                handleCardClick(item);
                console.log(item.adoption);
              }}
            >
              {item.adoption && (
                <div className="absolute inset-0 bg-white dark:bg-zinc-900 dark:bg-opacity-50  bg-opacity-50 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black dark:text-white">
                    ADOPTÉ
                  </span>
                </div>
              )}
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <h2 className="font-bold text-2xl">{item.name_cat}</h2>
                  <p>Sexe: {item.sex_cat}</p>
                  <p>Âge: {item.age_of_cat}</p>
                </div>
                <div>
                  <p className="flex w-7 h-7 bg-black rounded-full text-white justify-center items-center">
                    {item.adoption_form?.[0]?.count ?? 0}
                  </p>
                </div>
              </div>
              <Image
                src={
                  Array.isArray(item.cat_url_image) &&
                  item.cat_url_image.length > 0
                    ? item.cat_url_image[0]
                    : "/placeholder.png"
                }
                alt={item.name_cat || "Image non disponible"}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-72"
                priority
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
