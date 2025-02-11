"use client";
import React, { useState } from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
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
import ContactContent from "./MadeInHand/Admin/Content/ContactContent";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ecole des chats du pauys Houdanais",
      logo: GalleryVerticalEnd,
      plan: "Association",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Formulaire de contact",
      // url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Adoption",
          content: <AdoptionContentCatGroup />,
        },
        {
          title: "FA",
          content: <HostFamilyContent />,
        },
        {
          title: "Don Matériel",
          content: <MaterielDonationContent />,
        },
        {
          title: "Contact",
          content: <ContactContent />,
        },
      ],
    },
    {
      title: "Actions",
      icon: Bot,
      items: [
        {
          title: "Chat",
          content: <div>Contenu pour Chat</div>,
        },
        {
          title: "Article",
          content: <div>Contenu pour Article</div>,
        },
        {
          title: "Ville",
          content: <div>Contenu pour Ville</div>,
        },
        {
          title: "Evenements",
          content: <div>Contenu pour Evenements</div>,
        },
      ],
    },
  ],
  projects: [
    // {
    //   name: "Design Engineering",
    //   url: "#",
    //   icon: Frame,
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);

  const handleItemClick = (content: React.ReactNode) => {
    setSelectedContent(content);
  };
  return (
    <div className="flex h-full">
      <Sidebar collapsible="none" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} onItemClick={handleItemClick} />
          <NavProjects projects={data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <div className="flex-1 p-4">{selectedContent}</div>
    </div>
  );
}
