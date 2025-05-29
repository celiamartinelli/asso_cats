"use client";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import FormFinancialDonation from "@/components/MadeInHand/Client/Form/FormFinancialDonation";
import FormBecomeFosterFamily from "@/components/MadeInHand/Client/Form/FormBecomeFosterFamily";
import FormMaterielDonnation from "@/components/MadeInHand/Client/Form/FormMaterielDonation";
import FormToVolunteer from "@/components/MadeInHand/Client/Form/FormToVolunteer";

export default function HelpThem() {
  const searchParams = useSearchParams();
  const formIdFromUrl = searchParams.get("form");
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formIdFromUrl) {
      setSelectedForm(formIdFromUrl); // Sélection automatique du formulaire

      // Attendre que le formulaire soit affiché, puis scroller avec un offset
      setTimeout(() => {
        if (formRef.current) {
          const yOffset = -30; // Décalage en pixels (~ mt-10)
          const y =
            formRef.current.getBoundingClientRect().top +
            window.scrollY +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    }
  }, [formIdFromUrl]);

  const CardHelpThem = [
    {
      id: "don-materiel",
      title: "Don Matériel",
      buttonDescription: "Liste de Souhait",
      redirectDescription:
        "https://www.amazon.fr/hz/wishlist/ls/1XDLCXYJ526W2?ref_=wl_share",
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
    {
      id: "benevole",
      title: "Devenir Bénévole",
      content:
        "Vous avez du temps libre et vous souhaitez nous aider ? Nous recherchons des bénévoles pour nous aider dans nos actions. Tous type de bénévolat est le bienvenu, que ce soit pour les soins des chats, l'administratif, la communication, etc.",
      buttonText: "Devenez Bénévole",
    },
  ];
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2">
          Ensemble, on peut changer leur destin ✨🐈
        </h1>
        <p className="text-muted-foreground text-lg">
          Découvrez comment vous pouvez agir, même avec un petit geste 💝
        </p>
      </section>

      <div className="flex flex-col justify-around md:flex-row md:flex-wrap items-center">
        {CardHelpThem.map((item, index) => (
          <Card
            key={index}
            className="max-w-sm m-2 flex flex-col justify-between items-center"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            {item.buttonDescription && item.redirectDescription && (
              <CardDescription>
                <Button asChild className="mb-2">
                  <Link href={item.redirectDescription || "#"} target="_blank">
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
              <Button
                onClick={() => {
                  setSelectedForm(item.id);
                  // Attendre que le formulaire soit visible avant de scroller
                  setTimeout(() => {
                    if (formRef.current) {
                      const yOffset = -30;
                      const y =
                        formRef.current.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 300);
                }}
                className="btn"
              >
                {item.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div ref={formRef} className="mt-6">
        {selectedForm === "don-materiel" && (
          <div>
            <FormMaterielDonnation />
          </div>
        )}
        {selectedForm === "famille-accueil" && (
          <div>
            <FormBecomeFosterFamily />
          </div>
        )}
        {selectedForm === "don-financier" && (
          <div>
            <FormFinancialDonation />
          </div>
        )}
        {selectedForm === "benevole" && (
          <div>
            <FormToVolunteer />
          </div>
        )}
      </div>
    </div>
  );
}
