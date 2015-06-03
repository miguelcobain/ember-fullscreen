import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleFullscreen: function() {
      this.fullscreen.toggle();
    }
  }
});
