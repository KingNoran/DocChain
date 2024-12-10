import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import RegistrarHeader from "../../components/RegistrarHeader.jsx";
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
        <div>
            <RegistrarHeader />
            <div id="body" className="flex flex-wrap  h-[85vh] w-[100vw] items-center p-[100px] gap-8">
                <div id="leftside" className="flex flex-col gap-5 w-[1100px]">
                    <div id="database" className="border-black border-[3px] px-[4rem] flex flex-col h-[500px] rounded-[50px]">
                        <div id="dbHeader" className="flex justify-between py-[1rem]">
                            <span className="font-bold text-[2rem]">Database</span>
                            <span className="font-semibold text-[1.5rem] underline hover:cursor-pointer">See More</span>
                        </div>
                        <ul id="dbBody" className="p-5 flex flex-col gap-5 justify-center overflow-y-scroll">
                            {loading ? <Spinner /> : (
                                students.map((student, index) => (
                                    <li key={student._id} className=" flex gap-5 w-full border-2 border-solid border-black rounded-lg p-4">
                                        <div>
                                            <FaUser className="text-7xl" />
                                        </div>
                                        <div>
                                            <p>Student number: {student.student_number}</p>
                                            <p>Student name: {student.name}</p>
                                            <p>Course: {student.course}</p>
                                        </div>  
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div id="SVP" className="border-black border-[3px] flex flex-col h-[200px] rounded-[50px]"></div>
                </div>
                <div id="rightside" className="flex flex-col gap-[55px] justify-between w-[500px]">
                    <div id="verifiedstudents" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                    <div id="studentinfo" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                    <div id="notice" className="border-black border-[3px] flex flex-col h-[200px] rounded-[40px]">

                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
}

export default RegistrarDashboard;