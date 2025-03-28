"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getImportantDates, getLatestNews } from "@/utils/actions";
import ButtonCookiesSession from "@/components/ButtonCookiesSession";
import CardNews from "@/components/MadeInHand/Client/Card/CardNews";

interface ImportantDate {
  calendar_id: string;
  date_start: string;
  date_end: string;
  subject: string;
  location_address: string;
  taught_name: string;
  title_event: string;
}

interface News {
  news_id: string;
  title: string;
  body: string;
  created_at: string;
  news_url_img: string;
}

export default function Index() {
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([]);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true); // Commence le chargement
        const dates = await getImportantDates();
        setImportantDates(dates);
      } catch (error) {
        console.error("Erreur lors du chargement des dates :", error);
      } finally {
        setLoading(false); // Arrête le chargement
      }
    }
    fetchDates();
  }, []);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true); // Commence le chargement
        const news = await getLatestNews();
        setLatestNews(news);
      } catch (error) {
        console.error("Erreur lors du chargement des news :", error);
      } finally {
        setLoading(false); // Arrête le chargement
      }
    }
    fetchNews();
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between  ">
        <div className="flex-col text-center  ">
          <ButtonCookiesSession />
          <div
            className="text-white border-gray-600 w-full flex flex-col justify-center items-center lg:col-span-2 dark:border-white min-h-screen 
  bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/bg.jpeg')]"
          >
            <h2 className="text-6xl">L'École des chats du pays Houdanais</h2>
            <h3 className="text-3xl my-14 font-dosis">
              Association à but non lucratif
            </h3>
            <h4 className="font-bold text-6xl my-4 space-y-2.5">0678564738</h4>
            <div className="flex gap-8">
              <Button
                type="button"
                className="mt-8 text-black"
                variant="outline"
              >
                <Link href="/about">En savoir plus</Link>
              </Button>
              <Button type="button" className="mt-8">
                <Link href="/adoption">Adopter un chat</Link>
              </Button>
            </div>
          </div>
          <div className="border-gray-600 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white min-h-screen">
            <h3>Les dernières actualités</h3>
            {loading ? (
              <p>Chargement des actualités...</p>
            ) : (
              <ul className="flex justify-center items-center w-full gap-10 ">
                {latestNews.length > 0 ? (
                  latestNews.map((news) => (
                    <CardNews
                      key={news.news_id}
                      item={news}
                      isActive={activeId === news.news_id}
                      onClick={() =>
                        setActiveId(
                          activeId === news.news_id ? null : news.news_id
                        )
                      }
                    />
                  ))
                ) : (
                  <li>Aucun évenement à venir.</li>
                )}
              </ul>
            )}
          </div>
          <div className="border-gray-600 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white flex flex-col items-center">
            <h3>Prochaine dates importantes</h3>
            {loading ? (
              <p>Chargement des dates...</p>
            ) : (
              <ul className="flex justify-center w-2/3 items-center flex-wrap ">
                {importantDates.length > 0 ? (
                  importantDates.map((date) => (
                    <li
                      key={date.calendar_id}
                      className="p-8 flex flex-col items-center w-1/4 h-48 border border-2-gray-500 rounded-lg m-4"
                    >
                      <p className="text-5xl dancing-script">
                        {new Date(date.date_start).getDate()}
                      </p>
                      <p className="text-xl text-gray-700">
                        {new Date(date.date_start).toLocaleString("fr-FR", {
                          month: "long",
                        })}
                      </p>
                      <p className="text-gray-500">{date.title_event}</p>
                    </li>
                  ))
                ) : (
                  <li>Aucun évenement à venir.</li>
                )}
              </ul>
            )}

            <Button type="button" className="mt-8">
              <Link href="/calendar">Voir toutes les dates</Link>
            </Button>
          </div>
          <div className="border-gray-600 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <h3>Sur Quel secteur on agit? et quel commune</h3>

            <Button type="button" className="mt-8">
              <Link href="/municipality">Voir la liste complète</Link>
            </Button>
          </div>
          <div className="border-gray-600 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <h3>Comment se déroule une adoption</h3>
            <p>fresque etape adoption</p>
            <Button type="button" className="mt-8">
              <Link href="/adoption">Voir les Amours</Link>
            </Button>
          </div>
          <div className="flex border-gray-600 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <Link
              href="https://www.facebook.com/profile.php?id=61561436403399&locale=fr_FR"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Facebook{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                Découvrer notre page facebook
              </p>
            </Link>

            <Link
              href="https://www.helloasso.com/associations/ecole-des-chats-du-pays-houdanais/formulaires/1"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Hello Asso{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                Merci pour eux!
              </p>
            </Link>
            <Link
              href="https://www.instagram.com/ecoledeschats/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Instagram{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                Découvrer notre Instagram
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/groups/13126906/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Linkedin{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                Découvrer notre page Linkedin
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
