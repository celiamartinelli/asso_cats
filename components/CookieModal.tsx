import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const CookieModal: React.FC<CookieModalProps> = ({
  isOpen,
  onClose,
  onAccept,
}) => {
  if (!isOpen) return null;
  return (
    <div className=" sm:bottom-4 sm:right-4 sm:max-w-lg sticky shadow-xl z-100 max-w-full bottom-0 right-0 sm:left-0 sm:w-full  rounded-tr-lg rounded-tl-lg sm:rounded-lg border border-gray-200 dark:border-zinc-800">
      <div className="p-4 bg-white rounded-lg shadow-md dark:bg-zinc-900 ">
        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-4">
            Utilisation des cookies 🍪
          </h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site. En continuant à naviguer sur ce site, vous acceptez notre
            utilisation des cookies.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="w-full" onClick={onAccept}>
            Accepter
          </Button>
          <Button className="w-full" variant="secondary" onClick={onClose}>
            Refuser
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <Link className="underline" href="/cookiespolicies">
            Politique de cookies
          </Link>
          <Link className="underline" href="/dataprotectionprocessing">
            Traitement & protection des données
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
