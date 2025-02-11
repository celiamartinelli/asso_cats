import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Cat {
  cat_id: string;
  name_cat: string;
  sex_cat: string;
  age_of_cat: string;
  cat_url_image: string | string[];
}

export default function CardCat({ item }: { item: Cat }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/adoption/${item.cat_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className=" border-2 rounded-lg m-2 cursor-pointer bg-white p-2 shadow-md"
    >
      <h2 className="font-bold text-2xl">{item.name_cat}</h2>
      <p>Sexe: {item.sex_cat}</p>
      <p>Âge: {item.age_of_cat}</p>

      <Image
        src={
          Array.isArray(item.cat_url_image) && item.cat_url_image.length > 0
            ? item.cat_url_image[0]
            : "/placeholder.jpg"
        }
        alt={item.name_cat || "Image non disponible"}
        width={300}
        height={300}
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </div>
  );
}
