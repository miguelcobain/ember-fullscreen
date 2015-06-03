module.exports = {
  description: 'Add screenfull bower package.',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('screenfull');
  }
};
