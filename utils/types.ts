export interface Cat {
  cat_id: string;
  name_cat: string;
  date_of_birth: string;
  sex_cat: string;
  coat_color: string;
  pattern: string;
  sterilized: boolean;
  sterelized?: boolean; // Peut être une faute de frappe redondante ?
  when_sterelized: string;
  vaccine: boolean;
  when_vaccine: string;
  fiv_test: boolean;
  felv_test: boolean;
  description: string;
  adoption: boolean;
  when_adopt: string;
  age_of_cat: string;
  category_cat: string;
  where_cat_found: string;
  which_host_family: string;
  cat_url_image: string; // URLs séparées par virgule, ou à convertir en string[]
}
