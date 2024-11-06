"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import CardCat from "@/components/MadeInHand/Client/CardCat";
import Link from "next/link";

export default function Page() {
  const [cat, setCat] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("cat").select();
      console.log("Données récupérées:", data);
      setCat(data);
    };

    getData();
  }, []);

  return (
    <div>
      {cat ? (
        <div>{cat.length} chats trouvés</div>
      ) : (
        <div>Chargement des chats...</div>
      )}
      {cat && cat.map((item) => <CardCat key={item.cat_id} item={item} />)}
    </div>
  );
}
