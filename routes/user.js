const router = require("express").Router();

router.get("/myprofile/:username", (req,res)=>{

res.render("user_interface/userprofile");
});

module.exports = router;