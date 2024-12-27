"use client";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import FormToAdoption from "@/components/MadeInHand/Client/Form/FormToAdoption";

interface PageProps {
  nameCat: string;
}

const Page: React.FC<PageProps> = ({ nameCat }) => {
  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-4">
        Formulaire d'adoption de {nameCat}
      </h3>
      <FormToAdoption />
    </div>
  );
};
export default Page;
