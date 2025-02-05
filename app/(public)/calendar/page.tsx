"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { fetchEventByDate } from "@/utils/actions";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [event, setEvent] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      console.log("Date UTC envoyée à Supabase :", formattedDate); // 'fr-CA' donne le format YYYY-MM-DD

      fetchEventByDate(formattedDate).then((data: any | null) => {
        console.log("Données récupérées :", data);
        if (data && data.title_event) {
          setEvent(data.title_event);
        } else {
          setEvent("Aucun événement trouvé pour cette date.");
        }
      });
    }
  }, [date]);

  return (
    <div className="flex min-h-screen flex-col   bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 ">Calendrier</h1>
      <div className="flex ">
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mt-4 bg-blue-400">
            Date sélectionnée
          </h2>
          <p className="text-xl">{date ? date.toDateString() : "Aucune"}</p>
          {event && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold">Événement :</h3>
              <p>{event}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center bg-green-400 w-1/4">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(day) => setDate(day || null)}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}
