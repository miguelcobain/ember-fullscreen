/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-fullscreen',
  included: function(app) {
    //import screenfull
    app.import(app.bowerDirectory + '/screenfull/dist/screenfull.js');
  }
};
