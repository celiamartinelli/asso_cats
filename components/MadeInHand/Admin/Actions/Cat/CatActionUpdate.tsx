"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Player from "lottie-react";
import loader from "../../../../../public/lottie/loader.json";
import { getAllCats, fetchCats } from "@/utils/actions";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import FormToUpdateCat from "./FormToUpdateCat";
import { Cat } from "@/utils/types";

export default function CatActionUpdate() {
  const [cats, setCats] = useState<Cat[] | null>(null);
  const [selectedCat, setSelectedCat] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCats();
      setCats(data ?? []);
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    const updatedCats = await fetchCats();
    setCats(updatedCats);
    setSelectedCat(null); // cacher le formulaire
  };

  const handleCardClick = (cat: Cat) => {
    setSelectedCat(cat); // Met à jour l'état avec le chat sélectionné
  };

  return (
    <div>
      {selectedCat ? (
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedCat(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>

          <FormToUpdateCat
            initialData={selectedCat}
            onBack={() => setSelectedCat(null)}
            onUpdate={handleUpdate}
          />
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
                console.log(item);
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
