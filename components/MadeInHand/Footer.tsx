import { ThemeSwitcher } from "@/components/theme-switcher";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p>
        © Copyright 2024 Directed by Association {""}
        <a
          href="/"
          target="_blank"
          className="font-bold hover:underline"
          rel="copyright association"
        >
          L'École des Chats du Pays Houdanais
        </a>
      </p>
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
    </footer>
  );
}
