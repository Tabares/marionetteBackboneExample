var Marionette = require('backbone.marionette');

var HelloWorld = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/layout.html')
});

var hello = new HelloWorld();

hello.render();
