import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  fullscreen: service(),
  actions: {
    toggleFullscreen() {
      this.get('fullscreen').toggle();
    }
  }
});
