import mongoose from 'mongoose'

const userSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accountSchema'
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true})

export const User = mongoose.models('User', userSchema) 