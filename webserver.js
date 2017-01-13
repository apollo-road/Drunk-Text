function initializeServer()
{

  var express = require('express')
  var app = express()
  var server_port = (process.env.PORT || 8080);
  var DrunkText = require("./DrunkText.js");

  app.get('/drink', function (req, res) {

    DrunkText.drunkText(req,res);

  })

/*
  app.get('/authenticate', function (req, res) {

    AuthUtility.authenticate(req,res);

  })

  app.get('/verifyAuthToken', function (req, res) {

    AuthUtility.verifyAuthToken(req,res);

  })

  app.get('/addDrink', function (req, res) {

    DrinkService.addDrink(req,res);

  })

  app.get('/addCategory', function (req, res) {

    DrinkService.addCategory(req,res);

  })

  app.get('/moveDrinkToMenu', function (req, res) {

    DrinkService.moveDrinkToMenu(req,res);

  })

  app.get('/removeDrinkFromMenu', function (req, res) {

    DrinkService.removeDrinkFromMenu(req,res);

  })

  app.get('/addClient', function (req, res) {

    AdminService.addClient(req,res);

  })

  app.get('/deleteClient', function (req, res) {

    AdminService.suspendClient(req,res);

  })

  app.listen(server_port, function () {
    console.log('Listening on port ' + server_port);
  })
}
*/
initializeServer();
