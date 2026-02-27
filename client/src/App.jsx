import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";
import Layout from "./components/layout/Layout";

import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/Dashboard";
import AllEvents from "./pages/student/events/AllEvents";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateEvent from "./pages/admin/CreateEvent";

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/student" element={
              <Layout><StudentDashboard /></Layout>
            } />

            <Route path="/student/events" element={
              <Layout><AllEvents /></Layout>
            } />

            <Route path="/admin" element={
              <Layout><AdminDashboard /></Layout>
            } />

            <Route path="/admin/create" element={
              <Layout><CreateEvent /></Layout>
            } />

          </Routes>
        </BrowserRouter>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;