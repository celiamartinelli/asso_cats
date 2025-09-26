import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import NavBarAdmin from "@/components/MadeInHand/Admin/NavBarAdmin";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Vérification utilisateur (auth)
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Navbar admin */}
      <NavBarAdmin />

      <SidebarProvider>
        <div className="flex flex-1 bg-white">
          {/* Sidebar */}
          <AppSidebar />

          {/* Contenu dynamique (route active) */}
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
