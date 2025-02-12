"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { fetchEventByDate, fetchAllEventDates } from "@/utils/actions";
import EventCard from "@/components/MadeInHand/Client/Card/EventCard";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<
    {
      title: string;
      date: string;
      description?: string;
      location?: string;
    }[]
  >([]);
  const [eventDates, setEventDates] = useState<Date[]>([]);

  // Charger toutes les dates où il y a des événements
  useEffect(() => {
    async function loadEventDates() {
      const dates = await fetchAllEventDates(); // Fonction qui récupère toutes les dates d'événements
      if (Array.isArray(dates)) {
        setEventDates(
          dates.map((event) => new Date(event.date_start)) // Convertir en objets Date
        );
      }
    }
    loadEventDates();
  }, []);

  // Charger les événements pour la date sélectionnée
  useEffect(() => {
    if (date) {
      const formattedDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];

      console.log("Date UTC corrigée envoyée à Supabase :", formattedDate);

      fetchEventByDate(formattedDate).then((data: any | null) => {
        console.log("Données récupérées :", data);
        if (Array.isArray(data) && data.length > 0) {
          setEvents(
            data.map((event) => ({
              title: event.title_event,
              date: event.date_start,
              description: event.subject || "Pas de description",
              location: event.location_addres || "Lieu non spécifié",
            }))
          );
        } else {
          setEvents([]); // Aucune donnée trouvée
        }
      });
    }
  }, [date]);

  return (
    <div className="flex min-h-screen flex-col   ">
      <h1 className="text-3xl font-bold mb-4 ">Calendrier</h1>
      <div className="flex ">
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mt-4 ">Date sélectionnée</h2>
          <p className="text-xl">{date ? date.toDateString() : "Aucune"}</p>

          {/* Affichage des événements */}
          {events.length > 0 ? (
            events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                location={event.location}
              />
            ))
          ) : (
            <p className="mt-4 p-4 bg-gray-100 rounded shadow">
              Aucun événement trouvé pour cette date.
            </p>
          )}
        </div>
        <div className="flex justify-center  w-1/4">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(day) => setDate(day || null)}
            className="rounded-md border"
            modifiers={{
              eventDay: eventDates, // Marquer les dates qui ont un événement
            }}
            modifiersClassNames={{
              eventDay: "bg-black text-white rounded-full", // Appliquer un style spécifique
            }}
          />
        </div>
      </div>
    </div>
  );
}
