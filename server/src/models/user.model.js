
const  mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    BrandName:{type:String,required:true},
    price:{type:Number,required:true},
    image_url:{type:String,required:true},
    id:{type:Number,required:false},

},{
timestamps:true,
versionkey:false
}

)

module.exports = mongoose.model("User",UserSchema)