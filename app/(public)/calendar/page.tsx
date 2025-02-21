"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  fetchEventByDate,
  fetchAllEvents,
  fetchAllEventDates,
} from "@/utils/actions";
import EventCard from "@/components/MadeInHand/Client/Card/EventCard";

interface Event {
  title_event: string;
  date_start: string;
  date_end?: string;
  subject: string;
  taught_name: string;
  event_url_img: string;
  location_address: string;
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
        {/* Liste des événements */}
        <div className="w-3/4">
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
                <EventCard
                  title={event.title_event}
                  date={event.date_start}
                  description={event.subject}
                  location={event.location_address}
                />
              </div>
            ))}
          </div>
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

          {/* Détails de l'événement sélectionné */}
          {selectedEvent && (
            <div className="mt-4 p-4 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{selectedEvent.title_event}</h3>
              <p className="text-sm text-gray-600">
                {selectedEvent.date_start}
              </p>
              <p>{selectedEvent.subject}</p>
              <p className="text-gray-500">{selectedEvent.location_address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
