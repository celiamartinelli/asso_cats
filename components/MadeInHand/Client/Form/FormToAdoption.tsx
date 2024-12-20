import React, { useState } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";

const FormToAdoption: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    description_material: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="bg-white rounded p-10 border border-gray-300 w-11/12"
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
  );
};

export default FormToAdoption;
