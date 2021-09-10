//connect to the cloudinary cloud website
const cloudinary = require("cloudinary").v2;

//requests of the type form-data it allows to upload files through forms <form></form>
const multer = require("multer");

//conects multer with cloudinary, alllows to set the storage settings
const{CloudinaryStorage} = require("multer-storage-cloudinary");

//authenticating in cloudinary using our subscription
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});


const storage = new  CloudinaryStorage({
    cloudinary,
    params: {
        folder: "books",
        allowed_formats: ["png", "jpg"],
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    },
});

module.exports = multer({storage})
