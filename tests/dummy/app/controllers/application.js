import Ember from 'ember';

export default Ember.Controller.extend({
  fullscreen: Ember.inject.service(),
  actions: {
    toggleFullscreen: function() {
      this.get('fullscreen').toggle();
    }
  }
});
