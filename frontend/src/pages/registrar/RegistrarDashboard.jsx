import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import RegistrarHeader from "./RegistrarHeader.jsx";
import Spinner from "../../components/Spinner.jsx";

const RegistrarDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const { user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== "registrar") {
            localStorage.setItem("user", null);
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
		setLoading(true);
		axios.get('http://localhost:5555/registrar/dashboard')
			.then(response => {
				setStudents(response.data.data);
				setLoading(false);
			})
			.catch(error => {
				console.log(error); 
				setLoading(false);
			});
	}, []); 

    return user && user.role === "registrar" ? (
        <div className="min-h-screen bg-white">
            <RegistrarHeader />
            <div className="flex flex-wrap p-8 gap-8 max-w-[1800px] mx-auto">
                {/* Left Side */}
                <div className="flex-1 min-w-[600px] flex flex-col gap-6">
                    {/* Database Section */}
                    <div className="border-2 border-black rounded-[25px] p-9">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">DataBase</h2>
                            <button className="text-lg underline">See More</button>
                        </div>
                        <div className="space-y-5 max-h-[500px] overflow-y-auto">
                            {loading ? <Spinner /> : (
                                students.map((student) => (
                                    <div key={student._id} className="flex items-center gap-4 border-2 border-black rounded-[15px] p-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                            <FaUser className="text-4xl" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold">{student.name}</h3>
                                            <p>Program: {student.course}</p>
                                            <p>Electives: Blockchain Technology</p>
                                            <p className="text-sm text-gray-600">Last Student Information Update: {new Date(student.updatedAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-[400px] flex flex-col gap-6">
                    {/* Verified Students Counter */}
                    <div className="border-2 border-black rounded-[25px] p-6">
                        <h2 className="text-xl font-bold mb-4">Number of Verified Students</h2>
                        <div className="text-center">
                            <p className="text-2xl font-bold">1,540 out of 1,976</p>
                            <p>Students</p>
                        </div>
                    </div>

                    {/* Updated Student Information */}
                    <div className="border-2 border-black rounded-[25px] p-6">
                        <h2 className="text-xl font-bold mb-4">Updated Student Information</h2>
                        <div className="space-y-2">
                            {students.slice(0, 5).map((student) => (
                                <div key={student._id} className="flex items-center gap-5">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <FaUser className="text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{student.name}</p>
                                        <p className="text-sm text-gray-600">Last Student Information Update: {new Date(student.updatedAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
}

export default RegistrarDashboard;