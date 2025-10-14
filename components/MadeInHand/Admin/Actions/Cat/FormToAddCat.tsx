"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { uploadImage, addCat } from "@/utils/actions";
import { AGE_LABELS, PATTERN_LABELS } from "@/utils/enumLabels";
import { MultiSelect } from "@/components/multi-select";
import ModalToValidationAdd from "@/components/MadeInHand/Client/Modal/ModalToValidationAdd";

export default function FormToAddCat() {
  const [formData, setFormData] = useState({
    name_cat: "",
    date_of_birth: "",
    sex_cat: "male",
    sterelized: false,
    when_sterelized: "",
    vaccine: false,
    when_vaccine: "",
    fiv_test: false,
    felv_test: false,
    coat_color: "" as string | string[],
    pattern: "",
    description: "",
    adoption: false,
    when_adopt: "",
    age_of_cat: "",
    category_cat: "",
    cat_url_image: [] as File[],
    cat_url_video: [] as File[],
    where_cat_found: "",
    which_host_family: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [videoPreviews, setVideoPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>([]);

  // Input unique images + vidéos
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setPreviews((prev) => [...prev, url]);
        setFormData((prev) => ({
          ...prev,
          cat_url_image: [...prev.cat_url_image, file],
        }));
      } else if (file.type.startsWith("video/")) {
        const url = URL.createObjectURL(file);
        setVideoPreviews((prev) => [...prev, url]);
        setFormData((prev) => ({
          ...prev,
          cat_url_video: [...prev.cat_url_video, file],
        }));
      }
    });
  };

  // Supprimer une image
  const handleRemoveImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      cat_url_image: prev.cat_url_image.filter((_, i) => i !== index),
    }));
  };

  // Supprimer une vidéo
  const handleRemoveVideo = (index: number) => {
    setVideoPreviews((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      cat_url_video: prev.cat_url_video.filter((_, i) => i !== index),
    }));
  };

  // // Soumission
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     let imageUrls: string[] = [];
  //     let videoUrls: string[] = [];

  //     if (formData.cat_url_image.length > 0) {
  //       imageUrls = await Promise.all(
  //         formData.cat_url_image.map((file) => uploadImage(file))
  //       );
  //     }

  //     if (formData.cat_url_video.length > 0) {
  //       videoUrls = await Promise.all(
  //         formData.cat_url_video.map((file) => uploadImage(file))
  //       );
  //     }

  //     const formDataToSubmit = {
  //       ...formData,
  //       when_adopt: formData.when_adopt || null,
  //       when_sterelized: formData.when_sterelized || null,
  //       when_vaccine: formData.when_vaccine || null,
  //       cat_url_image: imageUrls.length ? `{${imageUrls.join(",")}}` : null,
  //       cat_url_video: videoUrls.length ? `{${videoUrls.join(",")}}` : null,
  //     };

  //     await addCat(formDataToSubmit);
  //     alert("Chat ajouté avec succès !");
  //   } catch (error) {
  //     console.error("Erreur lors de l'ajout du chat:", error);
  //     alert("Une erreur est survenue, veuillez réessayer.");
  //   }
  // };

  // Soumission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrls: string[] = [];
      let videoUrls: string[] = [];

      if (formData.cat_url_image.length > 0) {
        const urls = await Promise.all(
          formData.cat_url_image.map((file) => uploadImage(file))
        );

        // Filtrer les valeurs nulles ou undefined
        imageUrls = urls.filter(
          (url): url is string => url !== null && url !== undefined
        );
      }

      if (formData.cat_url_image.length > 0) {
        const urls = await Promise.all(
          formData.cat_url_image.map((file) => uploadImage(file))
        );

        // Filtrer les valeurs nulles ou undefined
        imageUrls = urls.filter(
          (url): url is string => url !== null && url !== undefined
        );
      }

      const formDataToSubmit = {
        ...formData,
        when_adopt: formData.when_adopt || null,
        when_sterelized: formData.when_sterelized || null,
        when_vaccine: formData.when_vaccine || null,
        cat_url_image: imageUrls.length ? `{${imageUrls.join(",")}}` : null,
        cat_url_video: videoUrls.length ? `{${videoUrls.join(",")}}` : null,
      };

      await addCat(formDataToSubmit);
      // alert("Chat ajouté avec succès !");
      // Ouvre la modal au lieu d'un alert
      setIsModalOpen(true);

      // 🔄 Réinitialisation du formulaire
      setFormData({
        name_cat: "",
        date_of_birth: "",
        sex_cat: "male",
        sterelized: false,
        when_sterelized: "",
        vaccine: false,
        when_vaccine: "",
        fiv_test: false,
        felv_test: false,
        coat_color: [] as string[],
        pattern: "",
        description: "",
        adoption: false,
        when_adopt: "",
        age_of_cat: "",
        category_cat: "",
        cat_url_image: [] as File[],
        cat_url_video: [] as File[],
        where_cat_found: "",
        which_host_family: "",
      });

      setPreviews([]);
      setVideoPreviews([]);
      setSelectedColors([]);

      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // reset input file
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du chat:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (name: string, value: boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      const imageUrls = files.map((file) => URL.createObjectURL(file));

      setPreviews((prevPreviews) => [...prevPreviews, ...imageUrls]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        cat_url_image: [...prevFormData.cat_url_image, ...files],
      }));
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("📤 Formulaire soumis");
  //   try {
  //     let imageUrls = [];

  //     // Si des images sont envoyées, traite-les
  //     if (formData.cat_url_image.length > 0) {
  //       imageUrls = await Promise.all(
  //         formData.cat_url_image.map(async (file) => {
  //           const uploadedUrl = await uploadImage(file);
  //           console.log("Uploaded URL:", uploadedUrl); // Vérifiez l'URL retournée
  //           return uploadedUrl;
  //         })
  //       );
  //     }

  //     // Filtrer les URLs nulles ou undefined
  //     const validImageUrls = imageUrls.filter(
  //       (url) => url !== undefined && url !== null
  //     );
  //     console.log("URLs valides avant envoi:", validImageUrls);

  //     const formDataToSubmit = {
  //       ...formData,
  //       when_adopt: formData.when_adopt || null,
  //       when_sterelized: formData.when_sterelized || null,
  //       when_vaccine: formData.when_vaccine || null,
  //       cat_url_image:
  //         validImageUrls.length > 0 ? `{${validImageUrls.join(",")}}` : null, // Utilise uniquement les URLs valides
  //     };

  //     console.log("Form data to submit:", formDataToSubmit);

  //     // Envoie les données à Supabase
  //     await addCat(formDataToSubmit);
  //     alert("Chat ajouté avec succès !");
  //   } catch (error) {
  //     console.error("Erreur lors de l'ajout du chat:", error);
  //     alert("Une erreur est survenue, veuillez réessayer.");
  //   }
  // };

  // const handleRemoveImage = (index: number) => {
  //   setPreviews((prev) => prev.filter((_, i) => i !== index));
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     cat_url_image: prevFormData.cat_url_image.filter((_, i) => i !== index),
  //   }));
  // };

  // Liste des couleurs de pelage
  const coatColorList = [
    { value: "white", label: "Blanc" },
    { value: "blue-grey", label: "Bleu/Gris" },
    { value: "cinnamon", label: "Cannelle" },
    { value: "chocolate", label: "Chocolat" },
    { value: "cream", label: "Crème" },
    { value: "sand", label: "Sable" },
    { value: "black", label: "Noir" },
    { value: "red", label: "Roux" },
  ];
  const colorMapping: Record<string, string> = {
    white: "#FFFFFF",
    "blue-grey": "#666670",
    cinnamon: "#753800",
    chocolate: "#502A05",
    cream: "#f7f0de",
    sand: "#D0B280", // sable
    black: "#000000",
    red: "#e29024",
  };
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // Exemple de fonction pour calculer la catégorie d'âge
  const calculateAgeCategory = (date_of_birth: string) => {
    const today = new Date();
    const dob = new Date(date_of_birth);

    let ageInMonths =
      (today.getFullYear() - dob.getFullYear()) * 12 +
      (today.getMonth() - dob.getMonth());

    if (today.getDate() < dob.getDate()) {
      ageInMonths -= 1;
    }

    if (ageInMonths < 6) return "chatons"; // < 6 mois
    if (ageInMonths < 24) return "jeune-chat"; // 6 mois – 2 ans
    if (ageInMonths < 96) return "adulte"; // 2 – 8 ans
    return "senior"; // 8 ans et +
  };

  // Dans ton composant formulaire :
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Met à jour la date de naissance
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      age_of_cat: calculateAgeCategory(value), // met à jour automatiquement l'âge
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <CardHeader>
        <div className="flex justify-between items-center"></div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="flex gap-4 justify-between">
            {/* Image Upload */}
            <div className="w-1/4">
              {/* Input caché */}
              <input
                aria-label="Upload Images or Videos"
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />

              {/* Carré principal */}
              <div
                className="w-56 h-56 rounded-lg flex items-center justify-center border border-dashed overflow-hidden relative hover:border-gray-500 hover:shadow-lg hover:opacity-80 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {previews.length > 0 ? (
                  <div className="relative w-full h-full">
                    <img
                      src={previews[0]}
                      alt="Prévisualisation principale"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Croix pour supprimer l'image principale */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(0);
                      }}
                      className="absolute top-1 right-1 bg-gray-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                )}
              </div>
            </div>
            <div className="w-3/5">
              {/* Nom */}
              <div>
                <label>Nom du chat</label>
                <Input
                  type="text"
                  name="name_cat"
                  value={formData.name_cat}
                  onChange={handleChange}
                />
              </div>

              {/* Date de naissance */}
              <div>
                <label>Date de naissance</label>
                <Input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleDateChange}
                />
              </div>
              {/* Age of cat */}
              <div>
                <label>Âge du chat</label>
                <Input
                  placeholder="Calcul Automatique"
                  type="text"
                  value={
                    formData.age_of_cat ? AGE_LABELS[formData.age_of_cat] : ""
                  }
                  readOnly
                  className={`cursor-not-allowed transition-colors duration-500 ${
                    formData.age_of_cat
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                />
              </div>
              {/* Sex */}
              <div>
                <label>Sexe de l'animal</label>
                <Select
                  value={formData.sex_cat}
                  onValueChange={(value) =>
                    handleSelectChange("sex_cat", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Mâle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Mâle</SelectItem>
                    <SelectItem value="female">Femelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            {/* Galerie horizontale : autres images + vidéos + bouton + */}
            <div className="flex gap-2 mt-3 ">
              {/* Autres images */}
              {previews.slice(1).map((url, index) => (
                <div
                  key={index + 1}
                  className="relative w-24 h-24 flex-shrink-0"
                >
                  <img
                    src={url}
                    alt={`image-${index + 1}`}
                    className="w-full h-full object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index + 1)}
                    className="absolute top-0 right-0 bg-gray-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {/* Vidéos */}
              {videoPreviews.map((url, index) => (
                <div key={index} className="relative w-24 h-24 flex-shrink-0">
                  <video
                    src={url}
                    controls
                    className="w-full h-full rounded-md border object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveVideo(index)}
                    className="absolute top-0 right-0 bg-gray-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Stérilisation */}
          <div className="flex justify-between items-center">
            <label>Stérilisé ?</label>
            <Switch
              checked={formData.sterelized}
              onCheckedChange={(value) =>
                handleSwitchChange("sterelized", value)
              }
            />
          </div>

          {/* Date de stérilisation */}
          {formData.sterelized && (
            <div>
              <label>Date de stérilisation</label>
              <Input
                type="date"
                name="when_sterelized"
                value={formData.when_sterelized}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Vaccination */}
          <div className="flex justify-between items-center">
            <label>Vacciné ?</label>
            <Switch
              checked={formData.vaccine}
              onCheckedChange={(value) => handleSwitchChange("vaccine", value)}
            />
          </div>

          {/* Date de vaccination */}
          {formData.vaccine && (
            <div>
              <label>Date de vaccination</label>
              <Input
                type="date"
                name="when_vaccine"
                value={formData.when_vaccine}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Test FIV */}
          <div className="flex justify-between items-center">
            <label>Testé FIV ?</label>
            <Switch
              checked={formData.fiv_test}
              onCheckedChange={(value) => handleSwitchChange("fiv_test", value)}
            />
          </div>

          {/* Test FELV */}
          <div className="flex justify-between items-center">
            <label>Testé FELV ?</label>
            <Switch
              checked={formData.felv_test}
              onCheckedChange={(value) =>
                handleSwitchChange("felv_test", value)
              }
            />
          </div>

          {/* Couleur du pelage */}
          <div>
            <label>Couleur(s) du pelage</label>
            <MultiSelect
              options={coatColorList.map((color) => ({
                value: color.value,
                label: color.label,
                icon: () => (
                  <span
                    className="inline-block w-4 h-4 rounded-full border border-gray-400"
                    style={{ backgroundColor: colorMapping[color.value] }}
                  />
                ),
              }))}
              value={formData.coat_color as string[]}
              onValueChange={(values) => {
                setFormData({ ...formData, coat_color: values });
              }}
              placeholder="Choisir une ou plusieurs couleurs"
            />
          </div>

          {/* Motif */}

          <div>
            <label>Motif du pelage</label>
            <Select
              onValueChange={(value) => handleSelectChange("pattern", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisir un motif du pelage" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(PATTERN_LABELS).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div>
            <label>Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Adoption */}
          <div className="flex justify-between items-center">
            <label>Adopté ?</label>
            <Switch
              checked={formData.adoption}
              onCheckedChange={(value) => handleSwitchChange("adoption", value)}
            />
          </div>

          {/* Date d'adoption*/}
          {formData.adoption && (
            <div>
              <label>Date d'adoption</label>
              <Input
                type="date"
                name="when_adopt"
                value={formData.when_adopt}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Catégorie */}
          <div>
            <label>Catégorie du chat</label>
            <Select
              value={formData.category_cat}
              onValueChange={(value) =>
                handleSelectChange("category_cat", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisir une catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chat-errant">Chat Errant</SelectItem>
                <SelectItem value="chat-maltraite">Chat Maltraité</SelectItem>
                <SelectItem value="chat-abandonne">Chat Abandonné</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Où trouvé */}
          <div>
            <label>Où a-t-il été trouvé ?</label>
            <Input
              type="text"
              name="where_cat_found"
              value={formData.where_cat_found}
              onChange={handleChange}
            />
          </div>

          {/* Famille d'accueil */}
          <div>
            <label>Famille d'accueil</label>
            <Input
              type="text"
              name="which_host_family"
              value={formData.which_host_family}
              onChange={handleChange}
            />
          </div>

          {/* Bouton de soumission */}
          <Button type="submit" className="mt-4">
            Ajouter le chat
          </Button>
        </form>
        <ModalToValidationAdd
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setShowForm={() => {}}
          title="Chat Ajouté"
          message="Votre chat a bien été ajouté à la base de données."
        />
      </CardContent>
    </Card>
  );
}
