import express from "express";
import { Transcript } from "../models/transcriptModel.js"

const router = express.Router();

router.get("/dashboard", async (request, response) => {
    try {
        const { student_number } = request.query;
        const transcript = await Transcript.findOne({ student_number: `${student_number}` });
        return response.status(200).json({ transcript, });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred" });
    }
});

router.get("/transcript/:student_number", async (request, response) => {
    try {
        const { student_number } = request.params;

        const transcript = await Transcript.findOne({ student_number: `${student_number}` });

        response.setHeader("Content-Type", transcript.contentType);
        response.send(transcript.pdf);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred while generating the PDF" });
    }
});

export default router;
