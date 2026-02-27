import { useEvents } from "../../../context/EventContext";

const AllEvents = () => {
  const { events } = useEvents();

  return (
    <>
      <h2 className="text-2xl font-bold text-primary mb-6">
        All Events
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 shadow rounded">
            <h3>{event.title}</h3>
            <p className="text-gray-500">{event.type}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEvents;