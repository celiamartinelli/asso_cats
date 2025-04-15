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

// const sexes = ["Femelle", "Mâle"];
// const ages = ["Chatons", "Jeune chat", "Adulte", "Senior"];
// const colors = [
//   "#000000",
//   "#FFFFFF",
//   "#E5A823",
//   "#C4A484",
//   "#D1B280",
//   "#FFFFE0",
//   "#5C4033",
// ];
// const motifs = ["Tigrés", "Bi-Color", "Uni", "Tricolor/ Ecaille de tortue"];

const sexMapping = {
  Femelle: "female",
  Mâle: "male",
};

const ageMapping = {
  Chatons: "chatons",
  "Jeune chat": "jeune-chat",
  Adulte: "adulte",
  Senior: "senior",
  "Tous les âges": "tous-ages",
};

const colorMapping = {
  Noir: "#000000",
  Blanc: "#FFFFFF",
  Doré: "#E5A823",
  Beige: "#C4A484",
  Sable: "#D1B280",
  Crème: "#FFFFE0",
  Brun: "#5C4033",
};

const colorHexToEnum = {
  "#000000": "black",
  "#FFFFFF": "white",
  "#E5A823": "red", // ← à adapter selon ta base
  "#C4A484": "cinnamon",
  "#D1B280": "fawn",
  "#FFFFE0": "cream",
  "#5C4033": "chocolate",
};

const motifMapping = {
  Tigrés: "striped",
  "Bi-Color": "bi-color",
  Uni: "solid",
  "Ecaille de tortue": "tortoiseshell",
  Tricolor: "tri-color",
  "Tigré tacheté": "tortoiseshell",
  "Tous les motifs": "all-patterns",
};

export default function FilterModal({
  onApply,
}: {
  onApply: (filters: any) => void;
}) {
  const [selectedSex, setSelectedSex] = useState<string | null>(null); // Utilise directement les valeurs mappées
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMotif, setSelectedMotif] = useState<string | null>(null);

  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onApply({
      sex_cat: selectedSex,
      age_of_cat: selectedAge ? ageMapping[selectedAge] : null,
      coat_color: selectedColor ? colorHexToEnum[selectedColor] : null,
      pattern: selectedMotif ? motifMapping[selectedMotif] : null,
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

        {/* Sexe */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Sexe:</p>
          <div className="flex gap-2">
            {Object.keys(sexMapping).map((sex) => (
              <Button
                key={sex}
                variant={
                  selectedSex === sexMapping[sex] ? "default" : "outline"
                }
                onClick={() =>
                  setSelectedSex(
                    selectedSex === sexMapping[sex] ? null : sexMapping[sex]
                  )
                }
              >
                {sex}
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

        {/* Couleur */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Robe:</p>
          <div className="flex gap-2">
            {Object.entries(colorMapping).map(([label, color]) => (
              <button
                type="button"
                key={color}
                className={cn(
                  "w-6 h-6 rounded-full border-2",
                  selectedColor === color ? "border-black" : "border-gray-300"
                )}
                style={{ backgroundColor: color }}
                onClick={() =>
                  setSelectedColor(selectedColor === color ? null : color)
                }
                title={label}
              ></button>
            ))}
          </div>
        </div>

        {/* Motifs */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Motifs:</p>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(motifMapping).map((motif) => (
              <Button
                key={motif}
                variant={selectedMotif === motif ? "default" : "outline"}
                onClick={() =>
                  setSelectedMotif(motif === selectedMotif ? null : motif)
                }
              >
                {motif}
              </Button>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full mt-2 text-sm text-muted-foreground"
          onClick={() => {
            setSelectedSex(null);
            setSelectedAge(null);
            setSelectedColor(null);
            setSelectedMotif(null);
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
