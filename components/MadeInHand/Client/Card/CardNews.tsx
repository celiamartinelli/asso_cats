import Image from "next/image";

interface News {
  news_id: string;
  title: string;
  body: string;
  created_at: string;
  news_url_img: string;
}

interface CardNewsProps {
  item: News;
  isActive: boolean;
  onClick: () => void;
}

export default function CardNews({ item, isActive, onClick }: CardNewsProps) {
  return (
    <div
      onClick={onClick}
      className={`border-2 rounded-lg p-4 cursor-pointer bg-white shadow-md transition-all duration-300 w-1/6 ${
        isActive
          ? "w-3/6 flex flex-row items-start"
          : "flex flex-col overflow-hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
        <Image
          src={
            typeof item.news_url_img === "string"
              ? item.news_url_img
              : "/placeholder.jpg"
          }
          alt={item.title || "Image non disponible"}
          width={300}
          height={300}
          layout="intrinsic"
          className="w-72 h-72 aspect-square object-cover object-center rounded-lg border border-2-gray m-4"
          priority
        />

        <p className={`flex text-xs text-gray-500`}>
          {new Date(item.created_at).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>

      {isActive && (
        <div className=" mt-12 ml-6 p-4 bg-gray-100 rounded-lg shadow-inner transition-opacity duration-300 w-2/3">
          <div dangerouslySetInnerHTML={{ __html: item.body }} />
        </div>
      )}
    </div>
  );
}
