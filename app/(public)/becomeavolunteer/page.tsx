"use client";

import { use, useEffect, useState } from "react";
import { fetchAllTypeVolunteer } from "@/utils/actions"; // Assurez-vous que le chemin est correct
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BecomeAVolunteerModal from "@/components/MadeInHand/Client/Modal/BecomeAVolunteerModal";
import PageHeader from "@/components/MadeInHand/PageHeader";

// Type TS pour typer proprement les données
type VolunteerType = {
  types_id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
};

export default function Page() {
  const [volunteerTypes, setVolunteerTypes] = useState<VolunteerType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllTypeVolunteer();
      setVolunteerTypes(data);
    };

    fetchData();
  }, []);

  const [isModalOpenVolunteer, setIsModalOpenVolunteer] = useState(false);
  const [showFormVolunteer, setShowFormVolunteer] = useState(true);
  return (
    <section className=" p-6 min-h-screen mx-auto space-y-10 bg-gray-100 dark:bg-black">
      {/* <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🐾 Devenir bénévole</h1>
        <p className="text-lg text-muted-foreground">
          S'engager à nos côtés, c'est offrir une seconde chance à ceux qui
          n’ont pas eu la première.
        </p>
      </div> */}
      <PageHeader pageKey="becomeavolunteer" />
      <Card className="max-w-4xl mx-auto dark:bg-zinc-900">
        <CardContent className="space-y-4 pt-6  ">
          <h2 className="text-2xl font-semibold">💼 Ce que cela implique</h2>
          <p>
            Être bénévole chez nous, c’est avant tout partager{" "}
            <strong>
              des valeurs de respect, de compassion et de responsabilité
            </strong>
            . Vous serez toujours <strong>accompagné.e</strong>,{" "}
            <strong>formé.e</strong>, et jamais seul.e. 🙌
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fiabilité (tenir ses engagements)</li>
            <li>Discrétion (respect des lieux et personnes)</li>
            <li>Bienveillance (envers humains et animaux 🐾)</li>
          </ul>
        </CardContent>
      </Card>

      <div className="max-w-4xl mx-auto space-y-10">
        <Button
          onClick={() => {
            setIsModalOpenVolunteer(true);
          }}
          className="text-lg px-6 py-4 "
        >
          Remplir le Formulaire
        </Button>
        <h2 className="text-2xl font-semibold">🌟 Les missions possibles</h2>

        {volunteerTypes.map((type) => (
          <Card key={type.types_id} className="">
            <CardContent className="pt-6 space-y-2 bg-white dark:bg-zinc-900">
              <h3 className="text-xl font-medium">
                {type.icon ? `${type.icon} ` : ""}
                {type.title}
              </h3>
              <h6 className="text-zinc-500">{type.subtitle}</h6>
              <p>{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          🤝 Prêt.e à faire la différence ?
        </h2>
        <p>
          Rejoindre notre équipe, c’est rejoindre une belle aventure humaine.{" "}
          <br />
          Contactez-nous, dites-nous ce que vous aimeriez faire et nous vous
          guiderons avec plaisir. 💌
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={() => {
              setIsModalOpenVolunteer(true);
            }}
            className="text-lg px-6 py-4"
          >
            Remplir le Formulaire
          </Button>

          <Link href="/contact">
            <Button variant="outline" className="text-lg px-6 py-4">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>

      <BecomeAVolunteerModal
        isModalOpenVolunteer={isModalOpenVolunteer}
        setIsModalOpenVolunteer={setIsModalOpenVolunteer}
        setShowFormVolunteer={setShowFormVolunteer}
      />
    </section>
  );
}
