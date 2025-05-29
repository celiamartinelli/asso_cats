import PageHeader from "@/components/MadeInHand/PageHeader";

export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <PageHeader pageKey="dataprotectionprocessing" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Collecte des données personnelles
          </h2>
          <p>
            Nous collectons certaines informations personnelles pour le bon
            fonctionnement du site et des services proposés.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Utilisation des données
          </h2>
          <p>
            Les données collectées sont utilisées uniquement pour les finalités
            précisées, notamment pour la gestion des adhésions et des adoptions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Protection des données
          </h2>
          <p>
            Nous mettons en œuvre toutes les mesures de sécurité nécessaires
            pour garantir la protection de vos informations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Droits des utilisateurs
          </h2>
          <p>
            Conformément à la réglementation, vous avez le droit d'accéder, de
            rectifier et de supprimer vos données personnelles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer l'expérience utilisateur.
            Vous pouvez les gérer via les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute demande relative à vos données personnelles, vous pouvez
            nous contacter à{" "}
            <strong>ecoledeschatsdupayshoudanais@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
