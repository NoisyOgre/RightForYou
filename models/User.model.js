const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: String,
  favorites:[
        {
          type: Schema.Types.ObjectId,
          ref:"Product",
         },
       ],     
});

//  const favSchema = new Schema({
//    favorite:[
//     {
//      name: String,
//      ingredient_list: String,
//      brand: String
//      },
//    ],
//  });

const User = model("User", userSchema);

module.exports = User;
