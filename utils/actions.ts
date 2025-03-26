import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies"
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

const sanitizeFileName = (fileName: string) => {
  return fileName
    .normalize("NFD") // Supprime les accents
    .replace(/[\u0300-\u036f]/g, "") // Supprime les marques diacritiques
    .replace(/[^a-zA-Z0-9._-]/g, "_") // Remplace les caractères spéciaux
    .replace(/\s+/g, "_"); // Remplace les espaces par des underscores
};

// HOME PAGE //
// Récupération des dates importantes Home Page //

export const getImportantDates = async () => {
  const { data, error } = await supabase
    .from("calendar")
    .select("*")
    .gte("date_start", new Date().toISOString())
    .order("date_start", { ascending: true })
    .limit(3);

  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }

  // console.log("Données des dates:", data);
  return data;
};

// Récupération des 3 dernieres news //
export const getLatestNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }

  // console.log("Données des articles:", data);
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
  // console.log("Données du chat:", data);
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
  // console.log("Données du conseil:", data);
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
  // console.log("Nombre actuel de likes :", currentData?.like);

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

  // console.log("Nombre de likes après mise à jour :", data[0]?.like);
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

  // console.log("Formulaire d'adoption soumis avec succès :", data);
  return { success: true, submittedData: data };
};

//FORMULAIRE DON MATERIEL //
// Fonction pour ajouter une donation de matériel dans Supabase
export const addMaterialDonation = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    // Formatage des données avant insertion
    const formattedData = {
      ...formData,
      email: formData.email.toLowerCase().trim(), // Normalisation de l'email
      phone_number: formData.phone_number.trim(),
      description_material: formData.description_material.trim(),
    };

    console.log("✅ Données formatées pour insertion :", formattedData);

    // Insertion dans Supabase
    const { data, error } = await supabase
      .from("material_donation_form")
      .insert([formattedData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log("✅ Donation enregistrée avec succès :", data);
    return "Donation enregistrée avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

//FORMULAIRE DEVENIR FAMILLE D'ACCUEIL //
// Fonction pour ajouter une demande de famille d'accueil dans Supabase
export const addFosterFamilyForm = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    // Formatage des données avant insertion
    const formattedData = {
      ...formData,
      type_animals: formData.type_animals
        ? JSON.parse(formData.type_animals)
        : [],
      type_foster_family: formData.type_foster_family
        ? JSON.parse(formData.type_foster_family)
        : [],
    };

    console.log("✅ Données formatées pour insertion :", formattedData);

    // Insertion dans Supabase
    const { data, error } = await supabase
      .from("foster_family_form")
      .insert([formattedData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log(
      "✅ Demande de famille d'accueil enregistrée avec succès :",
      data
    );
    return "Demande de famille d'accueil enregistrée avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

// CALENDAR // événement date selectionner
export async function fetchEventByDate(date: string) {
  try {
    const { data, error } = await supabase
      .from("calendar")
      .select("*")
      .eq("date_start", date);

    if (error) {
      throw new Error("Erreur lors de la récupération des événements");
    }
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    return null;
  }
}

//Tous les Events
export const fetchAllEventDates = async () => {
  const { data, error } = await supabase.from("calendar").select("*");
  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }
  return data;
};

// Récupération de tous les événements //

export const fetchAllEvents = async () => {
  const { data, error } = await supabase
    .from("calendar")
    .select("*")
    .order("date_start", { ascending: true });

  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }

  // console.log("Données des événements:", data);
  return data;
};

//ADMIN PAGE//

/// Fonction pour récupérer les chats avec le nombre de formulaires d'adoption
export const getCatsWithAdoptionCount = async () => {
  const { data, error } = await supabase
    .from("cat")
    .select(
      "cat_id, name_cat, sex_cat, age_of_cat, cat_url_image, date_of_birth, " +
        "adoption_form(count)"
    )
    .eq("adoption_form.read", false);

  if (error) {
    console.error("Erreur lors de la récupération des chats:", error.message);
    return [data];
  }
  return data;
};

// Récupérer les demandes d'adoption d'un chat selon son Id //
export const getAdoptionRequests = async (cat_id: string) => {
  const { data, error } = await supabase
    .from("adoption_form")
    .select("*, cat(name_cat, date_of_birth, cat_url_image), read")
    .eq("cat_id", cat_id);

  if (error) {
    console.error(
      "Erreur lors de la récupération des demandes d'adoption :",
      error
    );
    throw new Error(`Erreur Supabase : ${error.message}`);
  }

  // console.log("Données des demandes d'adoption :", data);

  return data;
};

// Modifie le statut du switch pour marquer la demande d'adoption comme lue ou non lue //
export const updateAdoptionRequestReadStatus = async (
  adoptionFormId: string,
  newReadStatus: boolean
) => {
  try {
    const { error } = await supabase
      .from("adoption_form")
      .update({ read: newReadStatus })
      .eq("adoption_form_id", adoptionFormId);

    if (error) {
      throw new Error(`Erreur Supabase : ${error.message}`);
    }

    return { success: true };
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du statut de lecture :",
      error
    );
    return { success: false, error };
  }
};

//NEWS PAGE//
// Toutes les news //
export const getAllNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur Supabase :", error.message);
    return [];
  }

  // console.log("Données des articles:", data);
  return data;
};

