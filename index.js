const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Vish",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log("Connected with Mongodb") ;
}).catch((err)=>{
  console.log(err) ;
}) ;

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});


app.listen(port, () => {
  console.log(`Server is Woring on port: ${port}`);
});
