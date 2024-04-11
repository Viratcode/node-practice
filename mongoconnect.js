// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);
// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     collection = db.collection('products');
// }   
// module.exports = dbConnect;


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/e-comm.products';
const database = 'e-comm';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    collection = db.collection('portfolio');
    return collection;
}
module.exports = dbConnect;
