// À ajouter à la fin de ta page AboutPage

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandHeart, Mail, Users } from "lucide-react";

export default function CTASectionAboutPage() {
  return (
    <section className="text-center py-12 px-4 bg-accent rounded-2xl mt-10 space-y-6">
      <h2 className="text-3xl font-bold">
        Envie d’agir pour la cause féline ? 🐾
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Que vous soyez prêt·e à accueillir un chat, à aider sur le terrain ou à
        faire un don, votre soutien est précieux.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/becomeavolunteer">
          <Button size="lg">
            <Users className="mr-2 w-5 h-5" /> Rejoindre les bénévoles
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            <Mail className="mr-2 w-5 h-5" /> Nous contacter
          </Button>
        </Link>
        <Link href="/donation">
          <Button variant="outline" size="lg">
            <HandHeart className="mr-2 w-5 h-5" /> Faire un don
          </Button>
        </Link>
      </div>
    </section>
  );
}
