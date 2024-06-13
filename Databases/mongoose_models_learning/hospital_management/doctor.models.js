import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    expirenceInYear:{
        type:Number,
        default:0
    },
    workInHospitals:[{
        type:mongoose.Schema.type,
        ref:"Hospital"
    }],
    
},{timestamps:true});

export const Doctor = mongoose.model("Doctor" , doctorSchema)