const mongoose = require('mongoose');
const dbURL = 'mongodb://mLabMongoDBdb:mLabMongoDBdb@ds143039.mlab.com:43039/note-taker';

mongoose.connect(dbURL, err => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to database!');
  }
});

module.exports = mongoose;
