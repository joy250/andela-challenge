

class User {
    constructor(name) {
      this.name = name
      this.logedIn = false
      this.lastLoggedInAt = null
    }
    isLoggedIn() {
      return this.loggedIn
    }
    getLastLoggedInAt() {
      return this.lastLoggedInAt
    }
    logIn() {
      this.lastLoggedInAt = new Date()
      this.loggedIn = true
    }
    logOut() {
      this.loggedIn=false
    }
    getName() {
      return this.name
    }
    setName(name) {
      return this.name = name
    }
    canEdit(comment) {
      if(comment.author.name === this.name){
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
        this.createdAt = new Date();
        this.message = message;
        this.repliedTo = repliedTo;
        this.author = author;
      }
      getMessage() {
        return this.message;
      }
      setMessage(message) {
        this.message = message;
      }
      getCreatedAt() {
        return this.createdAt;
      }
      getAuthor() {
        return this.author;
      }
      getRepliedTo() {
        return this.repliedTo;
      }
      toString() {
        if(this.repliedTo == null) {
           return this.message + " by " + this.author.name
        }
        return this.message + " by " + this.author.name + " (replied to " + 
             this.repliedTo.author.name + ")"
      }
    }
  
 
 
 var should = require('should');
 describe('OOP Tests', function() {
   it('example tests', function() {
     var user = new User("User 1");
     user.getName().should.eql('User 1', 'User name is set correctly');
     var mod = new Moderator("Moderator");
     mod.should.be.an.instanceof(User, 'Moderator is a User');
   });
 });