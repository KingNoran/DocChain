import express from "express";
import { Admin } from "../models/adminAccountModel.js";
import { Student } from "../models/studentAccountModel.js";
import { Registrar } from "../models/registrarAccountModel.js";
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

        return response.status(200).json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

// Router for Registrar Login
router.post("/registrar", async (request, response) => {
    try {
        if (!request.body.email || !request.body.password) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Find email in database
        const user = await Registrar.findOne({ email: request.body.email });

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

        return response.status(200).json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
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

        return response.status(200).json({
            message: "Login successful",
            user: {
                student_number: user.student_number,
                name: user.name,
                email: user.email,
                course: user.course,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

export default router;
