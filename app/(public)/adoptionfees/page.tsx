import PageHeader from "@/components/MadeInHand/PageHeader";

export default function AdoptionFeesPage() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <PageHeader pageKey="adoptionfees" />
      <div className="max-w-4xl mx-auto p-6 bg-white  dark:bg-zinc-900 shadow-lg rounded-2xl mt-10 space-y-10">
        {/* Pourquoi des frais */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            💚 Pourquoi des frais d’adoption ?
          </h2>
          <p className="leading-relaxed">
            Adopter un chat est un engagement responsable. Les frais d’adoption
            permettent de couvrir une partie des coûts vétérinaires,
            alimentaires et de soins engagés pour chaque animal recueilli par
            notre association.
          </p>
        </section>

        <hr className="border-gray-300" />

        {/* Que couvrent ces frais */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            🩺 Que couvrent ces frais ?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Identification par puce électronique</li>
            <li>Vermifuge et traitement antiparasitaire</li>
            <li>Stérilisation / castration</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Ces soins garantissent que chaque chat est en bonne santé et prêt à
            rejoindre sa nouvelle famille dans les meilleures conditions.
          </p>
        </section>

        <hr className="border-gray-300" />

        {/* Frais spécifiques pour les chatons */}
        <section className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl dark:bg-yellow-950 dark:bg-opacity-50 dark:border-yellow-700">
          <h2 className="text-2xl font-semibold mb-2">
            🐾 Adoption d’un chaton
          </h2>
          <p className="leading-relaxed dark:text-gray-200">
            Lorsqu’il s’agit d’un chaton non encore stérilisé, une{" "}
            <strong>caution de 300 €</strong> (par chèque) est demandée. Cette
            caution est restituée dès présentation d’une attestation de
            stérilisation délivrée par votre vétérinaire, et ce{" "}
            <strong>avant les 7 mois du chaton</strong>.
          </p>
        </section>

        <hr className="border-gray-300" />

        {/* Cartes des frais */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">💰 Frais d’adoption</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Carte 1 chat */}
            <div className="p-6 bg-gray-50 border border-gray-200 dark:bg-lime-950 dark:bg-opacity-50 dark:border-lime-700 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-1">🐈 1 chat</h3>
              <p className="text-3xl font-bold text-green-600">150 €</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Chaton ou adulte
              </p>
            </div>

            {/* Carte 2 chats */}
            <div className="p-6 bg-gray-50 border border-gray-200 dark:bg-lime-950 dark:bg-opacity-50 dark:border-lime-700 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-1">
                🐈‍⬛ Double adoption 🐈
              </h3>
              <p className="text-3xl font-bold text-green-600">250 €</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                pour deux chats adoptés ensemble
              </p>
            </div>

            {/* Carte Chat SOS */}
            <div className="p-6 bg-gray-50 border border-gray-200 dark:bg-lime-950 dark:bg-opacity-50 dark:border-lime-700 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-1">💔 Chats SOS</h3>
              <p className="text-3xl font-bold text-green-600">90 €</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Chats âgés, abandonnés ou issus de maltraitance.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* Pourquoi payer */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            🎯 Pourquoi payer ces frais ?
          </h2>
          <p className="leading-relaxed">
            Ces frais nous permettent de poursuivre notre mission : recueillir,
            soigner et replacer nos chats dans des foyers aimants et
            responsables. Ils contribuent également à la pérennité de
            l’association et au bien-être futur d’autres animaux dans le besoin.
          </p>
        </section>

        <hr className="border-gray-300" />

        {/* Modalités de paiement */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            💳 Comment régler les frais d’adoption ?
          </h2>
          <p>
            Le paiement des frais se fait lors de la finalisation de l’adoption.
            Nous acceptons :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Espèces</li>
            <li>Chèques</li>
            <li>Virement bancaire</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Pour toute question ou demande particulière, n’hésitez pas à{" "}
            <strong>nous contacter</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
