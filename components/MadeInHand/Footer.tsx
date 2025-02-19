import { ThemeSwitcher } from "@/components/theme-switcher";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Infos légales & données",
    links: [
      { href: "/legalnotice", label: "Mentions légales & CGU" },
      {
        href: "/dataprotectionprocessing",
        label: "Traitement & protections des données",
      },
      {
        href: "/accessyourpersonaldata",
        label: "Accéder à vos données personnelles",
      },
      {
        href: "/cookiespolicies",
        label: "Politiques de cookies",
      },
      {
        href: "/legaldocuments",
        label: "Documents légaux et Réduction fiscales",
      },
    ],
  },
  {
    title: "Adopter",
    links: [
      { href: "/howtoadopt", label: "Comment Adopter?" },
      {
        href: "/conditiontoadopt",
        label: "Les conditions d'adoption",
      },
      {
        href: "/adoptionfees",
        label: "Les Frais d'adoption",
      },
    ],
  },
  {
    title: "Nous aider",
    links: [
      { href: "/howtohelpus", label: "Comment nous aider?" },
      {
        href: "/helpthem?form=famille-accueil",
        label: "Devenir Famille d'accueil",
      },
      {
        href: "/helpthem?form=don-financier",
        label: "Faire un don financier",
      },
      {
        href: "/helpthem?form=don-materiel",
        label: "Faire un don matériel",
      },
    ],
  },
  {
    title: "Nous contacter",
    links: [
      { href: "/contact", label: "Nous contacter" },
      {
        href: "/traitement-protection-des-donnees",
        label: "Demander de l'aide",
      },
      {
        href: "/traitement-protection-des-donnees",
        label: "Signaler une maltraitance",
      },
    ],
  },
];

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string }[];
  hasBorder?: boolean;
}

const FooterSection = ({
  title,
  links,
  hasBorder = true,
}: FooterSectionProps) => (
  <div className={`w-1/4 px-8 ${hasBorder ? "border-r" : ""}`}>
    <h4 className="font-bold text-xl mb-5 flex items-start">{title}</h4>
    <ul className="flex flex-col gap-2 items-start text-gray-400">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} passHref>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white flex flex-col items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <div className="flex w-4/5">
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            hasBorder={index !== sections.length - 1}
          />
        ))}
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
