const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  key: {
    required: true,
    type: Number
  },
  name: {
    maxlength: 100,
    minlength: 2,
    required: true,
    trim: true,
    type: String
  }
});


roleSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Role', roleSchema);
