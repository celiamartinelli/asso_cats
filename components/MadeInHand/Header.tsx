"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Client/NavBar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-zinc-900 z-50">
      {/* Menu Burger - visible en mobile uniquement */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <NavBar onLinkClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo - centré en mobile, gauche sinon */}
      <div className="flex-1 flex justify-center lg:justify-start ">
        <a href="/" title="Back to Home">
          <Image
            className="w-20 h-20 dark:invert"
            src="/logo.png"
            alt="Logo Association de l'école des chats du pays houdanais"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>

      {/* Navbar desktop - cachée en mobile */}
      <div className="hidden lg:flex flex-row ">
        <NavBar />
      </div>

      {/* Boutons à droite */}
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
