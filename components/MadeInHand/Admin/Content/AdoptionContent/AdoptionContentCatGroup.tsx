"use client";
import { useState, useEffect } from "react";
import { getAdoptionRequests, getCatsWithAdoptionCount } from "@/utils/actions";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardCat from "@/components/MadeInHand/Client/CardCat";
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
  }) => {
    setSelectedCat(cat); // Met à jour l'état avec le chat sélectionné
  };

  return (
    <div>
      {selectedCat ? ( // Si un chat est sélectionné, afficher le composant AdoptionContent
        <AdoptionContent cat={selectedCat} />
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
              className="border-2 rounded-lg m-2 cursor-pointer bg-white shadow-md w-80 p-2"
              onClick={() => {
                handleCardClick(item), console.log(item);
              }}
            >
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
                    : "/placeholder.jpg"
                }
                alt={item.name_cat || "Image non disponible"}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
