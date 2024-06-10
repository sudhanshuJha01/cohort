import express from 'express'

const app = express();

const authCheckup = (req , res , next)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !="sudhanshuJha01" || password !="pass"){
        res.status(400).json({msg:"Internal error in auth"});
    }
    next();
}

const inputValidation = (req , res , next)=>{
    const kidneyId = req.query.kidneyId;

    if(kidneyId !="1" && kidneyId !="2"){
        res.status(400).json({msg:"Internal error in id"})
    }
    next();
}

app.use(authCheckup);
app.use(inputValidation);

app.get('/health-checkup' , (req , res)=>{
    res.json({
        msg:"Your kidney is good"
    });
})


//its the globale catch for error hndling
app.use((err , req , res , next)=>{
    res.status(400).send("Internal server error");
})



app.listen(3006,()=>{
    console.log("Server is running on port 3006");
    
})