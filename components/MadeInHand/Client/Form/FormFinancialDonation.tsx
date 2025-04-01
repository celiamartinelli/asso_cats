export default function FormFinancialDonation() {
  return (
    <div>
      <div className="p-6 bg-gray-100 dark:bg-zinc-950">
        <h1 className="text-3xl font-bold mb-4">Donation</h1>
        <iframe
          id="haWidget"
          allowTransparency={true}
          scrolling="auto"
          src="https://www.helloasso.com/associations/ecole-des-chats-du-pays-houdanais/formulaires/1/widget"
          className="w-full h-[800px]"
          title="Formulaire de donation HelloAsso"
        />
      </div>
    </div>
  );
}
