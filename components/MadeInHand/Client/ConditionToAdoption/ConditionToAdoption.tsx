export default function ConditionToAdoption() {
  return (
    <div className="space-y-10 dark:bg-zinc-900">
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Adopter, un acte d’amour et de responsabilité
        </h2>
        <p className="mb-4 leading-relaxed">
          Chaque adoption est une chance offerte à un animal de trouver un foyer
          aimant. Derrière chaque chat confié par l’École des Chats du Pays
          Houdanais se cache une histoire : l’abandon, la maltraitance ou la
          rue. En ouvrant votre cœur et votre maison à l’un de nos protégés,
          vous participez à une belle mission : offrir une nouvelle vie, remplie
          de bonheur et de sécurité.
        </p>
        <p className="leading-relaxed">
          <strong>Mais adopter, c’est aussi un engagement à long terme.</strong>{" "}
          Un chat peut partager votre vie pendant 15 à 20 ans. Avant de prendre
          cette décision, assurez-vous d’être prêt à lui offrir stabilité,
          attention et amour au quotidien.
        </p>
      </section>

      <hr className="border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold mb-3">Conditions d’adoption</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>Être majeur(e).</li>
          <li>Disposer d’un foyer stable et sécurisé.</li>
          <li>Remplir correctement et honnêtement le formulaire d’adoption.</li>
          <li>
            Accepter une visite pré-adoption et, si nécessaire, une visite
            post-adoption.
          </li>
          <li>
            S’acquitter des frais d’adoption, couvrant les soins vétérinaires,
            la nourriture et les frais liés au sauvetage.
          </li>
          <li>
            S’engager à stériliser ou castrer l’animal avant ses 6 mois si cela
            n’a pas encore été fait. Un chèque de caution de 300 € sera restitué
            sur présentation d’une attestation vétérinaire.
          </li>
          <li>
            Donner régulièrement des nouvelles (bonnes ou mauvaises) sur la vie
            du chat après son adoption.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold mb-3">Critères d’adoption</h3>
        <ul className="space-y-3">
          <li>
            <strong>Engagement à vie :</strong> offrir un foyer stable et
            sécurisant pour toute la durée de vie du chat.
          </li>
          <li>
            <strong>Responsabilité vétérinaire :</strong> les frais d’adoption
            incluent une partie des soins vétérinaires (stérilisation,
            identification, antiparasitaires). Les soins futurs restent à votre
            charge.
          </li>
          <li>
            <strong>Stérilisation obligatoire :</strong> si le chat est trop
            jeune, cette opération devra être réalisée avant ses 7 mois.
          </li>
          <li>
            <strong>Justificatifs requis :</strong> une copie de votre pièce
            d’identité et un justificatif de domicile de moins de 3 mois.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold mb-3">
          Engagements de l’adoptant
        </h3>
        <ul className="space-y-2">
          <li>
            Offrir un cadre de vie adapté et sécurisé, sans laisser le chat
            divaguer à l’extérieur.
          </li>
          <li>
            Informer l’association de tout changement (adresse, téléphone, perte
            ou fugue).
          </li>
          <li>
            Ne pas céder l’animal sans l’accord préalable de l’association.
          </li>
          <li>
            Donner des nouvelles régulières accompagnées de photos, au moins
            tous les trois mois la première année.
          </li>
          <li>Accepter une visite post-adoption si nécessaire.</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      <section>
        <h3 className="text-2xl font-semibold mb-3">Conditions générales</h3>
        <ul className="space-y-2">
          <li>
            Les frais d’adoption sont <strong>non remboursables</strong>, même
            en cas de retour exceptionnel de l’animal.
          </li>
          <li>
            En cas de non-respect des engagements, l’association se réserve le
            droit de récupérer l’animal sans indemnisation.
          </li>
          <li>
            En cas de difficulté, l’adoptant s’engage à contacter l’association
            afin de trouver une solution adaptée.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      <section>
        <h2 className="text-3xl font-semibold mb-4">Processus d’adoption</h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Prise de contact :</strong> remplissez notre formulaire ou
            contactez-nous directement.
          </li>
          <li>
            <strong>Entretien :</strong> un échange permettra de discuter de
            votre projet d’adoption et de votre environnement.
          </li>
          <li>
            <strong>Rencontre :</strong> venez découvrir nos protégés et trouver
            celui qui vous correspond.
          </li>
          <li>
            <strong>Validation :</strong> signature du contrat et accueil de
            votre nouveau compagnon.
          </li>
        </ol>
      </section>
    </div>
  );
}
