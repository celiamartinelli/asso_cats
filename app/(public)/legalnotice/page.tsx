import PageHeader from "@/components/MadeInHand/PageHeader";

export default function LegalNotice() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-black">
      <title>
        Mentions Légales & CGU | L'école des chats du Pays Houdanais
      </title>
      <meta
        name="description"
        content="Découvrez nos mentions légales et nos conditions générales d'utilisation pour l'Ecole des Chats du Pays Houdanais."
      />
      <PageHeader pageKey="legalnotice" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        {/* === INFORMATIONS LÉGALES === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Informations légales
          </h2>
          <p>
            <strong>Nom de l'association :</strong> L'École des Chats du Pays
            Houdanais
          </p>
          <p>
            <strong>Forme juridique :</strong> Association loi 1901 à but non
            lucratif
          </p>
          <p>
            <strong>Siège social :</strong> 69 grande rue, 78550 Houdan, France
          </p>
          <p>
            <strong>Téléphone :</strong> 06 08 87 28 94
          </p>
          <p>
            <strong>E-mail :</strong>{" "}
            <a
              href="mailto:ecoledeschatsdupayshoudanais@gmail.com"
              className="block sm:inline font-bold text-black hover:underline dark:text-zinc-900 dark:bg-zinc-100 dark:rounded-md dark:p-2 break-words whitespace-normal"
            >
              ecoledeschatsdupayshoudanais@gmail.com
            </a>
          </p>
          <p>
            <strong>Responsable de la publication :</strong> Célia Martinelli
          </p>
          <p>
            <strong>Conception et réalisation du site :</strong> L’École des
            Chats du Pays Houdanais
          </p>
        </section>

        {/* === CONDITIONS GÉNÉRALES D’UTILISATION === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Conditions Générales d’Utilisation (CGU)
          </h2>

          <h3 className="text-xl font-semibold mt-4">1. Objet</h3>
          <p>
            Les présentes conditions ont pour objet de définir les modalités
            d’accès et d’utilisation du site de l’École des Chats du Pays
            Houdanais. En utilisant ce site, vous acceptez pleinement et
            entièrement ces conditions.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            2. Propriété intellectuelle
          </h3>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos,
            vidéos, etc.) sont la propriété exclusive de l’association, sauf
            mention contraire. Toute reproduction, distribution ou utilisation
            sans autorisation préalable est strictement interdite.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            3. Protection des données personnelles
          </h3>
          <p>
            Les informations collectées via le formulaire de contact sont
            utilisées uniquement pour répondre à vos demandes. Conformément au
            RGPD et à la loi Informatique et Libertés, vous disposez d’un droit
            d’accès, de rectification et de suppression de vos données. Vous
            pouvez exercer ce droit en nous écrivant à l’adresse e-mail indiquée
            ci-dessus.
          </p>

          <h3 className="text-xl font-semibold mt-4">4. Cookies</h3>
          <p>
            Ce site peut utiliser des cookies à des fins de mesure d’audience ou
            pour améliorer l’expérience utilisateur. Vous pouvez configurer
            votre navigateur pour refuser les cookies.
          </p>

          <h3 className="text-xl font-semibold mt-4">5. Responsabilités</h3>
          <p>
            L’association s’efforce d’assurer l’exactitude des informations
            diffusées, mais ne peut en garantir la mise à jour permanente ni
            l’absence d’erreurs. L’École des Chats du Pays Houdanais ne saurait
            être tenue responsable de tout dommage résultant de l’utilisation du
            site.
          </p>

          <h3 className="text-xl font-semibold mt-4">6. Liens hypertextes</h3>
          <p>
            Le site peut contenir des liens vers d’autres sites. L’association
            n’exerce aucun contrôle sur ces sites externes et décline toute
            responsabilité quant à leur contenu.
          </p>

          <h3 className="text-xl font-semibold mt-4">7. Modifications</h3>
          <p>
            L’association se réserve le droit de modifier les présentes
            conditions à tout moment sans préavis. Les utilisateurs sont invités
            à les consulter régulièrement.
          </p>

          <h3 className="text-xl font-semibold mt-4">8. Droit applicable</h3>
          <p>
            Les présentes mentions légales et CGU sont régies par le droit
            français. En cas de litige, et à défaut d’accord amiable, les
            tribunaux compétents seront ceux du ressort de Versailles.
          </p>
        </section>
        {/* === HÉBERGEUR === */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Hébergeur
          </h2>

          <p>
            <strong>Raison sociale :</strong> Vercel Inc.
          </p>
          <p>
            <strong>Siège social :</strong>
            <br />
            340 S Lemon Ave #4133,
            <br />
            Walnut, CA 91789, United States
          </p>
          <p>
            <strong>Adresse postale (correspondance juridique) :</strong>
            <br />
            Vercel Legal Dept.
            <br />
            340 S Lemon Ave #4133,
            <br />
            Walnut, CA 91789, United States
          </p>
          <p>
            <strong>E-mails utiles :</strong>
            <br />
            <a
              className="font-bold text-black hover:underline dark:text-white"
              href="mailto:support@vercel.com"
            >
              support@vercel.com
            </a>{" "}
            (support général)
            <br />
            <a
              className="font-bold text-black hover:underline dark:text-white"
              href="mailto:abuse@vercel.com"
            >
              abuse@vercel.com
            </a>{" "}
            (signalement d’abus/fraude)
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black hover:underline dark:text-white"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        {/* === CRÉDITS === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Crédits</h2>
          <p>
            <strong>Photos :</strong> L’École des Chats du Pays Houdanais et
            contributeurs bénévoles.
          </p>
          <p>
            <strong>Icônes et ressources :</strong> Licences libres
            (Lucide-react, Lottie)
          </p>
          <p>
            <strong>Dernière mise à jour :</strong> Octobre 2025
          </p>
        </section>
      </div>
    </div>
  );
}
