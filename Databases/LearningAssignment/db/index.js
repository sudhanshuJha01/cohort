import mongoose from "mongoose";


mongoose.connect('mongodb+srv://sudhanshuJha01:Anshuman2009@cluster0.qijccr3.mongodb.net/courseSellingApp');


const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchased:[
       { 
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
    ]
});

const CourseSchema = new mongoose.Schema({
     title:String,
     discription:String,
     Price:Number,
     imageLink:String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

export {
    Admin,
    User,
    Course
}