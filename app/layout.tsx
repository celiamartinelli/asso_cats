import { GeistSans } from "geist/font/sans";
import { Dosis } from "next/font/google";
import { Thasadith } from "next/font/google";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/MadeInHand/Footer";
import Header from "@/components/MadeInHand/Header";
import GoogleAnalytics from "@/components/MadeInHand/GoogleAnalytics";
import AnalyticsListener from "@/components/MadeInHand/AnalyticsListener";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "École des Chats du Pays Houdanais",
  description: "Website of the Houdanais Country Cat School association",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png", // Icône pour iOS
  },
};

const thasadith = Thasadith({
  subsets: ["latin"],
  weight: ["400", "700"], // Poids disponibles
  variable: "--font-thasadith", // Variable CSS pour Tailwind
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Ajoute les poids nécessaires
  variable: "--font-dosis", // Définit une variable CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${thasadith.variable} ${dosis.variable} `}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen flex flex-col ">
            <div>{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
        <AnalyticsListener />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
