
const express = require("express");

const connectDB = require("./src/configs/db");
const ProductController = require("./src/controllers/product.controller");
const app = express();
app.use(express.json());


app.use('/', ProductController);

app.listen(4000,async(res,req)=>{
    try{
        await connectDB
        console.log("server is running on port 4000");
    }
    
    catch(err){
        console.log(err);
    }
})
