"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getImportantDates } from "@/utils/actions";
import { Button } from "@/components/ui/button";

interface ImportantDate {
  calendar_id: string;
  date_start: string;
  date_end: string;
  subject: string;
  location_address: string;
  taught_name: string;
  title_event: string;
}

export default function Index() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between pt-24 ">
        <div className="flex-col mb-32  text-center  ">
          <div className="border-black border-y-2 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <h3>Prochaine dates importantes</h3>
            <ul className="flex justify-center">
              <li className="p-8 flex flex-col items-center">
                <p className="text-5xl dancing-script">16</p>
                <p className="text-xl opacity-70">Mai</p>
                <p className="opacity-50">Vide grenier</p>
              </li>
              <li className="p-8 flex flex-col items-center">
                <p className="text-5xl dancing-script">21</p>
                <p className="text-xl opacity-70">Juin</p>
                <p className="opacity-50">Collecte</p>
              </li>
              <li className="p-8 flex flex-col items-center">
                <p className="text-5xl dancing-script">04</p>
                <p className="text-xl opacity-70">Août</p>
                <p className="opacity-50">Collecte</p>
              </li>
            </ul>
            <Button type="button" className="mt-8">
              <Link href="/calendar">Voir toutes les dates</Link>
            </Button>
          </div>
          <div className="border-black border-y-2 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <h3>Sur Quel secteur on agit? et quel commune</h3>

            <Button type="button" className="mt-8">
              <Link href="/municipality">Voir la liste complète</Link>
            </Button>
          </div>
          <div className="border-black border-y-2 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
            <h3>Comment se déroule une adoption</h3>
            <p>fresque etape adoption</p>
            <Button type="button" className="mt-8">
              <Link href="/adoption">Voir les Amours</Link>
            </Button>
          </div>
          <div className="flex border-black border-y-2 py-14 p-4 w-full lg:col-span-2 mb-4 dark:border-white">
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
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
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
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Découvrer notre page Linkedin
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
