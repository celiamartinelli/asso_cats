import PageHeader from "@/components/MadeInHand/PageHeader";

export default function DataProtectionProcessing() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <title>
        Protection des données | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Découvrez notre politique de protection des données à l'Ecole des Chats du Pays Houdanais. Apprenez à mieux comprendre et gérer vos préférences en matière de données."
      />
      <PageHeader pageKey="dataprotectionprocessing" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        {/* === Collecte des données personnelles === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🧾 Collecte des données personnelles
          </h2>
          <p>
            Nous collectons certaines informations personnelles afin d’assurer
            le bon fonctionnement du site et des services proposés, notamment
            dans le cadre des adoptions et de la gestion des adhésions.
          </p>
        </section>

        {/* === Utilisation des données === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🎯 Utilisation des données
          </h2>
          <p>
            Les données collectées sont utilisées exclusivement pour les
            finalités mentionnées, telles que la gestion administrative, la
            communication avec les adoptants et bénévoles, et le suivi des
            activités de l’association.
          </p>
        </section>

        {/* === Protection des données === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🔒 Protection des données
          </h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles nécessaires pour garantir la sécurité, la
            confidentialité et l’intégrité de vos informations personnelles.
          </p>
        </section>

        {/* === Droits des utilisateurs === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            👤 Droits des utilisateurs
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d’un droit d’accès, de rectification, de
            suppression et d’opposition concernant vos données personnelles.
            Vous pouvez également demander la limitation ou la portabilité de
            vos données.
          </p>
        </section>

        {/* === Cookies === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            🍪 Cookies
          </h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience
            utilisateur. Vous pouvez à tout moment gérer ou désactiver les
            cookies dans les paramètres de votre navigateur. Pour en savoir
            plus, consultez notre{" "}
            <a
              href="/cookiespolicies"
              className="block sm:inline font-bold text-black hover:underline dark:text-zinc-900 dark:bg-zinc-100 dark:rounded-md dark:p-2 break-words whitespace-normal"
            >
              politique de cookies
            </a>
            .
          </p>
        </section>

        {/* === Contact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            📬 Contact
          </h2>
          <p>
            Pour toute demande relative à vos données personnelles, vous pouvez
            nous écrire à l’adresse suivante :
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
