import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import RegistrarDashboard from "./pages/registrar/RegistrarDashboard";
import CreateAccount from "./pages/admin/CreateAccount";
import Login from "./pages/Login";
import LoginAccount from "./pages/LoginAccount";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:role" element={<LoginAccount />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/registrar" element={<RegistrarDashboard />} />
            <Route path="/admin/create/:role" element={<CreateAccount />} />
        </Routes>
    );
};

export default App;
