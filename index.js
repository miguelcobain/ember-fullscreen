/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-fullscreen',

  included(app) {
    app.import('vendor/screenfull.js');
  },

  treeForVendor(tree) {
    let screenfull = new Funnel(path.dirname(require.resolve('screenfull/dist/screenfull.js')), {
      files: ['screenfull.js']
    });

    return mergeTrees([
      tree,
      screenfull
    ]);
  }
};
