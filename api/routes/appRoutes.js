'use strict';
module.exports = function(app) {
  var appController = require('../controllers/appController');

  // app routes
  app.route('/').get(appController.root);

  app.route('/login')
    .post(appController.login);
};
