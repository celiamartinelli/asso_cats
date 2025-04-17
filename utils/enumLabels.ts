// lib/enumLabels.ts

export const SUBJECT_LABELS: Record<string, string> = {
  maltraitance: "Maltraitance",
  adoption: "Adoption",
  "chats-errants": "Chats errants",
  "collecte-de-dons": "Collecte de dons",
  informations: "Informations",
  "autres-demande": "Autres demandes",
};

export const CATEGORY_LABELS: Record<string, string> = {
  sante_et_securite: "Santé et Sécurité",
  "bien-etre_et_comportement": "Bien-être et comportement",
  activites_et_enrichissement: "Activités et enrichissement",
  education_et_sensibilisation: "Éducation et sensibilisation",
  guide_pratique: "Guide Pratique",
};

export const AGE_LABELS: Record<string, string> = {
  chatons: "Chatons",
  "jeune-chat": "Jeune chat",
  adulte: "Adulte",
  senior: "Senior",
  "tous-ages": "Tous les âges",
};

export const CATEGORY_CAT_LABELS: Record<string, string> = {
  "chat-errant": "Chat errant",
  "chat-maltraite": "Chat maltraité",
  "chat-abandonne": "Chat abandonné",
};

export const COAT_COLOR_LABELS: Record<string, string> = {
  white: "Blanc",
  "blue-grey": "Gris-bleu",
  cinnamon: "Cannelle",
  chocolate: "Chocolat",
  cream: "Crème",
  fawn: "Fauve",
  black: "Noir",
  red: "Roux",
};

export const SEX_CAT_LABELS: Record<string, string> = {
  female: "Femelle",
  male: "Mâle",
};

export const GARDEN_LABELS: Record<string, string> = {
  "A secure garden": "Jardin sécurisé",
  "A non-fenced garden": "Jardin non clôturé",
  "A secure balcony": "Balcon sécurisé",
  "A balcony": "Balcon",
  None: "Aucun extérieur",
};

export const PATTERN_LABELS: Record<string, string> = {
  solid: "Uni",
  "bi-color": "Bicolore",
  striped: "Rayé",
  tortoiseshell: "Écaille de tortue",
  "tri-color": "Tricolore",
  colourpoint: "Colourpoint",
  "all-patterns": "Tous motifs",
};

export const FOSTER_TYPE_LABELS: Record<string, string> = {
  "Longue-Duree": "Longue durée",
  Quarantaine: "Quarantaine",
  Transition: "Transition",
  Convalescence: "Convalescence",
};

export const HOUSING_TYPE_LABELS: Record<string, string> = {
  house: "Maison",
  apartment: "Appartement",
  castle: "Château 🏰",
  caravan: "Caravane",
};
