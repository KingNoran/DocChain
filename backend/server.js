import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import loginRoute from "./routes/loginRoute.js";
import createRoute from "./routes/createRoute.js";

dotenv.config();

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
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("App connected to the database");

        app.listen(process.env.PORT || 5555, () => {
            console.log(`App running on port: ${process.env.PORT || 5555}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
