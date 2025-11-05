import PageHeader from "@/components/MadeInHand/PageHeader";

export default function CookiesPolicies() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <title>Cookies | L'école des chats du Pays Houdanais</title>
      <meta
        name="description"
        content="Découvrez notre politique en matière de cookies à l'Ecole des Chats du Pays Houdanais. Apprenez à mieux comprendre et gérer vos préférences en matière de cookies."
      />
      <PageHeader pageKey="cookiespolicies" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        {/* === Qu'est-ce qu'un cookie ? === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🍪 Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors
            de la visite d'un site web. Il permet de stocker des informations
            temporaires sur votre navigation.
          </p>
        </section>

        {/* === Pourquoi utilisons-nous des cookies ? === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🎯 Pourquoi utilisons-nous des cookies ?
          </h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience
            utilisateur, analyser le trafic sur notre site et vous proposer du
            contenu adapté.
          </p>
        </section>

        {/* === Types de cookies utilisés === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🧩 Types de cookies utilisés
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies nécessaires :</strong> indispensables au bon
              fonctionnement du site.
            </li>
            <li>
              <strong>Cookies analytiques :</strong> permettent de suivre les
              performances du site.
            </li>
            <li>
              <strong>Cookies publicitaires :</strong> utilisés pour
              personnaliser les annonces.
            </li>
          </ul>
        </section>

        {/* === Gérer vos préférences === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            ⚙️ Gérer vos préférences
          </h2>
          <p>
            Vous pouvez configurer votre navigateur pour accepter ou refuser les
            cookies. Vous pouvez également supprimer les cookies stockés sur
            votre appareil.
          </p>
        </section>

        {/* === Contact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            📬 Contact
          </h2>
          <p className="mb-2">
            Pour toute question concernant notre politique de cookies,
            contactez-nous à :
          </p>
          <a
            href="mailto:ecoledeschatsdupayshoudanais@gmail.com"
            className="block sm:inline font-bold text-black hover:underline dark:text-zinc-900 dark:bg-zinc-100 dark:rounded-md dark:p-2 break-words whitespace-normal"
          >
            ecoledeschatsdupayshoudanais@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
