"use client";

import AdvicePageClient from "./AdvicePageClient";
import { useParams } from "next/navigation";

export default function AdvicePageWrapper() {
  const params = useParams();
  let adviceId = params?.adviceId;
  if (Array.isArray(adviceId)) {
    adviceId = adviceId[0];
  }

  if (!adviceId) return <p>Conseil introuvable</p>;

  return <AdvicePageClient adviceId={adviceId} />;
}
