const mongoose = require('mongoose');

// Save a reference to the Schema constructorcd

const contactSchema = mongoose.Schema({
  
  name: {
    type: String,
    
  },

  subjectLine: {
    type: String,
    // required: true,
    required: "subject"
  },

  email: {
    type: String,
    // unique: true,
    required: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  body: {
    type: String,
    create_date: {
      type: Date,
      default: Date.now
  }
  },

});

// const Contact = mongoose.model("contact", contactSchema);

// // module.exports.get = function (callback, limit) {
// //   Contact.find(callback).limit(limit);
// // }
// module.exports = Contact;
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}