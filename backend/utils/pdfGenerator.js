import PDFDocument from "pdfkit";

export const generatePDF = (student, response) => {
    const MARGIN = 72; // 1 inch
    const PAGE_HEIGHT = 792; // Letter size (612 x 792)

    // Default
    const doc = new PDFDocument({
        size: "LETTER",
        font: "Times-Roman",
        fontSize: 12,
    });

    // Metadata
    doc.info = {
        Title: "Academic Transcript",
        Author: "DocChain",
        CreationDate: new Date(),
    };

    doc.pipe(response);

    // Title
    doc.font("Times-Bold")
        .fontSize(16)
        .text("Academic Transcript", { align: "center" });


    // Student number 
    doc.moveDown(2)
        .font("Times-Roman")
        .fontSize(12)
        .text(`Student Number: ${student.student_number}`);

    // Name
    doc.moveDown()
        .text(`Student Name: ${student.name}`);

    // Address
    doc.moveDown()
        .text("Address: 123 CAA Las Pinas City");

    // Date of Birth
    doc.moveDown()
        .text("Date of Birth: 3/23/2003");

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
        .text("GWA: 1.99");

    // Date Issued
    doc.font("Times-Roman")
        .fontSize(12)
        .text(`Date Issued: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, MARGIN, PAGE_HEIGHT - (MARGIN + 14));


    doc.end();
};
