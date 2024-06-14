import express from 'express';
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sudhanshuJha01:Anshuman2009@cluster0.qijccr3.mongodb.net/FirstusersAPP")

const User = mongoose.model('User', { name: String , email:String , password:String });

const app = express();

app.use(express.json())


app.post('/signup' , async (req , res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExist = await User.findOne({email:email})
    if(userExist) {
        res.json({
        msg: " user already exist in database"
    })
    return;
}

    const user = new User({
        name:name,
        email:email,
        password:password
    })
   
    user.save()
    res.json({
        msg:"user added in the database"
    })
})

app.listen(3000 , ()=>{
    console.log("our server is on PORT 3000");
    
})