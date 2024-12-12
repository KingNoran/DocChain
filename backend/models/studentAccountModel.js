import mongoose from 'mongoose'


const accountSchema = mongoose.Schema(
    {
        student_number: {
            type: String,
            required: true,
            unique: true,
        }, 
        name: { 
            type: String,
            required: true,
        },
        email: { 
            type: String, 
            required: true, 
            unique: true,
        },
        hashed_password: { 
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        role: { 
            type: String, 
            enum: ['student'],
            default: 'student',
        }
    },
    {
        timestamps: true,
    }
);


export const Student = mongoose.model('Student', accountSchema, 'student_accounts');