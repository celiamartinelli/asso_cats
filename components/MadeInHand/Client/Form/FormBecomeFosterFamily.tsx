import React, { useState } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/multi-select";
import { boolean } from "zod";
import { FormControl, FormDescription, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Bird, Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { addFosterFamilyForm } from "@/utils/actions";
import ModalToValidation from "../Modal/ModalToValidation";
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
    type_animals: "" as string | string[],
    specific_part: false,
    specific_part_details: "",
    type_foster_family: "" as string | string[],
    have_you_other_animals: false,
    have_you_other_animals_details: "",
    home_description: "",
    why_foster_family: "",
    transported: false,
    other_details: "",
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

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
    setLoading(true);
    // Formatage des données avant envoi
    const formattedData = {
      ...formData,
      email: formData.email.toLowerCase().trim(),
      phone_number: formData.phone_number.trim(),
      date_of_birth: new Date(formData.date_of_birth).toISOString(), // Convertir en format ISO pour Supabase
      address: formData.address.trim(),
      living_area: Number(formData.living_area) || 0, // Convertir en nombre
      capacity_number_animals: Number(formData.capacity_number_animals) || 0, // Convertir en nombre
      type_animals: JSON.stringify(selectedFrameworks), // Stocker les listes en JSON
      type_foster_family: JSON.stringify(selectedHostFamily), // Stocker les listes en JSON
      specific_part_details: formData.specific_part
        ? formData.specific_part_details.trim()
        : null,
      home_description: formData.home_description.trim(),
      why_foster_family: formData.why_foster_family.trim(),
      other_details: formData.other_details.trim(),
    };

    console.log("Form submitted:", formData);
    try {
      await addFosterFamilyForm(formattedData);
      setIsModalOpen(true);
      setFormData({
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
        specific_part: false,
        specific_part_details: "",
        type_foster_family: "",
        have_you_other_animals: false,
        have_you_other_animals_details: "",
        home_description: "",
        why_foster_family: "",
        transported: false,
        other_details: "",
      });
      setSelectedFrameworks([]);
      setSelectedHostFamily([]);
    } catch (error) {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const housingOptions = ["house", "apartment", "castle", "caravan"];

  const typeofanimalsList = [
    { value: "Chat", label: "Chat", icon: Cat },
    { value: "Chien", label: "Chien", icon: Dog },
    { value: "Oiseaux", label: "Oiseaux", icon: Bird },
    { value: "Lapin", label: "Lapin", icon: Rabbit },
    { value: "Poisson", label: "Poisson", icon: Fish },
    { value: "Nac", label: "Nac", icon: Turtle },
  ];
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const typeofhostfamilyList = [
    { value: "Longue-Duree", label: "Longue Durée" },
    { value: "Quarantaine", label: "Quarantaine" },
    { value: "Transition", label: "Transition" },
    { value: "Convalescence", label: "Convalescence" },
  ];
  const [selectedHostFamily, setSelectedHostFamily] = useState<string[]>([]);

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
            value={formData.type_of_housing}
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
        <div className="flex flex-col my-4">
          <div className="flex gap-6">
            <label
              className="font-medium mb-1"
              htmlFor="have_you_other_animals"
            >
              Avez-vous déjà des animaux?
            </label>
            <Switch
              id="have_you_other_animals"
              name="have_you_other_animals"
              checked={formData.have_you_other_animals}
              onCheckedChange={(checked: boolean) =>
                setFormData({ ...formData, have_you_other_animals: checked })
              }
            />
          </div>
          {formData.have_you_other_animals && (
            <Input
              htmlFor="have_you_other_animals_details"
              textLabel="Oui, Lesquelles et combien?"
              type="text"
              id="have_you_other_animals_details"
              name="have_you_other_animals_details"
              value={formData.have_you_other_animals_details}
              onChange={handleChange}
            />
          )}
        </div>

        <Input
          htmlFor="capacity_number_animals"
          textLabel="Capacité d'accueil (nombre d'animaux):"
          type="text"
          id="capacity_number_animals"
          name="capacity_number_animals"
          value={formData.capacity_number_animals}
          onChange={handleChange}
        />

        <div className=" max-w-xl">
          <h1 className="text-lg font-bold mb-2">
            Types d'animaux que vous pouvez accueillir
          </h1>

          <MultiSelect
            options={typeofanimalsList}
            onValueChange={(values) => {
              setSelectedFrameworks(values);
              setFormData({ ...formData, type_animals: values });
            }}
            defaultValue={selectedFrameworks}
            placeholder="Sélectionner les animaux que vous pouvez accueillir"
            variant="inverted"
            animation={2}
            maxCount={3}
            value={selectedFrameworks}
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Animaux Sélectionner:</h2>
            <ul className="list-disc list-inside">
              {selectedFrameworks.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <div className="flex gap-6">
            <label className="font-medium mb-1" htmlFor="specific_part">
              Avez-vous une pièce spécifiquement pour eux disponible?
            </label>
            <Switch
              id="specific_part"
              name="specific_part"
              checked={formData.specific_part}
              onCheckedChange={(checked: boolean) =>
                setFormData({ ...formData, specific_part: checked })
              }
            />
          </div>
          {formData.specific_part && (
            <Textarea
              htmlFor="specific_part_details"
              textLabel="Veuillez décrire la pièce:"
              type="text"
              id="specific_part_details"
              name="specific_part_details"
              value={formData.specific_part_details || ""}
              onChange={handleChange}
            />
          )}
        </div>
        <div className=" max-w-xl">
          <h1 className="text-lg font-bold mb-2">
            Quel type de famille d'accueil souhaitez-vous devenir?
          </h1>

          <MultiSelect
            options={typeofhostfamilyList}
            onValueChange={(values) => {
              setSelectedHostFamily(values);
              setFormData({ ...formData, type_foster_family: values });
            }}
            defaultValue={selectedHostFamily}
            placeholder="Sélectionnez le type de famille d’accueil"
            variant="inverted"
            animation={2}
            maxCount={3}
            value={selectedHostFamily}
          />
        </div>

        <Textarea
          htmlFor="why_foster_family"
          textLabel="Pourquoi souhaitez-vous devenir Famille d'accueil:"
          type="text"
          id="why_foster_family"
          name="why_foster_family"
          value={formData.why_foster_family || ""}
          onChange={handleChange}
        />

        <div className="flex gap-6 my-4">
          <label className="font-medium mb-1" htmlFor="specific_part">
            Etes-vous véhiculer?
          </label>
          <Switch
            id="transported"
            name="transported"
            checked={formData.transported}
            onCheckedChange={(checked: boolean) =>
              setFormData({ ...formData, transported: checked })
            }
          />
        </div>
        <Textarea
          htmlFor="other_details"
          textLabel="Partager un autre détail que vous jugez important:"
          type="text"
          id="other_details"
          name="other_details"
          value={formData.other_details || ""}
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

export default FormBecomFosterFamily;
