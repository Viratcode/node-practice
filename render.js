//render html and json files
const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    resp.send(`<h1>this is home page</h1><a href="/about">goto about page</a>`);
    // resp.send({"name":"arjun","age":12});
});
app.get("/about",(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="username"/>
    <button>click me</button>`);
});

app.listen(3000);
