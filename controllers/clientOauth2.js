








// Load required packages
var Client = require('../models/clientOauth2');

// Create endpoint /api/client for POST
addClient = function(req, res) {
  // Create a new instance of the Client model
  var client = new Client();

  // Set the client properties that came from the POST data
  client.name   = req.body.name;
  client.id     = req.body.id;
  client.secret = req.body.secret;
  client.userId = req.user._id;

  // Save the client and check for errors
  client.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Client added!', data: client });
  });
};

// Create endpoint /api/clients for GET
searchAllClient = function(req, res) {
  // Use the Client model to find all clients
  Client.find({ userId: req.user._id }, function(err, clients) {
    if (err)
      res.send(err);

    res.json(clients);
  });
};

exports.addClient  = addClient;
exports.searchAllClient  = searchAllClient;
