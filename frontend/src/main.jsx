import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SnackbarProvider>
                <BrowserRouter>
                    <UserProvider>
                        <App />
                    </UserProvider>     
                </BrowserRouter>          
        </SnackbarProvider>
    </StrictMode>
);
