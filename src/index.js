const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/" ,(req,res)=>{
    res.send("Welcome to my server")
})

app.listen("5000",()=>{

        console.log("server connected and listening on port 5000");
        
})
