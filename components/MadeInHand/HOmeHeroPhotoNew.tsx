import Link from "next/link";
import { Button } from "../ui/button";

export default function HOmeHeroPhotoNew() {
  return (
    <div
      className="
    text-white border-gray-600 w-full flex flex-col justify-center items-center lg:col-span-2 dark:border-white
    min-h-[70vh] md:min-h-screen
    bg-cover bg-center bg-no-repeat
    md:bg-fixed
    bg-[url('/bg-hero.png')]
    dark:text-black
  "
    >
      <div className="bg-black/60 px-4 py-2 rounded-lg dark:bg-white/60 my-5 md:my-0">
        <h2 className="text-xl md:text-6xl font-thasadith tracking-wide font-bold drop-shadow-xl">
          L'École des chats du pays Houdanais
        </h2>
      </div>
      <div className="bg-black/60 px-4 py-2 rounded-lg dark:bg-white/60 my-14">
        <h3 className="text-3xl  font-dosis">Association à but non lucratif</h3>
      </div>
      <div className="bg-black/60 px-4 py-2 rounded-lg dark:bg-white/60">
        <h4 className="font-bold text-4xl md:text-6xl my-4 space-y-2.5 ">
          06 78 56 47 38
        </h4>
      </div>

      <div className="flex gap-8">
        <Button
          type="button"
          className="mt-8 text-black dark:text-zinc-100"
          variant="outline"
        >
          <Link href="/about">En savoir plus</Link>
        </Button>
        <Button type="button" className="mt-8">
          <Link href="/adoption">Adopter un chat</Link>
        </Button>
      </div>
    </div>
  );
}
