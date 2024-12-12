import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = ({ destination = "/" }) => {
    return (
        <div>
            <Link to={destination}>
                <FaArrowLeftLong className="text-2xl" />
            </Link>
        </div>
    );
};

export default BackButton;
