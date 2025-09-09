import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Remplace ceci par ton vrai type Cat
type Cat = {
  id: string;
  name: string;
  age: number;
  breed: string;
  // Ajoute d'autres propriétés selon ton modèle
};

const fetchCatById = async (cat: string): Promise<Cat | null> => {
  // Remplace cette fonction par ton vrai appel API ou logique de récupération
  // Exemple fictif :
  const response = await fetch(`/api/cats/${cat}`);
  if (!response.ok) return null;
  return await response.json();
};

const CatFile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof id === "string") {
      fetchCatById(id).then((data) => {
        setCat(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (!cat) return <div>Chat non trouvé.</div>;

  return (
    <div>
      <h2>Fiche du chat</h2>
      <p>
        <strong>Nom :</strong> {cat.name}
      </p>
      <p>
        <strong>Âge :</strong> {cat.age} ans
      </p>
      <p>
        <strong>Race :</strong> {cat.breed}
      </p>
      {/* Ajoute d'autres infos ici */}
    </div>
  );
};

export default CatFile;
