"use client";
import React, { useState } from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LetterText,
  LetterTextIcon,
  Mail,
  MailCheckIcon,
  MailMinus,
  MailOpenIcon,
  MailPlusIcon,
  MailsIcon,
  MailWarningIcon,
  Map,
  PencilIcon,
  PieChart,
  Plus,
  Settings2,
  SquareTerminal,
  Text,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import AdoptionContentCatGroup from "./MadeInHand/Admin/Content/AdoptionContent/AdoptionContentCatGroup";
import HostFamilyContent from "./MadeInHand/Admin/Content/HostFamilyContent";
import MaterielDonationContent from "./MadeInHand/Admin/Content/MaterielDonationContent";
import CatAction from "./MadeInHand/Admin/Actions/Cat/CatAction";
import AdviceAction from "./MadeInHand/Admin/Actions/Advice/AdviceAction";
import TownAction from "./MadeInHand/Admin/Actions/Town/TownAction";
import EventsAction from "./MadeInHand/Admin/Actions/Events/EventsAction";
import { Button } from "react-day-picker";
import NewsAction from "./MadeInHand/Admin/Actions/News/NewsAction";
import VolunteerGroup from "./MadeInHand/Admin/Content/VolunteerContent/VolunteerGroup";
import ContactGroup from "./MadeInHand/Admin/Content/ContactContent/ContactGroup";
import CatActionUpdate from "./MadeInHand/Admin/Actions/Cat/CatActionUpdate";
import AdviceActionUpdate from "./MadeInHand/Admin/Actions/Advice/AdviceActionUpdate";
import TownActionUpdate from "./MadeInHand/Admin/Actions/Town/TownActionUpdate";
import EventsActionUpdate from "./MadeInHand/Admin/Actions/Events/EventsActionUpdate";
import NewsActionUpdate from "./MadeInHand/Admin/Actions/News/NewsActionUpdate";
import { url } from "inspector";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    // avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ecole des chats du pays Houdanais",
      logo: GalleryVerticalEnd,
      plan: "Association",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Formulaire de contact",
      icon: Mail,
      isActive: true,
      items: [
        {
          title: "Adoption",
          // content: <AdoptionContentCatGroup />,
          href: "/admin/contactform/adoption",
        },
        {
          title: "FA",
          // content: <HostFamilyContent />,
          href: "/admin/contactform/hostfamily",
        },
        // {
        //   title: "Don Matériel",
        //   content: <MaterielDonationContent />,
        // },
        // {
        //   title: "Bénévole",
        //   content: <VolunteerGroup />,
        // },
        // {
        //   title: "Contact",
        //   content: <ContactGroup />,
        // },
      ],
    },
    {
      title: "Ajouter",
      icon: Plus,
      items: [
        {
          title: "Chat",
          // content: <CatAction />,
          href: "/admin/actions/cat",
        },
        // {
        //   title: "Article",
        //   content: <AdviceAction />,
        // },
        // {
        //   title: "Ville",
        //   content: <TownAction />,
        // },
        // {
        //   title: "Calendrier",
        //   content: <EventsAction />,
        // },
        // {
        //   title: "Actualités",
        //   content: <NewsAction />,
        // },
      ],
    },
    // {
    //   title: "Modifier/Supprimer",
    //   icon: PencilIcon,
    //   items: [
    //     {
    //       title: "Chat",
    //       content: <CatActionUpdate />,
    //     },
    //     {
    //       title: "Article",
    //       content: <AdviceActionUpdate />,
    //     },
    //     {
    //       title: "Ville",
    //       content: <TownActionUpdate />,
    //     },
    //     {
    //       title: "Calendrier",
    //       content: <EventsActionUpdate />,
    //     },
    //     {
    //       title: "Actualités",
    //       content: <NewsActionUpdate />,
    //     },
    //   ],
    // },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);

  const handleItemClick = (content: React.ReactNode) => {
    setSelectedContent(content);
  };
  return (
    <div className="flex h-full bg-red-500">
      <Sidebar collapsible="none" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} onItemClick={handleItemClick} />
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <div className="flex-1 p-4">
        {/* {selectedContent || <AdoptionContentCatGroup />} */}
      </div>
    </div>
  );
}
