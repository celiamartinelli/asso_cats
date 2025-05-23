import { Cat } from "lucide-react";
import Image from "next/image";

export default function PageEnConstruction() {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-gray-100 dark:bg-black text-center">
      <Image
        src="/chantier_dashboard.png"
        alt="chantier_dashboard"
        width={300}
        height={300}
        className="mb-4 "
      />

      <h1 className="text-3xl font-bold mb-2">Page en construction 🛠️</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
        Cette section du site est encore en cours de fabrication par nos petites
        pattes agiles 🐾. Revenez bientôt pour découvrir tout ce qu’on prépare
        pour nos amis les chats !
      </p>
    </div>
  );
}
