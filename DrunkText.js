var liquors = {
  "whiskey": [
      {
        "name": "Gold Rush",
        "description": "Bourbon, honey syrup, and lemon juice."
      },
      {
        "name": "The Revolver",
        "description": "Rye heavy bourbon, coffee liqueur, orange bitters, and orange garnish."
      },
      {
        "name": "Suffering Bastard",
        "description": "Bourbon, gin, lime juice, bitters, ginger ale."
      },
      {
        "name": "The Paper Plane",
        "description": "Bourbon, Aperol, Amaro, fresh lemon juice"
      }
    ],
    "vodka": [
      {
        "name": "Mitch Martini",
        "description": "Zubrowka Bison grass vodka, pressed apple juice, lemon juice, passionfruit syrup, peach schnapps."
      },
      {
        "name": "AMF",
        "description": "The bartender's suicide. In blue. Vodka, gin, rum, blue curacao, sweet and sour, top with sprite."
      }
    ]
}

var server_port = (process.env.PORT || 8080)


function initializeServer()
{

  var express = require('express')
  var app = express()

  app.get('/drink', function (req, res) {

    res.send('Drink MOar Whiskeee!')
    var body = req.query['Body'];
    var from = req.query['From'];

    drink(body, from);
    console.log(req.query);
  })

  app.listen(server_port, function () {
    console.log('Example app listening on port ' + server_port);
  })
}

function drink(body, from)
{
  console.log("body: " + body);
  var response = "";
  body = body.trim()
  body = body.toLowerCase();
  if (body.indexOf("drink") != -1)
  {
    response = "Respond with your liquor of choice for a drink suggestion!";
  }
  else {
    for (var key in liquors)
    {
      if (body.indexOf(key) != -1)
      {
        var drinkIndex = getRandomInt(0, liquors[key].length-1);
        var drink = liquors[key][drinkIndex];
        response = drink.name + "\n \n" + drink.description;
      }
    }
  }

  var accountSid = 'ACc7e2749325bb21ed1e9c4dece6a436c6'; // Your Account SID from www.twilio.com/console
  var authToken = 'a62fb864f147b6b68377b88728e1650f';   // Your Auth Token from www.twilio.com/console

  var twilio = require('twilio');
  var client = new twilio.RestClient(accountSid, authToken);

  client.messages.create({
      body: response,
      to: from,  // Text this number
      from: '+19709991133' // From a valid Twilio number
  }, function(err, message) {
      console.log(message.sid);
  });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

initializeServer();
