//for collection post method
const mongoose=require('mongoose');
const Productschema=new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    current:String
});
module.exports=mongoose.model('portfolio',Productschema);