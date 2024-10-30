"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [cat, setCat] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("cat").select();
      setCat(data);
    };
    getData();
  }, []);

  return <pre>{JSON.stringify(cat, null, 2)}</pre>;
}
