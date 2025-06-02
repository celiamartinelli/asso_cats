// app/about/page.tsx ou components/AboutPage.tsx

import CTASectionAboutPage from "@/components/MadeInHand/Client/CTASectionAboutPage";
import HeroAboutPage from "@/components/MadeInHand/Client/HeroAboutPage";
import PageHeader from "@/components/MadeInHand/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* Titre principal */}

      <PageHeader pageKey="about" />
      <HeroAboutPage />
      <Separator />

      {/* Qui sommes-nous */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Qui sommes-nous ? 😺</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            Notre association est née d'une passion commune pour les chats
            errants, abandonnés ou maltraités. 💔 Nous leur offrons une nouvelle
            chance en les soignant, les stérilisant, les identifiant, et en leur
            trouvant un foyer aimant. 🏡
          </p>
        </CardContent>
      </Card>

      {/* Une histoire de cœur */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Une histoire de cœur et de solidarité ❤️
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tout a commencé avec la volonté de poursuivre une mission de
            protection animale, à une échelle plus humaine et locale. C’est
            ainsi qu’est née notre association, le{" "}
            <strong>14 janvier 2024</strong>, portée par une équipe engagée et
            passionnée. Depuis ce jour, nous intervenons chaque jour sur le
            terrain pour venir en aide aux chats dans le besoin. 🚗🐾
          </p>
        </CardContent>
      </Card>

      {/* Une équipe dévouée */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Une équipe dévouée 💪</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Notre petite équipe est composée de personnes aux profils
            complémentaires mais unies par le même amour des animaux. 💕
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Des intervenants sur le terrain disponibles à tout moment pour
              secourir les chats.
            </li>
            <li>
              Un soutien administratif indispensable pour gérer les démarches,
              les relations avec les adoptants, et les liens avec les structures
              partenaires. 📋
            </li>
            <li>
              Une gestion active de notre communication sur les réseaux sociaux,
              notre site web et notre identité visuelle, pour sensibiliser et
              faire connaître notre mission. 🌐📸
            </li>
          </ul>
          <p>
            Chacun apporte sa pierre à l’édifice avec passion, rigueur et une
            grande dose d’empathie. 🐱✨
          </p>
        </CardContent>
      </Card>

      {/* Nos actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Nos actions au quotidien 🐾
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Notre mission est simple, mais essentielle :{" "}
            <strong>protéger les chats errants</strong>, les soigner, les
            identifier, et, dans la mesure du possible, leur trouver une famille
            bienveillante. 💉🐈‍⬛🤝
          </p>
          <p>
            Nous mettons un point d’honneur à créer des rencontres harmonieuses
            entre chaque chat et son futur adoptant. Nous croyons que chaque
            humain et chaque chat peuvent se trouver et partager une belle
            histoire d’amour et de complicité. 💞
          </p>
          <p>
            Nous intervenons principalement dans les communes de la{" "}
            <strong>CCPH</strong> (Communauté de Communes du Pays Houdanais), en
            nous concentrant actuellement sur la commune de{" "}
            <strong>Maulette</strong>. D'autres communes s’ajouteront à notre
            zone d’action, au fil des autorisations. 📍
          </p>
        </CardContent>
      </Card>

      {/* Familles d’accueil */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Familles d'accueil : un maillon essentiel 🏠🐾
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Nos familles d'accueil jouent un rôle fondamental. Elles offrent aux
            chats recueillis un foyer temporaire, de l'affection et les soins
            nécessaires pour qu'ils puissent se reconstruire. Grâce à elles, de
            nombreux chats craintifs ou traumatisés retrouvent confiance et
            s’épanouissent avant d’être adoptés. 🌼
          </p>
          <p>
            Nous sommes toujours à la recherche de nouvelles familles prêtes à
            s’investir pour offrir à ces animaux une seconde chance. 🙏
          </p>
        </CardContent>
      </Card>

      {/* Adoption responsable */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            L’adoption responsable 🐾❤️
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Chaque adoption est réfléchie et accompagnée. Un chat adopté est un
            chat suivi, préparé et aimé. Nos familles d’accueil et notre équipe
            veillent à leur bien-être et à leur intégration dans leur nouveau
            foyer. L’adoption responsable est au cœur de notre engagement. 🌟
          </p>
        </CardContent>
      </Card>

      {/* Rejoindre la cause */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Rejoignez notre cause ! 🙌</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Vous aimez les chats ? Vous souhaitez agir concrètement pour une
            cause qui a du sens ? Rejoignez-nous !
          </p>
          <p>
            Que ce soit en devenant famille d’accueil, en aidant à la
            communication, ou en donnant un coup de main ponctuellement,{" "}
            <strong>chaque geste compte</strong>. 💬🐱💖
          </p>
          <p className="font-semibold text-center text-primary">
            Parce que <strong>chaque vie compte</strong>, merci de votre
            soutien. 🙏🐾
          </p>
        </CardContent>
      </Card>
      <CTASectionAboutPage />
    </div>
  );
}
