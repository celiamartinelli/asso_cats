import Page from "@/app/(public)/adoption/page";
import PageHeader from "../../PageHeader";

export default function FormFinancialDonation() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-zinc-950 w-full">
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
