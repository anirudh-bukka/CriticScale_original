const mongoose = require("mongoose")

const Review = new mongoose.Schema({
    album_name : {
        type: String ,
        required : true,
        unique: true
    },
    user_name:{
        type: String ,
        required : true,
        unique: true
    },
    review:{
        type: String ,
        required : true
    },
    rating: {
        type: Number,
        required: true
    }
}
);



module.exports= mongoose.model("Review",Review);