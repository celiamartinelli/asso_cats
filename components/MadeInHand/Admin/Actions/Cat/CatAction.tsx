"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
import { Form } from "react-hook-form";
import FormToAddCat from "./FormToAddCat";

export default function CatAction() {
  return (
    <div>
      <FormToAddCat />
    </div>
  );
}
