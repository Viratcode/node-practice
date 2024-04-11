const express=require('express')
const app=express();
app.get("",(req,resp)=>{
    resp.send("this is home page");
});
app.listen(3000,()=>{
    console.log("server is loading on port 3000");
});



