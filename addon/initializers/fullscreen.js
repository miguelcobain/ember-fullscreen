import Fullcreen from '../services/fullscreen';

export function initialize(container, app) {
  // application.inject('route', 'foo', 'service:foo');
  app.register('fullscreen:main', Fullcreen);
  app.inject('controller', 'fullscreen', 'fullscreen:main');
  app.inject('component', 'fullscreen', 'fullscreen:main');
  app.inject('route', 'fullscreen', 'fullscreen:main');
}

export default {
  name: 'fullscreen',
  initialize: initialize
};
