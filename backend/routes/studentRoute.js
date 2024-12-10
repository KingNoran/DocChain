import express from "express";
import { generatePDF } from "../utils/pdfGenerator.js";

const router = express.Router();

router.get("/transcript", async (request, response) => {
    try {
        await generatePDF(request.data.user, response);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: "An error occurred while generating the PDF" });
    }
    
});

export default router;
