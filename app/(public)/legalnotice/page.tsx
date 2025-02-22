export default function LegalNotice() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Mentions légales</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Mentions Légales & Conditions Générales d'Utilisation
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Informations légales</h2>
          <p>
            <strong>Nom de l'association :</strong> L'École des Chats du Pays
            Houdanais
          </p>
          <p>
            <strong>Adresse du siège social :</strong> [Adresse complète]
          </p>
          <p>
            <strong>Numéro de téléphone :</strong> [Numéro]
          </p>
          <p>
            <strong>Adresse e-mail :</strong> [Email]
          </p>
          <p>
            <strong>Forme juridique :</strong> Association loi 1901
          </p>
          <p>
            <strong>Responsable de la publication :</strong> [Nom]
          </p>
          <p>
            <strong>Hébergeur :</strong> [Nom, Adresse, Téléphone]
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Conditions Générales d'Utilisation
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            1. Acceptation des conditions
          </h3>
          <p>En accédant et en utilisant ce site, vous acceptez ces CGU.</p>

          <h3 className="text-xl font-semibold mt-4">
            2. Propriété intellectuelle
          </h3>
          <p>
            Le contenu du site est protégé par les lois sur la propriété
            intellectuelle.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            3. Protection des données personnelles
          </h3>
          <p>
            Vous avez un droit d'accès, de rectification et de suppression de
            vos données personnelles.
          </p>

          <h3 className="text-xl font-semibold mt-4">4. Cookies</h3>
          <p>Ce site utilise des cookies pour améliorer votre expérience.</p>

          <h3 className="text-xl font-semibold mt-4">
            5. Limitation de responsabilité
          </h3>
          <p>
            L'École des Chats du Pays Houdanais ne garantit pas l'exactitude des
            informations présentes sur le site.
          </p>

          <h3 className="text-xl font-semibold mt-4">6. Liens externes</h3>
          <p>
            Le site peut contenir des liens vers des sites tiers dont nous ne
            sommes pas responsables.
          </p>

          <h3 className="text-xl font-semibold mt-4">7. Modifications</h3>
          <p>Nous pouvons modifier ces CGU à tout moment.</p>

          <h3 className="text-xl font-semibold mt-4">8. Droit applicable</h3>
          <p>Ces CGU sont régies par le droit français.</p>
        </section>
      </div>
    </div>
  );
}
