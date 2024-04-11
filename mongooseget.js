const express=require('express');
require('./configmongoose');
const Product=require('./product');

const app=express();

app.use(express.json());
 
app.get('./list',async(req,resp)=>{
    let data=await Product.find();
    resp.send(data);
})
app.listen(5000);