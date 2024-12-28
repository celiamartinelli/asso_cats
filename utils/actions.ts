import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies"
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

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
