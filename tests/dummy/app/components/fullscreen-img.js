import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height'],

  click() {
    this.fullscreen.toggle(this.element);
  }
});
