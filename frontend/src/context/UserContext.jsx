import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { role } = useParams();

    const login = async (email, password, role) => {
        const credentials = {
            email,
            password,
        };

        setLoading(true);

        try {
            const response = await axios.post(
                `http://localhost:5555/login/${role}`,
                credentials
            );
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            enqueueSnackbar("Logged in Successfully", { variant: "success" });
            navigate(`/${role}/dashboard`);
        } catch (error) {
            console.error(error);
            const errorMessage =
                error.response?.data?.message || "An error occurred.";
            enqueueSnackbar(errorMessage, { variant: "error" });
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    };

    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true); 
            
            if (!role) {
                setLoading(false);
                return;
            }
            
            try {
                const response = await axios.get(`http://localhost:5555/login/${role}`);
                if (response.data.user) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error(error);
                setUser(null); 
            } finally {
                setLoading(false);
            }
        };
    
        checkAuth();
    }, [role]);

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};
