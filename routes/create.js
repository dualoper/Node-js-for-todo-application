const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');

router.get('/', (req, res) => {
  res.send("Server is running!");
});


router.post('/create', async (req, res) => {
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

    const item = new Item(data);
    const result = await item.save();
    res.send("Item added successfully!");

  } catch (err) {
    console.log({ error: err });
  }
});

module.exports = router;