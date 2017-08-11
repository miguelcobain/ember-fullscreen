import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height'],
  fullscreen: Ember.inject.service(),

  click() {
    this.get('fullscreen').toggle(this.element);
  }
});
