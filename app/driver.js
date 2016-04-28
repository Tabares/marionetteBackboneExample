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
//Composite View
var ToDoCom = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/collTodoLayout.html')
});

var TodoListCom = Marionette.CompositeView.extend({
  el: '#app-hook-com',
  template: require('./templates/todolist.html'),
  childView: ToDoCom,
  childViewContainer: 'ul',
  
  ui: {  // 1
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: {  // 2
    'submit @ui.form': 'add:todo:item'
  },

  collectionEvents: {  // 3
    add: 'itemAdded'
  },

  onAddTodoItem: function() {  // 4
    this.collection.add({
      assignee: this.ui.assignee.val(),  // 5
      text: this.ui.text.val()
    });
  },

  itemAdded: function() {  // 6
    this.ui.assignee.val('');
    this.ui.text.val('');
  }
});

var todoCom = new TodoListCom({
  collection: new Backbone.Collection([
    {assignee: 'Scott', text: 'Write a book about Marionette'},
    {assignee: 'Andrew', text: 'Do some codign'},
    {assignee: 'Emmanuel', text: 'Do magnificent apps'}
  ])
});

hello.render();
todo.render();
todoColl.render();
todoCom.render();
