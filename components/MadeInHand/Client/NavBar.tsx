import React from "react";
import Link from "next/link";

type NavBarProps = {
  onLinkClick?: () => void;
};

export default function NavBar({ onLinkClick }: NavBarProps) {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/adoption", label: "Adoption" },
    { href: "/helpthem", label: "Aidez-les" },
    { href: "/about", label: "À propos" },
    { href: "/advice", label: "Article/Conseil" },
    { href: "/news", label: "Actualités" },
  ];

  return (
    <nav className="rounded-md py-6 px-4 mr-2">
      <ul className="flex flex-col md:flex-row">
        {links.map((link, index) => (
          <li
            key={index}
            className="mx-4 p-2 hover:bg-accent hover:rounded-md transition-colors dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:rounded-md"
          >
            <Link href={link.href} onClick={onLinkClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
