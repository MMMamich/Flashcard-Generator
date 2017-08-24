var inquirer = require('inquirer');

var ClozeCard = require ('./ClozeCard');

//======================================

function BasicCard (read, front, back) {
    
    this.readable = read; //Makes Question easier to read
    this.front = front;  //Question - fullText
    this.back = back;    //Answer - fullText  Maybe take this away
    
}

module.exports = BasicCard;

//======================================

var q1 = new BasicCard("Question 1: ", "Yoshi", "Yoshi is Peach's Green Dinosaur");

inquirer.prompt([
    
{
    type: 'list',
    name: "quizType", //Storing user choice
    choices: ["Baby", "Medium", "Hard"], 
    message: "What Type of Flash Cards Would You Like?"    
},
    
{
    
    type: 'list',
    name: "topicSelect",
    message: "Which Topic Do You Prefer?",
    choices: ["Mario", "Pokemon"],
    when: function(quizDiff){
        return quizDiff.quizType === "Baby";
        
    }
},
    
{
    
    type: 'list',
    name: "topicSelect",
    message: "Which Topic Do You Prefer?",
    choices: ["Mario", "Pokemon"],
    when: function(quizDiff){
        return quizDiff.quizType === "Medium";
    }
},
    
{
    
    type: 'list',
    name: "topicSelect",
    message: "Which Topic Do You Prefer?",
    choices: ["Mario", "Pokemon"],
    when: function(quizDiff){
        return quizDiff.quizType === "Hard";
    }
},
    
{
    
    type: 'confirm',
    name: "topicCheck",
    message: "Let's-a-go!: ", //If No go back to quizType
    default: true,
    when: function(whichRPG){
        return whichRPG.topicSelect === "Mario";
    }
},
    
{
    
    type: 'confirm',
    name: "topicCheck",
    message: "Do You Want To Be The Best: ", //If No go back to quizType
    default: true,
    when: function(whichRPG){
        return whichRPG.topicSelect === "Pokemon";
    }
},
    
{
    type: 'confirm',
    name:"q1",
    message: q1.readable + q1.front, //If yes then go to q2 if no then console.log
    default: true
}
    
    
    
]).then(function (inquirerResponse) {
//    if (inquirerResponse.quizType && inquirerResponse.choices[0]) {
//        
//        console.log("You'll get the answers young padawon");
//        
//        
//    }else if (inquirerResponse.quizType && inquirerResponse.choices[1]){
//        
//        console.log("Hehehe the force is strong with you");
//        
//    }else if (inquirerResponse.quizType && inquirerResponse.choices[2]){
//        
//        console.log("Jedi Master, you've have arrived");
//        
//    }
    
    
//    if (inquirerResponse.topicCheck === true) {
//        
//        console.log("game state ready");
//        
//    }else{
//        
//        inquirerResponse.quizType;
//        
//    }
    
});

