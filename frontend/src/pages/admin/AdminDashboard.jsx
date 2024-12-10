import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/login");
            localStorage.setItem("user", null);
        }
    }, [user, navigate]);

    return user && user.role === "admin" ? (
        <div>
            <AdminHeader />
            <div id="body" className="flex flex-wrap flex-row h-[85vh] w-[100vw] items-center p-[100px] gap-8">
                <div id="leftside" className="flex flex-col gap-5">

                </div>
                <div id="rightside" className="flex flex-col gap-[55px] justify-between">
                    
                </div>
            </div>
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
};

export default AdminDashboard;
