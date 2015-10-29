import Fullcreen from '../services/fullscreen';

export function initialize(application) {
  application.register('fullscreen:main', Fullcreen);
  application.inject('controller', 'fullscreen', 'fullscreen:main');
  application.inject('component', 'fullscreen', 'fullscreen:main');
  application.inject('route', 'fullscreen', 'fullscreen:main');
}

export default {
  name: 'fullscreen',
  initialize: initialize
};
