"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  fetchEventByDate,
  fetchAllEvents,
  fetchAllEventDates,
} from "@/utils/actions";

import PageHeader from "@/components/MadeInHand/PageHeader";

interface Event {
  title_event: string;
  date_start: string;
  date_end?: string;
  subject?: string;
  taught_name?: string;
  event_url_img: string;
  location_address?: string;
  description?: string;
  is_reccuring?: boolean;
  reccuring_type?: "yearly" | "monthly" | "weekly";
}

export default function CalendarPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventDates, setEventDates] = useState<Date[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // 🔹 Charger tous les événements sur 1 an à partir d’aujourd’hui
  useEffect(() => {
    async function loadEvents() {
      const events = await fetchAllEvents();
      if (!Array.isArray(events)) return;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const oneYearLater = new Date(today);
      oneYearLater.setFullYear(today.getFullYear() + 1);

      // ➜ On garde seulement les événements entre aujourd’hui et dans 1 an
      const upcomingEvents = events.filter((ev) => {
        const eventDate = new Date(ev.date_start);
        return eventDate >= today && eventDate <= oneYearLater;
      });

      // Trier par date pour l’affichage
      upcomingEvents.sort(
        (a, b) =>
          new Date(a.date_start).getTime() - new Date(b.date_start).getTime()
      );

      setAllEvents(upcomingEvents);
    }

    loadEvents();
  }, []);

  // 🔹 Charger toutes les dates d’événements (pour le calendrier)
  useEffect(() => {
    async function loadEventDates() {
      const dates = await fetchAllEventDates();
      if (Array.isArray(dates))
        setEventDates(dates.map((d) => new Date(d.date_start)));
    }
    loadEventDates();
  }, []);

  // 🔹 Charger les événements d’une date sélectionnée
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
          setSelectedEvent(data[0]);
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

  // 🔹 Obtenir le mois en français
  const getMonthName = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("fr-FR", { month: "long", year: "numeric" });
  };

  // 🔹 Événements à afficher
  const eventsToDisplay =
    date && filteredEvents.length ? filteredEvents : allEvents;

  // 🔹 Regrouper par mois
  const eventsByMonth: { [month: string]: Event[] } = {};
  eventsToDisplay.forEach((event) => {
    const month = getMonthName(event.date_start);
    if (!eventsByMonth[month]) eventsByMonth[month] = [];
    eventsByMonth[month].push(event);
  });

  return (
    <div className="w-full min-h-screen flex flex-col items-center dark:bg-black">
      <PageHeader pageKey="calendar" />

      <div className="flex flex-col lg:flex-row gap-6 m-12 w-full">
        {/* Calendrier */}
        <div className="w-full rounded-lg dark:bg-zinc-900 shadow-sm lg:ml-6 md:w-1/3 lg:w-1/3 m-10 sm:mx-auto sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
            Sélectionner une date
          </h2>
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(day) => setDate(day || null)}
            className="rounded-md border border-gray-300 shadow-sm flex justify-center bg-white dark:bg-zinc-950"
            modifiers={{ eventDay: eventDates }}
            modifiersClassNames={{
              eventDay:
                "bg-zinc-200 text-zinc-500rounded-full dark:bg-accent dark:text-zinc-650",
            }}
          />
        </div>

        {/* Liste ou card individuelle */}
        <div className="md:w-3/4 lg:w-full flex flex-col gap-8 m-10 ">
          {selectedEvent ? (
            /* Card individuelle */
            <div className="bg-white w-full dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto p-6  gap-6">
              <div className="flex-1 flex flex-col justify-between ">
                <div>
                  <button
                    className="text-sm text-gray-600 underline mb-2 dark:text-gray-400"
                    onClick={() => {
                      setSelectedEvent(null);
                      setDate(null);
                    }}
                  >
                    ← Retour à la liste
                  </button>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedEvent.title_event}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full">
                      📅{" "}
                      {new Date(selectedEvent.date_start).toLocaleDateString(
                        "fr-FR"
                      )}
                      {selectedEvent.date_end &&
                        selectedEvent.date_end !== selectedEvent.date_start && (
                          <>
                            {" "}
                            →{" "}
                            {new Date(
                              selectedEvent.date_end
                            ).toLocaleDateString("fr-FR")}
                          </>
                        )}
                    </span>
                    {selectedEvent.location_address && (
                      <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full">
                        📍 {selectedEvent.location_address}
                      </span>
                    )}
                  </div>
                  {selectedEvent.subject && (
                    <p className="italic text-gray-500 dark:text-gray-400 mb-3">
                      {selectedEvent.subject}
                    </p>
                  )}
                  {selectedEvent.description && (
                    <p className="text-gray-700 dark:text-gray-300 max-h-64 overflow-auto">
                      {selectedEvent.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Liste des cards regroupées par mois */
            <div className="flex flex-col gap-8">
              {Object.keys(eventsByMonth).map((month) => (
                <div key={month}>
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">
                    {month}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {eventsByMonth[month].map((event, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedEvent(event)}
                        className="cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden flex flex-col md:flex-row"
                      >
                        <div className="p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                              {event.title_event}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full">
                                📅{" "}
                                {new Date(event.date_start).toLocaleDateString(
                                  "fr-FR"
                                )}
                              </span>
                              {event.location_address && (
                                <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">
                                  📍 {event.location_address}
                                </span>
                              )}
                            </div>
                            {event.subject && (
                              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                                {event.subject}
                              </p>
                            )}
                            {event.description && (
                              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                                {event.description}
                              </p>
                            )}
                          </div>
                          <button className="mt-2 text-sm text-blue-600 dark:text-blue-400 underline self-start">
                            Voir détails →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
