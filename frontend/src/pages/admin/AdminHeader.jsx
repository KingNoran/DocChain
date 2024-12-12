import Logo from "../../components/HomeButton";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const StudentHeader = () =>{

    return(
        <div className="w-full h-[100px] bg-black flex justify-between items-center px-8">
            <div id="logo">
                <Logo destination="/admin/dashboard"></Logo>
            </div>
            <ul id="nav" className="flex justify-around w-96 items-center">
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to={''}>
                        Create Account
                    </Link>
                </li>
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to={''}>
                        TOR Process
                    </Link>
                </li>
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to={''}>
                        <FaUserCircle className="text-4xl" />
                    </Link>
                </li>
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to={''}>
                        <IoIosNotifications className="text-4xl" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default StudentHeader;