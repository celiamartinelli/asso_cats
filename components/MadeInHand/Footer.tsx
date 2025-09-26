import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import SocialNetwork from "./SocialNetwork";

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

      {
        href: "/legaltext",
        label: "Textes de loi",
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
    title: "Informations supplémentaires",
    links: [
      { href: "/associations", label: "Associations" },
      {
        href: "/municipality",
        label: "Municipalités partenaires",
      },
      {
        href: "/calendar",
        label: "Date évenements à venir",
      },
      {
        href: "/news",
        label: "L'actualité de l'association",
      },
    ],
  },
  {
    title: "Nous contacter",
    links: [
      { href: "/contact", label: "Nous contacter" },
      // {
      //   href: "/traitement-protection-des-donnees",
      //   label: "Demander de l'aide",
      // },
      // {
      //   href: "/traitement-protection-des-donnees",
      //   label: "Signaler une maltraitance",
      // },
      {
        href: "/becomeavolunteer",
        label: "Devenir Bénévole",
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
  <div
    className={`w-full md:w-1/5 px-8 ${
      hasBorder
        ? "md:border-r border-b md:border-b-0 py-4 md:py-4-0 border-zinc-700"
        : ""
    }`}
  >
    <h4 className="font-bold text-xl mb-5 flex justify-start items-start">
      {title}
    </h4>
    <ul className="flex flex-col flex-wrap gap-2 items-start text-gray-400 break-words">
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
      <div className="flex flex-col md:flex-row w-full justify-between pl-8 text-left mt-12">
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            hasBorder={index !== sections.length - 1}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2">
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
        <SocialNetwork />
      </div>
    </footer>
  );
}
