import React, { useState } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { submitAdoptionForm } from "@/utils/actions";

interface FormToAdoptionProps {
  catId: string;
}

const items = [
  {
    id: "garden_cloture",
    label: "un Jardin cloturer",
  },
  {
    id: "garden_not_cloture",
    label: "Un Jardin non cloturer",
  },
  {
    id: "balcony",
    label: "un balcon",
  },
  {
    id: "secure_balcony",
    label: "un balcon sécurisé",
  },
  {
    id: "roads",
    label: "Vous habitez proche d'une route à grande circulation",
  },
  {
    id: "road_slowly",
    label: "Vous habitez dans une rue calme",
  },
] as const;

const FormToAdoption: React.FC<FormToAdoptionProps> = ({ catId }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    postal_code: "",
    city_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    occupation: "",
    type_of_housing: "",
    living_area: "",
    have_animals: false,
    wich_ones: "Aucun",
    allergies_description: "Aucune",
    sterelization_opinion: "Non spécifié",
    house_description: "",
    why_adopt: "",
    have_you_garden: "Non spécifié",
    cat_id: catId,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields = [
      "first_name",
      "last_name",
      "address",
      "postal_code",
      "city_name",
      "email",
      "phone_number",
      "date_of_birth",
      "occupation",
      "type_of_housing",
      "living_area",
      "house_description",
      "why_adopt",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert(`Le champ ${field} est obligatoire.`);
        return;
      }
    }
    try {
      console.log("Payload envoyé :", formData);
      const response = await submitAdoptionForm({ ...formData, cat_id: catId });
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="bg-white rounded p-10 border border-gray-300 w-11/12 m-6"
      onSubmit={handleSubmit}
    >
      <div className="flex space-x-4 w-full">
        <div className="flex-1">
          <Input
            htmlFor="first_name"
            textLabel="Prénom:"
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <Input
            htmlFor="last_name"
            textLabel="Nom:"
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex space-x-4 w-full">
        <div className="flex-1">
          <Input
            htmlFor="date_of_birth"
            textLabel="Date de naissance:"
            type="text"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <Input
            htmlFor="occupation"
            textLabel="Profession:"
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Input
          htmlFor="address"
          textLabel="Adresse:"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <div className="flex space-x-4 w-full">
          <div className="flex-1">
            <Input
              htmlFor="postal_code"
              textLabel="Code Postal:"
              type="text"
              id="postal_code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <Input
              htmlFor="city_name"
              textLabel="Ville:"
              type="text"
              id="city_name"
              name="city_name"
              value={formData.city_name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
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
      <div className="flex space-x-4 w-full">
        <div className="flex-1 flex flex-col my-4">
          <label className="font-medium mb-1" htmlFor="type_of_housing">
            Type de Logement
          </label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, type_of_housing: value })
            }
          >
            <SelectTrigger className="border-gray-300 rounded-sm ">
              <SelectValue placeholder="Selectionnez votre type de Logement" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="appartement">Appartement</SelectItem>
                <SelectItem value="castle">Castle</SelectItem>
                <SelectItem value="caravan">Caravan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="relative flex-1">
          <Input
            htmlFor="living_area"
            textLabel="Surface habitable:"
            type="text"
            id="living_area"
            name="living_area"
            value={formData.living_area}
            onChange={handleChange}
          />
          <span className="absolute inset-y-0 right-3 pt-5 flex items-center text-gray-500 pointer-events-none">
            m²
          </span>
        </div>
      </div>
      <p>Avez vous ..... liste a choix multiples?</p>

      <div className="flex flex-col my-4">
        <label className="font-medium mb-1">
          Sélectionnez les options applicables:
        </label>
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={item.id}
              name={item.id}
              checked={formData.have_you_garden.includes(item.label)}
              onChange={(e) => {
                const selectedOptions = formData.have_you_garden
                  .split("/")
                  .filter(Boolean);
                if (e.target.checked) {
                  selectedOptions.push(item.label);
                } else {
                  const index = selectedOptions.indexOf(item.label);
                  if (index > -1) {
                    selectedOptions.splice(index, 1);
                  }
                }
                setFormData({
                  ...formData,
                  have_you_garden: selectedOptions.join(","),
                });
              }}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </div>
      <div className="flex my-4">
        <div className="flex space-x-2 flex-1 flex-col my-4">
          <label className="font-medium mb-3" htmlFor="have_animals">
            Avez-vous déjà des animaux?
          </label>

          <Switch
            id="have_animals"
            checked={formData.have_animals}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, have_animals: checked })
            }
          />
        </div>
        <div className="flex-1">
          <Input
            htmlFor="wich_ones"
            textLabel="Lesquels?"
            type="text"
            id="wich_ones"
            name="wich_ones"
            value={formData.wich_ones}
            onChange={handleChange}
          />
        </div>
      </div>
      <Input
        htmlFor="allergies_description"
        textLabel="Est-ce qu’un membre de la famille souffre d’allergies ou d’asthme ?"
        type="text"
        id="allergies_description"
        name="allergies_description"
        value={formData.allergies_description}
        onChange={handleChange}
      />
      <Input
        htmlFor="sterelization_opinion"
        textLabel="Quelle est votre opinion sur la stérélisation ?"
        type="text"
        id="sterelization_opinion"
        name="sterelization_opinion"
        value={formData.sterelization_opinion}
        onChange={handleChange}
      />
      <Textarea
        htmlFor="house_description"
        textLabel="Décrivez-nous votre foyer:"
        type="text"
        id="house_description"
        name="house_description"
        value={formData.house_description}
        onChange={handleChange}
      />
      <Textarea
        htmlFor="why_adopt"
        textLabel="Pourquoi souhaitez-vous adopter?"
        type="text"
        id="why_adopt"
        name="why_adopt"
        value={formData.why_adopt}
        onChange={handleChange}
      />
      <Button className="w-full" type="submit">
        Envoyer
      </Button>
    </form>
  );
};

export default FormToAdoption;
