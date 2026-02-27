import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="w-64 bg-primary text-white p-6">
      <h2 className="text-xl font-bold mb-8">Campus Portal</h2>

      {user?.role === "student" && (
        <>
          <Link to="/student">Dashboard</Link>
          <Link to="/student/events" className="block mt-3">Events</Link>
        </>
      )}

      {user?.role === "admin" && (
        <>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/create" className="block mt-3">Create Event</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;