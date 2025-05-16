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

const BecomeAVolunteerModal: React.FC<ModalToValidationProps> = ({
  isModalOpen,
  setIsModalOpen,
  setShowForm,
}) => {
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Modal form volontaires</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            quel type de bénévolats vous plairait
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

export default BecomeAVolunteerModal;
