let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let PlayerSchema = new Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    dob: {
        type:Date,
        required:true
    },
    role: {
        type:String,
        required:true,
        trim:true
    },
    style:{
        // enum:["left-hand","right-hand"],
        type:String,
        required:true,
        trim:true
    },
    team: {
        type:String,
        required:true,
        trim:true
    }
},{
    collection:"Player",
    timestamps:true
});
module.exports=mongoose.model("Player",PlayerSchema);