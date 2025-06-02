"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import Player from "lottie-react";
import loader from "../../../public/lottie/loader.json";
import CardAdvice from "@/components/MadeInHand/Client/Card/CardAdvice";
import FilterModalAdvice from "@/components/MadeInHand/Client/Modal/FilterModalAdvice";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/MadeInHand/PageHeader";

export default function Advice() {
  const [advice, setAdvice] = useState<any[] | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [filteredAdvices, setFilteredAdvices] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("advice").select();
      if (error) {
        console.error(
          "Erreur lors de la récupération des conseils :",
          error.message
        );
        return;
      }
      console.log("Données récupérées:", data);
      setAdvice(data || []);
    };

    getData();
  }, []);

  useEffect(() => {
    if (advice) {
      console.log("Filtres appliqués :", filters);
      const newFiltered = advice.filter((c) => {
        return (
          (!filters.subject || c.subject === filters.subject) &&
          (!filters.age_of_cat || c.age_of_cat === filters.age_of_cat) &&
          (!filters.category_advice ||
            c.category_advice === filters.category_advice)
        );
      });
      console.log("Résultats filtrés :", newFiltered);

      setFilteredAdvices(newFiltered);
    }
  }, [filters, advice]);

  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <PageHeader pageKey="advice" />
      <p className="mb-4 text-center">
        Bienvenue dans notre section de conseils ! Ici, vous trouverez des
        conseils utiles et pratiques pour prendre soin de votre chat. Que vous
        soyez un propriétaire de chat expérimenté ou un nouveau parent de chat,
        nos conseils sont conçus pour vous aider à offrir le meilleur à votre
        compagnon félin.
      </p>
      {advice ? (
        <div className="hidden">{advice.length} conseils trouvés</div>
      ) : (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      )}

      <div className="w-full flex justify-end items-center mt-4 mr-12">
        <p className="flex justify-center items-center gap-2 text-xs text-zinc-500">
          ici choisissez précisémment ce que vous chercher <ArrowRight />
        </p>
        <FilterModalAdvice onApply={setFilters} />
      </div>

      <div className="w-11/12 flex justify-center flex-wrap mt-4">
        {filteredAdvices.length === 0 ? (
          <p>Aucun conseils trouvé.</p>
        ) : (
          filteredAdvices
            .sort((a, b) => {
              if (a.advice !== b.advice) {
                return a.advice ? 1 : -1;
              }
              return a.title.localeCompare(b.title);
            })
            .map((item, index) =>
              item.advice_id && item.title ? (
                <CardAdvice key={item.advice_id} item={item} />
              ) : (
                <div key={index}>
                  Erreur : Données manquantes pour ce conseil
                </div>
              )
            )
        )}
      </div>
    </div>
  );
}
