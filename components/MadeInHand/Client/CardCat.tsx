import Link from "next/link";

export default function CardCat({ item }) {
  return (
    <Link href={`/adoption/${item.cat_id}`}>
      <div className=" border-2 rounded-lg m-2">
        <h2>{item.name_cat}</h2>
        <p>Sexe: {item.sex_cat}</p>
        <p>Âge: {item.age_of_cat}</p>
      </div>
    </Link>
  );
}
