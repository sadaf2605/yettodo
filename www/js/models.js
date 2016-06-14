angular.module('yettodo')

.factory('Todobooks', function($http, $window) {
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
        },
        data:{
          token: $window.authtoken
        }
      })







  //    alert("todobooks")
   //   return todobooks;
    },
    create: function(name, description) {
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/todobooks',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          name: name,
          description: description,
          token: $window.authtoken,

        }
      })



    }
  };
})

.factory('Tasks', function($http,$window) {
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
        },
        data:{
          token: $window.authtoken
        }
      })

    },
      create: function(todobook, title,dir) {
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/todobooks/'+todobook+'/tasks',
        headers: {
         'Content-Type': 'application/json'
        },
        data: {
          title: title,
          dir: dir,
          token: $window.authtoken
        }
      })

    },

  };
})


.factory('User', function($http, $window) {

  return {
    signin: function(username, password) {
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/signin',
        data:{
          username: username,
          password: password,
          token: $window.authtoken
        },
        headers: {
         'Content-Type': 'application/json'
        }
      })

    },
    signup: function(username, password) {
      return $http({
        method: 'POST',
        url: 'http://yettodo.herokuapp.com/users',
        data:{
          username: username,
          password: password,
          token: $window.authtoken
        },
        headers: {
         'Content-Type': 'application/json'
        }
      })

    }

  };
})

