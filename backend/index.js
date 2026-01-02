import express from "express"

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.status(200).json({message : "The request is received successfully!"});
})


app.listen(3000, ()=>{
    console.log("The server is running on port 3000!");
})