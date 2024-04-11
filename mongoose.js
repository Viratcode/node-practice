const mongoose = require('mongoose');
const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/arjun");
    const Productschema = new mongoose.Schema({
        name: String,
        address:String
    });
    const Productmodel = mongoose.model('portfolio', Productschema);
    let data = new Productmodel({ name: "anushka" ,address:'paris',age:21});
    let result = await data.save();
    console.log(result);
}
main();