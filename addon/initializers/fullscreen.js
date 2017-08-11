import Ember from 'ember';
import Fullcreen from '../services/fullscreen';

const [ , MAJOR ] = Ember.VERSION.match(/^(\d+)\.(\d+)\.(\d+)/).map(Number);

export function initialize() {
  var application = MAJOR >= 2 ? arguments[0] : arguments[1];
  application.register('fullscreen:main', Fullcreen);
  application.inject('controller', 'fullscreen', 'fullscreen:main');
  application.inject('component', 'fullscreen', 'fullscreen:main');
  application.inject('route', 'fullscreen', 'fullscreen:main');
}

export default {
  name: 'fullscreen',
  initialize: initialize
};
