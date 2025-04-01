export default function About() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Comment nous aider</h1>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-zinc-900">
        <h1 className="text-3xl font-bold text-center mb-6">
          Comment Nous Aider
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Faire un Don</h2>
          <p>
            Les dons financiers nous permettent de couvrir les frais
            vétérinaires, l’alimentation et l’entretien des chats recueillis.
            Vous pouvez faire un don par :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Virement bancaire</li>
            <li>Chèque</li>
            <li>Plateformes de dons en ligne</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Devenir Famille d'Accueil
          </h2>
          <p>
            En tant que famille d’accueil, vous offrez un toit temporaire à un
            chat en attendant son adoption. Cela aide énormément notre
            association à sauver plus d’animaux.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Faire un Don Matériel</h2>
          <p>Nous avons toujours besoin de :</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Croquettes et pâtées</li>
            <li>Litières</li>
            <li>Jouets et accessoires</li>
            <li>Produits de soins</li>
          </ul>
          <p className="mt-4">
            Tout don matériel est une aide précieuse pour le bien-être de nos
            protégés.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Devenir Bénévole</h2>
          <p>
            Vous souhaitez donner de votre temps ? Nous avons besoin de
            bénévoles pour :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Soins et alimentation des chats</li>
            <li>Aide aux événements et collectes</li>
            <li>Diffusion et sensibilisation</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Partager et Sensibiliser
          </h2>
          <p>
            Un simple partage sur les réseaux sociaux peut aider un chat à
            trouver une famille. Suivez-nous et parlez de notre cause autour de
            vous !
          </p>
        </section>
      </div>
    </div>
  );
}
