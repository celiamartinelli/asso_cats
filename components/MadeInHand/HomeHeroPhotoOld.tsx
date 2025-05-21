import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeHeroPhotoOld() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white border-gray-600 dark:border-white dark:text-black">
      {/* Montage photo en fond */}
      <div className="relative inset-0 z-0 flex flex-col lg:flex-row flex-wrap items-center justify-center opacity-40 blur-sm">
        <img
          src="./photos_nb/Abby2.jpg"
          className="w-2/3 lg:w-1/4 object-cover m-2 rounded-xl shadow-md"
          alt="Chat 1"
        />
        <img
          src="./photos_nb//Chat1.jpg"
          className="w-2/3 lg:w-1/4 object-cover m-2 rounded-xl shadow-md"
          alt="Chat 2"
        />
        <img
          src="./photos_nb//Chatons2.jpg"
          className="w-2/3 lg:w-1/4 object-cover m-2 rounded-xl shadow-md"
          alt="Chat 3"
        />
        <img
          src="./photos_nb//Lola&Freddy.jpg"
          className="w-2/3 lg:w-1/4 object-cover m-2 rounded-xl shadow-md"
          alt="Chat 4"
        />
        {/* Ajoute autant d’images que tu veux ici */}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-24">
        <h2 className="text-4xl lg:text-6xl font-thasadith tracking-wide font-bold">
          L'École des chats du pays Houdanais
        </h2>
        <h3 className="text-2xl lg:text-3xl my-10 font-dosis">
          Association à but non lucratif
        </h3>
        <h4 className="font-bold text-3xl lg:text-5xl my-4">0678564738</h4>
        <div className="flex gap-6 mt-6 flex-wrap justify-center">
          <Button
            type="button"
            className="text-black dark:text-white"
            variant="outline"
          >
            <Link href="/about">En savoir plus</Link>
          </Button>
          <Button type="button">
            <Link href="/adoption">Adopter un chat</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
