// app/about/page.tsx ou components/AboutPage.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  PawPrint,
  HeartHandshake,
  Users,
  Home,
  PlusCircle,
} from "lucide-react";
import CTASectionAboutPage from "@/components/MadeInHand/Client/CTASectionAboutPage";
import HeroAboutPage from "@/components/MadeInHand/Client/HeroAboutPage";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">À propos de nous 😺</h1>
        <p className="text-muted-foreground text-lg">
          Une équipe passionnée au service des chats errants 🐾
        </p>
      </section>
      <HeroAboutPage />

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <HeartHandshake className="text-pink-500" /> Une histoire de cœur et
            de solidarité ❤️
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            L'association a vu le jour le <strong>14 janvier 2024</strong>,
            portée par une volonté forte d’agir localement pour les chats en
            détresse. Depuis, notre petite équipe ne ménage pas ses efforts pour
            secourir, soigner et replacer les chats errants. 💪
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Users className="text-blue-500" /> Une équipe dévouée 💼
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Notre force, c’est une équipe aux compétences variées : intervention
            sur le terrain, suivi administratif, communication, gestion web et
            réseaux sociaux. Ensemble, nous agissons avec sérieux et passion. 💙
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Intervention</Badge>
            <Badge variant="secondary">Soins</Badge>
            <Badge variant="secondary">Adoption</Badge>
            <Badge variant="secondary">Communication</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <PawPrint className="text-green-500" /> Nos actions au quotidien 🐾
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Nous intervenons principalement dans les communes de la{" "}
            <strong>CCPH</strong>, notamment à Maulette. Nos missions : trapper,
            soigner, stériliser, identifier et, si possible, faire adopter.
          </p>
          <p>
            Chaque jour, nous répondons aux appels, accompagnons les chats et
            créons des duos heureux entre humains et félins. 💞
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Home className="text-yellow-600" /> Les familles d’accueil 🏠
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Elles offrent un cocon temporaire à nos chats : affection, sécurité
            et soins. Grâce à elles, les plus craintifs retrouvent confiance et
            douceur de vivre. 🌼
          </p>
          <p>
            Nous cherchons toujours de nouvelles familles pour agrandir ce
            réseau de cœur. 🧡
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="text-purple-500" /> L’adoption responsable 🌟
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Chaque adoption est un engagement. Nous veillons à ce que chaque
            chat rejoigne un foyer adapté, dans lequel il pourra s’épanouir. Nos
            suivis sont rigoureux et bienveillants. 🐾
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <PlusCircle className="text-indigo-500" /> Rejoignez-nous 🙌
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Envie d’aider ? Devenir bénévole, famille d’accueil ou simple relais
            de notre cause ? Chaque geste compte. Ensemble, faisons la
            différence pour les chats sans voix. 💬🐱
          </p>
          <p className="font-semibold text-center text-primary">
            Parce que chaque vie compte. Merci pour votre soutien ! 🙏
          </p>
        </CardContent>
      </Card>
      <CTASectionAboutPage />
    </div>
  );
}
