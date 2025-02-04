"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { getAdviceById, addLike } from "../../../../utils/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormToAdoption from "@/components/MadeInHand/Client/Form/FormToAdoption";
import { UpvoteIcon } from "@/components/ui/upvote";

interface Params {
  catId: string;
}

interface AdviceData {
  advice_id: string;
  title: string;
  subject: string;
  like: number;
  body_of_advice: string;
  advice_url_image: string;
  category_cat: string;
  useful: boolean;
  age_of_cat: string;
}

interface AdviceIdPageProps {
  params: { adviceId: string };
}

export default function CatIdPage({ params }: AdviceIdPageProps) {
  const { adviceId } = params;
  const [adviceData, setAdviceData] = useState<AdviceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const data = await getAdviceById(adviceId);
        setAdviceData(data);
      } catch (err) {
        console.error(err);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [adviceId]);

  const handleLike = async () => {
    try {
      const result = await addLike(adviceId);
      if (result.success) {
        setAdviceData((prevData) =>
          prevData ? { ...prevData, like: (prevData.like || 0) + 1 } : prevData
        );
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'ajout du like.");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!adviceData) return <p>Chat introuvable.</p>;

  return (
    <div className="flex flex-col items-center justify-center max-w-screen ">
      <h2>{adviceData.title}</h2>
      <div>
        <button
          type="button"
          onClick={handleLike}
          className="flex items-center"
        >
          <UpvoteIcon />
          <h3>{adviceData.like}</h3>
        </button>
      </div>
      {adviceData ? (
        <div className="flex flex-col w-2/3 justify-around md:flex-row ">
          <div>
            <h2>{adviceData.title}</h2>
            <Image
              src={adviceData.advice_url_image}
              alt="chat"
              width={500}
              height={500}
              priority
            />
            <h3>Categorie: {adviceData.category_cat}</h3>
            <h3>Age chat: {adviceData.age_of_cat}</h3>
            <h4>Sujet: {adviceData.subject}</h4>
            <p>corps: {adviceData.body_of_advice}</p>
          </div>
        </div>
      ) : (
        <p>
          Conseil introuvable ou erreur lors de la récupération des données.
        </p>
      )}
    </div>
  );
}
