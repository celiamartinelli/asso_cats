"use client";
import React, { useState } from "react";
import Input from "@/components/MadeInHand/Client/Input";
import SocialNetwork from "@/components/MadeInHand/SocialNetwork";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUBJECT_CONTACT_LABELS } from "@/utils/enumLabels";
import { addContactForm } from "@/utils/actions";
import ModalToValidation from "@/components/MadeInHand/Client/Modal/ModalToValidation";
import { Button } from "@/components/ui/button";

export default function FormContact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      ...formData,
      email: formData.email.toLowerCase().trim(),
      phone_number: formData.phone_number.trim(),
      message: formData.message.trim(),
      subject: formData.subject.trim(),
    };

    try {
      await addContactForm(formattedData);
      setIsModalOpen(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form
        className="bg-white  rounded p-10 border border-gray-300  dark:bg-zinc-950"
        onSubmit={handleSubmit}
      >
        {/* <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1> */}
        <div className="flex flex-col my-4 ">
          <label className="font-medium mb-1" htmlFor="type_of_housing">
            Sujet:
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
          >
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Sélectionnez un sujet" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(SUBJECT_CONTACT_LABELS).map(([key, label]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Input
          htmlFor="first_name"
          textLabel="Prénom:"
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <Input
          htmlFor="last_name"
          textLabel="Nom:"
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <Input
          htmlFor="email"
          textLabel="Email:"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          htmlFor="phone_number"
          textLabel="Numero de téléphone:"
          type="text"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />

        <div className="flex flex-col my-4">
          <label htmlFor="message" className="font-medium mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded border-gray-300"
            rows={5}
          />
        </div>
        <Button className="w-full " type="submit">
          Envoyer
        </Button>
      </form>
      <ModalToValidation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setShowForm={setShowForm}
      />
    </div>
  );
}
