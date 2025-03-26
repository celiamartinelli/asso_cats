"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { uploadImageNews, addNews } from "@/utils/actions";
import { Image } from "lucide-react";

export default function NewsAction() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    news_url_img: "",
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
      const imageUrl = await uploadImageNews(file);
      if (imageUrl) {
        setFormData((prev) => ({ ...prev, news_url_img: imageUrl }));
      }
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
      await addNews(formData);
      setFormData({ title: "", body: "", news_url_img: "" });
    } catch {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ajouter une Actualité</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titre"
        />
        <Textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          className="h-32"
          placeholder="Contenu"
        />

        {/* Champ de fichier caché */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Aperçu de l'image ou bouton d'upload */}
        {formData.news_url_img ? (
          <div
            className="w-48 h-48 relative cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <img
              src={formData.news_url_img}
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
          {loading ? "Chargement..." : "Ajouter l'actualité"}
        </Button>
      </form>
    </div>
  );
}
