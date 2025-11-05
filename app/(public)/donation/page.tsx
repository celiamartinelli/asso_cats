import PageHeader from "@/components/MadeInHand/PageHeader";

export default function Donation() {
  return (
    <div className="p-6  bg-gray-100 dark:bg-black">
      <title>Faire un Don | L'école des chats du Pays Houdanais</title>
      <meta
        name="description"
        content="Faites un don à l'Ecole des Chats du Pays Houdanais et contribuez à la protection et au bien-être des chats errants."
      />
      <PageHeader pageKey="donation" />
      <iframe
        id="haWidget"
        allowTransparency={true}
        scrolling="auto"
        src="https://www.helloasso.com/associations/ecole-des-chats-du-pays-houdanais/formulaires/1/widget"
        className="w-full h-[800px]"
        title="Formulaire de donation HelloAsso"
      />
    </div>
  );
}
