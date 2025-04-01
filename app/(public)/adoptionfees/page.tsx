export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Les Frais d'adoption</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Frais d'Adoption
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Pourquoi des frais d’adoption ?
          </h2>
          <p>
            Adopter un chat est un engagement responsable. Nos frais d’adoption,
            d’un montant de <strong>150 euros</strong>, permettent de couvrir
            une partie des frais vétérinaires et de soins engagés pour chaque
            animal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Que couvrent ces frais ?
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Identification par puce électronique</li>
            <li>Vermifuge et traitement antiparasitaire</li>
            <li>Stérilisation/castration</li>
          </ul>
          <p className="mt-4">
            Ces soins assurent que nos chats sont en bonne santé et prêts à
            rejoindre leur nouvelle famille.
          </p>
        </section>

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

        <section className="mb-6">
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
