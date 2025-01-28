import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies"
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

// HOME PAGE //
// Récupération des dates importantes //

export const getImportantDates = async (importantDateId: string) => {
  if (!importantDateId) {
    throw new Error(
      "L'ID de la date importante est requis pour effectuer la requête."
    );
  }
  const { data, error } = await supabase
    .from("calendar")
    .select("*")
    .eq("calendar_id", importantDateId)
    .single();
  if (error) throw new Error(`Erreur Supabase : ${error.message}`);
  console.log("Données des dates:", data);
  return data;
};

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

// ADOPTION //
export const submitAdoptionForm = async (formData: {
  cat_id: string;
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  occupation: string;
  type_of_housing: string;
  living_area: string;
  have_animals: boolean;
  wich_ones: string;
  allergies_description: string;
  sterelization_opinion: string;
  house_description: string;
  why_adopt: string;
  have_you_garden: string;
}) => {
  const {
    first_name,
    last_name,
    address,
    postal_code,
    city_name,
    email,
    phone_number,
    date_of_birth,
    occupation,
    type_of_housing,
    living_area,
    have_animals,
    wich_ones,
    allergies_description,
    sterelization_opinion,
    house_description,
    why_adopt,
    have_you_garden,
    cat_id,
  } = formData;

  if (
    !first_name ||
    !last_name ||
    !address ||
    !postal_code ||
    !city_name ||
    !email ||
    !phone_number ||
    !date_of_birth ||
    !occupation ||
    !type_of_housing ||
    !living_area ||
    !house_description ||
    !why_adopt
  ) {
    throw new Error("Tous les champs obligatoires doivent être remplis.");
  }

  const { data, error } = await supabase
    .from("adoption_form")
    .insert([
      {
        first_name,
        last_name,
        address,
        postal_code,
        city_name,
        email,
        phone_number,
        date_of_birth,
        occupation,
        type_of_housing,
        living_area,
        have_animals,
        wich_ones,
        allergies_description,
        sterelization_opinion,
        house_description,
        why_adopt,
        have_you_garden,
        cat_id,
      },
    ])
    .select();

  if (error) {
    console.error("Erreur lors de l'envoi du formulaire d'adoption :", error);
    throw new Error(`Erreur Supabase : ${error.message}`);
  }

  console.log("Formulaire d'adoption soumis avec succès :", data);
  return { success: true, submittedData: data };
};
