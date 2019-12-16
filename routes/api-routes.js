// // Filename: api-routes.js
// // Initialize express router
// const router = require('express').Router();
// // Set default API response

// router.get('/', function (req, res) {
//     res.json({
//         status: 'API Its Working'
//     });
// });

//     router.get("/contacts/:contact_id", function(req, res) {
//     db.find().then(dbEmails => {
//       res.json(dbEmails);
//     });
//   });

// // Import contact controller
// var contactController = require('../config/contactController');
// // Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
    
//     router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// // Export API routes
// module.exports = router;