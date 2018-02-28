# ember-fullscreen

> [Fullscreen API](https://fullscreen.spec.whatwg.org/) packaged as an [Ember service](http://emberjs.com/api/classes/Ember.Service.html).

ember-fullscreen uses [Screenfull](https://github.com/sindresorhus/screenfull.js/) for the all the Fullscreen API calls. This means that ember-fullscreen will work on every browser that supports fullscreen API/screenfull: http://caniuse.com/fullscreen

Check minimal [demo](http://miguelcobain.github.io/ember-fullscreen/).

## Installation

ember-fullscreen is an ember-cli addon. Just run the install command on your ember-cli project:

    $ ember install ember-fullscreen

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Usage

The fullscreen service is injected into all controllers, components and routes. To access it from any of them, you can just use the property `this.fullscreen`:

- `.isAvailable` - A boolean that represents whether you are allowed to enter fullscreen.

- `.isEnabled` - A boolean that represents whether you are in fullscreen mode.

- `.enable()` - Enters fullscreen mode. Accepts a DOM element. Default is `<html>`. If called with another element than the currently active, it will switch to that if it's a decendant. Yes, you can make DOM elements fullscreen.

- `.disable()` - Disables fullscreen mode.

- `.toggle()` - Enables fullscreen mode if not active, disables if active. Also accepts an optional DOM element.

- `.on('error', ...)` - Fullscreen service includes [Ember.Evented](http://emberjs.com/api/classes/Ember.Evented.html) mixin. When a fullscreen request fails, ember-fullscreen triggers an `error` event.

- `.on('fullscreenChange', ...)` - When the fullscreen state changes, ember-fullscreen notifies the new `isEnabled` state.

## Examples

Create a button in your controller with an action that toggles fullscreen mode:

```javascript
export default Ember.Controller.extend({
  fullscreen: Ember.inject.service(),
  actions: {
    toggleFullscreen() {
      this.get('fullscreen').toggle();
    }
  }
});
```

Use it on your templates to conditionally render depending on a boolean:

```hbs
{{#if fullscreen.isEnabled}}
  I'm fullscreen
{{else}}
  I'm NOT fullscreen
{{/if}}
```

Only display a button to enter fullscreen if the browser supports it:

```hbs
{{#if fullscreen.isAvailable}}
  <button {{action "toggleFullscreen"}}>
    Toggle fullscreen
  </button>
{{/if}}
```

A simple component that sets its own element to fullscreen on click:

```javascript
export default Ember.Component.extend({
  fullscreen: Ember.inject.service(),
  click() {
    this.get('fullscreen').toggle(this.element);
  }
});
```

Bind an icon class depending on wether we're in fullscreen:

```hbs
{{!-- Uses font-awesome --}}
<i class="{{if fullscreen.isEnabled "fa-compress" "fa-expand"}}"></i>
```
