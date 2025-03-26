"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { fetchAssociations, addCity } from "@/utils/actions"; // Utilise ces fonctions pour récupérer les associations et envoyer les données.

export default function TownAction() {
  const [formData, setFormData] = useState({
    city_name: "",
    postal_code: "",
    phone_number: "",
    address: "",
    town_hall_protocol: false,
    association_id: "",
  });

  const [associations, setAssociations] = useState<
    { association_id: string; name: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAssociations = async () => {
      const data = await fetchAssociations();
      console.log(data);
      setAssociations(data);
    };
    getAssociations();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addCity(formData);

      setFormData({
        city_name: "",
        postal_code: "",
        phone_number: "",
        address: "",
        town_hall_protocol: false,
        association_id: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la ville:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ajouter une Ville</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label>Nom de la ville</label>
          <Input
            type="text"
            name="city_name"
            value={formData.city_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Postal</label>
          <Input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Numéro de téléphone de la mairie</label>
          <Input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Adresse</label>
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="h-32"
          />
        </div>
        <div className="flex justify-between items-center">
          <label>Cette ville a-t-elle un protocole mis en place ?</label>
          <Switch
            checked={formData.town_hall_protocol}
            onCheckedChange={(checked) =>
              setFormData({
                ...formData,
                town_hall_protocol: checked,
              })
            }
          />
        </div>
        {formData.town_hall_protocol && (
          <div>
            <label>Avec quel association?</label>
            <Select
              value={formData.association_id || ""} // S'assure que la valeur sélectionnée est bien liée
              onValueChange={(value) => {
                // Afficher l'ID de l'association sélectionnée dans la console
                console.log("Association sélectionnée:", value);

                // Mettre à jour le formData avec l'ID de l'association
                handleSelectChange("association_id", value);
              }}
            >
              <SelectTrigger>
                {/* Affiche le nom de l'association sélectionnée si elle existe, sinon le placeholder */}
                <SelectValue placeholder="Choisir une association">
                  {formData.association_id &&
                    associations.find(
                      (association) =>
                        association.association_id === formData.association_id
                    )?.name}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {associations?.map((association) => (
                  <SelectItem
                    key={association.association_id}
                    value={association.association_id}
                  >
                    {association.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <Button type="submit" className="mt-4" disabled={loading}>
          {loading ? "Chargement..." : "Ajouter la ville"}
        </Button>
      </form>
    </div>
  );
}
