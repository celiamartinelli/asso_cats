import ConditionToAdoption from "@/components/MadeInHand/Client/ConditionToAdoption/ConditionToAdoption";

export default function page() {
  return (
    <div className="p-6 min-h-screen  bg-gray-100 dark:bg-black">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-4">Condition d'adoption</h1>
        <ConditionToAdoption />
      </div>
    </div>
  );
}
