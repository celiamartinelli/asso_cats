"use client";

import PageEnConstruction from "@/components/MadeInHand/PageEnConstruction";
import Page from "../adoption/page";
import { Separator } from "@/components/ui/separator";

export default function Municipality() {
  return (
    <div className="p-6  flex justify-center bg-gray-100 dark:bg-black">
      <title>
        Municipalité partenaires | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Découvrez les municipalités partenaires de l'Ecole des Chats du Pays Houdanais et comment elles collaborent avec nous pour la protection et le bien-être des chats errants."
      />
      <div className="max-w-2xl text-center bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          🌍 Nos actions sur les communes
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Nous intervenons principalement dans la{" "}
          <span className="font-semibold">commune de Maulette (78550)</span> 🏡.
          Même si notre objectif est de couvrir toute la{" "}
          <span className="font-semibold">CCPH</span>, chaque avancée se mérite.
        </p>
        <Separator className="my-8" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Mettre en place un protocole n’est pas simple ⚠️ : les mairies
          n’attendent pas que nous venions, nous devons démarcher, expliquer et
          argumenter chaque démarche. Cela demande beaucoup de temps et
          d’énergie, mais c’est le seul moyen d’avoir un impact réel sur le
          terrain.
        </p>
        <Separator className="my-8" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Nous intervenons en zone rurale, où les mentalités sont parfois un
          vrai défi 🐾. Beaucoup de communes n'ont pas conscience qu'elles sont
          responsables de leurs animaux errants. Elles ont deux options :
        </p>

        <ul className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed list-disc list-inside">
          <li>
            Mettre en place un contrat avec une{" "}
            <strong>association de protection animale</strong> pour gérer les
            animaux errants 🐱✅
          </li>
          <li>
            Mettre en place un contrat avec une <strong>fourrière</strong> pour
            capturer les animaux. Après un délai de 8 jours, les animaux peuvent
            être euthanasiés ⚠️
          </li>
        </ul>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          C’est pour cela que nous sensibilisons les communes à choisir la
          première option. Nous faisons aussi en sorte que l’information circule
          auprès des habitants pour créer un vrai changement local.
        </p>
        <Separator className="my-8" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Beaucoup de propriétaires d’animaux errants ne respectent pas leurs
          obligations légales 📜. Il est important de rappeler que chaque
          propriétaire doit identifier et stériliser son animal pour éviter la
          misère féline et la surpopulation.
        </p>
        <Separator className="my-8" />

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Malgré ces obstacles, nous continuons 💪. Chaque rencontre, chaque
          explication et chaque protocole mis en place représente un pas de plus
          vers un territoire plus respectueux des animaux. Nous restons
          disponibles pour échanger avec les habitants et les communes voisines
          🤝.
        </p>
      </div>
    </div>
  );
}
