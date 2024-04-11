const express = require('express');
const dbconnect = require('./mongoconnect');
const app = express();

app.get('/', async (req, resp) => {
    try {
        let data = await dbconnect();
        data = await data.find().toArray();
        console.log(data);
        resp.send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
