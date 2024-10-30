import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
import Link from "next/link";

export default function NavBarAdmin() {
  return (
    <div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>
              {" "}
              <Image
                src="/logo.png"
                alt="Logo Association de l'école des chats du pays houdanais"
                width={40}
                height={40}
                priority
              />
            </Link>
            <h1>Ecole des chats du pays Houdanais</h1>
            {/* <div className="flex items-center gap-2">
                      <DeployButton />
                    </div> */}
          </div>
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
      </nav>
    </div>
  );
}
