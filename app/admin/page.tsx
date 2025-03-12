import { Plus } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import NavBarAdmin from "@/components/MadeInHand/Admin/NavBarAdmin";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";

import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import CatAction from "@/components/MadeInHand/Admin/Actions/Cat/CatAction";
import AdoptionContentCatGroup from "@/components/MadeInHand/Admin/Content/AdoptionContent/AdoptionContentCatGroup";

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
        <SidebarProvider>
          <div className="flex w-11/12 mx-auto justify-center">
            <div className="w-11/12 border border-gray-300 rounded-md overflow-hidden relative">
              <AppSidebar />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
