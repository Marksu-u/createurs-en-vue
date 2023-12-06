import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
})

module.exports = mongoose.model('Schema', cvSchema)