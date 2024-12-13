import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import RegistrarDashboard from "./pages/registrar/RegistrarDashboard";
import CreateAccount from "./pages/admin/CreateAccount";
import Login from "./pages/Login";
import LoginAccount from "./pages/LoginAccount";
import ViewTranscript from "./pages/student/ViewTranscript";
import TranscriptInput from "./pages/registrar/TranscriptInput";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:role" element={<LoginAccount />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/registrar/dashboard" element={<RegistrarDashboard />} />
            <Route path="/admin/create" element={<CreateAccount />} />
            <Route path="/student/transcript/:student_number" element={<ViewTranscript />} />
            <Route path="/registrar/transcript_input" element={<TranscriptInput />} />
        </Routes>
    );
};

export default App;