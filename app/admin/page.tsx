import NavBarAdmin from "@/components/MadeInHand/Admin/NavBarAdmin";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 ">
      <NavBarAdmin />
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          ICI on mettra le tableau de bord
        </div>
        <SidebarProvider>
          <div className="flex gap-4 bg-red-400 w-11/12 mx-auto justify-center">
            <div className="w-4/5 border border-gray-300 rounded-md overflow-hidden relative">
              <SidebarTrigger />
              <AppSidebar />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
