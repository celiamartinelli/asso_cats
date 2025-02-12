"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import CardCat from "@/components/MadeInHand/Client/CardCat";
import Player from "lottie-react";
import loader from "../../../public/lottie/loader.json";

export default function Page() {
  const [cat, setCat] = useState<any[] | null>(null);
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

  return (
    <div className="w-full h-full  flex flex-col items-center">
      {cat ? null : (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      )}
      <div className="w-11/12 flex justify-center flex-wrap ">
        {cat &&
          cat.map((item, index) =>
            item.cat_id && item.name_cat ? (
              <CardCat key={item.cat_id} item={item} />
            ) : (
              <div key={index}>Erreur : Données manquantes pour ce chat</div>
            )
          )}
      </div>
    </div>
  );
}
