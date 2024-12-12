import { Link } from "react-router-dom";

const HomeButton = ({ destination = "/" }) =>{
    return(
        <div className="cursor-pointer ">
            <Link to={destination}>
                <h1 className="text-3xl font-extrabold" style={{ 
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                                letterSpacing: '0.5px'
                            }}>
                                Doc. Chain
                </h1>
            </Link>
        </div>
    );
}

export default HomeButton;