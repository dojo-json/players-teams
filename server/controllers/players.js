const Player = require("mongoose").model('Player');

module.exports = {
  index(req,res){
    Player.find({})
    .then( res.json )
    .catch(errorHandler.bind(res));
  },
  create(req,res){
    Player.create(req.body)
    .then(res.json)
    .catch(errorHandler.bind(res));
  }
}

function errorHandler(error) {
  console.error(error)
  this.status(500).json({ success: false, error });
}
