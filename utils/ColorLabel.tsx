// utils/ColorLabel.tsx
import React from "react";

const enumToHex: Record<string, string> = {
  black: "#000000",
  white: "#FFFFFF",
  "blue-grey": "#666670",
  cinnamon: "#753800",
  chocolate: "#502A05",
  cream: "#f7f0de",
  sand: "#D0B280",
  red: "#e29024",
};

// Optionnel : noms lisibles pour l’utilisateur
const COAT_COLOR_LABELS: Record<string, string> = {
  black: "Noir",
  white: "Blanc",
  "blue-grey": "Bleu/Gris",
  cinnamon: "Cannelle",
  chocolate: "Chocolat",
  cream: "Crème",
  sand: "Sable",
  red: "Roux",
};

interface ColorLabelProps {
  colors: string | string[];
  className?: string;
}

export default function ColorLabel({ colors, className }: ColorLabelProps) {
  const colorArray = Array.isArray(colors) ? colors : [colors];

  return (
    <div className={`flex flex-wrap gap-2 ${className || ""}`}>
      {colorArray.map((color) => (
        <span key={color} className="inline-flex items-center gap-1">
          <span
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: enumToHex[color] || color }}
          />
          <span className="text-sm">{COAT_COLOR_LABELS[color] || color}</span>
        </span>
      ))}
    </div>
  );
}
