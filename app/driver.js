var Marionette = require('backbone.marionette');

var HelloWorld = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/layout.html')
});

var TodoList = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/todoLayout.html')
});

var hello = new HelloWorld();

var todo = new TodoList({
  model: new Backbone.Model({
    items: [
      {assignee: 'Scott', text: 'Write a book about Marionette'},
      {assignee: 'Andrew', text: 'Do some codign'},
      {assignee: 'Emmanuel', text: 'Do magnificent apps'}

    ]
  })

});

hello.render();
todo.render();
