"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import Player from "lottie-react";
import loader from "../../../../public/lottie/loader.json";

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

import {
  COAT_COLOR_LABELS,
  SEX_CAT_LABELS,
  PATTERN_LABELS,
  AGE_LABELS,
  CATEGORY_CAT_LABELS,
} from "@/utils/enumLabels";
import { Syringe } from "lucide-react";

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
  fiv_test_positif?: boolean;
  felv_test: boolean;
  felv_test_positif?: boolean;
  coat_color: string;
  pattern: string;
  description: string;
  adoption: boolean;
  age_of_cat: string;
  category_cat: string;
  cat_url_image: string[];
  cat_url_video: string[];
  cat_id: string;
  when_adopt?: string; // Ajout de la propriété when_adopt
}

interface CatIdPageProps {
  params: { catId: string };
}

export default function CatIdPage() {
  const params = useParams();
  const catId = params?.catId;
  const [catData, setCatData] = useState<CatData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!catId) return; // S'assurer que catId existe avant de continuer

    const fetchCat = async () => {
      try {
        const data = await getCatById(catId as string);
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

  const formattedBirthInfo = useMemo(() => {
    if (!catData || !catData.date_of_birth) return "";

    const birthDate = new Date(catData.date_of_birth);
    const today = new Date();

    const formattedDate = birthDate.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const ageInMonths =
      (today.getFullYear() - birthDate.getFullYear()) * 12 +
      today.getMonth() -
      birthDate.getMonth();

    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;

    const ageText = `${years > 0 ? `${years} an${years > 1 ? "s" : ""}` : ""}${
      years > 0 && months > 0 ? " et " : ""
    }${months > 0 ? `${months} mois` : ""}`;

    return `${formattedDate} (${ageText})`;
  }, [catData]);

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
  if (!catData) return <p>Chat introuvable.</p>;

  return (
    <div className="flex flex-col items-center max-w-screen min-h-screen mt-10 ">
      <h2 className="uppercase font-bold text-5xl mb-10">{catData.name_cat}</h2>

      {catData ? (
        <div className="flex flex-col w-5/6 md:w-11/12 lg:w-5/6 justify-around lg:flex-row mb-12 gap-16 ">
          <div className="lg:w-1/2">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {[
                  ...(Array.isArray(catData.cat_url_image)
                    ? catData.cat_url_image
                    : []),
                  ...(Array.isArray(catData.cat_url_video)
                    ? catData.cat_url_video
                    : catData.cat_url_video
                      ? [catData.cat_url_video]
                      : []),
                ]
                  .filter((src): src is string => typeof src === "string")
                  .map((src: string, index: number) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex items-center justify-center p-0 w-full h-96 overflow-hidden">
                          {src.match(/\.(mp4|webm|ogg)$/i) ? (
                            <video
                              src={src}
                              autoPlay
                              muted
                              playsInline
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <Image
                              src={src}
                              alt={`Media ${index + 1}`}
                              width={700}
                              height={700}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          )}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                {!catData.cat_url_image?.length && !catData.cat_url_video && (
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex items-center justify-center p-0 w-full h-96 overflow-hidden">
                        <Image
                          src="/placeholder.png"
                          alt="Aucune image disponible"
                          width={700}
                          height={700}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <ul className="text-lg px-6 py-4 bg-zinc-100 text-black rounded-lg border border-gray-300 shadow-sm flex flex-col lg:flex-row lg:flex-wrap gap-y-4 gap-x-[4%] lg:w-2/3">
            {/* Identité */}
            <li className="rounded-lg border border-gray-300 shadow-sm p-4 bg-white lg:w-[48%] ">
              <h3 className="text-lg font-semibold mb-2">🧩 Identité</h3>
              <ul className="space-y-2 ml-4 list-inside list-non text-sm md:text-lg">
                <li>
                  🎂 <strong>Date de naissance :</strong>
                  <br />
                  {formattedBirthInfo}
                </li>
                <li>
                  🚻 <strong>Sexe :</strong>{" "}
                  {SEX_CAT_LABELS[catData.sex_cat] || catData.sex_cat}
                </li>
                <li>
                  ⏳ <strong>Tranche d’âge</strong>{" "}
                  {AGE_LABELS[catData.age_of_cat] || catData.age_of_cat}
                </li>
              </ul>
            </li>

            {/* Santé */}
            <li className="rounded-lg border border-gray-300 shadow-sm p-4 bg-white lg:w-[48%] flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">🧬 Santé</h3>
              <ul className="space-y-2 md:ml-4 list-inside list-none text-sm md:text-lg">
                <li>
                  💉 <strong>Stérilisé :</strong>{" "}
                  {catData.sterelized ? "Oui" : "Non"}
                </li>
                <li className="flex items-center gap-2">
                  <Syringe className="w-5 h-5" />
                  <strong>Vacciné :</strong> Oui
                </li>
                {catData.fiv_test ? (
                  <li>
                    🧪 <strong>Test FIV :</strong>{" "}
                    {catData.fiv_test_positif
                      ? "Test positif a la Fiv"
                      : "Test Négatif a la Fiv"}
                  </li>
                ) : (
                  <li>
                    🧪 <strong>Test Fiv :</strong> Non effectué
                  </li>
                )}
                {catData.felv_test ? (
                  <li>
                    🧪 <strong>Test FIV :</strong>{" "}
                    {catData.felv_test_positif
                      ? "Test positif a la Felv"
                      : "Test Négatif a la Felv"}
                  </li>
                ) : (
                  <li>
                    🧪 <strong>Test Felv :</strong> Non effectué
                  </li>
                )}
              </ul>
            </li>

            {/* Apparence & Catégorie */}
            <li className="rounded-lg border border-gray-300 shadow-sm p-4 bg-white lg:w-[48%] ">
              <h3 className="text-lg font-semibold mb-2">
                🎨 Apparence & Catégorie
              </h3>
              <ul className="space-y-2 md:ml-4 list-inside list-none text-sm md:text-lg">
                <li>
                  🎨 <strong>Couleur :</strong>{" "}
                  {COAT_COLOR_LABELS[catData.coat_color] || catData.coat_color}
                </li>
                <li>
                  🐾 <strong>Motif :</strong>{" "}
                  {PATTERN_LABELS[catData.pattern] || catData.pattern}
                </li>
                <li>
                  🧶 <strong>Parcours :</strong>{" "}
                  {CATEGORY_CAT_LABELS[catData.category_cat] ||
                    catData.category_cat}
                </li>
              </ul>
            </li>

            {/* Description */}
            {catData.description && (
              <li className="rounded-lg border border-gray-300 shadow-sm p-4   bg-white md:text-lg lg:w-[48%] ">
                <h3 className="text-lg font-semibold mb-2">📝 Description</h3>
                <p className="md:ml-4  text-base text-zinc-700 dark:text-zinc-300">
                  {catData.description}
                </p>
              </li>
            )}
          </ul>

          {/* <div>
            <p>Date de naissance : {formattedBirthInfo}</p>
            <p>Âge: {SEX_CAT_LABELS[catData.sex_cat] || catData.sex_cat}</p>
            <p>Stérilisé: {catData.sterelized ? "Oui" : "Non"}</p>
            <p>Vacciné: {catData.vaccine ? "Oui" : "Non"}</p>
            <p>FIV Test: {catData.fiv_test ? "Positif" : "Négatif"}</p>
            <p>FeLV Test: {catData.felv_test ? "Positif" : "Négatif"}</p>
            <p>
              Couleur du pelage:{" "}
              {COAT_COLOR_LABELS[catData.coat_color] || catData.coat_color}
            </p>
            <p>Motif: {PATTERN_LABELS[catData.pattern] || catData.pattern}</p>
            <p>Description: {catData.description}</p>
            <p>Adoption: {catData.adoption ? "Oui" : "Non"}</p>
            <p>Adopté le : {catData.when_adopt}</p>
            <p>Âge: {AGE_LABELS[catData.age_of_cat] || catData.age_of_cat}</p>
            <p>
              Catégorie:{" "}
              {CATEGORY_CAT_LABELS[catData.category_cat] ||
                catData.category_cat}
            </p>
          </div> */}
        </div>
      ) : (
        <p>Chat introuvable ou erreur lors de la récupération des données.</p>
      )}

      {!showForm && (
        <Dialog>
          <DialogTrigger asChild>
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
                  <DialogTrigger
                    className="mb-2 flex justify-start w-1/3"
                    asChild
                  >
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

                {catId ? (
                  <FormToAdoption
                    catId={Array.isArray(catId) ? catId[0] : catId}
                    onFormSubmit={handleFormSubmit}
                  />
                ) : (
                  <p>Chat introuvable</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
