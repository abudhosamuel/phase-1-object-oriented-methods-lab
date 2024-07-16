// BoardMember Constructor
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // Adding methods to the BoardMember prototype
  
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  
  // Example Usage
  
  // Creating a new BoardMember instance
  let boardMember = new BoardMember("John Doe", "California", "Finance");
  console.log(boardMember.sayHi());
  // Output: "Hi, my name is John Doe. I am from California, and I was trained in Finance."
  
  console.log(boardMember.veto());
  // Output: "No, I must disagree"
  
  console.log(boardMember.approve());
  // Output: "You can do that!"
  
  console.log(boardMember.doCharity());
  // Output: "I like to help people."
  
  console.log(boardMember.releasePressStatement());
  // Output: "You will see great things from Scuber."
  