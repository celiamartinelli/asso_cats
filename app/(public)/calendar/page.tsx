"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  fetchEventByDate,
  fetchAllEvents,
  fetchAllEventDates,
} from "@/utils/actions";
import EventCard from "@/components/MadeInHand/Client/Card/EventCard";
import Image from "next/image";

interface Event {
  title_event: string;
  date_start: string;
  date_end?: string;
  subject?: string;
  taught_name?: string;
  event_url_img: string;
  location_address?: string;
  description?: string;
}

export default function CalendarPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventDates, setEventDates] = useState<Date[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Charger tous les événements au montage de la page
  useEffect(() => {
    async function loadEvents() {
      const events = await fetchAllEvents();
      console.log("Événements récupérés :", events);
      if (Array.isArray(events)) {
        setAllEvents(events);
      }
    }
    loadEvents();
  }, []);

  // Charger toutes les dates des événements pour le calendrier
  useEffect(() => {
    async function loadEventDates() {
      const dates = await fetchAllEventDates();
      if (Array.isArray(dates)) {
        setEventDates(dates.map((date) => new Date(date.date_start)));
      }
    }
    loadEventDates();
  }, []);

  // Charger les événements de la date sélectionnée
  useEffect(() => {
    if (date) {
      const formattedDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      fetchEventByDate(formattedDate).then((data: Event[] | null) => {
        if (Array.isArray(data) && data.length > 0) {
          setFilteredEvents(data);
          setSelectedEvent(data[0]); // Sélectionner le premier événement de la liste
        } else {
          setFilteredEvents([]);
          setSelectedEvent(null);
        }
      });
    } else {
      setFilteredEvents([]);
      setSelectedEvent(null);
    }
  }, [date]);

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="text-3xl font-bold mb-4">Calendrier</h1>
      <div className="flex">
        {/* Colonne principale : soit liste des événements, soit détails d'un événement */}
        <div className="w-3/4 ">
          {selectedEvent ? (
            // AFFICHAGE DES DÉTAILS D'UN ÉVÉNEMENT
            <div className="flex flex-col m-5">
              <div className="flex justify-start items-center">
                <button
                  className=" mb-2 px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => {
                    setSelectedEvent(null);
                    setDate(null); // Réinitialiser la date sélectionnée
                  }}
                >
                  ← Retour à la liste
                </button>
              </div>
              <div className="flex justify-center">
                <div className="flex mt-4 p-4 border rounded-lg shadow-lg justify-between w-4/5 items-center">
                  <div>
                    <p>{selectedEvent.title_event}</p>
                    <p>
                      Le{" "}
                      {new Date(selectedEvent.date_start)
                        .toLocaleDateString("fr-FR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                        .replace(/^\w/, (c) => c.toUpperCase())}
                    </p>
                    {selectedEvent.date_end &&
                      selectedEvent.date_end !== selectedEvent.date_start && (
                        <p>
                          et se termine le{" "}
                          {new Date(selectedEvent.date_end)
                            .toLocaleDateString("fr-FR", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                            .replace(/^\w/, (c) => c.toUpperCase())}
                        </p>
                      )}
                    <p>{selectedEvent.subject}</p>
                    <p>{selectedEvent.taught_name}</p>

                    <p>{selectedEvent.location_address}</p>
                  </div>
                  <div>
                    <Image
                      src={selectedEvent.event_url_img || "/placeholder.png"}
                      alt="event image"
                      width={300}
                      height={300}
                      className="rounded-lg m-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // AFFICHAGE DE LA LISTE DES ÉVÉNEMENTS
            <div className="m-5">
              <h2 className="text-2xl font-bold mt-4">Événements</h2>
              <div className="grid grid-cols-2 gap-4">
                {(date && filteredEvents.length > 0
                  ? filteredEvents
                  : allEvents
                ).map((event, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedEvent(event)}
                    className="cursor-pointer"
                  >
                    <div className=" p-4 shadow-md rounded-md">
                      <h3 className="text-xl font-bold">{event.title_event}</h3>
                      <p className="text-sm text-gray-600">
                        {event.date_start}
                      </p>
                      <p>{event.subject}</p>
                      <p className="text-gray-500">{event.location_address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Calendrier et détails de l'événement sélectionné */}
        <div className="w-1/4 flex flex-col items-center">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(day) => setDate(day || null)}
            className="rounded-md border"
            modifiers={{
              eventDay: eventDates, // Marquer les dates avec événements
            }}
            modifiersClassNames={{
              eventDay: "bg-black text-white rounded-full", // Style spécifique
            }}
          />
        </div>
      </div>
    </div>
  );
}
