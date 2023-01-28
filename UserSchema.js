const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    username: String,
    email: String,
    password: String,
    epassword: String
});

const Products = new Schema({
    name: String,
    totalQuantity: Number,
    id: String,
    price: Number
});

const UserModel = mongoose.model('User', Users);
const ProductModel = mongoose.model('Product', Products);
module.exports = { UserModel, ProductModel };