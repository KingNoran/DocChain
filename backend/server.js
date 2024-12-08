import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, URL } from "./config.js";
import loginRoute from "./routes/loginRoute.js";
import createRoute from "./routes/createRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Index route
app.get("/", (request, response) => {
    console.log(request);
    return response
        .status(200)
        .send(
            "Welcome to DocChain! A Blockchain-supported Transcript Management System"
        );
});

// Login route
app.use("/login", loginRoute);
// Admin Create route
app.use("/admin", createRoute);

// Connect to database
mongoose
    .connect(URL)
    .then(() => {
        console.log("App connected to the database");

        app.listen(PORT, () => {
            console.log(`App running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
