"use strict";define("servant-of-all/app",["exports","ember","servant-of-all/resolver","ember-load-initializers","servant-of-all/config/environment"],function(e,t,a,n,r){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("servant-of-all/components/app-version",["exports","ember-cli-app-version/components/app-version","servant-of-all/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("servant-of-all/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("servant-of-all/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("servant-of-all/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","servant-of-all/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("servant-of-all/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("servant-of-all/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("servant-of-all/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("servant-of-all/initializers/export-application-global",["exports","ember","servant-of-all/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("servant-of-all/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("servant-of-all/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("servant-of-all/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("servant-of-all/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("servant-of-all/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("servant-of-all/router",["exports","ember","servant-of-all/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("about"),this.route("contact")}),e["default"]=n}),define("servant-of-all/routes/about",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("servant-of-all/routes/contact",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("servant-of-all/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("servant-of-all/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("servant-of-all/templates/about",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"servant-of-all/templates/about.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("p"),n=e.createTextNode("\n  Jesus said whoever wishes to be the greatest in the kingdom of heaven must\n  become the servant of all. This site is dedicated to helping individual\n  Christians as well as local churches\n  discover the how to become great in God's kingdom and in God's eyes by\n  serving others in the body of Christ.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,a),n},statements:[["content","outlet",["loc",[null,[9,0],[9,10]]]]],locals:[],templates:[]}}())}),define("servant-of-all/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:14,column:27},end:{line:14,column:51}},moduleName:"servant-of-all/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Home");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:15,column:12},end:{line:15,column:37}},moduleName:"servant-of-all/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("About");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:16,column:12},end:{line:16,column:41}},moduleName:"servant-of-all/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Contact");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:23,column:0}},moduleName:"servant-of-all/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-inverse navbar-fixed-top");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("button");e.setAttribute(l,"type","button"),e.setAttribute(l,"class","navbar-toggle collapsed"),e.setAttribute(l,"data-toggle","collapse"),e.setAttribute(l,"data-target","#navbar"),e.setAttribute(l,"aria-expanded","false"),e.setAttribute(l,"aria-controls","navbar");var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("span");e.setAttribute(i,"class","sr-only");var d=e.createTextNode("Toggle navigation");e.appendChild(i,d),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("span");e.setAttribute(i,"class","icon-bar"),e.appendChild(l,i);var i=e.createTextNode("\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("a");e.setAttribute(l,"class","navbar-brand"),e.setAttribute(l,"href","#");var i=e.createTextNode("Servant of All");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"id","navbar"),e.setAttribute(r,"class","collapse navbar-collapse");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("ul");e.setAttribute(l,"class","nav navbar-nav");var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("li");e.setAttribute(i,"class","active");var d=e.createComment("");e.appendChild(i,d),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("li"),d=e.createComment("");e.appendChild(i,d),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i);var i=e.createElement("li"),d=e.createComment("");e.appendChild(i,d),e.appendChild(l,i);var i=e.createTextNode("\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createComment("/.nav-collapse ");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,1,3,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(n,[1]),0,0),r[1]=e.createMorphAt(e.childAt(n,[3]),0,0),r[2]=e.createMorphAt(e.childAt(n,[5]),0,0),r[3]=e.createMorphAt(t,2,2,a),r},statements:[["block","link-to",["index"],[],0,null,["loc",[null,[14,27],[14,63]]]],["block","link-to",["about"],[],1,null,["loc",[null,[15,12],[15,49]]]],["block","link-to",["contact"],[],2,null,["loc",[null,[16,12],[16,53]]]],["content","outlet",["loc",[null,[22,0],[22,10]]]]],locals:[],templates:[e,t,a]}}())}),define("servant-of-all/templates/contact",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"servant-of-all/templates/contact.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("Contact Us");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","mailto:pauljrandall@yahoo.com?subject=servant-of-all");var r=e.createTextNode("email me");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,4,4,a),n},statements:[["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[]}}())}),define("servant-of-all/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:46,column:0}},moduleName:"servant-of-all/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","jumbotron");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1"),l=e.createTextNode("Welcome to ServantOfAll!");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),l=e.createTextNode("\n      Join the movement today! Christians worldwide are discovering the key\n      to greatness in the kingdom of God. Greatness as God defines greatness.\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),l=e.createElement("a");e.setAttribute(l,"class","btn btn-primary btn-lg"),e.setAttribute(l,"href","#"),e.setAttribute(l,"role","button");var i=e.createTextNode("Learn more »");e.appendChild(l,i),e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment(" Example row of columns ");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-4");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("h2"),i=e.createTextNode("The Greatest Commandment");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createTextNode(" The keys to Greatness in the Kingdom of God can be found in the words\n        of Jesus. The first key is found in the greatest commandment. When asked what is\n        the greatest commandment Jesus responded with the top two: Love God and\n        Love your neighbor.\n     ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createElement("a");e.setAttribute(i,"class","btn btn-default"),e.setAttribute(i,"href","#"),e.setAttribute(i,"role","button");var d=e.createTextNode("View details »");e.appendChild(i,d),e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-4");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("h2"),i=e.createTextNode(" Love One Another ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createTextNode(" Why does Jesus emphasize the need for his disciples to love one\n        another? After all, we are supposed to love everyone right? One key to\n        greatness is God's kingdom is found in understanding what it means to\n        love one another and how that should look in our daily lives.\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createElement("a");e.setAttribute(i,"class","btn btn-default"),e.setAttribute(i,"href","#"),e.setAttribute(i,"role","button");var d=e.createTextNode("View details »");e.appendChild(i,d),e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n   ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-4");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("h2"),i=e.createTextNode("The Greatest in the Kingdom of Heaven");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createTextNode("\n        The GREATEST in the kingdom of heaven? Doesn't that sound a bit proud?\n        When you begin to understand greatness as God defines it, you realize\n        pride has nothing to with it.\n\n      ");e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createElement("p"),i=e.createElement("a");e.setAttribute(i,"class","btn btn-default"),e.setAttribute(i,"href","#"),e.setAttribute(i,"role","button");var d=e.createTextNode("View details »");e.appendChild(i,d),e.appendChild(l,i),e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,4,4,a),n},statements:[["content","outlet",["loc",[null,[45,0],[45,10]]]]],locals:[],templates:[]}}())}),define("servant-of-all/config/environment",["ember"],function(e){var t="servant-of-all";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("servant-of-all/app")["default"].create({name:"servant-of-all",version:"0.0.0+a4bcf715"});