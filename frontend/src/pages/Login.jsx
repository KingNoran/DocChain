import { useEffect } from "react";
import OptionCard from "../components/login/OptionCard";
import { RiAdminLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { LuUserPen } from "react-icons/lu";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";    
import { useUser } from "../context/UserContext";

const Login = () => {
    const { logout} = useUser();

    // Reset user
    useEffect(() => {
        logout();
    }, []);

    return (
        <div className="p-5">
            <BackButton />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl m-16 font-semibold">
                    Welcome to Doc. Chain!
                </h1>
                <div className="flex gap-5 justify-center items-center">
                    <Link to={"/login/student"}>
                        <OptionCard role="student" Icon={PiStudentBold} />
                    </Link>
                    <Link to={"/login/admin"}>
                        <OptionCard role="admin" Icon={RiAdminLine} />
                    </Link>
                    <Link to={"/login/registrar"}>
                        <OptionCard role="registrar" Icon={LuUserPen} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
