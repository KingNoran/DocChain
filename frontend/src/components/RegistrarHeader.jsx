import Logo from "./HomeButton";

const RegistrarHeader = () =>{
    const items = ["Home", "Messenger", "Database", "Request Process"];
    const navs = items.map(item=>
            <li className="text-[1rem] text-white text-bold hover:cursor-pointer hover:text-[1.1rem] font-semibold">{item}</li>
    );
    return(
        <div className="w-[100vw] h-[100px] bg-black flex justify-between items-center px-8">
            <div id="logo">
                <Logo destination="/dashboard/registrar"></Logo>
            </div>
            <ul id="nav" className="flex justify-evenly w-[550px] items-center">
                {navs}
            </ul>
        </div>
    );
}

export default RegistrarHeader;