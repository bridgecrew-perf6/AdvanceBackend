
const express = require('express');
const router = express.Router();
const Product = require('../models/Product.model');



router.get("/products",async(req,res)=>{
    try{

        const page = req.params.page || 1;
        const size = req.params.size || 8;
        const  data = await Product.find()
        .skip((page-1)*size)
        .limit(size)
        .lean()
        .exec();

        const totalPages = Math.ceil(
            (await Product.countDocuments({})) / size
        );

        return res.send({data, totalPages});

        }
    catch(err){
        res.status(500).send(err);
    }
    
   
})

module.exports = router;