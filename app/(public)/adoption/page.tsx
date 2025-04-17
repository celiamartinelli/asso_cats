"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import CardCat from "@/components/MadeInHand/Client/Card/CardCat";
import Player from "lottie-react";
import loader from "../../../public/lottie/loader.json";
import FilterModalCat from "@/components/MadeInHand/Client/Modal/FilterModalCat";

export default function Page() {
  const [cat, setCat] = useState<any[] | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [filteredCats, setFilteredCats] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("cat").select();
      if (error) {
        console.error(
          "Erreur lors de la récupération des chats :",
          error.message
        );
        return;
      }
      console.log("Données récupérées:", data);

      setCat(data || []);
    };

    getData();
  }, []);

  useEffect(() => {
    if (cat) {
      console.log("Filtres appliqués :", filters);
      const newFiltered = cat.filter((c) => {
        return (
          (!filters.sex_cat || c.sex_cat === filters.sex_cat) &&
          (!filters.age_of_cat || c.age_of_cat === filters.age_of_cat) &&
          (!filters.coat_color || c.coat_color === filters.coat_color) &&
          (!filters.pattern || c.pattern === filters.pattern)
        );
      });
      console.log("Résultats filtrés :", newFiltered);

      setFilteredCats(newFiltered);
    }
  }, [filters, cat]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center dark:bg-black">
      {cat ? null : (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      )}

      <FilterModalCat onApply={setFilters} />

      <div className="w-11/12 flex justify-center flex-wrap mt-4">
        {filteredCats.length === 0 ? (
          <p>Aucun chat trouvé.</p>
        ) : (
          filteredCats
            .sort((a, b) => {
              if (a.adoption !== b.adoption) {
                return a.adoption ? 1 : -1;
              }
              return a.name_cat.localeCompare(b.name_cat);
            })
            .map((item, index) =>
              item.cat_id && item.name_cat ? (
                <CardCat key={item.cat_id} item={item} />
              ) : (
                <div key={index}>Erreur : Données manquantes pour ce chat</div>
              )
            )
        )}
      </div>
    </div>
  );
}
