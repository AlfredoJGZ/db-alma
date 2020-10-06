const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const items = mongoose.model("Meal", new Schema({
    name: String,
    img: String,
    desc: String,
    cat: String,
    size: String,
    price: Number,
    sale: Number,
    sold: Number
}))

module.exports = items; 