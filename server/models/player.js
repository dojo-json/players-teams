var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  }
});
