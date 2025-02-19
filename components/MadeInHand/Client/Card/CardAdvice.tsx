import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Advice {
  advice_id: string;
  created_at: string;
  title: string;
  subject: string;
  like: number;
  body_of_advice: string;
  advice_url_image: string | string[];
  category_cat: string;
  useful: boolean;
  age_of_cat: string;
}

export default function CardAdvice({ item }: { item: Advice }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/advice/${item.advice_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className=" border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md"
    >
      <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
      <h3>Sujet: {item.subject}</h3>

      <Image
        src={
          typeof item.advice_url_image === "string"
            ? item.advice_url_image
            : "/placeholder.jpg"
        }
        alt={item.title || "Image non disponible"}
        width={300}
        height={300}
        style={{ width: "auto", height: "auto" }}
        priority
      />
      <p>
        {new Date(item.created_at).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
