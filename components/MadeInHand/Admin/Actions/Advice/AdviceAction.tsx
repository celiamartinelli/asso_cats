"use client";

import { useState, useRef } from "react";
import { Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uploadImageAdvice, addAdvice } from "@/utils/actions";

export default function AdviceAction() {
  const [formData, setFormData] = useState({
    title: "",
    subject: [] as string[], // Liste pour plusieurs choix
    body_of_advice: "",
    category_advice: "",
    age_of_cat: "",
    advice_url_image: null as File | null, // Une seule image
  });

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFormData((prevFormData) => ({
        ...prevFormData,
        advice_url_image: file,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subject: [] as string[],
      body_of_advice: "",
      category_advice: "",
      age_of_cat: "",
      advice_url_image: null,
    });
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = null;
      if (formData.advice_url_image) {
        imageUrl = await uploadImageAdvice(formData.advice_url_image);
      }

      const formDataToSubmit = {
        ...formData,
        advice_url_image: imageUrl || null,
      };

      await addAdvice(formDataToSubmit);
      // alert("Conseil ajouté avec succès !");
      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'ajout du conseil:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Ajouter un Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="flex gap-4 justify-between">
            {preview ? (
              <div
                className="w-48 h-48 relative"
                onClick={() => fileInputRef.current?.click()}
              >
                <img
                  src={preview}
                  alt="Aperçu"
                  className="w-full h-full object-cover rounded-lg border border-gray-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg rounded-lg opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
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
            <div className="flex-1">
              <div>
                <label>Titre</label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Sujet</label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("subject", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Maltraitance">Maltraitance</SelectItem>
                    <SelectItem value="Chats errants">Chats errants</SelectItem>
                    <SelectItem value="Collecte de dons">
                      Collecte de dons
                    </SelectItem>
                    <SelectItem value="Informations">Informations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <label>Contenu de l'article</label>
            <Textarea
              name="body_of_advice"
              value={formData.body_of_advice}
              onChange={handleChange}
              className="h-64"
            />
          </div>
          <div>
            <label>Catégorie de conseil</label>
            <Select
              onValueChange={(value) =>
                handleSelectChange("category_advice", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisir une catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sante_et_Securite">
                  Santé et Sécurité
                </SelectItem>
                <SelectItem value="Bien-etre_et_comportement">
                  Bien-être et comportement
                </SelectItem>
                <SelectItem value="Activites_et_enrichissement">
                  Activités et enrichissement
                </SelectItem>
                <SelectItem value="Education_et_sensibilisation">
                  Éducation et sensibilisation
                </SelectItem>
                <SelectItem value="Guide_pratique">Guide pratique</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label>Âge du chat</label>
            <Select
              onValueChange={(value) => handleSelectChange("age_of_cat", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisir un âge" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chatons">Chatons</SelectItem>
                <SelectItem value="jeune-chat">Jeune Chat</SelectItem>
                <SelectItem value="adulte">Adulte</SelectItem>
                <SelectItem value="senior">Senior</SelectItem>
                <SelectItem value="tous-ages">Tous Âges</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center">
            <input
              title="Upload a image"
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          {/* <div>
            <label>Image de l'article</label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
              title="Upload a image"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              Téléverser une image
            </Button>
            {preview && (
              <img
                src={preview}
                alt="Aperçu"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )}
          </div> */}
          <Button type="submit" className="mt-4">
            Ajouter le conseil
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
