import React from "react";
import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/adoption", label: "Adoption" },
    { href: "/helpthem", label: "Aidez-les" },
    { href: "/about", label: "À propos" },
    { href: "/advice", label: "Article/Consiel" },
  ];

  return (
    <nav className="rounded-md py-6 px-4 mr-2">
      <ul className="flex">
        {links.map((link, index) => (
          <li
            className="mx-4 p-2 hover:bg-accent hover:rounded-md transition-colors dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:rounded-md"
            key={index}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
