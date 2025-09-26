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
import {
  CATEGORY_ADVICE_LABELS,
  SUBJECT_ADVICE_LABELS,
  AGE_LABELS,
} from "@/utils/enumLabels";
import ModalToValidationAdd from "@/components/MadeInHand/Client/Modal/ModalToValidationAdd";

export default function AdviceAction({
  setAdvices,
}: {
  setAdvices: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    subject: [] as string[], // Liste pour plusieurs choix
    body_of_advice: "",
    category_advice: "",
    age_of_cat: "",
    advice_url_image: null as File | null, // Une seule image
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      subtitle: "",
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

      const newAdvice = await addAdvice(formDataToSubmit);
      // alert("Conseil ajouté avec succès !");
      setAdvices((prev) => [newAdvice, ...prev]);
      resetForm();
      setIsModalOpen(true);
    } catch (error) {
      console.error("Erreur lors de l'ajout du conseil:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <>
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
                  <label>Sous-titre</label>
                  <Input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
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
                      {Object.entries(SUBJECT_ADVICE_LABELS).map(
                        ([value, label]) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        )
                      )}
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
                  {Object.entries(CATEGORY_ADVICE_LABELS).map(
                    ([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label>Âge du chat</label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("age_of_cat", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un âge" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(AGE_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
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

      <ModalToValidationAdd
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setShowForm={() => {}}
        title="Article ajouté"
        message="Votre article a bien été ajouté à la base de données."
      />
    </>
  );
}
