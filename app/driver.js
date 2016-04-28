var Marionette = require('backbone.marionette');
//LayoutView
var HelloWorld = Marionette.LayoutView.extend({
  el: '#app-hook-hello',
  template: require('./templates/layout.html')
});

var hello = new HelloWorld();
//Models
var TodoList = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/todoLayout.html')
});

var todo = new TodoList({
  model: new Backbone.Model({
    items: [
      {assignee: 'Scott', text: 'Write a book about Marionette'},
      {assignee: 'Andrew', text: 'Do some codign'},
      {assignee: 'Emmanuel', text: 'Do magnificent apps'}

    ]
  })
});
//Collections
var ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/collTodoLayout.html')
});

var TodoListColl = Marionette.CollectionView.extend({
  el: '#app-hook-coll',
  tagName: 'ul',
  childView: ToDo
});

var todoColl = new TodoListColl({
    collection: new Backbone.Collection([
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some codign'},
        {assignee: 'Emmanuel', text: 'Do magnificent apps'}
      ])
});

hello.render();
todo.render();
todoColl.render();
