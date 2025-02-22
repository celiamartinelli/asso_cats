export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Politiques des cookies</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Politique de Cookies 🍪
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors
            de la visite d'un site web. Il permet de stocker des informations
            temporaires sur votre navigation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Pourquoi utilisons-nous des cookies ?
          </h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience
            utilisateur, analyser le trafic sur notre site et vous proposer du
            contenu adapté.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Types de cookies utilisés
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Cookies nécessaires : indispensables au bon fonctionnement du
              site.
            </li>
            <li>
              Cookies analytiques : permettent de suivre les performances du
              site.
            </li>
            <li>
              Cookies publicitaires : utilisés pour personnaliser les annonces.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Gérer vos préférences</h2>
          <p>
            Vous pouvez configurer votre navigateur pour accepter ou refuser les
            cookies. Vous pouvez également supprimer les cookies stockés sur
            votre appareil.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question concernant notre politique de cookies,
            contactez-nous à [Email].
          </p>
        </section>
      </div>
    </div>
  );
}
