import Link from "next/link";

export default async function Index() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between pt-24 bg-lime-500">
        <div className="flex-col mb-32  text-center  bg-lime-200 ">
          <div className="border-black border-2 rounded-lg p-4 w-full lg:col-span-2 mb-4">
            <h3>Prochaine dates importantes</h3>eé
            <ul>
              <li>1er Mai 2022 : Vide grenier</li>
              <li>1er Juin 2022 : Journée des chats</li>
              <li>1er Juillet 2022 : Journée des chiens</li>
            </ul>
          </div>
          <div className="flex border-black border-2 rounded-lg p-4 lg:col-span-2 w-full">
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
          </div>
        </div>
      </main>
    </>
  );
}
