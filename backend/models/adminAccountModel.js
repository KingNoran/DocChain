import mongoose from 'mongoose'


const accountSchema = mongoose.Schema(
    {
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
        role: {
            type: String,
            enum: ['admin'],
            default: 'admin',
        }
    },
    {
        timestamps: true,
    }
);


export const Admin = mongoose.model('Admin', accountSchema, 'admin_accounts');