import express from "express";

const app = express();

function ticketCheckMiddleWare(req , res , next){
    const ticket  = req.query.ticket;
    if(ticket=="free"){
        next();
    }else{
        res.status(403).send("Acess denides");
    }
}

app.use(ticketCheckMiddleWare)


app.get('/ride1',(req , res)=>{
    res.send("You are on the first Ride")
})

app.get('/ride2',(req , res)=>{
    res.send("You are on the 2nd Ride")
})

app.get('/ride3',(req , res)=>{
    res.send("You are on the 3rd Ride")
})


app.listen(3003,()=>{
    console.log("our server is on the PORT 3003");
    
})