"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { getCatById } from "../../../../utils/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormToAdoption from "@/components/MadeInHand/Client/Form/FormToAdoption";

interface Params {
  catId: string;
}

interface CatData {
  name_cat: string;
  date_of_birth: string;
  sex_cat: string;
  sterelized: boolean;
  vaccine: boolean;
  fiv_test: boolean;
  felv_test: boolean;
  coat_color: string;
  pattern: string;
  description: string;
  adoption: boolean;
  age_of_cat: string;
  caegory_cat: string;
  cat_url_image: string[];
  cat_id: string;
}

interface CatIdPageProps {
  params: { catId: string };
}

export default function CatIdPage({ params }: CatIdPageProps) {
  const { catId } = params;
  const [catData, setCatData] = useState<CatData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const data = await getCatById(catId);
        setCatData(data);
      } catch (err) {
        console.error(err);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [catId]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!catData) return <p>Chat introuvable.</p>;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen ">
      <h2>{catData.name_cat}</h2>
      {catData ? (
        <div className="flex flex-col w-2/3 justify-around md:flex-row ">
          <div>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {catData.cat_url_image.map((src: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={180}
                            height={180}
                            style={{ width: "auto", height: "auto" }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <p>
              Date de naissance:{" "}
              {new Date(catData.date_of_birth).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p>Sexe: {catData.sex_cat}</p>
            <p>Stérilisé: {catData.sterelized ? "Oui" : "Non"}</p>
            <p>Vacciné: {catData.vaccine ? "Oui" : "Non"}</p>
            <p>FIV Test: {catData.fiv_test ? "Positif" : "Négatif"}</p>
            <p>FeLV Test: {catData.felv_test ? "Positif" : "Négatif"}</p>
            <p>Couleur du pelage: {catData.coat_color}</p>
            <p>Motif: {catData.pattern}</p>
            <p>Description: {catData.description}</p>
            <p>Adoption: {catData.adoption ? "Oui" : "Non"}</p>
            <p>Âge: {catData.age_of_cat}</p>
            <p>Catégorie: {catData.caegory_cat}</p>
          </div>
        </div>
      ) : (
        <p>Chat introuvable ou erreur lors de la récupération des données.</p>
      )}

      {!showForm && (
        <Dialog>
          <DialogTrigger>
            <Button className="mb-2"> J'adopte </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[80vh] max-w-[100vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Nos conditions d'adoption</DialogTitle>
              <DialogDescription>
                <section className="mb-5">
                  <h2 className="mb-2 text-2xl font-medium">
                    Adopter, un acte d’amour et de responsabilité
                  </h2>
                  <p>
                    Chaque adoption est une chance offerte à un animal de
                    trouver un foyer aimant. Derrière chaque chat confié par
                    l’École des Chats du Pays Houdanais, il y a une histoire :
                    l’abandon, la maltraitance, ou la rue. En ouvrant votre cœur
                    et votre maison à l’un de nos protégés, vous participez à
                    une belle mission : offrir une nouvelle vie remplie de
                    bonheur et de sécurité.
                  </p>
                  <p>
                    <strong>
                      Mais adopter, c’est aussi un engagement à long terme.
                    </strong>{" "}
                    Un chat peut partager votre vie pendant 15 à 20 ans, avec
                    ses joies, ses besoins, et parfois ses défis. Avant de
                    prendre cette décision, nous vous invitons à bien réfléchir
                    et à vous assurer que vous êtes prêt à accueillir un
                    compagnon à quatre pattes pour de nombreuses années.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="mb-2 text-2xl font-medium">
                    Nos conditions d’adoption sont les suivantes:
                  </h3>
                  <ul className="list-disc list-inside mb-5">
                    <li>Être majeur(e).</li>
                    <li>Disposer d’un foyer stable et sécurisé.</li>
                    <li>
                      Remplir correctement et honnêtement le formulaire
                      d’adoption.
                    </li>
                    <li>
                      Accepter une visite pré-adoption et, si nécessaire, une
                      visite post-adoption.
                    </li>
                    <li>
                      S’acquitter des frais d’adoption, qui couvrent les
                      dépenses engagées par l’association pour le sauvetage de
                      l’animal (frais vétérinaires, nourriture, etc.).
                    </li>
                    <li>
                      S’engager à stériliser/castrer l’animal avant ses 6 mois,
                      si cela n’a pas déjà été fait par l’association. Un chèque
                      de caution de 200 € sera demandé lors de l’adoption. Ce
                      chèque sera restitué une fois que nous aurons reçu une
                      attestation ou facture de votre vétérinaire confirmant la
                      stérilisation/castration.
                    </li>
                    <li>
                      Donner régulièrement des nouvelles (bonnes ou mauvaises)
                      sur la vie du chat après son adoption.
                    </li>
                  </ul>

                  <h3 className="mb-2 text-xl font-medium">
                    Critères pour adopter un chat
                  </h3>
                  <ul>
                    <li>
                      <strong>Engagement à vie</strong>: L’adoption d’un chat
                      est un acte sérieux. Vous vous engagez à lui offrir un
                      foyer sécurisé et tout ce dont il a besoin pour vivre
                      heureux et en bonne santé.
                    </li>
                    <li>
                      <strong>Responsabilité vétérinaire</strong>: Tous nos
                      chats sont remis avec un certificat vétérinaire attestant
                      de leur bonne santé. Les frais d'adoption incluent une
                      partie des soins vétérinaires (stérilisation,
                      identification, et antiparasitaires). Les futurs soins et
                      suivi restent à votre charge.
                    </li>
                    <li>
                      <strong>Stérilisation obligatoire</strong>: Si le chat est
                      trop jeune pour être stérilisé, cette opération devra être
                      réalisée avant ses 7 mois, avec preuve à l’appui.
                    </li>
                    <li>
                      <strong>Preuves d’identité et domicile</strong>: Une copie
                      de votre pièce d’identité et un justificatif de domicile
                      de moins de 3 mois sont nécessaires pour valider votre
                      adoption.
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h3 className="mb-2 text-xl font-medium">
                    Engagements de l’adoptant
                  </h3>
                  <ul>
                    <li>
                      Offrir un cadre de vie adapté et sécurisé, sans laisser le
                      chat divaguer à l’extérieur.
                    </li>
                    <li>
                      Informer l’association de tout changement (adresse,
                      téléphone, perte ou fugue de l’animal).
                    </li>
                    <li>
                      Ne pas céder l’animal sans l'accord préalable de
                      l’association.
                    </li>
                    <li>
                      Donner des nouvelles régulières, accompagnées de photos,
                      au minimum tous les trois mois durant la première année.
                    </li>
                    <li>Accepter une visite post-adoption si nécessaire.</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h3 className="mb-2 text-xl font-medium">
                    Conditions générales
                  </h3>
                  <ul>
                    <li>
                      Les frais d'adoption sont{" "}
                      <strong>non remboursables</strong>, même en cas de retour
                      exceptionnel de l’animal.
                    </li>
                    <li>
                      En cas de non-respect des engagements, l’association se
                      réserve le droit de récupérer l’animal sans indemnisation.
                    </li>
                    <li>
                      Si des difficultés surviennent, l’adoptant doit en
                      informer l’association pour trouver une solution.
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="mb-2 text-2xl font-medium">
                    Processus d’adoption
                  </h2>
                  <ol>
                    <li>
                      <strong>Prise de contact</strong>: Remplissez notre
                      formulaire d’adoption ou contactez-nous directement.
                    </li>
                    <li>
                      <strong>Entretien</strong>: Nous vous rencontrerons pour
                      discuter de votre projet d’adoption.
                    </li>
                    <li>
                      <strong>Rencontre avec les chats</strong>: Venez
                      rencontrer nos protégés pour découvrir celui qui saura
                      conquérir votre cœur.
                    </li>
                    <li>
                      <strong>Validation</strong>: Après acceptation, vous
                      signerez le contrat d’adoption et accueillerez votre
                      nouveau compagnon.
                    </li>
                  </ol>
                </section>
                <div className="items-top flex space-x-2">
                  <input
                    id="terms1"
                    type="checkbox"
                    className="mr-2 w-5 h-5"
                    onChange={handleCheckboxChange}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte les conditions d'adoption
                    </label>
                    <p className="text-sm text-muted-foreground">
                      En cochant cette case, vous reconnaissez avoir lu et
                      accepté nos conditions d'adoption.
                    </p>
                  </div>
                  <div>
                    {isChecked && (
                      <Button
                        className="mt-4 btn btn-primary"
                        onClick={() => {
                          setShowForm(true);
                        }}
                      >
                        Continuer
                      </Button>
                    )}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      {showForm && (
        <div>
          <h2>Formulaire d'adoption</h2>
          <p>
            Vous souhaitez adopter <strong>{catData.name_cat} </strong>?
            Remplissez le formulaire ci-dessous.
          </p>
          <p>
            Si vous avez des questions, n'hésitez pas à nous contacter à
            l'adresse suivante: ecoledeschatsdupayshoudanais@gmail.com
          </p>
          <FormToAdoption />
        </div>
      )}
    </div>
  );
}
