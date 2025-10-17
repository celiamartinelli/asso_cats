import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { SlidersHorizontal } from "lucide-react";

// Typages stricts
type SexKey = "Femelle" | "Mâle";
type AgeKey = "Chatons" | "Jeune chat" | "Adulte" | "Senior" | "Tous les âges";
type ColorKey =
  | "Noir"
  | "Blanc"
  | "Bleu/Gris"
  | "Cannelle"
  | "Chocolat"
  | "Crème"
  | "Sable"
  | "Roux";
type MotifKey =
  | "Tigrés"
  | "Bi-Color"
  | "Uni"
  | "Ecaille de tortue"
  | "Tricolor"
  | "Tigré tacheté"
  | "Tous les motifs";

// Mappings typés
const sexMapping: Record<SexKey, string> = {
  Femelle: "female",
  Mâle: "male",
};

const ageMapping: Record<AgeKey, string> = {
  Chatons: "chatons",
  "Jeune chat": "jeune-chat",
  Adulte: "adulte",
  Senior: "senior",
  "Tous les âges": "tous-ages",
};

const colorMapping: Record<ColorKey, string> = {
  Noir: "#000000",
  Blanc: "#FFFFFF",
  "Bleu/Gris": "#666670",
  Cannelle: "#753800",
  Chocolat: "#502A05",
  Crème: "#f7f0de",
  Sable: "#D0B280",
  Roux: "#e29024",
};

const colorHexToEnum: Record<string, string> = {
  "#000000": "black",
  "#FFFFFF": "white",
  "#666670": "blue-grey",
  "#753800": "cinnamon",
  "#502A05": "chocolate",
  "#f7f0de": "cream",
  "#D0B280": "sand",
  "#e29024": "red",
};

const motifMapping: Record<MotifKey, string> = {
  Tigrés: "striped",
  "Bi-Color": "bi-color",
  Uni: "solid",
  "Ecaille de tortue": "tortoiseshell",
  Tricolor: "tri-color",
  "Tigré tacheté": "tortoiseshell",
  "Tous les motifs": "all-patterns",
};

interface FilterModalCatProps {
  onApply: (filters: {
    sex_cat: string | null;
    age_of_cat: string | null;
    coat_color: string | null;
    pattern: string | null;
  }) => void;
}

export default function FilterModalCat({ onApply }: FilterModalCatProps) {
  const [selectedSex, setSelectedSex] = useState<SexKey | null>(null);
  const [selectedAge, setSelectedAge] = useState<AgeKey | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);
  const [selectedMotif, setSelectedMotif] = useState<MotifKey | null>(null);
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    console.log(
      "🎨 Couleur filtrée envoyée :",
      selectedColor,
      "→",
      selectedColor ? colorHexToEnum[colorMapping[selectedColor]] : null
    );
    onApply({
      sex_cat: selectedSex ? sexMapping[selectedSex] : null,
      age_of_cat: selectedAge ? ageMapping[selectedAge] : null,
      coat_color: selectedColor
        ? colorHexToEnum[colorMapping[selectedColor]]
        : null,
      pattern: selectedMotif ? motifMapping[selectedMotif] : null,
    });
    setOpen(false);
  };

  const handleReset = () => {
    setSelectedSex(null);
    setSelectedAge(null);
    setSelectedColor(null);
    setSelectedMotif(null);

    onApply({
      sex_cat: null,
      age_of_cat: null,
      coat_color: null,
      pattern: null,
    });
    setOpen(false);
  };

  const handleSelectColor = (key: ColorKey) => {
    const newColor = selectedColor === key ? null : key;
    setSelectedColor(newColor);
    console.log(
      `🎨 Couleur sélectionnée : ${newColor || "aucune"} (${
        newColor ? colorMapping[newColor] : "-"
      })`
    );
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
            Sélectionner les critères qui vous correspondent
          </DialogDescription>
        </DialogHeader>

        {/* Sexe */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Sexe:</p>
          <div className="flex gap-2">
            {Object.keys(sexMapping).map((sex) => {
              const key = sex as SexKey;
              return (
                <Button
                  key={key}
                  variant={selectedSex === key ? "default" : "outline"}
                  onClick={() =>
                    setSelectedSex(selectedSex === key ? null : key)
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
          <p className="font-semibold mb-2">Âge:</p>
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

        {/* Couleur */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Robe:</p>
          <div className="flex gap-2">
            {Object.entries(colorMapping).map(([label, color]) => {
              const key = label as ColorKey;
              return (
                <button
                  type="button"
                  key={color}
                  className={cn(
                    "w-6 h-6 rounded-full border-2",
                    selectedColor === key ? "border-black" : "border-gray-300"
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    setSelectedColor(selectedColor === key ? null : key)
                  }
                  title={label}
                ></button>
              );
            })}
          </div>
        </div>

        {/* Motifs */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Motifs:</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(motifMapping).map((motif) => {
              const key = motif as MotifKey;
              return (
                <Button
                  key={key}
                  variant={selectedMotif === key ? "default" : "outline"}
                  onClick={() =>
                    setSelectedMotif(selectedMotif === key ? null : key)
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
