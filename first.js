const express=require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hiiiiiiiiiiiiiii")
});

app.post("/user", (req,res)=>{
    console.log()
    res.send("what")
});

app.listen(3001, ()=> {
    console.log("server is running on port 3000");
});
