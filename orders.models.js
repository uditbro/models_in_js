import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    order_quantity: {
        type: String,
        required: true,
        unique: true
    },
    order_total: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true})

export const Orders = mongoose.model('Orders', orderSchema )