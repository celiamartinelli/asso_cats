export default function AdminHomePage() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Bienvenue dans l’admin
      </h1>

      <p className="text-gray-600 mb-6">
        Ici, tu peux voir tes notifications, gérer tes utilisateurs et suivre
        l’activité de ton application.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-blue-700">
          Tu as <span className="font-semibold">3 nouvelles notifications</span>{" "}
          à consulter.
        </p>
      </div>
    </div>
  );
}
