const mongoose = require('mongoose');
 
const wishlistSchema = new mongoose.Schema({
    hotelId : {type: String,require: true},

})

const wishlist =  mongoose.model("wishlist",wishlistSchema);
module.exports = wishlist;
