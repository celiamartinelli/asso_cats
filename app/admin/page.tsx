import Link from "next/link";
import { getUnreadNotificationsCount } from "@/utils/actions";

export default async function AdminHomePage() {
  const notifications = await getUnreadNotificationsCount();

  const categories = [
    {
      name: "Adoptions",
      count: notifications.adoption,
      href: "/admin/contact-form/adoption",
    },
    {
      name: "Familles d'accueil",
      count: notifications.familleAccueil,
      href: "/admin/contact-form/host-family",
    },
    {
      name: "Dons matériels",
      count: notifications.donMateriel,
      href: "/admin/contact-form/material-donation",
    },
    {
      name: "Bénévoles",
      count: notifications.volunteer,
      href: "/admin/contact-form/volunteer",
    },
    {
      name: "Contacts",
      count: notifications.contact,
      href: "/admin/contact-form/contact",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Bienvenue dans l’admin
      </h1>

      <p className="text-gray-600 mb-6">
        Ici, tu peux voir tes notifications, gérer tes utilisateurs et suivre
        l’activité de ton application.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
        <p className="text-blue-700">
          Tu as{" "}
          <span className="font-semibold">
            {notifications.total} nouvelle
            {notifications.total > 1 ? "s" : ""} notification
            {notifications.total > 1 ? "s" : ""}
          </span>{" "}
          à consulter.
        </p>
      </div>

      <div className="space-y-3">
        {categories
          .filter((category) => category.count > 0)
          .map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-800">{category.name}</span>

              <span className="bg-blue-600 text-white text-sm font-semibold rounded-full min-w-8 h-8 px-2 flex items-center justify-center">
                {category.count}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
