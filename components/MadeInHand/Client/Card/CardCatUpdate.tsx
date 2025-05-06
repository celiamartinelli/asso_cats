import Image from "next/image";
import Link from "next/link";

import { SEX_CAT_LABELS, AGE_LABELS } from "@/utils/enumLabels";
import { useState } from "react";
import FormToUpdateCat from "../../Admin/Actions/Cat/FormToUpdateCat";

interface Cat {
  cat_id: string;
  name_cat: string;
  sex_cat: string;
  age_of_cat: string;
  cat_url_image: string | string[];
  adoption: boolean;
}

export default function CardCatUpdate({ item }: { item: Cat }) {
  return (
    <div>
      {" "}
      <FormToUpdateCat />
    </div>
  );
}
