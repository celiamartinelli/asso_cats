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
  const { data, error } = await supabase
    .from("cat")
    .select("*")
    .eq("cat_id", catId)
    .single();

  if (error) throw new Error(`Erreur Supabase : ${error.message}`);
  console.log("Données du chat:", data);
  return data;
};
