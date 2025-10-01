// components/Hero.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import Link from "next/link";

export default function HeroAboutPage() {
  return (
    <section className="relative w-full bg-muted rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Ensemble, sauvons les chats errants 🐱
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Chaque jour, nous changeons des vies. Rejoignez notre mission et
            faites une vraie différence, une patte à la fois. 🐾
          </p>
          <div className="flex gap-4">
            <Link href="/becomeavolunteer">
              <Button size="lg" className="text-base">
                <PawPrint className="mr-2 w-5 h-5" /> Devenir bénévole
              </Button>
            </Link>
            <Link href="/donation">
              <Button variant="outline" size="lg" className="text-base">
                Faire un don
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/chat-hero1.jpeg"
            alt="Chat sauvé"
            fill
            className="object-cover rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
