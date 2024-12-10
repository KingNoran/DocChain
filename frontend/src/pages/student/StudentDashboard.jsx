import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom"
import StudentHeader from "./StudentHeader";
import metamaskIcon from "../../assets/metamask-icon.svg";

const StudentDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.role === "student") {
            localStorage.setItem("user", null);
            navigate("/login");
        }
    }, [user, navigate]);

    return user && user.role === "student" ? (
        <div> 
            <StudentHeader />
            <div className="px-36 py-8 flex gap-8">
                
                <div className="flex flex-col justify-center items-center border-2 border-black border-solid rounded-lg w-full h-[77vh] max-w-[100vh]">
                    <h1 className="text-3xl">Welcome {`${user.name}`}!</h1>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col justify-center items-center border-2 border-black border-solid rounded-lg w-full h-[30vh] max-w-[60vh]">
                        <Link>
                        </Link>
                        <p className="text-2xl font-semibold">MetaMask</p>
                        <img src={metamaskIcon} className="max-w-[20vh]" />
                    </div>
                    <div className="flex justify-center items-center border-2 border-black border-solid rounded-lg w-screen h-[20vh] max-w-[60vh]">
                        <Link to="/student/transcript" className="flex items-center gap-2 font-semibold">
                            <FaFile className="text-6xl" />
                            <p className="text-2xl">View TOR</p>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-black border-solid rounded-lg w-screen h-[20vh] max-w-[60vh]"></div>
                    
                </div>
            </div>
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
};

export default StudentDashboard;
