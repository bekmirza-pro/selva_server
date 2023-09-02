
import mongoose, { Schema, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface IOrder extends Document {
    _id: string
    name: string
    phone_number:string
    product_id: string
    status: boolean
    created_at: Date
}

const OrderSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String
    },
    product_id: {
        type: String
    },
    status:{
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<IOrder>('Order', OrderSchema)
