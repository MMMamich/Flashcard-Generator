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

var q1 = new BasicCard("Question 1: ", "Yoshi", "Yoshi is Peach's Green Dinosaur.");
var q2 = new BasicCard("Question 2: ", "Piantas", "Piantas Are Inhibantants of Isle Delfino.") ;
var q3 = new BasicCard("Question 3: ", "1983", "1983 is when Mario Bros. came out.");
var q4 = new BasicCard("Question 4: ", "Toadette", "Toadette is Toads Female Counterpart.");
var q5 = new BasicCard("Question 5: ", "Odyssey", "Odyssey is the next Mario 3D Platform Game.");

var qP1 = new BasicCard("Question 1: ", "Zubat", "Zubat is pokemon number 41.");
var qP2 = new BasicCard("Question 2: ", "Fairy", "Fair is Super effective against Dark.");
var qP3 = new BasicCard("Question 3: ", "Ash", "Ash Catchum is the original pokemon trainer.");
var qP4 = new BasicCard("Question 4: ", "HM05", "HM05 is Flash.");
var qP5 = new BasicCard("Question 5: ", "Shuckle", "Shuckle is the pokemon with the highest defense.");

inquirer.prompt([
    
{
    type: 'list',
    name: "quizType", //Storing user choice
    choices: ["Baby", "Medium", "Hard"], 
    message: "What Type of Flash Cards Would You Like?",
    
},
    
{
    
    type: 'list',
    name: "topicSelect",
    message: "Which Topic Do You Prefer?",
    choices: ["Mario", "Pokemon"],
    
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
    message: "Do You Want To Be The Best?: ", //If No go back to quizType
    default: true,
    when: function(whichRPG){
        return whichRPG.topicSelect === "Pokemon";
    }
},
    
{
    type: 'confirm', //HOW DO I GET DIFFICULTY - READ BBY, MD, LRG being read to here
    name:"q1",
    message: q1.readable + q1.front, //If yes then go to q2 if no then console.log
    default: true,
    when: function(quizDiff){
        return quizDiff.quizType === "Baby";
        return quizDiff.quizType === "Medium";
        return quizDiff.quizType === "Hard";
    }
},
    
{
    type: 'confirm', //HOW DO I GET DIFFICULTY - READ BBY, MD, LRG being read to here
    name:"q2",
    message: q2.readable + q2.front, //If yes then go to q2 if no then console.log
    default: true
    
}
    
    
    
]).then(function (inquirerResponse) {

});

