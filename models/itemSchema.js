const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  startDate: Date,
  dueDate: Date,
  status: String,
  priority: String
});

const Item = new mongoose.model('items', itemSchema);

module.exports = Item;