import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    solar_panels: {
        type: String,
        required: true,
        unique: true
    },
    solar_inverter: {
        type: String,
        required: true,
        unique: true
    },
    Batteries: {
        type: String,
        required: true,
        unique: true
    },
    net_meters: {
        type: String,
        required: true,
        unique: true
    },
    Wires: {
        type: String,
        unique: true,
        required: true
    },
    Roof_Rails: {
        type: String,
        unique: true,
        required: true
    }
},{timestamps: true})

export const Category = mongoose.model("Category",categorySchema)