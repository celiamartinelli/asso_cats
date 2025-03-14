"use client";
import React, { useEffect, useState } from "react";
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
import FormToAdoption from "@/components/MadeInHand/Client/Form/FormToAdoption";
import ConditionToAdoption from "@/components/MadeInHand/Client/ConditionToAdoption/ConditionToAdoption";

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
  category_cat: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleFormSubmit = () => {
    setIsModalOpen(true);
    console.log("Modal ouverte ?", isModalOpen);
  };

  return (
    <div className="flex flex-col items-center max-w-screen min-h-screen">
      <h2 className="uppercase font-bold text-5xl">{catData.name_cat}</h2>
      {catData ? (
        <div className="flex flex-col w-2/3 justify-around md:flex-row ">
          <div>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {catData.cat_url_image.map((src: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1 ">
                      <Card className="">
                        <CardContent className="flex items-center justify-center p-0 w-full h-96 overflow-hidden ">
                          <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={700}
                            height={700}
                            className="w-full h-full object-cover rounded-lg"
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
              {" ("}
              {(() => {
                const birthDate = new Date(catData.date_of_birth);
                const today = new Date();
                const ageInMonths =
                  (today.getFullYear() - birthDate.getFullYear()) * 12 +
                  today.getMonth() -
                  birthDate.getMonth();
                const years = Math.floor(ageInMonths / 12);
                const months = ageInMonths % 12;
                return `${years > 0 ? `${years} an${years > 1 ? "s" : ""} ` : ""}${
                  months > 0 ? `${months} mois` : ""
                }`;
              })()}
              {")"}
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
            <p>Catégorie: {catData.category_cat}</p>
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
                <ConditionToAdoption />
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
        <div className="flex flex-col max-w-screen ">
          <div className="items-center justify-center">
            {isModalOpen ? (
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Demande envoyée</DialogTitle>
                  </DialogHeader>
                  <div className="text-center">
                    <p className="text-gray-700">
                      Nous avons bien reçu votre demande, nous l'étudions
                      attentivement et revenons vers vous le plus rapidement
                      possible.
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => {
                        setIsModalOpen(false);
                        setShowForm(false);
                      }}
                    >
                      OK
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex flex-col">
                <h3>
                  Vous souhaitez adopter <strong>{catData.name_cat} </strong>?
                  Remplissez le formulaire ci-dessous.
                </h3>
                <h4>
                  Si vous avez des questions, n'hésitez pas à nous contacter à
                  l'adresse suivante: ecoledeschatsdupayshoudanais@gmail.com
                </h4>
                <Dialog>
                  <DialogTrigger className="mb-2 flex justify-start w-1/3">
                    <Button className="mt-2">
                      Revoir les conditions d'adoption
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[80vh] max-w-[100vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Nos conditions d'adoption</DialogTitle>
                      <DialogDescription>
                        <ConditionToAdoption />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <FormToAdoption catId={catId} onFormSubmit={handleFormSubmit} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
