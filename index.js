

class User {
    constructor(name) {
      this._name = name
      this._logedIn = false
      this._lastLoggedInAt = null
    }
    isLoggedIn() {
      return this._loggedIn
    }
    getLastLoggedInAt() {
      return this._lastLoggedInAt
    }
    logIn() {
      this._lastLoggedInAt = new Date()
      this._loggedIn = true
    }
    logOut() {
      this._loggedIn=false
    }
    getName() {
      return this._name
    }
    setName(name) {
      return this._name = name
    }
    canEdit(comment) {
      if(comment.author._name === this._name){
        return true
      }else{
        return false
      }
    }
    canDelete(comment) {
      return false
    }
  }
  
  class Moderator extends User {
    constructor(name){
      super(name)
    }
    canDelete(comment){
      return true
    }
  }
  
  class Admin extends Moderator{
    constructor(name){
      super(name)
    }
    canEdit(comment){
      return true
    }
  }
  
  class Comment {
      constructor(author = null, message, repliedTo = null) {
        this._createdAt = new Date();
        this._message = message;
        this._repliedTo = repliedTo;
        this._author = author;
      }
      getMessage() {
        return this._message;
      }
      setMessage(message) {
        this._message = message;
      }
      getCreatedAt() {
        return this._createdAt;
      }
      getAuthor() {
        return this._author;
      }
      getRepliedTo() {
        return this._repliedTo;
      }
      toString() {
        if(this._repliedTo === null) {
           return this._message + " by " + this.author._name
        }
        return this._message + " by " + this.author._name + " (replied to " + 
             this._repliedTo.author._name + ")"
      }
    }
  
 
 
 var should = require('should');
 describe('OOP Tests', function() {
   it('example tests', function() {
     var user = new User("Joy");
     user.getName().should.eql('Joy', 'User name is set correctly');
     var mod = new Moderator("Moderator");
     mod.should.be.an.instanceof(User, 'Moderator is a User');
   });
 });