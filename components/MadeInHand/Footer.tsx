import { ThemeSwitcher } from "@/components/theme-switcher";

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
    </footer>
  );
}
