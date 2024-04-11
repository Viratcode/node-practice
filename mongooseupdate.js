const express=require("express");
reequire('./configmongoose');
const Product=require('./product');
const app=express();

app.update("update/:_id",async(req,resp)=>{
    console.log(req.params)
    let data=await Product.updateOne(
        req.params,{$set:req.body}
    );
    resp.send(data);
})
app.listen(4000)