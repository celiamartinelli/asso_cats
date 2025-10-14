// app/(public)/conseil/[adviceId]/AdvicePageClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAdviceById, addLike } from "../../../../utils/actions";
import { UpvoteIcon } from "@/components/ui/upvote";
import Player from "lottie-react";
import loader from "../../../../public/lottie/loader.json";
import {
  SUBJECT_ADVICE_LABELS,
  CATEGORY_ADVICE_LABELS,
  AGE_LABELS,
} from "@/utils/enumLabels";

interface AdviceData {
  advice_id: string;
  title: string;
  subject: string;
  like: number;
  body_of_advice: string;
  advice_url_image: string;
  category_advice: string;
  useful: boolean;
  age_of_cat: string;
}

export default function AdvicePageClient({ adviceId }: { adviceId: string }) {
  const [adviceData, setAdviceData] = useState<AdviceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const data = await getAdviceById(adviceId);
        setAdviceData(data);
      } catch {
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };
    fetchCat();
  }, [adviceId]);

  if (loading)
    return (
      <Player
        autoplay
        loop
        animationData={loader}
        style={{ height: "300px", width: "300px" }}
        className="mx-auto"
      />
    );
  if (error) return <p>{error}</p>;
  if (!adviceData) return <p>Chat introuvable.</p>;

  return (
    <div className="flex flex-col items-center max-w-screen min-h-screen">
      <h2 className="text-3xl font-bold mt-10 dark:text-zinc-100">
        {adviceData.title}
      </h2>

      <div className="w-2/3 flex justify-end">
        <button
          type="button"
          onClick={() => addLike(adviceId)}
          className="flex items-center"
        >
          <UpvoteIcon />
          <h3>{adviceData.like ?? 0}</h3>
        </button>
      </div>

      <div className="flex flex-col w-2/3 md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-lg mb-10"
            src={adviceData.advice_url_image}
            alt="chat"
            width={500}
            height={500}
            priority
          />
          <div className="flex gap-5 mb-10">
            <h3 className="bg-zinc-900 text-white rounded-md inline-block px-2 py-1 ">
              {SUBJECT_ADVICE_LABELS[adviceData.subject] || adviceData.subject}
            </h3>
            <h3>
              Catégorie:{" "}
              {CATEGORY_ADVICE_LABELS[adviceData.category_advice] ||
                adviceData.category_advice}
            </h3>
            <h3>
              Âge: {AGE_LABELS[adviceData.age_of_cat] || adviceData.age_of_cat}
            </h3>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: adviceData.body_of_advice }}
          />
        </div>
      </div>
    </div>
  );
}
