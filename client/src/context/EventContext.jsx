import { createContext, useState, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { id: 1, title: "Hackathon 2026", type: "Hackathon" },
    { id: 2, title: "Google Internship", type: "Internship" },
  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);