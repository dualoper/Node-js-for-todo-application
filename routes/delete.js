const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');


router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Item.deleteOne({_id:id});
    if(!result.deleteCount){
      return res.status(400).json({Error : "Item not found!"});
    }
    res.json({message : "Item has been deleted!"});

  } catch (err) {
    console.log({Error: err});
  }
});



module.exports = router;