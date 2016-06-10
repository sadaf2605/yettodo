function Todobooks(){

}

Todobooks.prototype.getAll = function(){
	return
	[
	    {name: "private", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."},
	    {name: "office", description: null}
	]
};

Todobooks.prototype.all = function(){
    alert("Howdy, my name is" + this.name);
};


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
        if (chats[i].id === parseInt(name)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
