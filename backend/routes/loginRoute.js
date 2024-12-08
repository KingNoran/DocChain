import express from "express";
import { Admin } from "../models/adminAccountModel.js";
import { Student } from "../models/studentAccountModel.js";
import { comparePassword } from "../utils/passwordUtils.js";

const router = express.Router();

// Router for Admin Login
router.post("/admin", async (request, response) => {
    try {
        if (!request.body.email || !request.body.password) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Find email in database
        const user = await Admin.findOne({ email: request.body.email });

        if (!user) {
            return response.status(401).json({ message: "Invalid email" });
        }

        // Determine if password is correct
        const isMatch = await comparePassword(
            request.body.password,
            user.hashed_password
        );

        if (!isMatch) {
            return response.status(401).json({ message: "Invalid password" });
        }

        return response.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

// Router for Student Login
router.post("/student", async (request, response) => {
    try {
        if (!request.body.email || !request.body.password) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Find email in database
        const user = await Student.findOne({ email: request.body.email });

        if (!user) {
            return response.status(401).json({ message: "Invalid email" });
        }

        // Determine if password is correct
        const isMatch = await comparePassword(
            request.body.password,
            user.hashed_password
        );

        if (!isMatch) {
            return response.status(401).json({ message: "Invalid password" });
        }

        return response.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

export default router;
