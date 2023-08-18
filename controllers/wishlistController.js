const wishlist = require("../model/wishlist.model");

const createWishlistHandler =  async (req, res)=>{
    const newWishlist = new wishlist(req.body);
    try{
        const savedWishList = await newWishlist.save();
        res.status(201).json(savedWishList);
    }catch(err){
        res.status(500).json({message: "failed to create whishlist"});
    }
}

const deleteWishlistHandler = async(req,res)=>{
    try{
        await wishlist.findByIdAndDelete(req.params.id);
        res.json({message:"Hotel Deleted From Wishlist"});
    }catch(err){
        res.status(500).json({message: "Could not delete hotel from wishlist"})
    }
}

const getWishlistHandler =  async(req,res)=>{
    try{
        const Wishlist = await wishlist.find({});
        Wishlist ? res.json(Wishlist):res.json({message: "No items found in the wishlist"})
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {createWishlistHandler,deleteWishlistHandler,getWishlistHandler};
