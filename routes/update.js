const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');


router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const item = await Item.findOne({ _id: id });
  if (!item) {
    return res.status(400).send("Item not found!");
  };

  let { title, startDate, dueDate, status, priority } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Empty Fields are not required!" })
  }
  if (!startDate) {
    startDate = Date.now();
  }
  if (!dueDate) {
    dueDate = Date.now();
  }
  if (!status) {
    status = "New";
  }
  if (!priority) {
    priority = "High";
  }

  const data = {
    title: title,
    startDate: startDate,
    dueDate: dueDate,
    status: status,
    priority: priority
  }

  try {
    const result = await Item.updateOne({
      _id: id
    },
      {
        $set: data
      });
    if (result.modifiedCount) {
      return res.send("Item has been updated successfully!");
    }
    res.status(404).send({ message: "There is nothing to update!" });
  } catch (err) {
    console.log({ error: err });
  }
});


module.exports = router;