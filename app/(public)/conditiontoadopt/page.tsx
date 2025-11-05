import ConditionToAdoption from "@/components/MadeInHand/Client/ConditionToAdoption/ConditionToAdoption";
import PageHeader from "@/components/MadeInHand/PageHeader";

export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <title>Conditions d'adoption | L'école des chats du Pays Houdanais</title>
      <meta
        name="description"
        content="Découvrez les conditions d'adoption à l'Ecole des Chats du Pays Houdanais et comment offrir un foyer aimant à nos chats recueillis."
      />
      <PageHeader pageKey="conditiontoadopt" />
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-900 shadow-lg rounded-lg mt-10">
        {/* <h1 className="text-3xl font-bold mb-4">Condition d'adoption</h1> */}
        <ConditionToAdoption />
      </div>
    </div>
  );
}
