"use client";

import { useState, useEffect } from "react";
import { getAllAdvices } from "@/utils/actions";
import AdviceAction from "@/components/MadeInHand/Admin/Actions/Advice/AdviceAction";
import AdviceGroup from "@/components/MadeInHand/Admin/Actions/Advice/AdviceGroup";

export default function Page() {
  const [advices, setAdvices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAdvices();
      setAdvices(data ?? []);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* On passe setAdvices pour pouvoir rafraîchir après ajout */}
      <AdviceAction setAdvices={setAdvices} />
      <AdviceGroup advices={advices} />
    </div>
  );
}
