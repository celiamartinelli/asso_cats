"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { uploadImageEvent, addEvent } from "@/utils/actions"; // Fonctions API à créer
import { Image } from "lucide-react";

export default function EventsAction() {
  const [formData, setFormData] = useState({
    date_start: "",
    date_end: "",
    subject: "",
    taught_name: "",
    title_event: "",
    location_address: "",
    event_url_img: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const imageUrl = await uploadImageEvent(file);
      setFormData((prev) => ({ ...prev, event_url_img: imageUrl || "" }));
    } catch {
      alert("Échec de l'upload de l'image");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addEvent(formData);
      setFormData({
        date_start: "",
        date_end: "",
        subject: "",
        taught_name: "",
        title_event: "",
        location_address: "",
        event_url_img: "",
        description: "",
      });
    } catch {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ajouter un événement</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label>Date de début de l'évènnement</label>
          <Input
            type="date"
            name="date_start"
            value={formData.date_start}
            onChange={handleChange}
            placeholder="Date de début"
          />
        </div>
        <div>
          <label>Date de fin de l'évènnement</label>
          <Input
            type="date"
            name="date_end"
            value={formData.date_end}
            onChange={handleChange}
            placeholder="Date de fin"
          />
        </div>
        <div>
          <label>Sujet</label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet"
          />
        </div>
        <div>
          <label>Enseigne ou Magasin</label>
          <Input
            type="text"
            name="taught_name"
            value={formData.taught_name}
            onChange={handleChange}
            placeholder="Nom de l'enseigne ou du magasin"
          />
        </div>
        <div>
          <label>Titre de l'événement</label>

          <Input
            type="text"
            name="title_event"
            value={formData.title_event}
            onChange={handleChange}
            placeholder="Titre de l'événement"
          />
        </div>
        <div>
          <label>Adresse de l'événement</label>
          <Input
            type="text"
            name="location_address"
            value={formData.location_address}
            onChange={handleChange}
            placeholder="Adresse de l'événement"
          />
        </div>
        <div>
          <label>Description</label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="h-32"
            placeholder="Description"
          />
        </div>

        {/* Champ de fichier caché */}
        <label htmlFor="file-upload" className="sr-only">
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Aperçu de l'image ou bouton d'upload */}
        {formData.event_url_img ? (
          <div
            className="w-48 h-48 relative cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <img
              src={formData.event_url_img}
              alt="Aperçu"
              className="w-full h-full object-cover rounded-lg border border-gray-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              Cliquez pour changer l'image
            </div>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="w-48 h-48 rounded-lg flex items-center justify-center border border-dashed overflow-hidden relative hover:border-gray-500 hover:shadow-lg hover:opacity-80"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="w-16 h-16 text-gray-500" />
          </Button>
        )}

        <Button type="submit" className="mt-4" disabled={loading}>
          {loading ? "Chargement..." : "Ajouter l'événement"}
        </Button>
      </form>
    </div>
  );
}
