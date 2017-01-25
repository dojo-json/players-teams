var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TeamSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 45,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  roster: [{type: Schema.Types.ObjectId, ref: 'Player'}]
});

module.exports = mongoose.model('Team', TeamSchema);


// teams in the database
