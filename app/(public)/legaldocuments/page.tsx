import PageHeader from "@/components/MadeInHand/PageHeader";

export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <PageHeader pageKey="legaldocuments" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Documents Légaux</h2>
          <p>
            Notre association,{" "}
            <strong>L'École des Chats du Pays Houdanais</strong>, respecte les
            réglementations en vigueur et met à votre disposition les documents
            légaux nécessaires :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Statuts de l’association</li>
            <li>Règlement intérieur</li>
            <li>Rapports d’activités</li>
            <li>Bilan financier annuel</li>
            <li>Déclaration en préfecture</li>
          </ul>
          <p className="mt-4">
            Ces documents peuvent être consultés sur demande en nous contactant
            par email ou directement à notre siège.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Réduction Fiscale</h2>
          <p>
            En tant qu’association reconnue d’intérêt général, vos dons à{" "}
            <strong>L'École des Chats du Pays Houdanais</strong> ouvrent droit à
            une réduction fiscale :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Particuliers :</strong> 66% du montant de votre don est
              déductible de votre impôt sur le revenu, dans la limite de 20% du
              revenu imposable.
            </li>
            <li>
              <strong>Entreprises :</strong> 60% du montant du don est
              déductible de l’impôt sur les sociétés, dans la limite de 5‰ du
              chiffre d’affaires annuel.
            </li>
          </ul>
          <p className="mt-4">
            Après chaque don, nous vous envoyons un reçu fiscal vous permettant
            de bénéficier de cette réduction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Comment obtenir un reçu fiscal ?
          </h2>
          <p>
            Pour recevoir votre reçu fiscal, veuillez nous contacter en
            indiquant votre nom, prénom, adresse et montant du don. Vous pouvez
            nous joindre via :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email : [Email de contact]</li>
            <li>Téléphone : [Numéro de téléphone]</li>
            <li>Adresse postale : [Adresse de l’association]</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question relative aux documents légaux ou à la réduction
            fiscale, n’hésitez pas à nous contacter.
          </p>
        </section>
      </div>
    </div>
  );
}
