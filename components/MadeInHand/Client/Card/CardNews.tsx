import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface News {
  news_id: string;
  title: string;
  body: string;
  created_at: string;
  news_url_img: string;
}

export default function CardNews({ item }: { item: News }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/advice/${item.news_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className=" border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md w-full"
    >
      <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
      <div className="flex items-center">
        <Image
          src={
            typeof item.news_url_img === "string"
              ? item.news_url_img
              : "/placeholder.jpg"
          }
          alt={item.title || "Image non disponible"}
          width={300}
          height={300}
          className="w-72 h-72 object-cover rounded-lg border border-2-gray m-4"
          priority
        />
        {/* <div dangerouslySetInnerHTML={{ __html: item.body }} /> */}
      </div>
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
