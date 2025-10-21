// import Link from "next/link";

// export default async function Index() {
//   return (
//     <>
//       <main className="flex-1 flex flex-col gap-6 px-4">
//         <div className="flex justify-center items-center">
//           <div>
//             <Link
//               href="https://www.facebook.com/profile.php?id=61561436403399&locale=fr_FR"
//               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <h2 className="mb-3 text-2xl font-semibold">
//                 Facebook{" "}
//                 <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                   -&gt;
//                 </span>
//               </h2>
//               <p className="m-0 max-w-[30ch] text-sm opacity-50">
//                 Découvrer notre page facebook
//               </p>
//             </Link>
//           </div>
//           <div>
//             <Link
//               href="https://www.helloasso.com/associations/ecole-des-chats-du-pays-houdanais/formulaires/1"
//               className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <h2 className="mb-3 text-2xl font-semibold">
//                 Hello Asso{" "}
//                 <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                   -&gt;
//                 </span>
//               </h2>
//               <p className="m-0 max-w-[30ch] text-sm opacity-50">
//                 Merci pour eux!
//               </p>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    window.location.href = "https://ton-site-vercel.vercel.app/";
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-2xl font-semibold mb-4">Redirection en cours...</h1>
      <p>
        Si rien ne se passe,{" "}
        <a
          href="https://ecole-des-chats.vercel.app/"
          className="underline text-blue-500"
        >
          clique ici
        </a>
        .
      </p>
    </main>
  );
}
