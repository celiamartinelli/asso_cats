import { ThemeSwitcher } from "@/components/theme-switcher";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white flex flex-col items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <div className="flex w-4/5 ">
        <div className="w-1/4 px-8 border-r ">
          <h4 className="font-bold text-xl mb-5 flex items-start">
            Infos légales & données
          </h4>
          <ul className="flex flex-col gap-2 items-start text-gray-400">
            <li>
              <Link href="/mentions-legales" passHref>
                Mentions légales & CGU
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Traitement & protections des données
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Accéder à vos données personnelles
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Politiques de cookies
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Documents légaux et Réduction fiscales
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-1/4 px-8 border-r">
          <h4 className="font-bold text-xl mb-5 flex items-start">Adopter</h4>
          <ul className="flex flex-col gap-2 items-start text-gray-400">
            <li>
              <Link href="/mentions-legales" passHref>
                Comment Adopter?
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Les conditions d'adoption
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Les Frais d'adoption
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-1/4 px-8 border-r">
          <h4 className="font-bold text-xl mb-5 flex items-start">
            Nous aider
          </h4>
          <ul className="flex flex-col gap-2 items-start text-gray-400">
            <li>
              <Link href="/mentions-legales" passHref>
                Comment nous aider?
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Devenir Famille d'accueil
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Faire un don financier
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Faire un don matériel
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 px-8 ">
          <h4 className="font-bold text-xl mb-5 flex items-start">
            Nous contacter
          </h4>
          <ul className="flex flex-col gap-2 items-start text-gray-400">
            <li>
              <Link href="/mentions-legales" passHref>
                Nous contacter
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Demander de l'aide
              </Link>
            </li>
            <li>
              <Link href="/traitement-protection-des-donnees" passHref>
                Signaler une maltraitance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center">
          <p className="text-gray-400 mr-1">
            © Copyright 2025 par l'Association
          </p>
          <a
            href="/"
            target="_blank"
            className="font-bold hover:underline"
            rel="copyright association"
          >
            L'École des Chats du Pays Houdanais
          </a>
        </div>
        <ThemeSwitcher />
        <div className="flex gap-4">
          <Link
            className="hover:bg-accent hover:rounded-lg p-2"
            href="https://www.facebook.com/profile.php?id=61561436403399&locale=fr_FR"
            target="_blank"
          >
            <Facebook size={28} />
          </Link>
          <Link
            href="https://www.instagram.com/ecoledeschats/"
            target="_blank"
            className="hover:bg-accent hover:rounded-lg p-2"
          >
            <Instagram size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/groups/13126906/"
            className="hover:bg-accent hover:rounded-lg p-2"
            target="_blank"
          >
            <Linkedin size={28} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
