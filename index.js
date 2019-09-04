/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */

class User {
    constructor(name) {}
    isLoggedIn() {}
    getLastLoggedInAt() {}
    logIn() {}
    logOut() {}
    getName() {}
    setName(name) {}
    canEdit(comment) {}
    canDelete(comment) {}
  }
  
  class Moderator {}
  
  class Admin {}
  
  class Comment {
    constructor(author, message, repliedTo) {}
    getMessage() {}
    setMessage(message) {}
    getCreatedAt() {}
    getAuthor() {}
    getRepliedTo() {}
    toString() {}
  }
  
  /**************************
   * Alternative using ES5 prototypes
   * Or feel free to choose your own solution format
   **************************
   
  function User(name) {}
  User.prototype = {
    isLoggedIn: function() {}
    getLastLoggedInAt: function() {}
    logIn: function() {}
    logOut: function() {}
    getName: function() {}
    setName: function(name) {}
    canEdit: function(comment) {}
    canDelete: function(comment) {}
  }
  
  var Admin = ???
  
  var Moderator = ???
  
  function Comment(author, message, repliedTo) {}
  Comment.prototype = {
    getMessage: function() {}
    setMessage: function(message) {}
    getCreatedAt: function() {}
    getAuthor: function() {}
    getRepliedTo: function() {}
    toString: function() {}
  }
  ***************************/
 
 var should = require('should');
 describe('OOP Tests', function() {
   it('example tests', function() {
     var user = new User("User 1");
     user.getName().should.eql('User 1', 'User name is set correctly');
     var mod = new Moderator("Moderator");
     mod.should.be.an.instanceof(User, 'Moderator is a User');
   });
 });