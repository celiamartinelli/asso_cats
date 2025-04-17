import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const subjectMapping = {
  Maltraitance: "maltraitance",
  Adoption: "adoption",
  "Chats errants": "chats-errants",
  "Collecte de dons": "collecte-de-dons",
  Informations: "informations",
  "Autres demandes": "autres-demande",
};

const ageMapping = {
  Chatons: "chatons",
  "Jeune chat": "jeune-chat",
  Adulte: "adulte",
  Senior: "senior",
  "Tous les âges": "tous-ages",
};

const categoryAdviceMapping = {
  "Santé et Sécurité": "sante_et_securite",
  "Bien-être et comportement": "bien-etre_et_comportement",
  "Activites et enrichissement": "activites_et_enrichissement",
  "Education et Sensibilisation": "education_et_sensibilisation",
  "Guide Pratique": "guide_pratique",
};

export default function FilterModalAdvice({
  onApply,
}: {
  onApply: (filters: any) => void;
}) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onApply({
      subject: selectedSubject || null,
      age_of_cat: selectedAge ? ageMapping[selectedAge] : null,
      category_advice: selectedCategory
        ? categoryAdviceMapping[selectedCategory]
        : null,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-4">
          Filtres
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle>Filtres</DialogTitle>
          <DialogDescription>
            Selectionner les critères qui vous correspondent
          </DialogDescription>
        </DialogHeader>

        {/* Subject */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Sujet:</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(subjectMapping).map((subject) => (
              <Button
                key={subject}
                variant={
                  selectedSubject === subjectMapping[subject]
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setSelectedSubject(
                    selectedSubject === subjectMapping[subject]
                      ? null
                      : subjectMapping[subject]
                  )
                }
              >
                {subject}
              </Button>
            ))}
          </div>
        </div>

        {/* Âge */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Âge:</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(ageMapping).map((age) => (
              <Button
                key={age}
                variant={selectedAge === age ? "default" : "outline"}
                onClick={() => setSelectedAge(age === selectedAge ? null : age)}
              >
                {age}
              </Button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Catégorie :</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(categoryAdviceMapping).map((catagory) => (
              <Button
                key={catagory}
                variant={selectedCategory === catagory ? "default" : "outline"}
                onClick={() =>
                  setSelectedCategory(
                    catagory === selectedCategory ? null : catagory
                  )
                }
              >
                {catagory}
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full mt-2 text-sm text-muted-foreground"
          onClick={() => {
            setSelectedSubject(null);
            setSelectedAge(null);
            setSelectedCategory(null);

            onApply({});
            setOpen(false);
          }}
        >
          Réinitialiser les filtres
        </Button>

        <Button onClick={handleApply} className="w-full mt-4">
          Enregistrer
        </Button>
      </DialogContent>
    </Dialog>
  );
}
