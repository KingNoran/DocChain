import HomeButton from "../../components/HomeButton";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom"



const RegistrarHeader = () => {
    const navItems = ["Messenger", "Database"];
    const { user, logout } = useUser();
    
    const registrarInfo = {
        name: user.name,
        role: user.role
    };

    return (
        <header className="w-full bg-white py-4 px-8">
            <nav className="max-w-[1800px] mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <HomeButton destination="/registrar/dashboard">
                        <h1 className="text-3xl font-extrabold" style={{ 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            letterSpacing: '0.5px'
                        }}>
                            Doc. Chain
                        </h1>
                    </HomeButton>
                </div>

                {/* Navigation Items */}
                <ul className="flex items-center gap-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <button 
                                className="text-black font-semibold text-lg relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </button>
                        </li>
                    ))}
                    <li>
                            <Link to="/registrar/transcript_input" 
                                className="text-black font-semibold text-lg relative group"
                            >
                                Request Process
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                        </li>
                    <li className="text-[1rem] text-black text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">
                        <div className="relative group">             
                            <FaUserCircle className="text-4xl text-black flex items-center space-x-2 hover:text-blue-600 transition-all" />
                            <div className="absolute right-0 w-64 p-4 mt-2 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <div className="flex flex-col space-y-2">
                                    <span className="font-medium">Name: {registrarInfo.name}</span>
                                    <span className="text-sm text-gray-600">Role: {registrarInfo.role.charAt(0).toUpperCase() + registrarInfo.role.slice(1)}</span>
                                    <span className="font-medium ml-auto cursor-pointer" onClick={logout}>Logout</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default RegistrarHeader;