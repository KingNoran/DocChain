import HomeButton from "../../components/HomeButton";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useUser } from "../../context/UserContext";

const AdminHeader = () =>{
    const { user, logout } = useUser();
    
    const adminInfo = {
        name: user.name,
        role: user.role
    };

    return (
        <div className="text-white w-full h-[100px] bg-black flex justify-between items-center px-8">
            <div id="logo">
                <HomeButton destination="/admin/dashboard" />
            </div>
            <ul id="nav" className="flex justify-around w-96 items-center">
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to="/admin/create">
                        Create Account
                    </Link>
                </li>
                <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <Link to={''}>
                        TOR Process
                    </Link>
                </li>
                <li className="text-[1rem] text-black text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                    <div className="relative group">             
                        <FaUserCircle className="text-4xl text-white flex items-center space-x-2 hover:text-blue-600 transition-all" />
                        <div className="absolute right-0 w-64 p-4 mt-2 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <div className="flex flex-col space-y-2">
                                <span className="font-medium">Name: {adminInfo.name}</span>
                                <span className="text-sm text-gray-600">Role: {adminInfo.role.charAt(0).toUpperCase() + adminInfo.role.slice(1)}</span>
                                <span className="font-medium ml-auto cursor-pointer" onClick={logout}>Logout</span>
                            </div>
                        </div>
                    </div>
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

export default AdminHeader;