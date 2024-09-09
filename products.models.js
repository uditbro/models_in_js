import mongoose from 'mongoose'

const productSchema  = new mongoose.Schema({
   model_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: categorySchema
    },
    quantity: {
        type: String,
        required: true,
        unique: true
    }
    
},{timestamps: true})

export const Products = mongoose.models('Products',productSchema)