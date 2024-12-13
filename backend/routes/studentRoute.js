import express from "express";
import { generatePDF } from "../utils/pdfGenerator.js";
import { Student } from "../models/studentAccountModel.js"

const router = express.Router();

router.get("/transcript/:student_number", async (request, response) => {
    try {
        const { student_number } = request.params;

        const student = await Student.findOne({ student_number: `${student_number}` });

        response.setHeader("Content-Type", "application/pdf");
        response.setHeader("Content-Disposition", `inline; filename=transcript_${student_number}.pdf`);

        generatePDF(student, response);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred while generating the PDF" });
    }
});

export default router;
