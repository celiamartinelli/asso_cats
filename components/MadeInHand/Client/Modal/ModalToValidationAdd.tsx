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

interface ModalToValidationAddProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  setShowForm?: (show: boolean) => void;
  title: string;
  message: string;
}

const ModalToValidationAdd: React.FC<ModalToValidationAddProps> = ({
  isModalOpen,
  setIsModalOpen,
  setShowForm,
  title,
  message,
}) => {
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>{message}</DialogDescription>
          <Button
            className="mt-4"
            onClick={() => {
              setIsModalOpen(false);
              if (setShowForm) setShowForm(false);
            }}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalToValidationAdd;
