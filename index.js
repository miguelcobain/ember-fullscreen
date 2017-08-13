/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-fullscreen',

  options: {
    nodeAssets: {
      screenfull: {
        srcDir: 'dist',
        vendor: {
          include: ['screenfull.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included(app) {
    app.import('vendor/screenfull/screenfull.js');
  }
};
