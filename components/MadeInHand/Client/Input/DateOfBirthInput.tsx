import { useState } from "react";

interface FormData {
  date_of_birth: string;
}
interface AdoptionFormData {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  occupation: string;
  type_of_housing: string;
  living_area: string;
  have_animals: boolean;
  wich_ones: string;
  allergies_description: string;
  sterelization_opinion: string;
  house_description: string;
  why_adopt: string;
  have_you_garden: string[];
  cat_id: string;
}

interface DateOfBirthInputProps {
  formData: AdoptionFormData;
  setFormData: React.Dispatch<React.SetStateAction<AdoptionFormData>>;
  className?: string;
}

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({
  formData,
  setFormData,
}) => {
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0]; // Date d'aujourd'hui au format YYYY-MM-DD
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18); // Il y a 18 ans
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100); // Exemple : On empêche les dates trop anciennes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const minValidDate = new Date();
    minValidDate.setFullYear(minValidDate.getFullYear() - 18);

    if (selectedDate > minValidDate) {
      setError("Vous devez avoir au moins 18 ans.");
    } else {
      setError("");
      setFormData({ ...formData, date_of_birth: e.target.value });
    }
  };

  return (
    <div className="flex flex-col my-4">
      <label htmlFor="date_of_birth" className="font-medium mb-1">
        Date de naissance:
      </label>
      <input
        className="mb-2 p-1 h-10 rounded-sm border border-gray-300 "
        type="date"
        id="date_of_birth"
        name="date_of_birth"
        value={formData.date_of_birth}
        min={minDate.toISOString().split("T")[0]} // Optionnel : éviter les dates trop anciennes
        max={maxDate.toISOString().split("T")[0]} // Bloque les utilisateurs de moins de 18 ans
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default DateOfBirthInput;
