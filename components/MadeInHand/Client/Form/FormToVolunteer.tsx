import React, { useState, useEffect } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Button } from "@/components/ui/button";
import { addMaterialDonation, fetchAllTypeVolunteer } from "@/utils/actions";
import ModalToValidation from "../Modal/ModalToValidation";
import { MultiSelect } from "@/components/multi-select";

export default function FormToVolunteer() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mail: "",
    phone_number: "",
    motivation: "",
    why_volunteer: "",
    type_volunteer: "" as string | string[],
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const [typeOfVolunteer, setTypeOfVolunteer] = useState<
    { types_id: string; title: string; description: string }[]
  >([]);

  useEffect(() => {
    const getTypeOfVolunteer = async () => {
      const data = await fetchAllTypeVolunteer();
      console.log(data);
      setTypeOfVolunteer(data);
    };
    getTypeOfVolunteer();
  }, []);

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
        mail: "",
        phone_number: "",
        motivation: "",
        why_volunteer: "",
        type_volunteer: "",
      });
    } catch (error) {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
            value={formData.mail}
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
            htmlFor="motivation"
            textLabel="Décrivez-nous votre motivation:"
            type="text"
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
          />
          <Textarea
            htmlFor="why_volunteer"
            textLabel="Pourquoi souhaitez-vous être bénévole ?"
            type="text"
            id="why_volunteer"
            name="why_volunteer"
            value={formData.why_volunteer}
            onChange={handleChange}
          />

          <div className="max-w-xl">
            <h1 className="text-lg font-bold mb-2">
              Quel type de volontariat vous conviendrait ?
            </h1>

            <MultiSelect
              options={typeOfVolunteer.map((volunteerType) => ({
                label: volunteerType.title,
                value: volunteerType.types_id,
              }))}
              onValueChange={(values) => {
                setFormData({ ...formData, type_volunteer: values });
              }}
              defaultValue={
                Array.isArray(formData.type_volunteer)
                  ? formData.type_volunteer
                  : []
              }
              placeholder="Sélectionnez le type de volontariat"
              variant="inverted"
              animation={2}
              maxCount={3}
              value={formData.type_volunteer}
            />
          </div>

          <Button className="w-full mt-4" type="submit">
            Envoyer
          </Button>
        </form>

        <ModalToValidation
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setShowForm={setShowForm}
        />
      </>
    </div>
  );
}
