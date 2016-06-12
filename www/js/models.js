angular.module('yettodo')

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



    }
  };
})

.factory('Tasks', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [
    { id:1, title: 'Collect coins', bookname: 'private', subtasks: [{ title: 'Eat mushrooms', bookname: 'private' }] },
    { id:2, title: 'Eat mushrooms', bookname: 'private' },
    { id:3, title: 'Get high enough to grab the flag',bookname: 'office' },
    { id:4, title: 'Find the Princess' }
  ];

  return {
    byBook: function(name) {
      return $http({
        method: 'GET',
        url: 'http://yettodo.herokuapp.com/todobooks/'+name,
        headers: {
         'Content-Type': 'application/json'
        }
      })

    },
      create: function(todobook, title) {
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/todobooks/'+todobook+'/tasks',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          title: title
        }
      })

    },

  };
})


