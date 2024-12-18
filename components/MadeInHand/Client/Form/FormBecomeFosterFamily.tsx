import React, { useState } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";
import { boolean } from "zod";
import { FormControl, FormDescription, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormBecomFosterFamily: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    phone_number: "",
    address: "",
    type_of_housing: "",
    living_area: "",
    capacity_number_animals: "",
    type_animals: "",
    specific_part: "",
    type_foster_family: "",
    have_you_other_animals: "",
    home_description: "",
    why_foster_family: "",
    trasported: boolean,
    other_details: "",
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

  const housingOptions = ["house", "apartment", "castle", "caravan"];

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
        htmlFor="date_of_birth"
        textLabel="Date de naissance:"
        type="date"
        id="date_of_birth"
        name="date_of_birth"
        value={formData.date_of_birth}
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
      <Input
        htmlFor="address"
        textLabel="Adresse Postale Complète:"
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <div className="flex flex-col my-4">
        <label className="font-medium mb-1" htmlFor="type_of_housing">
          Type de logement
        </label>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, type_of_housing: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un type de logement" />
          </SelectTrigger>
          <SelectContent>
            {housingOptions.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Input
        htmlFor="living_area"
        textLabel="Espace de vie (m²):"
        type="text"
        id="living_area"
        name="living_area"
        value={formData.living_area}
        onChange={handleChange}
      />

      <Textarea
        htmlFor="home_description"
        textLabel="Décrivez-nous votre foyer:"
        type="text"
        id="home_description"
        name="home_description"
        value={formData.home_description}
        onChange={handleChange}
      />
      <Button className="w-full" type="submit">
        Envoyer
      </Button>
    </form>
  );
};

export default FormBecomFosterFamily;
