const express = require('express');
const dbconnect = require('./mongoconnect');
const app = express();
app.get('/', async (req,resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
 });
 app.listen(3000,()=>{
     console.log("data get sucessfully");
});
