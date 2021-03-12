const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: {
    type: String,
    required: false
  },
  name: {
    maxlength: 100,
    minlength: 2,
    required: true,
    trim: true,
    type: String
  },
  email: {
    lowercase: true,
    maxlength: 255,
    minlength: 5,
    required: false,
    trim: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  role_id: {
    required: false,
    default: 2,
    type: Number
  }
});


userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
