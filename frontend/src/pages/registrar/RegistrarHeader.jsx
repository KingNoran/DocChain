import Logo from "../../components/HomeButton";


const RegistrarHeader = () => {
    const navItems = ["Messenger", "Database", "Request Process"];

    return (
        <header className="w-full bg-white py-4 px-8">
            <nav className="max-w-[1800px] mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Logo destination="/registrar/dashboard">
                        <h1 className="text-3xl font-extrabold" style={{ 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            letterSpacing: '0.5px'
                        }}>
                            Doc. Chain
                        </h1>
                    </Logo>
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
                </ul>
            </nav>
        </header>
    );
}

export default RegistrarHeader;