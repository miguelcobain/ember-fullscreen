# ember-fullscreen

> [Fullscreen API](https://fullscreen.spec.whatwg.org/) packaged as an [Ember service](http://emberjs.com/api/classes/Ember.Service.html).

ember-fullscreen uses [Screenfull](https://github.com/sindresorhus/screenfull.js/) for the all the Fullscreen API calls. This means that ember-fullscreen will work on every browser that supports fullscreen API/screenfull: http://caniuse.com/fullscreen

## Installation

ember-fullscreen is an ember-cli addon. Just run the install command on your ember-cli project:

    $ ember install ember-fullscreen

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Usage

The fullscreen service is injected into all controllers and components. To access it from a controller, you can just use `this.fullscreen`.

`.isAvailable` - A boolean that represents whether you are allowed to enter fullscreen.

`.isEnabled` - A boolean that represents whether you are in fullscreen mode.

`.enable()` - Enters fullscreen mode. Accepts a DOM element. Default is <html>. If called with another element than the currently active, it will switch to that if it's a decendant. Yes, you can make DOM elements fullscreen.

`.disable()` - Disables fullscreen mode.

`.toggle()` - Enables fullscreen mode if not active, disables if active. Also accepts an optional DOM element.

## Examples

Create a button in your controller with an action that toggles fullscreen mode:

```javascript
export default Ember.Controller.extend({
  actions: {
    toggleFullscreen() {
      this.fullscreen.toggle();
    }
  }
});
```

Use it on your templates to conditionally render depending on a boolean:

```handlebars
{{#if fullscreen.isEnabled}}
  I'm fullscreen
{{else}}
  I'm NOT fullscreen
{{/if}}
```

Only display a button to enter fullscreen if the browser supports it:

```handlebars
{{#if fullscreen.isAvailable}}
  <button {{action "toggleFullscreen"}}>
    Toggle fullscreen
  </button>
{{/if}}
```

Use it on a component to make a DOM element go fullscreen:

```handlebars
export default Ember.Component.extend({
  actions: {
    toggleImgFullscreen() {
      this.fullscreen.toggle(this.$('img')[0]);
    }
  }
});
```
