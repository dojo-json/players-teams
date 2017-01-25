var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
    index: true,
    trim: true
  },
  team: {  type: Schema.Types.ObjectId, ref: 'Team'},
});

module.exports = mongoose.model('Player', PlayerSchema);
