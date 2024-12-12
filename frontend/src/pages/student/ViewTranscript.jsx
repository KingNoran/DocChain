import { useUser } from "../../context/UserContext";
import { useParams } from "react-router-dom";

const ViewTranscript = () => {
    const { user } = useUser();
    const { student_number } = useParams();
    
    return user.student_number === student_number ? (
        <div>
            <embed src={`http://localhost:5555/student/transcript/${user.student_number}`} type="application/pdf" className="w-full h-screen" />
        </div>
    ) : (
        <h1>Unauthorized</h1>
    );
};

export default ViewTranscript;
