import express from "express";
import { Admin } from "../models/adminAccountModel.js";
import { Student } from "../models/studentAccountModel.js";
import { Registrar } from "../models/registrarAccountModel.js";
import { hashPassword } from "../utils/passwordUtils.js";

const router = express.Router();

// Router for Create Student Account
router.post("/create/student", async (request, response) => {
    try {
        // Ensure that input is not empty
        if (
            !request.body.student_number ||
            !request.body.name ||
            !request.body.email ||
            !request.body.hashed_password ||
            !request.body.course
        ) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Encrypt the password
        const password_hash = await hashPassword(request.body.hashed_password);

        // Create object
        const newStudent = {
            student_number: request.body.student_number,
            name: request.body.name,
            email: request.body.email,
            hashed_password: password_hash,
            course: request.body.course,
            role: "student",
        };

        // Save to database
        const student = await Student.create(newStudent);

        return response.status(201).json(student);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

// Router for Create Registrar Account
router.post("/create/registrar", async (request, response) => {
    try {
        // Ensure that input is not empty
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.hashed_password
        ) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Encrypt the password
        const password_hash = await hashPassword(request.body.hashed_password);

        // Create object
        const newRegistrar = {
            name: request.body.name,
            email: request.body.email,
            hashed_password: password_hash,
            role: "registrar",
        };

        // Save to database
        const registrar = await Registrar.create(newRegistrar);

        return response.status(201).json(registrar);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

// Router for Create Admin Account
router.post("/create/admin", async (request, response) => {
    try {
        // Ensure that input is not empty
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.hashed_password
        ) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }

        // Encrypt the password
        const password_hash = await hashPassword(request.body.hashed_password);

        // Create object
        const newAdmin = {
            name: request.body.name,
            email: request.body.email,
            hashed_password: password_hash,
            role: "admin",
        };

        // Save to database
        const admin = await Admin.create(newAdmin);

        return response.status(201).json(admin);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "An error occurred." });
    }
});

export default router;
