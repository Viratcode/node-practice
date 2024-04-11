const express = require('express');
const dbConnect = require('./mongoconnect');
const app = express();

app.use(express.json());

app.post('/', async () => {
    try {
        let data = await dbConnect();
        let result = await data.insert(
            req.body)
        response.send(result)
    }
    catch (error) {
        console.log(error);
        response.send(500, "error message printed")
    }
});
app.listen(5000,()=>{
    console.log("printed successfully");
})