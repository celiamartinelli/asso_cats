import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Client/NavBar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <a href="/" title="Back to Home">
          <Image
            className="w-25 h-25"
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
          <Link href="/donation">Make a Donation</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Nous Contacter</Link>
        </Button>
      </div>
    </div>
  );
}
