import PageHeader from "@/components/MadeInHand/PageHeader";
import React from "react";

export default function LegalText() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <PageHeader pageKey="legaltext" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            🐾 Textes essentiels — protection & bien-être animal
          </h1>
          <p className="text-gray-600">
            Synthèse des principaux textes et articles utiles pour les
            associations de protection animale. Pour aller plus loin, les liens
            officiels sont fournis sous chaque fiche. 📄
          </p>
        </header>

        {/* Loi 2021-1539 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            🏛️ Loi n° 2021-1539 du 30 novembre 2021
          </h2>
          <p className="italic mb-2">
            Loi visant à lutter contre la maltraitance animale et conforter le
            lien entre les animaux et les humains ❤️🐶🐱
          </p>

          <h3 className="font-semibold">📌 Objet (résumé)</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>
              ⚠️ Renforcement des sanctions contre la maltraitance animale.
            </li>
            <li>
              📝 Certificat d'engagement et de connaissance pour l'acquisition
              d'animaux.
            </li>
            <li>
              📢 Encadrement des ventes, annonces et animaleries pour protéger
              les animaux.
            </li>
          </ul>

          <h3 className="font-semibold">⚖️ Impact pour les associations</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>✅ Sensibilisation renforcée des adoptants.</li>
            <li>
              🤝 Possibilité de contractualiser des actions avec commerces /
              animaleries.
            </li>
          </ul>

          <a
            href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071367/LEGISCTA000022200023/#LEGISCTA000022200247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 Lire la loi (Légifrance)
          </a>
        </section>

        {/* Code rural */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            🌿 Code rural et de la pêche maritime — Articles L214-1 à L214-23
          </h2>

          <h3 className="font-semibold">📌 Objet (résumé)</h3>
          <p className="mb-2">
            Reconnaissance de la sensibilité de l'animal et encadrement des
            conditions de détention, vente et cession. 🐾
          </p>

          <h3 className="font-semibold">📜 Articles clés</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>
              💡 <strong>L214-1 :</strong> Tout animal étant un être sensible
              doit être placé dans des conditions compatibles avec ses besoins
              biologiques. 🐶🐱
            </li>
            <li>
              ❌ <strong>L214-3 :</strong> Interdiction des mauvais traitements
              envers les animaux.
            </li>
          </ul>

          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000022200245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 Lire L214-1 (Légifrance)
          </a>
        </section>

        {/* Code civil 515-14 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            📜 Code civil — Article 515-14
          </h2>
          <ul className="list-disc pl-6 mb-2">
            <li>
              💡 Reconnaissance de l’animal comme « un être vivant doué de
              sensibilité » 🐾
            </li>
            <li>
              ⚖️ Influence sur l'interprétation des règles de protection
              animale.
            </li>
          </ul>

          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030250342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 Lire l'article 515-14 (Légifrance)
          </a>
        </section>

        {/* Loi 1976 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            🌳 Loi n° 76-629 du 10 juillet 1976 — Protection de la nature
          </h2>
          <ul className="list-disc pl-6 mb-2">
            <li>🌿 Protection de la faune et de la flore.</li>
            <li>
              💡 Introduction de la notion de sensibilité animale dans le Code
              rural.
            </li>
            <li>
              📚 Encadrement de la protection de la nature et des espèces.
            </li>
          </ul>

          <a
            href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006068553"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 Texte officiel (Légifrance)
          </a>
        </section>

        {/* Code pénal */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            ⚖️ Code pénal — Article 521-1 (et suivants)
          </h2>
          <ul className="list-disc pl-6 mb-2">
            <li>
              ⛓️ Peines allant jusqu'à 3 ans d’emprisonnement et 45 000€
              d’amende.
            </li>
            <li>❌ Répression des sévices graves et abandons d’animaux.</li>
            <li>🐶🐱 Protection renforcée des animaux vulnérables.</li>
          </ul>

          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044394119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 Lire l'article 521-1 (Légifrance)
          </a>
        </section>

        {/* Certificat & identification */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            ℹ️ Certificat & identification
          </h2>
          <ul className="list-disc pl-6 mb-2">
            <li>
              📝 Certificat d'engagement et de connaissance pour tout animal.
            </li>
            <li>🆔 Identification obligatoire des chiens et chats.</li>
            <li>⚠️ Prévention des abandons et maltraitances.</li>
          </ul>

          <div className="flex flex-col gap-2">
            <a
              href="https://agriculture.gouv.fr/animaux-de-compagnie-equides-tout-savoir-sur-le-certificat-dengagement-et-de-connaissance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 Certificat d'engagement — Ministère de l'Agriculture
            </a>
            <a
              href="https://agriculture.gouv.fr/lidentification-des-animaux-de-compagnie-une-obligation-legale-qui-les-protege"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🆔 Identification des animaux — Ministère de l'Agriculture
            </a>
            <a
              href="https://www.service-public.fr/particuliers/vosdroits/F34922"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📝 Procédures pratiques pour un nouvel animal — Service-public
            </a>
          </div>
        </section>

        {/* Ressources utiles */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold mb-2">📚 Ressources utiles</h3>
          <ul className="list-disc pl-6">
            <li>
              ⚖️{" "}
              <a
                href="https://www.legifrance.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Légifrance — textes officiels
              </a>
            </li>
            <li>
              💡{" "}
              <a
                href="https://www.vie-publique.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Vie-publique — fiches synthétiques
              </a>
            </li>
            <li>
              🆔{" "}
              <a
                href="https://www.i-cad.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                I-CAD — identification et bases de données
              </a>
            </li>
            <li>
              🌾{" "}
              <a
                href="https://agriculture.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ministère de l'Agriculture — pages dédiées aux animaux de
                compagnie
              </a>
            </li>
          </ul>
        </section>

        <footer className="mt-8 text-sm text-gray-600">
          <p className="mb-2">
            ⚠️ Synthèse à titre informatif — pour un conseil juridique précis,
            consultez un avocat ou les services officiels. Textes officiels
            consultés et vérifiés.
          </p>
        </footer>
      </div>
    </div>
  );
}
