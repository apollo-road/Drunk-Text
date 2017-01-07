var liquors = {}


function initializeServer()
{

  var express = require('express')
  var app = express()

  app.get('/drink', function (req, res) {

    res.send('Drink MOar Whiskee!')
    var body = req.param('Body');
    var from = req.param('From');

    var accountSid = 'ACc7e2749325bb21ed1e9c4dece6a436c6'; // Your Account SID from www.twilio.com/console
    var authToken = 'a62fb864f147b6b68377b88728e1650f';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio.RestClient(accountSid, authToken);
    /*
    client.messages.create({
        body: body,
        to: '+15053792604',  // Text this number
        from: '+19709991133' // From a valid Twilio number
    }, function(err, message) {
        console.log(message.sid);
    });*/

    //drink(body, from);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
  })

  app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
  })
}

function drink(body, from)
{
  var response = "";
  body = body.trim().tolowerCase();
  if (body.indexOf("drink") != -1)
  {
    var response = "Respond with your liquor of choice for a drink suggestion!";
  }
  else {

  }

}




/*
client.messages.create({
    body: 'Hello from your butt',
    to: '+15053401323',  // Text this number
    from: '+19709991133' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});
*/



initializeServer();
