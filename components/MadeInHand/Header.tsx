import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Client/NavBar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-zinc-900  z-50">
      <div>
        <a href="/" title="Back to Home">
          <Image
            className="w-20 h-20 mr-2"
            src="/logo.png"
            alt="Logo Association de l'école des chats du pays houdanais"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>
      <NavBar />
      <div className="flex flex-col">
        <Button asChild className="mb-2">
          <Link href="/donation">Faire un Don</Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="/contact"
            className="dark:border-zinc-400 dark:bg-zinc-900"
          >
            Contactez-nous
          </Link>
        </Button>
      </div>
    </div>
  );
}
