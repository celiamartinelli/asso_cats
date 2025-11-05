"use client";

import { useEffect, useState } from "react";
import { getAllNews } from "@/utils/actions";
import CardNews from "@/components/MadeInHand/Client/Card/CardNews";
import PageHeader from "@/components/MadeInHand/PageHeader";
import Player from "lottie-react";
import loader from "@/public/lottie/loader.json";

interface News {
  news_id: string;
  title: string;
  body: string;
  created_at: string;
  news_url_img: string;
}

export default function Actualites() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const allNews = await getAllNews();
        setNews(allNews);
      } catch (error) {
        console.error("Erreur lors du chargement des actualités :", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      {/* <h1 className="text-3xl font-bold mb-4">Actualités de l'association</h1> */}
      <title>
        Actualités de l'association | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Découvrez nos actualités de l'Ecole des Chats du Pays Houdanais."
      />
      <PageHeader pageKey="actualites" />
      {loading ? (
        <Player
          autoplay
          loop
          animationData={loader}
          style={{ height: "300px", width: "300px" }}
          className="mx-auto"
        />
      ) : news.length > 0 ? (
        <ul className="flex flex-wrap gap-6 justify-center">
          {news.map((item) => (
            <CardNews
              key={item.news_id}
              item={item}
              isActive={activeId === item.news_id}
              onClick={() =>
                setActiveId(activeId === item.news_id ? null : item.news_id)
              }
            />
          ))}
        </ul>
      ) : (
        <p>Aucune actualité disponible.</p>
      )}
    </div>
  );
}
