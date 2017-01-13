
// Global variables
var accountSid = 'ACc7e2749325bb21ed1e9c4dece6a436c6'; // Your Account SID from www.twilio.com/console
var authToken = 'a62fb864f147b6b68377b88728e1650f';   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var fs = require('fs');
var liquors = JSON.parse(fs.readFileSync('liquors.json', 'utf8'));

module.exports = {
  drunkText: function(req, res) {
    res.send("Drink mOaR whiskeeee");
    var body = req.query['Body'];
    var from = req.query['From'];
    if (body && body.length > 0)
    {
      drink(body, from);
    }
  }
}


function drink(body, from)
{
  console.log("body: " + body);
  var response = "";
  body = body.trim().toLowerCase();

  if (body.indexOf("drink") != -1)
  {
    response = "Respond with your liquor of choice for a drink suggestion, or reply ";
    response = response.concat("'list' for a list of drink categories!");
  }
  else if (body.indexOf("list") != -1)
  {
    response = "Drink categories: \n"
    var firstCapitalized = false;
    for (var key in liquors)
    {
      response = response.concat(capitalizeFirstLetter(key) + "\n");
    }
  }
  else {
    for (var key in liquors)
    {
      if (body.indexOf(key) != -1)
      {
        var drinkIndex = getRandomInt(0, liquors[key].length-1);
        var drink = liquors[key][drinkIndex];
        response = drink.name + "\n \n" + drink.description;
        break;
      }
    }
  }

  if (response.length > 0)
  {
    var client = new twilio.RestClient(accountSid, authToken);

    client.messages.create({
      body: response,
      to: from,  // Text this number
      from: '+19709991133' // From a valid Twilio number
    }, function(err, message) {
      console.log("Sent message to " + from);
    });
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
