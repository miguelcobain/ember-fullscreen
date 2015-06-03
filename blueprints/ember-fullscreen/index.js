module.exports = {
  description: 'Add screenfull bower package.',

  afterInstall: function() {
    return this.addBowerPackageToProject('screenfull');
  }
};
