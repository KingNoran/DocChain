import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import AdminHeader from "./AdminHeader";
import { useSnackbar } from "notistack";
import Spinner from "../../components/Spinner";

const CreateAccount = () => {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [studentNo, setStudentNo] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const { user } = useUser();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/login");
            localStorage.setItem("user", null);
        }
    }, [user, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role !== "student") {
            setStudentNo("");
            setCourse("");
        }

        setName(`${firstName} ${lastName}`);

        const userData = {
            studentNo,
            name: `${firstName} ${lastName}`,
            email,
            password,
            course,
        };
        setLoading(true);

        axios.post(`http://localhost:5555/admin/create/${role}`, userData)
            .then(() => {
                setLoading(false);
                enqueueSnackbar(`${role.charAt(0).toUpperCase() + role.slice(1)} account created successfully`, { variant: 'success' });
                setStudentNo("");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setCourse("");
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                enqueueSnackbar('Error making the account', { variant: 'error' });   
            });
    };

    return user && user.role === "admin" ? (
        <div>
            <AdminHeader />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl m-16 font-semibold">Create Account</h1>
                <form
                    className="w-1/3 flex flex-col gap-5 items-center px-10 py-7 border-2 border-black rounded-lg"
                    onSubmit={handleSubmit}
                >
                    {loading ? <Spinner /> : ''}
                    <select
                        className="p-1 focus:outline-none mr-auto text-xl rounded-3xl cursor-pointer"
                        value={role}
                        onChange={(event) => {
                            setRole(event.target.value);
                            setStudentNo("");
                            setFirstName("");
                            setLastName("");
                            setEmail("");
                            setPassword("");
                            setCourse("");
                        }}
                    >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="registrar">Registrar</option>
                    </select>
                    {role === "student" ? (
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
                    ) : (
                        ""
                    )}
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
                    {role === "student" ? (
                        <input
                            className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                            type="text"
                            placeholder="Course"
                            value={course}
                            onChange={(event) => setCourse(event.target.value)}
                            required
                        />
                    ) : (
                        ""
                    )}
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="px-3 py-1.5 border-2 w-full border-black rounded-3xl"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        className="cursor-pointer w-36 bg-black text-white font-semibold text-2xl border-2 border-solid border-black px-7 py-1 rounded-3xl hover:bg-slate-900 hover:border-slate-900"
                        type="submit"
                        disabled={
                            loading ||
                            !email ||
                            !password ||
                            !firstName ||
                            !lastName
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

export default CreateAccount;
