import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const LoginAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { role } = useParams();
    const { login, logout, loading } = useUser();  

    // Reset user
    useEffect(() => {
        logout;
    }, []);


    const handleLogin = (event) => {
        event.preventDefault();
        
        if (!email || !password) {
            enqueueSnackbar("Invalid Input", { variant: "error" });
            return;
        }
 
        login(email, password, role);    
    };

    return (
        <div className="p-5">
            <BackButton destination="/login" />
            
            <div className="flex flex-col justify-center items-center">
                {loading ? <Spinner /> : ''}

                <h1 className="text-4xl m-16 font-semibold">
                    Welcome {role.charAt(0).toUpperCase() + role.slice(1)}!
                </h1>
                <form className="flex flex-col gap-5 items-center px-10 py-7 border-2 border-black rounded-lg" onSubmit={handleLogin}>
                    <input
                        className="px-3 py-1.5 border-2 w-72 border-black rounded-3xl"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="px-3 py-1.5 border-2 w-72 border-black rounded-3xl"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        className="cursor-pointer w-36 bg-black text-white font-semibold text-2xl border-2 border-solid border-black px-7 py-1 rounded-3xl hover:bg-slate-900 hover:border-slate-900"
                        type="submit"
                        disabled={loading || !email || !password}
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginAccount;
