let express = require("express");
let mongoose = require("mongoose");
let chalk = require("chalk");
let app = express();
let cors = require("cors");

app.use(cors());
mongoose.connect("mongodb://localhost:27017/User_Data",{});
mongoose.connection.on("error",()=>{
    console.log(chalk.red("Error occurred while connecting to Mongoose"));
}).once("open",()=>{
    console.log(chalk.green("Connection established successfully with Mongoose"));
});

let Player = require("./Routes/Player");
app.use("/player",Player);
app.get("/",(req,res)=>{
    res.send({msg:"hello world"});
});
app.listen(3001,(error)=>{
    if(error)
        console.log(chalk.red("Error occurred while establishing the connection"));
    console.log(chalk.green("Connection established successfully"));
});
