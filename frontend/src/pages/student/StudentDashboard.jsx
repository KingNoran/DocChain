import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
};

export default StudentDashboard;
