const dbconnect = require("./mongoconnect");

const deleteData = async () => {
    let data = await dbconnect();
    let result = await data.deleteOne({ name: "note 5" })
    console.warn(result);
    if (result.acknowledged) {
        console.log("deleted successfully");
    }
}
deleteData();