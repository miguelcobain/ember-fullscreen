"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,i.default.modulePrefix)
var l=o
e.default=l}),define("dummy/components/fullscreen-img",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"img",attributeBindings:["src","width","height"],fullscreen:Ember.inject.service(),click:function(){this.get("fullscreen").toggle(this.element)}})
e.default=t}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({fullscreen:Ember.inject.service(),actions:{toggleFullscreen:function(){this.get("fullscreen").toggle()}}})
e.default=t}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,o=t.default.exportApplicationGlobal
i="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var i={name:"export-application-global",initialize:n}
e.default=i}),define("dummy/instance-initializers/clear-double-boot",["exports","ember-cli-fastboot/instance-initializers/clear-double-boot"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/locations/none",["exports","ember-cli-fastboot/locations/none"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var i=n
e.default=i}),define("dummy/services/fastboot",["exports","ember-cli-fastboot/services/fastboot"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/fullscreen",["exports","ember-fullscreen/services/fullscreen"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"vIrzUJ9v",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"ember-fullscreen"],[10],[0,"\\n\\n"],[7,"h3"],[9],[0,"Page fullscreen"],[10],[0,"\\n"],[7,"button"],[12,"onclick",[27,"action",[[22,0,[]],"toggleFullscreen"],null]],[9],[0,"Toggle fullscreen"],[10],[0,"\\n"],[7,"p"],[9],[0,"Fullscreen "],[1,[27,"if",[[23,["fullscreen","isEnabled"]],"enabled","disabled"],null],false],[10],[0,"\\n\\n"],[7,"h3"],[9],[0,"Element fullscreen"],[10],[0,"\\n"],[7,"p"],[9],[0,"Click the cat to make it fullscreen."],[10],[0,"\\n"],[1,[27,"fullscreen-img",null,[["src","id"],["cat-538ee3b36eaf7caa69e04ec68092669f.jpg","demo-img"]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){if("undefined"!=typeof FastBoot)return FastBoot.config("dummy")
try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),"undefined"==typeof FastBoot&&(runningTests||require("dummy/app").default.create({})),define("~fastboot/app-factory",["dummy/app","dummy/config/environment"],function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})
