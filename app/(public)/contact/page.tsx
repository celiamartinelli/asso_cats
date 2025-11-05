"use client";
import SocialNetwork from "@/components/MadeInHand/SocialNetwork";
import FormContact from "@/components/MadeInHand/Client/Form/FormContact";
import { Mail, PhoneCall, Contact2 } from "lucide-react";
import PageHeader from "@/components/MadeInHand/PageHeader";

export default function Contact() {
  return (
    <div className=" flex  min-h-screen bg-black gap-6 p-2">
      {/* <h1 className="text-3xl font-bold mb-4">Contact</h1> */}
      <title>
        Contactez L'association | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Contactez l'association de l'Ecole des Chats du Pays Houdanais pour toute question ou demande d'information."
      />

      <section className="w-1/2 mt-10 ">
        {/* <h1 className="text-3xl text-center text-muted-foreground  mb-4 text-white">
          Une question ? Un miaou à nous transmettre ? 📩🐾
        </h1>
        <p className="text-muted-foreground text-lg text-center  mb-10">
          Nous sommes là pour vous répondre, humains comme félins 😺
        </p> */}
        {/* <h2 className="font-semi-bold text-2xl mb-10 text-center text-zinc-100 ">
          Comment pouvez-vous nous contacter?
        </h2> */}
        <PageHeader pageKey="contact" textColorClass="text-white" />

        <div className="flex flex-col items-center gap-2 mb-10 text-zinc-100 ">
          <PhoneCall />
          <h3 className="font-thasadith text-zinc-400">Par Téléphone</h3>
          <p className="text-zinc-100 ">06 08 87 28 94</p>
        </div>
        <div className="flex flex-col items-center gap-2 mb-10 text-zinc-100 ">
          <Mail />
          <h3 className="font-thasadith text-zinc-400 "> Par mail</h3>
          <p className="text-zinc-100 ">
            ecoledeschatsdupayshoudanais@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 mb-16  text-zinc-100 ">
          <Contact2 />
          <h3 className="font-thasadith text-zinc-400 ">
            {" "}
            Via nos réseaux sociaux
          </h3>
          <SocialNetwork />
        </div>

        <p className="flex justify-center items-center  text-zinc-100  ">
          ou sinon via le formulaire juste ici 👉
        </p>
      </section>
      <section className="w-1/2  ">
        <FormContact />
      </section>
    </div>
  );
}
