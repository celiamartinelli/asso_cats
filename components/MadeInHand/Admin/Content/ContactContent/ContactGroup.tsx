import React, { useEffect, useState } from "react";
import {
  getContactForm,
  updateContactRequestReadStatus,
} from "@/utils/actions";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { SUBJECT_CONTACT_LABELS } from "@/utils/enumLabels";

interface ContactForm {
  contact_form_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  read: boolean;
  created_at: string;
  message: string;
  subject: string;
}

export default function ContactGroup() {
  const [contactForm, setContactForm] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [expandedFormId, setExpandedFormId] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await getContactForm();
        console.log("Données reçues :", res);
        setContactForm(res);
      } catch (err: any) {
        console.error("Erreur de récupération :", err);
        setError(err.message || "Une erreur est survenue.");
      }
    };

    fetchForms();
  }, []);

  // Regrouper les formulaires par sujet
  const formsBySubject: Record<string, ContactForm[]> = contactForm.reduce(
    (acc: Record<string, ContactForm[]>, form: ContactForm) => {
      const subject = form.subject || "Autre";
      if (!acc[subject]) acc[subject] = [];
      acc[subject].push(form);
      return acc;
    },
    {}
  );

  // Changer l’état "lu"
  const handleSwitchChange = async (formId: string, newValue: boolean) => {
    const { success, error } = await updateContactRequestReadStatus(
      formId,
      newValue
    );
    if (success) {
      setContactForm((prev) =>
        prev.map((form) =>
          form.contact_form_id === formId ? { ...form, read: newValue } : form
        )
      );
    } else {
      console.error("Erreur:", error);
    }
  };

  console.log("Groupes par sujet :", formsBySubject);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Formulaires de contact</h1>

      {error && <p className="text-red-500">Erreur : {error}</p>}

      {selectedSubject ? (
        <>
          <button
            className="flex items-center gap-2 text-gray-600 hover:underline mb-4"
            onClick={() => setSelectedSubject(null)}
          >
            <ArrowLeft size={20} /> Retour aux sujets
          </button>
          <h2 className="text-xl font-semibold mb-2">
            {SUBJECT_CONTACT_LABELS[selectedSubject] || selectedSubject}
          </h2>
          <ul className="space-y-4">
            {formsBySubject[selectedSubject].map((form: ContactForm) => {
              const isOpen = expandedFormId === form.contact_form_id;
              return (
                <li
                  key={form.contact_form_id}
                  className="border p-4 rounded shadow-sm"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setExpandedFormId(isOpen ? null : form.contact_form_id)
                    }
                  >
                    <p>
                      <strong>Nom :</strong> {form.first_name} {form.last_name}
                    </p>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <Switch
                        checked={form.read}
                        onCheckedChange={(checked) =>
                          handleSwitchChange(form.contact_form_id, checked)
                        }
                      />
                      Marquer comme lu
                    </label>
                    <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>{" "}
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                      >
                        <p className="text-sm text-gray-500 mb-1">
                          Reçu le :{" "}
                          {new Date(form.created_at).toLocaleDateString(
                            "fr-FR"
                          )}
                        </p>
                        <p>
                          <strong>Nom :</strong> {form.first_name}{" "}
                          {form.last_name}
                        </p>
                        <p>
                          <strong>Email :</strong> {form.email}
                        </p>
                        <p>
                          <strong>Téléphone :</strong> {form.phone_number}
                        </p>
                        <p>
                          <strong>Message :</strong> {form.message}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Switch
                            checked={form.read}
                            onCheckedChange={(checked) =>
                              handleSwitchChange(form.contact_form_id, checked)
                            }
                          />
                          <span className="text-sm text-gray-700">
                            {form.read ? "Lu" : "Non lu"}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <ul className="space-y-4">
          {Object.entries(formsBySubject).map(([subject, forms]) => (
            <li
              key={subject}
              className="cursor-pointer border p-4 rounded flex justify-between items-center"
              onClick={() => setSelectedSubject(subject)}
            >
              <span className="font-semibold">
                {SUBJECT_CONTACT_LABELS[subject] || selectedSubject}
              </span>
              <span className="bg-black text-white text-sm rounded-full px-2 py-1">
                {forms.length}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
