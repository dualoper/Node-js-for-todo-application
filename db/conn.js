const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, (err) => {
  if(!err){
    console.log("Connected");
  }else{
    console.log({error : err});
  }
});
