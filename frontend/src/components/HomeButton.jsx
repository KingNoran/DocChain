import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";

const Logo = ({ destination = "/" }) =>{
    return(
        <div>
            <Link to={destination}>
                <FaEthereum className="hover:text-[55px] md:hover:text-[75px] md:text-[70px] text-[50px] text-white border-white border-[1px] p-1 rounded-md"/>
            </Link>
        </div>
    );
}

export default Logo;