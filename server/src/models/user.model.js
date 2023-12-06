import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength:50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength:50
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  isAdmin: {
    type: Boolean,
    default:false
  },
  cvs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"CV"
    }
  ]
})

module.exports=mongoose.model('User', userSchema)