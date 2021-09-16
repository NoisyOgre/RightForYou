const router = require("express").Router();
const Product = require("../models/Product.model");
const User = require("../models/User.model");
const fileUpload = require("../config/cloudinary");
const axios = require("axios");
const { ConnectionStates } = require("mongoose");



function requireLogin(req, res, next) {
    if (req.session.currentUser) {
        next();
    }else {
        res.redirect("/login")
    }
}

//http://localhost:3000/products

router.get("/products", async (req,res)=>{
const response = await axios.get("https://skincare-api.herokuapp.com/products");
const added = await Product.find();
/* console.log(response.data); */
res.render("products/product-list", {products: response.data, added});
});

router.get("/products/:id", async (req,res)=>{
    const response = await axios.get(`https://skincare-api.herokuapp.com/products/${req.params.id}`);
    
    /* const productId = await response.findById(req.params.id); */
    res.render("products/product-details", response.data);
});
router.get("/our-products/:id", async (req,res)=>{
    const product = await Product.findById(req.params.id);
    
    /* const productId = await response.findById(req.params.id); */
    res.render("products/product-details", product);
});

  
   
router.get("/create-product",requireLogin,async (req, res) => {
    const brand = await Product.find()
    res.render("products/product-create", {brand})
});

router.post("/create-product", fileUpload.single("image"), async (req, res) => {

let fileUrlOnCloudinary = "";
    if(req.file){
        fileUrlOnCloudinary = req.file.path; // the path on cloudinary
    }
    const { name, brand, ingredient_list } = req.body;
    await Product.create({
       name, 
        brand, 
        ingredient_list,  
        imageUrl: fileUrlOnCloudinary, 
    });
    res.redirect("/products");
});

router.get("/products/:id/edit", async (req, res) => {
    const product  = await Product.findById(req.params.id).populate("brand"); 
    res.render("products/product-edit", product);
});

router.post("/products/:id/edit", async (req, res) => {
    const { name, brand, ingredient_list } = req.body;
     await Product.findByIdAndUpdate(req.params.id, {
        name,
        brand,
        ingredient_list,
    });
    res.redirect("/products");
});

router.get("/favorites/:id", async (req, res) => {
    res.render("products");
});

router.post ("/favorites/:id", async (req, res) => {
    const favProduct = await Product.findById(req.params.id);
    await User.findByIdAndUpdate(req.session.currentUser._id, 
        {$push: 
            {favorites : favProduct }
        }
    );
    console.log("The fave is ",favProduct)
    /* res.render("user_interface/userprofile",{favProduct}); */
    res.redirect("/myprofile");
});


router.post("/favorites/:id/delete", async (req, res) => {

    const user = await User.findById(req.session.currentUser._id)
    
    console.log(user)
    console.log(user.favorites)
    
    await User.findByIdAndUpdate(req.session.currentUser._id, {
      $pull:{ favorites:  req.params.id }  
    }) 
   res.redirect("/myprofile");
});




module.exports = router;


//instead of outright deleting we could add a booleand isDeleted: true or false and work around that
//Delete would change the value to true and when we find the books we would pass isDeleted= false