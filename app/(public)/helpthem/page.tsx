"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HelpThem() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const CardHelpThem = [
    {
      id: "don-materiel",
      title: "Don Matériel",
      buttonDescription: "Liste de Souhait",
      redirectDescription: "https://www.linkedin.com/groups/13126906/",
      content:
        'Nous avons constamment besoin de produits de première nécessité pour les chats. Notre "liste de souhait" est disponible sur un site commerçant si vous souhaitez nous aider.',
      buttonText: "Faire un Don matériel",
    },
    {
      id: "famille-accueil",
      title: "Devenir Famille d'Accueil",
      content:
        "Nous recherchons pour notre association des familles d’accueil, afin de pouvoir héberger nos félins dans les meilleures conditions possible.",
      buttonText: "Devenir Famille d'Accueil",
    },
    {
      id: "don-financier",
      title: "Don Financier",
      content:
        "Vous souhaitez nous aider autrement qu'en adoptant ? L'association aura toujours besoin de dons pour subvenir aux besoins et soins des chats. Vous pouvez participer  en cliquant sur le lien de Helloasso,  un site sécurisé et spécialisé dans la collecte de fonds associatifs.  Par avance, toute l'équipe de l’École des chats du pays Houdanais vous dit merci infiniment.",
      buttonText: "Faire un Don Financier",
    },
  ];
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">help them</h1>
      <div className="flex flex-row justify-around ">
        {CardHelpThem.map((item, index) => (
          <Card
            key={index}
            className="max-w-xs m-2 flex flex-col justify-between items-center "
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            {item.buttonDescription && item.redirectDescription && (
              <CardDescription>
                <Button asChild className="mb-2">
                  <Link href={item.redirectDescription || "#"}>
                    {" "}
                    {item.buttonDescription}
                  </Link>
                </Button>
              </CardDescription>
            )}
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSelectedForm(item.id)} className="btn">
                {item.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        {selectedForm === "don-materiel" && (
          <div>
            <h2>Formulaire de contact pour don matériel</h2>
            {/* Formulaire de contact pour don matériel */}
          </div>
        )}
        {selectedForm === "famille-accueil" && (
          <div>
            <h2>Formulaire pour devenir famille d'accueil</h2>
            {/* Formulaire pour devenir famille d'accueil */}
          </div>
        )}
        {selectedForm === "don-financier" && (
          <div>
            <h2>Formulaire pour don financier</h2>
            {/* Formulaire pour don financier */}
          </div>
        )}
      </div>
    </div>
  );
}
