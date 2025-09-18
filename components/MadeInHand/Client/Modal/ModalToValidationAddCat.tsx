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

interface ModalToValidationAddCatProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  setShowForm: (show: boolean) => void;
}

const ModalToValidationAddCat: React.FC<ModalToValidationAddCatProps> = ({
  isModalOpen,
  setIsModalOpen,
  setShowForm,
}) => {
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Chat Ajouté</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Votre chat a bien été ajouté à la base de données.
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

export default ModalToValidationAddCat;
