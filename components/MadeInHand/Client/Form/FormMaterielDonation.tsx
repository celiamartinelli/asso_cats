import React, { useState } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";
import { addMaterialDonation } from "@/utils/actions";
import ModalToValidation from "../Modal/ModalToValidation";

const FormMaterielDonnation: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    description_material: "",
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addMaterialDonation(formData);
      setIsModalOpen(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        description_material: "",
      });
    } catch (error) {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="bg-white rounded p-10 border border-gray-300 w-11/12 dark:bg-zinc-950"
        onSubmit={handleSubmit}
      >
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

        <Textarea
          htmlFor="description_material"
          textLabel="Décrivez-nous ce que vous souhaitez donner:"
          type="text"
          id="description_material"
          name="description_material"
          value={formData.description_material}
          onChange={handleChange}
        />
        <Button className="w-full" type="submit">
          Envoyer
        </Button>
      </form>

      <ModalToValidation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setShowForm={setShowForm}
      />
    </>
  );
};

export default FormMaterielDonnation;
