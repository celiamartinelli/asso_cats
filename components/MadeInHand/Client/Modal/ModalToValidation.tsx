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

interface ModalToValidationProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  setShowForm: (show: boolean) => void;
}

const ModalToValidation: React.FC<ModalToValidationProps> = ({
  isModalOpen,
  setIsModalOpen,
  setShowForm,
}) => {
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Demande envoyée</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Nous avons bien reçu votre formulaire. Nous vous recontacterons très
            vite.
          </DialogDescription>
          <Button
            className="mt-4"
            onClick={() => {
              setIsModalOpen(false);
              setShowForm(false);
            }}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalToValidation;
