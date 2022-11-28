const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userName:String,
  userEmail:String,
  userPassword:String,
  userQuote:String
}) ;

const User = new mongoose.model("User",userSchema) ;

var userName ;
  var userEmail ;
  var userPassword;
  var userQuote;

const registerUser = async(req, res) => {

 // const user = await User.create(req.body) ;
   userName = req.body.name;
   userEmail = req.body.email;
   userPassword = req.body.password;
   userQuote = req.body.userQuote;
   User.create(  {userName,
    userEmail,
    userPassword,
  userQuote
 }) ;
  

  res.status(200).json({
    success: true,
   
  });


};

const fetch = async(req,res) => {

  User.find(res.userQuote) ;
};


module.exports = {registerUser,fetch};
