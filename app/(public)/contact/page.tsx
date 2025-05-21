"use client";
import SocialNetwork from "@/components/MadeInHand/SocialNetwork";
import FormContact from "@/components/MadeInHand/Client/Form/FormContact";
import { Mail, PhoneCall, Contact2 } from "lucide-react";

export default function Contact() {
  return (
    <div className=" flex  min-h-screen bg-black gap-6 p-2">
      {/* <h1 className="text-3xl font-bold mb-4">Contact</h1> */}
      <section className="w-1/2 mt-10 ">
        <h2 className="font-semi-bold text-2xl mb-10 text-center text-zinc-100 ">
          Comment pouvez-vous nous contacter?
        </h2>
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
          <h3 className="font-thasadith text-zinc-400">
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
