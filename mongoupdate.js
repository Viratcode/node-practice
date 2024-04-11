const dbC = require('./mongoconnect');

const updatedata = async () => {
    let connect = await dbC();
    let result = await connect.updateOne(
        { name: "virat" },
        { $set: { name: "arjun" } });
    console.log(result);
    console.log("data updated")
}
updatedata();