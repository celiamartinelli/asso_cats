import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Cat {
  cat_id: string;
  name_cat: string;
  sex_cat: string;
  age_of_cat: string;
  cat_url_image: string | string[];
  adoption: boolean;
}

export default function CardCat({ item }: { item: Cat }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/adoption/${item.cat_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md flex flex-col relative dark:bg-zinc-900 ${
        item.adoption ? "opacity-50" : ""
      }`}
    >
      {item.adoption && (
        <div className="absolute inset-0 bg-white dark:bg-zinc-900 dark:bg-opacity-50  bg-opacity-50 flex items-center justify-center">
          <span className="text-4xl font-bold text-black dark:text-white">
            ADOPTÉ
          </span>
        </div>
      )}
      <div>
        <h2 className="font-bold text-2xl">{item.name_cat}</h2>
        <p>Sexe: {item.sex_cat}</p>
        <p>Âge: {item.age_of_cat}</p>
      </div>
      <div className="flex justify-center">
        <Image
          src={
            Array.isArray(item.cat_url_image) && item.cat_url_image.length > 0
              ? item.cat_url_image[0]
              : "/placeholder.png"
          }
          alt={item.name_cat || "Image non disponible"}
          width={500}
          height={500}
          className="w-72 h-72 object-cover rounded-lg  m-4"
          priority
        />
      </div>
    </div>
  );
}
