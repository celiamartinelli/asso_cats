import PageHeader from "@/components/MadeInHand/PageHeader";

export default function page() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <title>
        Accéder à vos données personnelles | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Apprenez comment accéder, modifier ou supprimer vos données personnelles détenues par l'Ecole des Chats du Pays Houdanais, conformément à la réglementation sur la protection des données."
      />
      <PageHeader pageKey="accessyourpersonaldata" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Demande d'accès aux données
          </h2>
          <p>
            Conformément à la réglementation en vigueur, vous avez le droit
            d'accéder aux données personnelles que nous possédons sur vous.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Comment faire votre demande ?
          </h2>
          <p>
            Pour exercer votre droit d'accès, vous pouvez nous contacter par
            email ou courrier postal en précisant votre demande.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Délai de traitement</h2>
          <p>
            Nous nous engageons à répondre à votre demande dans un délai d'un
            mois à compter de la réception de votre demande.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Modification ou suppression des données
          </h2>
          <p>
            Si vous souhaitez modifier ou supprimer certaines données vous
            concernant, veuillez nous en faire la demande.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question ou demande d'accès à vos données, contactez-nous
            à [Email].
          </p>
        </section>
      </div>
    </div>
  );
}
