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
      <div className="flex flex-wrap justify-center items-center p-8 gap-8 min-h-[85vh]">
        {/* Left Side */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {/* Pending Requests Card */}
          <div className="border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-bold mb-4">Number of Pending Requests</h2>
            <div className="bg-black text-white text-center py-2 rounded-full mb-2">
              1,495 out of 1,495 Students
            </div>
            <p className="text-center text-sm">Great Job! No Request Pending Left</p>
          </div>

          {/* Notification Card */}
          <div className="border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-bold mb-4">Notification from Registrar</h2>
            <div className="border-2 rounded-lg p-4">
              <p className="mb-2">Here is the copy of TOR (Justo)</p>
              <div className="border-2 rounded-lg p-2 flex items-center justify-between">
                <div>
                  <p className="font-medium">TOR_Justo.PDF</p>
                  <p className="text-xs text-gray-600">Student Num. 0200306906</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-full">
                  {/* Replace with actual file icon */}
                  <span className="text-gray-600">📄</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {/* List of Pending Requests Card */}
          <div className="border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-bold mb-4">List of Pending Requests</h2>
            <div className="border-2 rounded-lg p-4 h-48 flex items-center justify-center">
              <p className="text-center">Great Job! No Request Pending Left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : (
        <h1>Unauthorized</h1>
    );
};

export default AdminDashboard;
