import PageHeader from "@/components/MadeInHand/PageHeader";

export default function page() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <PageHeader pageKey="adoptionfees" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        {/* Pourquoi des frais */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Pourquoi des frais d’adoption ?
          </h2>
          <p>
            Adopter un chat est un engagement responsable. Nos frais d’adoption
            permettent de couvrir une partie des frais vétérinaires et de soins
            engagés pour chaque animal.
          </p>
        </section>

        {/* Que couvrent ces frais */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Que couvrent ces frais ?
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Identification par puce électronique</li>
            <li>Vermifuge et traitement antiparasitaire</li>
            <li>Stérilisation / castration</li>
          </ul>
          <p className="mt-4">
            Ces soins assurent que nos chats sont en bonne santé et prêts à
            rejoindre leur nouvelle famille.
          </p>
        </section>

        {/* Frais spécifiques pour les chatons */}
        <section className="mb-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Adoption d’un chaton</h2>
          <p>
            Lorsqu’il s’agit d’un chaton non encore stérilisé, une{" "}
            <strong>caution de 300 €</strong> par chèque est demandée. Cette
            caution est restituée dès présentation de l’attestation de
            stérilisation effectuée par un vétérinaire, et ce{" "}
            <strong>avant les 7 mois du chaton</strong>.
          </p>
        </section>

        {/* Cartes des frais */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Frais d’adoption</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Carte 1 chat */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">🐈 1 chat</h3>
              <p className="text-2xl font-bold text-green-600">150 €</p>
              <p className="text-sm text-gray-500 mt-2">Chaton ou adulte</p>
            </div>

            {/* Carte 2 chats */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">
                🐈‍⬛ Double adoption 🐈
              </h3>
              <p className="text-2xl font-bold text-green-600">250 €</p>
              <p className="text-sm text-gray-500 mt-2">
                (si 2 chats adoptés ensemble)
              </p>
            </div>

            {/* Carte Chat SOS */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2"> 🐾 Chats SOS</h3>
              <p className="text-2xl font-bold text-green-600">90 €</p>
              <p className="text-sm text-gray-500 mt-2">
                (si pas de gros frais vétérinaires) en général de vieux chats
                abandonnée ... ou issue de maltraitance
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi payer */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Pourquoi payer ces frais ?
          </h2>
          <p>
            Ces frais nous permettent de continuer notre mission : recueillir,
            soigner et placer nos chats dans des foyers responsables. Ils
            contribuent également à assurer la pérennité de notre association.
          </p>
        </section>

        {/* Modalités de paiement */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Comment régler les frais d’adoption ?
          </h2>
          <p>
            Les frais d’adoption sont à régler lors de la finalisation de
            l’adoption. Nous acceptons :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Espèces</li>
            <li>Chèques</li>
            <li>Virement bancaire</li>
          </ul>
          <p className="mt-4">Pour plus d’informations, contactez-nous.</p>
        </section>
      </div>
    </div>
  );
}
