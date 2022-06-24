const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');

router.get('/search/:key', async (req, res) => {
  const query = req.params.key;
  const list = await Item.find({
    $or:[
      {title: {$regex: query}},
      {status: {$regex: query}},
      {priority: {$regex: query}}
    ]
  })
  if(list.length == 0){
    return res.send({message: `There is no result for ' ${query} '!`});
  }
  res.send(list);
});

module.exports = router;