import PageHeader from "@/components/MadeInHand/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Download } from "lucide-react";

export default function LegalDocumentsPage() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <title>
        Documents Légaux & Réduction Fiscale | L'école des chats du Pays
        Houdanais
      </title>
      <meta
        name="description"
        content="Découvrez nos documents légaux et les informations sur la réduction fiscale pour vos dons à l'Ecole des Chats du Pays Houdanais."
      />
      <PageHeader pageKey="legaldocuments" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        {/* === DOCUMENTS LÉGAUX === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Documents légaux
          </h2>
          <p>
            Notre association,{" "}
            <strong>L'École des Chats du Pays Houdanais</strong>, agit en toute
            transparence et respecte la réglementation en vigueur. Vous pouvez
            consulter ou demander les principaux documents officiels suivants :
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Statuts de l’association</li>
            <li>Règlement intérieur</li>
            <li>Rapports d’activités</li>
            <li>Bilan financier annuel</li>
            <li>Déclaration en préfecture (numéro RNA)</li>
          </ul>

          <div className="mt-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-zinc-800 dark:border-zinc-600 p-4 rounded-md">
            <p className="text-sm text-gray-700 dark:text-zinc-300">
              Ces documents peuvent être consultés sur simple demande en nous
              contactant par e-mail ou directement à notre siège. Certains
              documents publics (statuts, rapports, bilans) pourront être mis en
              ligne ultérieurement pour plus de transparence.
            </p>
          </div>
        </section>

        {/* === RÉDUCTION FISCALE === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Réduction fiscale pour vos dons
          </h2>
          <p>
            En tant qu’association reconnue d’intérêt général,
            <strong> L'École des Chats du Pays Houdanais</strong> permet à ses
            donateurs de bénéficier d’une réduction d’impôt sur les dons
            effectués :
          </p>

          <div className="mt-4 bg-green-50 dark:bg-zinc-800 border-l-4 border-green-500 p-4 rounded-md">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Particuliers :</strong> 66% du montant du don déductible
                de l’impôt sur le revenu (dans la limite de 20% du revenu
                imposable).
              </li>
              <li>
                <strong>Entreprises :</strong> 60% du montant du don déductible
                de l’impôt sur les sociétés (dans la limite de 5‰ du chiffre
                d’affaires annuel).
              </li>
            </ul>
          </div>

          <p className="mt-4">
            Après chaque don, un <strong>reçu fiscal officiel</strong> vous est
            envoyé, conforme aux exigences de l’administration fiscale.
          </p>
        </section>

        {/* === REÇUS FISCAUX === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Comment obtenir un reçu fiscal ?
          </h2>
          <p>
            Pour recevoir votre reçu fiscal, merci de nous transmettre les
            informations suivantes :
            <em>nom, prénom, adresse postale et montant du don.</em>
            Vous pouvez nous contacter via :
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:ecoledeschatsdupayshoudanais@gmail.com"
                className="font-bold text-black hover:underline"
              >
                ecoledeschatsdupayshoudanais@gmail.com
              </a>
            </li>
            <li>
              <strong>Adresse postale :</strong> 69 grande rue, 78550 Houdan,
              France
            </li>
          </ul>
        </section>

        {/* === CONTACT === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact</h2>
          <p className="mb-4">
            Pour toute question relative aux documents légaux ou à la réduction
            fiscale, n’hésitez pas à nous contacter. Nous nous ferons un plaisir
            de vous répondre.
          </p>

          <Button asChild variant="default">
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
