const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://khushi123:khushi123@cluster0.tmwwu.mongodb.net/mern').then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
})


