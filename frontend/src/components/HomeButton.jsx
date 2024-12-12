import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";

const Logo = ({ destination = "/" }) =>{
    return(
        <div>
            <h1 className="text-3xl font-extrabold" style={{ 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            letterSpacing: '0.5px'
                        }}>
                            Doc. Chain
                        </h1>
            <Link to={destination}>
                <FaEthereum className="hover:text-[55px] md:hover:text-[75px] md:text-[70px] text-[50px] text-white border-white border-[1px] p-1 rounded-md"/>
            </Link>
        </div>
    );
}

export default Logo;