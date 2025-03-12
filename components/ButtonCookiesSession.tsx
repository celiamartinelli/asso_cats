"use client";

import React, { useState, useEffect } from "react";
import CookieModal from "./CookieModal";

export default function ButtonCookiesSession() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Vérifier si le cookie existe
  useEffect(() => {
    const cookieAccepted = document.cookie.includes(
      "CookieSession=CookieSessionValue"
    );
    if (!cookieAccepted) {
      setIsModalOpen(true);
    }
  }, []);

  // Créer un cookie de session
  const handleCreateCookies = async () => {
    try {
      const response = await fetch("/api/cookieSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookieName: "CookieSession",
          cookieValue: "CookieSessionValue",
        }),
      });

      if (response.ok) {
        document.cookie =
          "CookieSession=CookieSessionValue; Path=/; Max-Age=31536000";
        console.log("cookie", document.cookie);
        // alert("Session cookie créée avec succès");
      } else {
        alert("Échec de la création de la session cookie");
      }
    } catch (error) {
      console.error("Erreur lors de la création de la session cookie :", error);
      alert("Erreur lors de la création de la session cookie");
    }
  };

  const handleAccept = () => {
    handleCreateCookies();
    setIsModalOpen(false);
  };

  const handleReject = () => {
    // alert("Vous avez refusé l'utilisation des cookies");
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4">
      <CookieModal
        isOpen={isModalOpen}
        onClose={handleReject}
        onAccept={handleAccept}
      />
    </div>
  );
}
