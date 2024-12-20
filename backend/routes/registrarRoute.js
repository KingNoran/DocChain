import express from "express";
import { Student } from "../models/studentAccountModel.js";
import { Transcript } from "../models/transcriptModel.js";
import { generatePDF } from "../utils/pdfGenerator.js";

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

router.post("/transcript_input", async (request, response) => {
    try {
        // Ensure that input is not empty
        if (
            !request.body.studentNo ||
            !request.body.name ||
            !request.body.address ||
            !request.body.birthDate ||
            !request.body.course ||
            !request.body.gwa
        ) {
            return response
                .status(400)
                .json({ message: "Input field is empty." });
        }
        const existingTranscript = await Transcript.findOne({ student_number: request.body.studentNo }); 
        if (existingTranscript) { 
            return response.status(409).json({ message: 'Transcript already exists in database.' });
        }
        
        const pdfBuffer = await generatePDF(request.body);
        const newTranscript = {
            student_number: request.body.studentNo,
            pdf: pdfBuffer,
            contentType: "application/pdf",
        };
        
        const transcript = await Transcript.create(newTranscript);
        return response.status(201).send(transcript);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred" });
    }
});


export default router;
