import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getCatById } from "../../../../utils/actions";

export default async function CatIdPage({ params }) {
  console.log("Paramètres reçus :", params);
  const { catId } = params;
  console.log("catId:", catId);

  if (!catId) {
    console.error("ID du chat manquant dans les paramètres.");
    return <p>Erreur : ID du chat introuvable.</p>;
  }
  let catData;
  console.log("catData:", catData);

  try {
    console.log("Récupération du chat avec ID:", catId);
    catData = await getCatById(catId);
  } catch (error) {
    console.error("Erreur lors de la récupération du chat:", error);
    catData = null;
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-screen bg-blue-300">
      {/* <h1>Chat ID: {catId}</h1> */}
      <h2>{catData.name_cat}</h2>
      {catData ? (
        <div className="flex w-2/3 justify-around  bg-red-400">
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
                            // layout="responsive"
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
            <p>Date de naissance: {catData.date_of_birth}</p>
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
    </div>
  );
}
