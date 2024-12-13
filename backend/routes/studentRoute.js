import express from "express";
import { generatePDF } from "../utils/pdfGenerator.js";
import { Student } from "../models/studentAccountModel.js";
import { Transcript } from "../models/transcriptModel.js";

const router = express.Router();

router.get("/dashboard/:studentNumber", async (request, response) => {
    try {
        const { studentNumber } = request.params;
        const transcript = await Transcript.findOne({ student_number: studentNumber });
        if (!transcript) {
            return response.status(404).json({ message: "Transcript not found" });
        }
        return response.status(200).json({ data: transcript, });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
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
