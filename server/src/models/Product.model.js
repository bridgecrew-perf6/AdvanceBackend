
const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: false,}
    ,
    price: {
        type: Number,
        required: false,
    },
});


    const Product = new mongoose.model('Product', ProdSchema);

    module.exports = Product;