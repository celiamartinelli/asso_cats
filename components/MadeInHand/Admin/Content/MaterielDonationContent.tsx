import { useEffect, useState } from "react";
import {
  getMaterialDonationForm,
  updateMaterielDonationRequestReadStatus,
} from "@/utils/actions";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface Form {
  created_at: string;
  material_donation_form_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  description_material: string;
  read: boolean;
}

export default function MaterielDonationContent() {
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    async function fetchForms() {
      const data = await getMaterialDonationForm();
      setForms(data);
    }
    fetchForms();
  }, []);

  const handleSwitchChange = async (formId: string, newValue: boolean) => {
    if (!formId || typeof formId !== "string") {
      console.error("formId invalide :", formId);
      return;
    }

    const { success, error } = await updateMaterielDonationRequestReadStatus(
      formId,
      newValue
    );

    if (success) {
      setForms((prev) =>
        prev.map((v) =>
          v.material_donation_form_id === formId ? { ...v, read: newValue } : v
        )
      );
    } else {
      console.error("Erreur de mise à jour:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-xl font-bold">Formulaire de Dons de Matériel</h1>
      <div>
        {forms.length > 0 ? (
          <ul>
            {forms.map((form, index) => (
              <li key={index} className="m-2 p-4 border rounded">
                <label className="flex items-center gap-2 text-sm text-gray-700 justify-end ">
                  <Switch
                    checked={form.read}
                    onCheckedChange={(checked) =>
                      handleSwitchChange(
                        form.material_donation_form_id,
                        checked
                      )
                    }
                  />
                  Marquer comme lu
                </label>
                <p>
                  <strong>Name:</strong> {form.first_name} {form.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {form.email}
                </p>
                <p>
                  {" "}
                  <strong>Numéro:</strong>
                  {form.phone_number}
                </p>
                <p>
                  <strong>Message:</strong> {form.description_material}
                </p>
                <div className="flex items-center gap-2 text-sm justify-end">
                  <Button
                    key={index}
                    onClick={() => {
                      window.location.href = `mailto:${form.email}`;
                    }}
                  >
                    Répondre
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Pas de formulaire reçues.</p>
        )}
      </div>
    </div>
  );
}
