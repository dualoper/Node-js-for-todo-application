const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');

router.get('/read', async(req, res) => {
  try {
    const list = await Item.find();
    if(list.length == 0){
      return res.status(404).send("List not found!");
    }
    res.json(list);
  } catch (err) {
    console.log({Error : err});
  }
});

router.get('/read/:id', async (req, res) => {
  const id = req.params.id;
  const item = await Item.findOne({
    _id: id
  })
  if(!item){
    return res.status(401).json({Error : "Item not found!"});
  }
  res.json(item);
})

module.exports = router;