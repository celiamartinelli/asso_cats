import Link from "next/link";
import { Button } from "../ui/button";

export default function HOmeHeroPhotoNew() {
  return (
    <div
      className="text-white border-gray-600 w-full flex flex-col justify-center items-center lg:col-span-2 dark:border-white min-h-screen 
        bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/bg-new.png')] dark:text-black"
    >
      <h2 className="text-6xl font-thasadith tracking-wide font-bold">
        L'École des chats du pays Houdanais
      </h2>
      <h3 className="text-3xl my-14 font-dosis">
        Association à but non lucratif
      </h3>
      <h4 className="font-bold text-4xl md:text-6xl my-4 space-y-2.5 ">
        0678564738
      </h4>
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
