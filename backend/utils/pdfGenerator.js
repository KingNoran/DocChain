import PDFDocument from "pdfkit";

export const generatePDF = (student) => {
    const MARGIN = 72; // 1 inch
    const PAGE_HEIGHT = 792; // Letter size (612 x 792)
    const buffers = [];

    // Default
    const doc = new PDFDocument({
        size: "LETTER",
        font: "Times-Roman",
        fontSize: 12,
    });

    doc.on("data", buffers.push.bind(buffers));
    
    return new Promise((resolve, reject) => { 
        doc.on("end", () => { 
            const pdfBuffer = Buffer.concat(buffers); 
            resolve(pdfBuffer); 
        });
        // Metadata
        doc.info = {
            Title: "Academic Transcript",
            Author: "DocChain",
            CreationDate: new Date(),
        };
        // Title
        doc.font("Times-Bold")
            .fontSize(16)
            .text("Academic Transcript", { align: "center" });
        // Student number 
        doc.moveDown(2)
            .font("Times-Roman")
            .fontSize(12)
            .text(`Student Number: ${student.studentNo}`);
        // Name
        doc.moveDown()
            .text(`Student Name: ${student.name}`);
        // Address
        doc.moveDown()
            .text(`Address: ${student.address}`);
        // Date of Birth
        doc.moveDown()
            .text(`Date of Birth: ${student.birthDate}`);
        // Course
        doc.moveDown()
            .text(`Course: ${student.course}`);
        // Summary 
        doc.moveDown(2)
            .font("Times-Bold")
            .text("Academic Summary", { align: "center" });
        doc.moveDown(2)
            .font("Times-Roman")
            .fontSize(12)
            .text(`GWA: ${student.gwa}`);
        // Date Issued
        doc.font("Times-Roman")
            .fontSize(12)
            .text(`Date Issued: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, MARGIN, PAGE_HEIGHT - (MARGIN + 14));
        doc.end();
    });
};
