import express from "express";
import {z} from 'zod';

const schema = z.object({
    email:z.string(),
    pass:z.string(),
    gender:z.literal("M").or(z.literal("F")),
})

const app = express();

app.use(express.json());

app.post('/',(req , res)=>{
    const email = req.body.email;
    const pass = req.body.pass;
    const gender = req.body.gender;
    
    const obj = {
        email,
        pass,
        gender
    }
    const validater = schema.safeParse(obj);
    res.send(validater)
})

app.listen(3010 , ()=>{
    console.log("out port is 3010");
    
})