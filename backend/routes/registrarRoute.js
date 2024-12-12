import express from "express";
import { Student } from "../models/studentAccountModel.js"

const router = express.Router();


router.get("/dashboard", async (request, response) => {
    try {
        const students = await Student.find({});

        return response.status(200).json({ data: students, });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred" });
    }
});

export default router;
