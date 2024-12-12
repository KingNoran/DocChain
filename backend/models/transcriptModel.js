import mongoose from "mongoose";


const transcriptSchema = mongoose.Schema(
    {
        student_number: {
            type: String,
            required: true,
            unique: true,
        }, 
        pdf: { 
            type: Buffer, 
            required: true 
        }, 
        contentType: { 
            type: String, 
            required: true 
        }
    },
    {
        timestamps: true,
    }
);


export const Transcript = mongoose.model('Transcript', transcriptSchema, 'academic_transcripts');