import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies"
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

// CAT //
// Récupérer l'Id du chat //
export const getCatById = async (catId: string) => {
  if (!catId) {
    throw new Error("L'ID du chat est requis pour effectuer la requête.");
  }
  const { data, error } = await supabase
    .from("cat")
    .select("*")
    .eq("cat_id", catId)
    .single();

  if (error) throw new Error(`Erreur Supabase : ${error.message}`);
  console.log("Données du chat:", data);
  return data;
};

// ADVICE //
// Récupérer l'Id du conseil //
export const getAdviceById = async (adviceId: string) => {
  if (!adviceId) {
    throw new Error("L'ID du conseil est requis pour effectuer la requête.");
  }
  const { data, error } = await supabase
    .from("advice")
    .select("*")
    .eq("advice_id", adviceId)
    .single();

  if (error) throw new Error(`Erreur Supabase : ${error.message}`);
  console.log("Données du conseil:", data);
  return data;
};

// AJOUTER UN LIKE //
// Ajouter un like à un conseil //
export const addLike = async (adviceId: string) => {
  if (!adviceId) {
    throw new Error("L'ID du conseil est requis pour effectuer la requête.");
  }
  const { data: currentData, error: currentError } = await supabase
    .from("advice")
    .select("like")
    .eq("advice_id", adviceId)
    .single();

  if (currentError) {
    console.error("Erreur lors de la récupération du like :", currentError);
    throw new Error(`Erreur Supabase : ${currentError.message}`);
  }
  console.log("Nombre actuel de likes :", currentData?.like);

  const newLikeCount = (currentData?.like || 0) + 1;

  const { data, error } = await supabase
    .from("advice")
    .update({ like: newLikeCount })
    .eq("advice_id", adviceId)
    .select(); // Ensure the updated data is returned

  if (error) {
    console.error("Erreur lors de la mise à jour :", error);
    throw new Error(`Erreur Supabase : ${error.message}`);
  }

  console.log("Nombre de likes après mise à jour :", data[0]?.like);
  return { success: true, updatedData: data };
};
