const router = require("express").Router();
const User = require("../models/User.model");
const test = require("../filter.js");



router.get("/myprofile", async (req,res)=>{

    const user = await User.findById(req.session.currentUser._id).populate("favorites") //gives us all the users in an array
    console.log(user.favorite);
    console.log(user.comment);
    
res.render("user_interface/userprofile", user);
});



module.exports = router;