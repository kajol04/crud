const mongoose=require('mongoose');
var schema=new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:String
})
const userdb=mongoose.model('userdb',schema);
module.exports=userdb;