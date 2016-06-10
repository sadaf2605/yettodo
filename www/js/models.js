angular.module('yettodo.services', [])

.factory('Todobooks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todobooks = 	[
	    {name: "private", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."},
	    {name: "office", description: null}
	];

  return {
    all: function() {
      return todobooks;
    },
    remove: function(todobook) {
      chats.splice(todobooks.indexOf(todobook), 1);
    },
    get: function(name) {
      for (var i = 0; i < todobooks.length; i++) {
        if (todobooks[i].id === name) {
          return todobooks[i];
        }
      }
      return null;
    }
  };
})

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [
    { id:1, title: 'Collect coins', bookname: 'private', tasks: [{ title: 'Eat mushrooms', bookname: 'private' }] },
    { id:2, title: 'Eat mushrooms', bookname: 'private' },
    { id:3, title: 'Get high enough to grab the flag',bookname: 'office' },
    { id:4, title: 'Find the Princess' }
  ];

  return {
    all: function() {
      return tasks;
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    get: function(id) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(id)) {
          return tasks[i];
        }
      }
      return null;
    },
    getByBook: function(name){
    	alert(name)

      var t=[];

      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].bookname === name) {
          	t.push( tasks[i] );
        }
      }
      return t;

    }
  };
});


