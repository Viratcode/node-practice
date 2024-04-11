const dbConnect = require('./mongoconnect');
const insert = async () => {
    const db = await dbConnect();
    console.log("data inserted");
    const result = db.insertOne({
        name: "note 5",
        brand: "vivo",
        price: 70000
    });
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
insert();


