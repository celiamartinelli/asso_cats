import Image from "next/image";

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
    <div>
      <h1>Chat ID: {catId}</h1>
      {catData ? (
        <div>
          <h2>{catData.name_cat}</h2>

          {/* Utilisation de toutes les informations */}
          {/* <Image src={chatData.cat_url} alt="image" width={200} height={200} /> */}
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
      ) : (
        <p>Chat introuvable ou erreur lors de la récupération des données.</p>
      )}
    </div>
  );
}
