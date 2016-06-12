angular.module('yettodo.services', [])

.factory('Todobooks', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todobooks = [];



  return {
    all: function() {
      return $http({
        method: 'GET',
        url: 'http://yettodo.herokuapp.com/todobooks',
        headers: {
         'Content-Type': 'application/json'
        }
      })







  //    alert("todobooks")
   //   return todobooks;
    },
    create: function(name, description) {
      alert(name)
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/todobooks',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          name: name,
          description: description

        }
      })



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
    { id:1, title: 'Collect coins', bookname: 'private', subtasks: [{ title: 'Eat mushrooms', bookname: 'private' }] },
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


