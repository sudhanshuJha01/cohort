import express from "express";

const app = express();

app.use(express.json())

//here not any tupe of input validation that i am using so i need to validate my input such that i will not expose my backend to the client

app.get('/' , (req , res)=>{
    const list = req.body.list;
    // list =[1,2,3,4] this type of input is expected
    res.json({
        "list":list
    })
})

app.listen(3007 , ()=>{

    console.log("your server is on the PORT 3007"); 
})