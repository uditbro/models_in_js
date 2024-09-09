import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,"Email is needed"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required:[true,"Password is needed"],
        unique: true
    }
},{timestamps:true})

export const Account = mongoose.model("Account",accountSchema) 