"use client";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCatById } from "../../../../utils/actions";
import { Button } from "@/components/ui/button";
import FormBecomFosterFamily from "../Form/FormBecomeFosterFamily";
import ModalToValidation from "./ModalToValidation";

interface ModalToValidationProps {
  isModalOpenVolunteer: boolean;
  setIsModalOpenVolunteer: (open: boolean) => void;
  setShowFormVolunteer: (show: boolean) => void;
}

const BecomeAVolunteerModal: React.FC<ModalToValidationProps> = ({
  isModalOpenVolunteer,
  setIsModalOpenVolunteer,
  setShowFormVolunteer,
}) => {
  // Fonction à passer au formulaire pour fermer la modal et masquer le formulaire
  const handleFormSubmitted = () => {
    setIsModalOpenVolunteer(false);
    setShowFormVolunteer(false);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      <Dialog
        open={isModalOpenVolunteer}
        onOpenChange={setIsModalOpenVolunteer}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle>Formulaire pour futur volontaire</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Merci de remplir ce formulaire pour devenir bénévole.
          </DialogDescription>
          <FormBecomFosterFamily onFormSubmitted={handleFormSubmitted} />
        </DialogContent>
      </Dialog>
      <ModalToValidation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setShowForm={setShowForm}
      />
    </div>
  );
};

export default BecomeAVolunteerModal;
