import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      onClick={onClick}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`rounded-lg p-4 cursor-pointer bg-white dark:bg-zinc-950  transition-all 
      ${isActive ? "w-full flex flex-row items-start" : "w-[300px] flex flex-col hover:scale-105"}
    `}
    >
      <div
        onClick={onClick}
        className={`border-2 rounded-lg p-4 cursor-pointer bg-white shadow-md transition-all duration-300  dark:bg-zinc-900 ${
          isActive
            ? "min-w-[900px] flex flex-row items-start hover:border-gray-400 shadow-lg"
            : "flex flex-col overflow-hidden  hover:shadow-xl hover:border-gray-400 hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center min-h-[300px]">
          <h2 className="text-xl font-bold text-gray-900 h-12 flex items-center text-center dark:text-zinc-300">
            {item.title}
          </h2>
          <Image
            src={
              typeof item.news_url_img === "string"
                ? item.news_url_img
                : "/placeholder.png"
            }
            alt={item.title || "/placeholder.png"}
            width={300}
            height={300}
            layout="intrinsic"
            className="w-72 h-72 aspect-square object-cover object-center rounded-lg m-4"
            priority
          />

          <p className={`flex text-xs text-gray-500 dark:text-zinc-500`}>
            {new Date(item.created_at).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mt-12 ml-6 p-4 text-zinc-300 bg-gray-100 rounded-lg shadow-inner w-2/3 dark:bg-zinc-800"
          >
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
