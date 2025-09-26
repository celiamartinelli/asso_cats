"use client";

import { useEffect, useState } from "react";
import { getAllAdvices } from "@/utils/actions";
import Player from "lottie-react";
import loader from "../../../../../public/lottie/loader.json";
import {
  SUBJECT_LABELS,
  CATEGORY_LABELS,
  AGE_LABELS,
} from "@/utils/enumLabels";

import CardAdvice from "@/components/MadeInHand/Client/Card/CardAdvice";
import PageHeader from "@/components/MadeInHand/PageHeader";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AdviceGroup() {
  const [advices, setAdvices] = useState<any[] | null>(null);
  const [selectedAdvice, setSelectedAdvice] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAdvices();
      setAdvices(data ?? []);
    };

    fetchData();
  }, []);

  const handleCardClick = (cat: {
    advice_id: string;
    title: string;
    subtitle: string;
    like: number;
    subject: string;
    body_of_advice: string;
    useful: boolean;
    age_of_cat: string;
    advice_url_image: string;
    created_at: string;
    category_advice: string;
  }) => {
    setSelectedAdvice(advices); // Met à jour l'état avec le conseil sélectionné
  };

  return (
    <div className="  bg-gray-100 dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">Liste des conseils</h1>
      {selectedAdvice ? ( // Si un chat est sélectionné, afficher le composant AdoptionContent
        <div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:underline mb-4"
            onClick={() => setSelectedAdvice(null)}
          >
            <ArrowLeft size={20} /> Retour
          </button>

          {/* ici le composant pour afficher l'article */}
        </div>
      ) : advices === null ? (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      ) : (
        <div className="flex justify-center flex-wrap">
          {advices?.map((item) => (
            <div className="relative rounded-lg m-2 cursor-pointer bg-white dark:bg-zinc-900 p-6 shadow-md group overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <button
                  className="text-white font-bold py-2 px-4 rounded bg-black"
                  onClick={() => handleCardClick(item)}
                >
                  Lire l'article
                </button>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 font-dosis">
                {item.title}
              </h2>
              <h3 className="italic text-zinc-700"> {item.subtitle}</h3>
              <h3 className="bg-zinc-900 text-white rounded-md inline-block px-2 py-1 ">
                {SUBJECT_LABELS[item.subject] || item.subject}
              </h3>
              <h3>
                Catégorie:{" "}
                {CATEGORY_LABELS[item.category_advice] || item.category_advice}
              </h3>
              <h3>Âge: {AGE_LABELS[item.age_of_cat] || item.age_of_cat}</h3>

              <Image
                src={
                  typeof item.advice_url_image === "string"
                    ? item.advice_url_image
                    : "/placeholder.png"
                }
                alt={item.title || "Image non disponible"}
                width={300}
                height={300}
                priority
                className="object-cover rounded-lg mb-2"
              />
              <p className=" text-xs text-gray-400 dark:text-zinc-300">
                {new Date(item.created_at).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            // <div
            //   key={item.advice_id}
            //   className={`w-80 border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md flex flex-col relative dark:bg-zinc-900 ${
            //     item.adoption ? "opacity-50" : ""
            //   }`}
            //   onClick={() => {
            //     handleCardClick(item);
            //     console.log(item.adoption);
            //   }}
            // >

            //   <div className="flex justify-between ">
            //     <div className="flex flex-col">
            //       <h2 className="font-bold text-2xl">{item.title}</h2>

            //       <p>Âge: {item.age_of_cat}</p>
            //     </div>
            //   </div>
            //   <Image
            //     src={item.advice_url_image}
            //     alt={item.title || "Image non disponible"}
            //     width={300}
            //     height={300}
            //     className="rounded-lg object-cover w-full h-72"
            //     priority
            //   />
            // </div>
          ))}
        </div>
      )}
      {/* {advices === null ? (
        <div className="flex justify-center">
          <Player
            autoplay
            loop
            animationData={loader}
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      ) : (
        <div className="w-11/12 flex justify-center flex-wrap mt-6">
          {advices.length === 0 ? (
            <p>Aucun article trouvé.</p>
          ) : (
            advices.map((item) =>
              item.advice_id && item.title ? (
                <div key={item.advice_id} className="cursor-default">
                  <CardAdvice item={item} />
                </div>
              ) : (
                <div key={item.advice_id || Math.random()}>
                  Erreur : Données manquantes
                </div>
              )
            )
          )}
        </div>
      )} */}
    </div>
  );
}
