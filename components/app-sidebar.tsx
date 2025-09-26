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

// This is sample data.
const data = {
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  // teams: [
  //   {
  //     name: "Ecole des chats du pays Houdanais",
  //     logo: GalleryVerticalEnd,
  //     plan: "Association",
  //   },
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
  // ],
  navMain: [
    {
      title: "Formulaire de contact",
      icon: Mail,
      isActive: true,
      items: [
        {
          title: "Adoption",
          // content: <AdoptionContentCatGroup />,
          href: "/admin/contact-form/adoption",
        },
        {
          title: "FA",
          // content: <HostFamilyContent />,
          href: "/admin/contact-form/host-family",
        },
        {
          title: "Don Matériel",
          // content: <MaterielDonationContent />,
          href: "/admin/contact-form/material-donation",
        },
        {
          title: "Bénévole",
          // content: <VolunteerGroup />,
          href: "/admin/contact-form/volunteer",
        },
        {
          title: "Contact",
          // content: <ContactGroup />,
          href: "/admin/contact-form/contact",
        },
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
        {
          title: "Article",
          // content: <AdviceAction />,
          href: "/admin/actions/advice",
        },
        {
          title: "Ville",
          // content: <TownAction />,
          href: "/admin/actions/town",
        },
        {
          title: "Calendrier",
          // content: <EventsAction />,
          href: "/admin/actions/events",
        },
        {
          title: "Actualités",
          // content: <NewsAction />,
          href: "/admin/actions/news",
        },
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
    <div className="flex h-full">
      <Sidebar collapsible="none" {...props}>
        <SidebarHeader>
          {/* <TeamSwitcher teams={data.teams} /> */}
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} onItemClick={handleItemClick} />
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
