








/*consider auto generating the client id and secret" +
in order to enforce uniqueness, randomness, and strength.*/

// Load required packages
var mongoose = require('mongoose');

// Define our client schema
var ClientSchema = new mongoose.Schema({
  name:   { type: String, unique: true, required: true },
  id:     { type: String, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true }
});

/*
//Execute before each user.save() call
ClientSchema.pre('save', function(callback) {
  var client = this;

  // Break out if the secret hasn't changed
  if (!client.isModified('secret')){ 
	  return callback();
  }

  // Secret changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) {
    	return callback(err);
    } 

    bcrypt.hash(client.secret, salt, null, function(err, hash) {
      if (err) {
    	  return callback(err);
      }
      client.secret = hash;
      callback();
    });
  });
});
*/

// Export the Mongoose model
module.exports = mongoose.model('Client', ClientSchema);