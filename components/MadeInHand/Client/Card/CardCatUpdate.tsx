import Image from "next/image";
import Link from "next/link";

import { SEX_CAT_LABELS, AGE_LABELS } from "@/utils/enumLabels";
import { useState } from "react";
import FormToUpdateCat from "../../Admin/Actions/Cat/FormToUpdateCat";

interface Cat {
  cat_id: string;
  name_cat: string;
  date_of_birth: string;
  sex_cat: string;
  coat_color: string;
  pattern: string;
  sterilized: boolean;
  cat_url_image: string;
  sterelized: boolean;
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
}

export default function CardCatUpdate({ item }: { item: Cat }) {
  return (
    <div>
      {" "}
      <FormToUpdateCat initialData={item} />
    </div>
  );
}
