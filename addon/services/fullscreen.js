import Ember from 'ember';
/* global screenfull */

export default Ember.Service.extend(Ember.Evented, {

  screenfull: screenfull,

  setupListeners: Ember.on('init', function() {
    if (this.get('isAvailable')) {

      this.updateEnabled();
      this.handler = Ember.run.bind(this, this.updateEnabled);
      this.errorHandler = Ember.run.bind(this, this.onError);

      document.addEventListener(this.screenfull.raw.fullscreenchange, this.handler);
      document.addEventListener(this.screenfull.raw.fullscreenerror, this.errorHandler);
    }
  }),

  willDestroy() {
    if (this.get('isAvailable')) {
      document.removeEventListener(this.screenfull.raw.fullscreenchange, this.handler);
      document.removeEventListener(this.screenfull.raw.fullscreenerror, this.errorHandler);
    }
  },

  isEnabled: false,

  isAvailable: Ember.computed(function() {
    return this.screenfull.enabled;
  }),

  updateEnabled() {
    this.set('isEnabled', this.screenfull.isFullscreen);
  },

  onError(event) {
    this.trigger('error', event);
  },

  enable(elem) {
    this.screenfull.request(elem);
  },

  disable() {
    this.screenfull.exit();
  },

  toggle(elem) {
    this.screenfull.toggle(elem);
  }

});
