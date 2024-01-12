const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://Sachin:oiIYTc6Xva29zWqT@mongodb.7d1cjqv.mongodb.net/userDetails'
  )
  .then(console.log('connected to DB'));

const UserDetailsSchema = new mongoose.Schema({
  name: String,
  description: String,
  linkedin: String,
  twitter: String,
  interests: {
    type: [String],
  },
});

const userDetails = mongoose.model('UserDetails', UserDetailsSchema);

module.exports = userDetails;
