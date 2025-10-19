import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialNetwork() {
  return (
    <div>
      <div className="flex gap-4 ">
        <Link
          className="hover:bg-accent hover:rounded-lg p-2 hover:text-black"
          href="https://www.facebook.com/profile.php?id=61561436403399&locale=fr_FR"
          target="_blank"
        >
          <Facebook size={28} />
        </Link>
        <Link
          href="https://www.instagram.com/ecoledeschatsdupayshoudanais/"
          target="_blank"
          className="hover:bg-accent hover:rounded-lg p-2 hover:text-black"
        >
          <Instagram size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/association-l-%C3%A9cole-des-chats-du-pays-houdanais/?viewAsMember=true"
          className="hover:bg-accent hover:rounded-lg p-2 hover:text-black"
          target="_blank"
        >
          <Linkedin size={28} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
