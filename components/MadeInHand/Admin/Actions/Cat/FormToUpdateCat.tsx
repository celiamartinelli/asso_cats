"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { updateCat, uploadImageToSupabase } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { ImageIcon } from "lucide-react";

interface Cat {
  cat_id: string;
  name_cat: string;
  date_of_birth: string;
  sex_cat: string;
  coat_color: string;
  pattern: string;
  sterilized: boolean;
  cat_url_image: string; // ce champ contiendra les URL séparées par des virgules
  sterelized: boolean;
  when_sterelized: string;
  vaccine: boolean;
  when_vaccine: string;
  fiv_test: boolean;
  felv_test: boolean;
  description: string;
  adoption: boolean;
  when_adopt: string;
  age_of_cat: string;
  category_cat: string;
  where_cat_found: string;
  which_host_family: string;
}
export default function FormToUpdateCat({
  initialData,
  onBack,
}: {
  initialData: Cat;
  onBack: () => void;
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    name_cat: initialData.name_cat,
    date_of_birth: initialData.date_of_birth,
    sex_cat: initialData.sex_cat,
    coat_color: initialData.coat_color,
    pattern: initialData.pattern,
    sterilized: initialData.sterilized,
  });

  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImageFiles, setNewImageFiles] = useState<File[]>([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (initialData.cat_url_image) {
      const imageField = Array.isArray(initialData.cat_url_image)
        ? initialData.cat_url_image
        : String(initialData.cat_url_image).split(",").filter(Boolean);

      setExistingImages(imageField);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files).slice(
      0,
      5 - existingImages.length - newImageFiles.length
    );
    setNewImageFiles((prev) => [...prev, ...selectedFiles]);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setNewImagePreviews((prev) => [...prev, ...previews]);
  };

  const handleRemoveExistingImage = (index: number) => {
    const updated = [...existingImages];
    updated.splice(index, 1);
    setExistingImages(updated);
  };

  const handleRemoveNewImage = (index: number) => {
    const updatedFiles = [...newImageFiles];
    updatedFiles.splice(index, 1);
    setNewImageFiles(updatedFiles);

    const updatedPreviews = [...newImagePreviews];
    updatedPreviews.splice(index, 1);
    setNewImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const uploadedUrls = await Promise.all(
      newImageFiles.map((file) => uploadImageToSupabase(file, "cats"))
    );

    const finalImageUrls = [...existingImages, ...uploadedUrls.filter(Boolean)];
    const updatedCat = {
      ...formData,
      cat_url_image: finalImageUrls,
    };

    await updateCat(initialData.cat_id, updatedCat);
    router.refresh();
    onBack();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <Label>Nom du chat</Label>
          <Input
            name="name_cat"
            value={formData.name_cat}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Date de naissance</Label>
          <Input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Sexe</Label>
          <Select
            value={formData.sex_cat}
            onValueChange={(value) => handleSelectChange("sex_cat", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choisir un sexe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mâle">Mâle</SelectItem>
              <SelectItem value="femelle">Femelle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Robe</Label>
          <Input
            name="coat_color"
            value={formData.coat_color}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Motif</Label>
          <Input
            name="pattern"
            value={formData.pattern}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Stérilisé</Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.sterilized}
              onCheckedChange={(value) =>
                setFormData({ ...formData, sterilized: value })
              }
            />
            <span>{formData.sterilized ? "Oui" : "Non"}</span>
          </div>
        </div>

        <div className="w-full col-span-2">
          <Label className="block mb-2">Images du chat</Label>
          <div className="flex flex-wrap gap-4">
            {[...existingImages, ...newImagePreviews].map((preview, i) => (
              <div key={i} className="relative w-32 h-32">
                <img
                  src={preview}
                  alt={`Aperçu ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    i < existingImages.length
                      ? handleRemoveExistingImage(i)
                      : handleRemoveNewImage(i - existingImages.length)
                  }
                  className="absolute top-1 right-1 bg-gray-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}

            {existingImages.length + newImagePreviews.length < 5 && (
              <div className="w-32 h-32">
                <input
                  aria-label="Upload Image"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-full rounded-lg flex items-center justify-center border border-dashed hover:border-gray-500 hover:shadow-lg hover:opacity-80"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Mise à jour..." : "Mettre à jour le chat"}
      </Button>
    </form>
  );
}
