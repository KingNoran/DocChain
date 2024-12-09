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
            enum: ['registrar'],
            default: 'registrar',
        }
    },
    {
        timestamps: true,
    }
);


export const Registrar = mongoose.model('Registrar', accountSchema, 'registrar_accounts');