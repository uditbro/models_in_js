import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true,
        unique: true
    },
    employee_id: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps:true})

export const Admin = mongoose.model('Admin', adminSchema)