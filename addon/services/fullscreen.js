import { computed } from '@ember/object';
import { bind } from '@ember/runloop';
import Evented from '@ember/object/evented';
import Service from '@ember/service';
import screenfull from 'screenfull';

export default Service.extend(Evented, {
  screenfull,

  init() {
    this._super(...arguments);
    this.setupListeners();
  },

  setupListeners() {
    if (this.get('isAvailable')) {

      this.updateEnabled();
      this.handler = bind(this, this.updateEnabled);
      this.errorHandler = bind(this, this.onError);

      this.screenfull.on('change', this.handler);
      this.screenfull.on('error', this.errorHandler);
    }
  },

  willDestroy() {
    if (this.get('isAvailable')) {
      this.screenfull.off('change', this.handler);
      this.screenfull.off('error', this.errorHandler);
    }
  },

  isEnabled: false,

  isAvailable: computed(function() {
    return this.screenfull && this.screenfull.enabled;
  }),

  updateEnabled() {
    let isFullscreenEnabled = this.screenfull.isFullscreen;

    this.set('isEnabled', isFullscreenEnabled);
    this.trigger('fullscreenChange', isFullscreenEnabled);
  },

  onError(event) {
    this.trigger('error', event);
  },

  enable(elem) {
    this.screenfull && this.screenfull.request(elem);
  },

  disable() {
    this.screenfull && this.screenfull.exit();
  },

  toggle(elem) {
    this.screenfull && this.screenfull.toggle(elem);
  }

});