// COTER ADMIN

// INSERER UN CHAT

// Fonction pour uploader l'image dans Supabase Storage
export const uploadImage = async (imageFile: File) => {
  try {
    const fileName = `${Date.now()}-${imageFile.name}`;
    console.log("📤 Uploading file to Supabase...", fileName, imageFile);

    const { data, error } = await supabase.storage
      .from("cat_image")
      .upload(fileName, imageFile);

    if (error) {
      console.error("❌ Erreur lors de l'upload :", error.message);
      throw new Error("Erreur lors de l'upload : " + error.message);
    }

    console.log("✅ Upload réussi :", data);

    // Récupérer l'URL publique
    if (data) {
      const publicUrl = supabase.storage
        .from("cat_image")
        .getPublicUrl(data.path).data.publicUrl;
      console.log("🌍 URL publique récupérée :", publicUrl);
      return publicUrl;
    }

    console.error("⚠️ Impossible d'obtenir l'URL publique.");
    return null;
  } catch (error) {
    console.error("❌ Erreur upload image:", error);
    return null; // On retourne null au lieu de lever une exception
  }
};

// Fonction pour insérer les données du chat dans Supabase
export const addCat = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    let catUrlImage = formData.cat_url_image;

    // Vérification et conversion de cat_url_image
    if (typeof catUrlImage === "string") {
      // Supprimer les accolades et diviser en tableau si nécessaire
      catUrlImage = catUrlImage.replace(/^{|}$/g, "").split(",");
    }

    console.log("📌 Type après correction :", Array.isArray(catUrlImage));
    console.log("📌 Valeur après correction :", catUrlImage);

    // Formatage final
    const formattedData = {
      ...formData,
      cat_url_image: Array.isArray(catUrlImage) ? catUrlImage : [],
    };

    console.log("✅ Données formatées pour insertion :", formattedData);

    // Insertion dans Supabase
    const { data, error } = await supabase.from("cat").insert([formattedData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log("✅ Chat ajouté avec succès :", data);
    return "Chat ajouté avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

// INSERER UN CONSEIL

// Fonction pour insérer les données du conseil dans Supabase
export const addAdvice = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    let adviceUrlImage = formData.advice_url_image;

    // Vérifier si l'URL de l'image est une chaîne ou un tableau
    if (Array.isArray(adviceUrlImage)) {
      // Si c'est un tableau, on prend le premier élément ou on le vide si le tableau est vide
      adviceUrlImage = adviceUrlImage.length > 0 ? adviceUrlImage[0] : null;
    } else if (typeof adviceUrlImage === "string") {
      // Si c'est déjà une chaîne, on n'y touche pas
      adviceUrlImage = adviceUrlImage;
    } else {
      // Si ce n'est ni un tableau ni une chaîne, on le met à null
      adviceUrlImage = null;
    }

    console.log("📌 URL d'image après correction :", adviceUrlImage);

    // Formatage des données avant insertion
    const formattedData = {
      ...formData,
      advice_url_image: adviceUrlImage,
    };

    console.log("✅ Données formatées pour insertion :", formattedData);

    // Insertion dans Supabase
    const { data, error } = await supabase
      .from("advice")
      .insert([formattedData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log("✅ Conseil ajouté avec succès :", data);
    return "Conseil ajouté avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

// Fonction pour uploader une image de conseil dans Supabase
export const uploadImageAdvice = async (imageFile: File) => {
  try {
    const fileName = `${Date.now()}-${sanitizeFileName(imageFile.name)}`;
    console.log("📤 Uploading file to Supabase...", fileName);

    // Upload de l'image dans le storage Supabase
    const { data, error } = await supabase.storage
      .from("advice_image")
      .upload(fileName, imageFile);

    if (error) {
      console.error("❌ Erreur lors de l'upload :", error.message);
      throw new Error("Erreur lors de l'upload : " + error.message);
    }

    console.log("✅ Upload réussi :", data);

    // Récupérer l'URL publique de l'image
    if (data) {
      const publicUrl = supabase.storage
        .from("advice_image")
        .getPublicUrl(data.path).data.publicUrl;

      console.log("🌍 URL publique récupérée :", publicUrl);
      return publicUrl;
    }

    console.error("⚠️ Impossible d'obtenir l'URL publique.");
    return null;
  } catch (error) {
    console.error("❌ Erreur upload image:", error);
    return null;
  }
};

// Fonction pour récupérer les associations

export const fetchAssociations = async () => {
  // Remplace fetch par Supabase pour récupérer les associations
  const { data, error } = await supabase
    .from("association")
    .select("association_id, name");

  if (error) {
    console.error(
      "❌ Erreur lors de la récupération des associations :",
      error
    );
    throw error;
  }

  return data; // Retourne la liste des associations
};

//INSERER UNE VILLE

export const addCity = async (cityData: any) => {
  // Insertion dans Supabase
  const { data, error } = await supabase
    .from("municipality")
    .insert([cityData]);

  if (error) {
    console.error("❌ Erreur d'insertion dans Supabase :", error);
    throw error;
  }

  console.log("✅ Ville ajouté avec succès :", cityData);
  return "Ville ajouté avec succès";
};

// Fonction pour ajouter une actualité dans Supabase
export const addNews = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    const { data, error } = await supabase.from("news").insert([formData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log("✅ Actualité ajoutée avec succès :", data);
    return "Actualité ajoutée avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

// Fonction pour uploader une image d'actualité dans Supabase
export const uploadImageNews = async (imageFile: File) => {
  try {
    const fileName = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;

    const { data, error } = await supabase.storage
      .from("news_image")
      .upload(fileName, imageFile);

    if (error) throw new Error("Erreur lors de l'upload : " + error.message);

    return supabase.storage.from("news_image").getPublicUrl(data.path).data
      .publicUrl;
  } catch (error) {
    console.error("❌ Erreur upload image:", error);
    return null;
  }
};

// Fonction pour ajouter un événement dans Supabase
export const addEvent = async (formData: any) => {
  try {
    console.log("➡️ Données reçues en entrée :", formData);

    const formattedData = {
      ...formData,
      event_url_img:
        typeof formData.event_url_img === "string"
          ? formData.event_url_img
          : null,
    };

    console.log("✅ Données formatées pour insertion :", formattedData);

    // Insertion dans Supabase
    const { data, error } = await supabase
      .from("calendar")
      .insert([formattedData]);

    if (error) {
      console.error("❌ Erreur d'insertion dans Supabase :", error);
      throw error;
    }

    console.log("✅ Événement ajouté avec succès :", data);
    return "Événement ajouté avec succès";
  } catch (error) {
    console.error("❌ Erreur d'insertion dans la base de données :", error);
    throw error;
  }
};

// Fonction pour uploader une image d'événement dans Supabase
export const uploadImageEvent = async (imageFile: File) => {
  try {
    const fileName = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
    console.log("📤 Uploading file to Supabase...", fileName);

    // Upload de l'image dans le storage Supabase
    const { data, error } = await supabase.storage
      .from("event_image") // Nom du bucket dans Supabase
      .upload(fileName, imageFile);

    if (error) {
      console.error("❌ Erreur lors de l'upload :", error.message);
      throw new Error("Erreur lors de l'upload : " + error.message);
    }

    // Récupérer l'URL publique de l'image
    const { data: publicUrlData } = supabase.storage
      .from("event_image")
      .getPublicUrl(data.path);

    if (!publicUrlData?.publicUrl) {
      console.error("⚠️ Impossible d'obtenir l'URL publique.");
      return null;
    }

    console.log("🌍 URL publique récupérée :", publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
  } catch (error) {
    console.error("❌ Erreur upload image:", error);
    return null;
  }
};
