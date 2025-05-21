"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getImportantDates,
  getLatestNews,
  getAdoptionSteps,
} from "@/utils/actions";
import ButtonCookiesSession from "@/components/ButtonCookiesSession";
import CardNews from "@/components/MadeInHand/Client/Card/CardNews";

import { AnimatePresence, motion } from "framer-motion";
import HomeHeroPhotoOld from "@/components/MadeInHand/HomeHeroPhotoOld";
import HOmeHeroPhotoNew from "@/components/MadeInHand/HOmeHeroPhotoNew";

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

type AdoptionStep = {
  adoption_step_id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  step_number: number;
};

export default function Index() {
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([]);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [steps, setSteps] = useState<AdoptionStep[]>([]);

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

  // lecture des étapes d'adoption
  useEffect(() => {
    async function fetchAdoptionSteps() {
      try {
        const adoptionSteps = await getAdoptionSteps();
        setSteps(adoptionSteps);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des étapes d'adoption :",
          error
        );
      }
    }
    fetchAdoptionSteps();
  }, []);
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between">
        <div className="flex-col text-center  ">
          <ButtonCookiesSession />
          <HOmeHeroPhotoNew />
          <div className="py-36 p-4 w-full lg:col-span-2 mb-4 dark:border-white flex flex-col justify-center items-center border-2-gray-700">
            <div className="flex justify-between items-center w-full mb-36 flex-col xl:flex-row gap-8">
              <h3 className="text-4xl md:text-6xl ml-4 font-thasadith w-1/2 tracking-wide">
                Les dernières actualités
              </h3>
              {loading ? (
                <p>Chargement des actualités...</p>
              ) : (
                <AnimatePresence mode="wait">
                  {activeId ? (
                    <CardNews
                      key={activeId}
                      item={
                        latestNews.find((news) => news.news_id === activeId)!
                      }
                      isActive={true}
                      onClick={() => setActiveId(null)}
                    />
                  ) : (
                    <motion.ul
                      key="list"
                      className="flex flex-col md:flex-row justify-center items-center w-full gap-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {latestNews.length > 0 ? (
                        latestNews.map((news) => (
                          <CardNews
                            key={news.news_id}
                            item={news}
                            isActive={false}
                            onClick={() => setActiveId(news.news_id)}
                          />
                        ))
                      ) : (
                        <li>Aucun événement à venir.</li>
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </div>
            <Button type="button" className="gap-4 mt-8">
              <Link href="/news">Voir toutes les actualités</Link>
            </Button>
          </div>
          <div className="py-36 p-4 w-full lg:col-span-2  bg-zinc-900 text-zinc-100 dark:border-zinc-400 flex flex-col items-center ">
            <h3 className="text-6xl mb-24 font-thasadith tracking-wide">
              Prochaine dates importantes
            </h3>
            {loading ? (
              <p>Chargement des dates...</p>
            ) : (
              <ul className="flex flex-col md:flex-row justify-center w-2/3 items-center md:flex-wrap ">
                {importantDates.length > 0 ? (
                  importantDates.map((date) => (
                    <li
                      key={date.calendar_id}
                      className="p-8 flex flex-col  items-center w-full md:w-1/4 h-48 border border-zinc-500 dark:border-zinc-400 rounded-lg m-4 bg-zinc-100 dark:bg-black"
                    >
                      <p className="text-5xl dancing-script text-black dark:text-zinc-200">
                        {new Date(date.date_start).getDate()}
                      </p>
                      <p className="text-xl text-zinc-700 dark:text-zinc-400 ">
                        {new Date(date.date_start).toLocaleString("fr-FR", {
                          month: "long",
                        })}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-200">
                        {date.title_event}
                      </p>
                    </li>
                  ))
                ) : (
                  <li>Aucun évenement à venir.</li>
                )}
              </ul>
            )}

            <Button
              type="button"
              className="mt-12 border border-white bg-transparent text-white hover:bg-white hover:text-black dark:border-zinc-400 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-black"
            >
              <Link href="/calendar">Voir toutes les dates</Link>
            </Button>
          </div>
          <div className=" py-36 w-full lg:col-span-2 mb-4 bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/bg.jpeg')]">
            <h3 className="text-4xl md:text-6xl mb-24 font-thasadith tracking-wide text-white p-4 dark:text-black">
              Sur Quel secteur agit-on? et quel commune
            </h3>

            <Button type="button" className="mt-8">
              <Link href="/municipality">Voir la liste complète</Link>
            </Button>
          </div>
          <div className="py-14 p-4 w-full lg:col-span-2 mb-4 ">
            <h3 className="text-6xl mb-24 font-thasadith tracking-wide">
              Comment se déroule une adoption
            </h3>
            {/* ici afficher les étapes d'adoption avec un map */}
            <div className="flex items-start flex-col md:flex-row">
              {steps.map((step) => (
                <div
                  key={step.adoption_step_id}
                  className="mb-12 w-full md:w-1/6 text-center items-start rounded-lg shadow-md border border-zinc-500 m-2 dark:bg-zinc-900 bg-white"
                >
                  <p className="text-xl dancing-script  dark:text-zinc-200  text-right mr-2">
                    {step.step_number}
                  </p>
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg mx-auto mb-3"
                    />
                  )}
                  <h4 className="text-xl mb-2 font-thasadith tracking-wide dark:text-zinc-200">
                    {step.title}
                  </h4>
                  <p className="mb-2 italic text-gray-500">{step.subtitle}</p>
                  {/* <p className="mb-4">{step.content}</p> */}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center">
              <Button type="button" className="mt-8" variant="link">
                <Link href="/howtoadopt">
                  En savoir plus sur la procédure d'adoption
                </Link>
              </Button>
              <Button type="button" className="mt-8">
                <Link href="/adoption">Voir les Amours</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-14 p-4 w-full justify-center">
            <Link
              href="https://www.facebook.com/profile.php?id=61561436403399&locale=fr_FR"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <h2 className="mb-3 text-2xl font-semibold ">
                  Facebook{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm text-gray-500 text-center">
                  Découvrer notre page facebook
                </p>
              </div>
            </Link>

            <Link
              href="https://www.helloasso.com/associations/ecole-des-chats-du-pays-houdanais/formulaires/1"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <h2 className="mb-3 text-2xl font-semibold">
                  Hello Asso{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                  Merci pour eux!
                </p>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/ecoledeschats/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <h2 className="mb-3 text-2xl font-semibold">
                  Instagram{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                  Découvrer notre Instagram
                </p>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/groups/13126906/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <h2 className="mb-3 text-2xl font-semibold">
                  Linkedin{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm text-gray-500">
                  Découvrer notre page Linkedin
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
