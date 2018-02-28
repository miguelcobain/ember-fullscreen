import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height'],
  fullscreen: service(),

  click() {
    this.get('fullscreen').toggle(this.element);
  }
});
