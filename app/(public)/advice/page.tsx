"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import Player from "lottie-react";
import loader from "../../../public/lottie/loader.json";
import CardAdvice from "@/components/MadeInHand/Client/Card/CardAdvice";

export default function Advice() {
  const [advice, setAdvice] = useState<any[] | null>(null);
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
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Advice</h1>
      {advice ? (
        <div>{advice.length} conseils trouvés</div>
      ) : (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
        />
      )}
      <div className="flex flex-wrap justify-center">
        {advice &&
          advice.map((item, index) =>
            item.advice_id && item.title ? (
              <CardAdvice key={item.advice_id} item={item} />
            ) : (
              <div key={index}>Erreur : Données manquantes pour ce conseil</div>
            )
          )}
      </div>
    </div>
  );
}
