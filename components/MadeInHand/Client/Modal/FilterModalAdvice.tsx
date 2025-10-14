import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { SlidersHorizontal } from "lucide-react";

// Typages stricts des clés
type SubjectKey =
  | "Maltraitance"
  | "Adoption"
  | "Chats errants"
  | "Collecte de dons"
  | "Informations"
  | "Autres demandes";

type AgeKey = "Chatons" | "Jeune chat" | "Adulte" | "Senior" | "Tous les âges";

type CategoryKey =
  | "Santé et Sécurité"
  | "Bien-être et comportement"
  | "Activites et enrichissement"
  | "Education et Sensibilisation"
  | "Guide Pratique";

// Objets de mapping typés
const subjectMapping: Record<SubjectKey, string> = {
  Maltraitance: "maltraitance",
  Adoption: "adoption",
  "Chats errants": "chats-errants",
  "Collecte de dons": "collecte-de-dons",
  Informations: "informations",
  "Autres demandes": "autres-demande",
};

const ageMapping: Record<AgeKey, string> = {
  Chatons: "chatons",
  "Jeune chat": "jeune-chat",
  Adulte: "adulte",
  Senior: "senior",
  "Tous les âges": "tous-ages",
};

const categoryAdviceMapping: Record<CategoryKey, string> = {
  "Santé et Sécurité": "sante_et_securite",
  "Bien-être et comportement": "bien-etre_et_comportement",
  "Activites et enrichissement": "activites_et_enrichissement",
  "Education et Sensibilisation": "education_et_sensibilisation",
  "Guide Pratique": "guide_pratique",
};

// Props du composant
interface FilterModalAdviceProps {
  onApply: (filters: {
    subject: string | null;
    age_of_cat: string | null;
    category_advice: string | null;
  }) => void;
}

export default function FilterModalAdvice({ onApply }: FilterModalAdviceProps) {
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(
    null
  );
  const [selectedAge, setSelectedAge] = useState<AgeKey | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );

  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onApply({
      subject: selectedSubject ? subjectMapping[selectedSubject] : null,
      age_of_cat: selectedAge ? ageMapping[selectedAge] : null,
      category_advice: selectedCategory
        ? categoryAdviceMapping[selectedCategory]
        : null,
    });
    setOpen(false);
  };

  const handleReset = () => {
    setSelectedSubject(null);
    setSelectedAge(null);
    setSelectedCategory(null);
    onApply({ subject: null, age_of_cat: null, category_advice: null });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="ml-4">
          <SlidersHorizontal />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle>Filtres</DialogTitle>
          <DialogDescription>
            Sélectionnez les critères qui vous correspondent
          </DialogDescription>
        </DialogHeader>

        {/* Sujet */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Sujet :</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(subjectMapping).map((subject) => {
              const key = subject as SubjectKey;
              return (
                <Button
                  key={key}
                  variant={selectedSubject === key ? "default" : "outline"}
                  onClick={() =>
                    setSelectedSubject(selectedSubject === key ? null : key)
                  }
                >
                  {key}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Âge */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Âge :</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(ageMapping).map((age) => {
              const key = age as AgeKey;
              return (
                <Button
                  key={key}
                  variant={selectedAge === key ? "default" : "outline"}
                  onClick={() =>
                    setSelectedAge(selectedAge === key ? null : key)
                  }
                >
                  {key}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Catégorie */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Catégorie :</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(categoryAdviceMapping).map((cat) => {
              const key = cat as CategoryKey;
              return (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === key ? null : key)
                  }
                >
                  {key}
                </Button>
              );
            })}
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full mt-2 text-sm text-muted-foreground"
          onClick={handleReset}
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
