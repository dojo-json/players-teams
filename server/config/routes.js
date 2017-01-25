const PlayerController = require("../controllers/players");

module.exports = function(app){
  console.log('routes!');
  app.get("/players",PlayerController.index)
  app.post("/players",PlayerController.create)
}
