import mongoose from "mongoose";
import { Product } from "./product.model";

const orderItemsSchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]                                     //for this we need to create mini model lets create that
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"

    }

},{timestamps:true})

export const Order = mongoose.model("Order" , orderSchema)