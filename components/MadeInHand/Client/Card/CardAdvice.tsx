import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SUBJECT_LABELS,
  CATEGORY_LABELS,
  AGE_LABELS,
} from "@/utils/enumLabels";

interface Advice {
  advice_id: string;
  created_at: string;
  title: string;
  subtitle: string;
  subject: string;
  like: number;
  body_of_advice: string;
  advice_url_image: string | string[];
  category_advice: string;
  useful: boolean;
  age_of_cat: string;
}

export default function CardAdvice({ item }: { item: Advice }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/advice/${item.advice_id}`);
  };

  return (
    <div className="relative rounded-lg m-2 cursor-pointer bg-white dark:bg-zinc-900 p-6 shadow-md group overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
        <button
          className="text-white font-bold py-2 px-4 rounded bg-black"
          onClick={handleClick}
        >
          Lire l'article
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 font-dosis">
        {item.title}
      </h2>
      <h3 className="italic text-zinc-700"> {item.subtitle}</h3>
      <h3 className="bg-zinc-900 text-white rounded-md inline-block px-2 py-1 ">
        {SUBJECT_LABELS[item.subject] || item.subject}
      </h3>
      <h3>
        Catégorie:{" "}
        {CATEGORY_LABELS[item.category_advice] || item.category_advice}
      </h3>
      <h3>Âge: {AGE_LABELS[item.age_of_cat] || item.age_of_cat}</h3>

      <Image
        src={
          typeof item.advice_url_image === "string"
            ? item.advice_url_image
            : "/placeholder.png"
        }
        alt={item.title || "Image non disponible"}
        width={300}
        height={300}
        priority
        className="object-cover rounded-lg mb-2"
      />
      <p className=" text-xs text-gray-400 dark:text-zinc-300">
        {new Date(item.created_at).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
