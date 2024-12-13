import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useSnackbar } from "notistack";
import Spinner from "../../components/Spinner";
import RegistrarHeader from "./RegistrarHeader";

const TranscriptInput = () => {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [studentNo, setStudentNo] = useState("");
    const [course, setCourse] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gwa, setGWA] = useState("");
    const { user } = useUser();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (!user || user.role !== "registrar") {
            navigate("/login");
            localStorage.setItem("user", null);
        }
    }, [user, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();

        setName(`${firstName} ${lastName}`);

        const transcriptData = {
            studentNo,
            name: `${firstName} ${lastName}`,
            course,
            address,
            birthDate,
            gwa,
        };
        setLoading(true);

        axios.post(`http://localhost:5555/registrar/transcript_input`, transcriptData)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Transcript created successfully", { variant: 'success' });
                setStudentNo("");
                setFirstName("");
                setLastName("");
                setAddress("");
                setBirthDate("");
                setCourse("");
                setGWA("");
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                enqueueSnackbar('Error making the transcript', { variant: 'error' });   
            });
    };

    return user && user.role === "registrar" ? (
        <div>
            <RegistrarHeader />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl m-16 font-semibold">Transcript Input Data</h1>
                <form
                    className="w-1/3 flex flex-col gap-5 items-center px-10 py-7 border-2 border-black rounded-lg"
                    onSubmit={handleSubmit}
                >
                    {loading ? <Spinner /> : ''}                          
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="text"
                        placeholder="Student number"
                        value={studentNo}
                        onChange={(event) =>
                            setStudentNo(event.target.value)
                        }
                        required
                    />
                    <div className="flex gap-3 w-full">
                        <input
                            className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                        />
                        <input
                            className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                        />
                    </div>
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="text"
                        placeholder="Course"
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        required
                    />
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="text"
                        placeholder="Date of Birth"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                    />
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="text"
                        placeholder="GWA"
                        value={gwa}
                        onChange={(event) => setGWA(event.target.value)}
                    />
                    <button
                        className="cursor-pointer w-36 bg-black text-white font-semibold text-2xl border-2 border-solid border-black px-7 py-1 rounded-3xl hover:bg-slate-900 hover:border-slate-900"
                        type="submit"
                        disabled={
                            loading ||
                            !address ||
                            !birthDate ||
                            !firstName ||
                            !lastName ||
                            !gwa
                        }
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
};

export default TranscriptInput;
