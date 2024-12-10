import { useUser } from "../../context/UserContext";

const ViewTranscript = () => {
    const { user } = useUser();
    
    return (
        <div>
            <embed src={`http://localhost:5555/student/transcript/${user.student_number}`} type="application/pdf" className="w-full h-screen" />
        </div>
    );
};

export default ViewTranscript;
