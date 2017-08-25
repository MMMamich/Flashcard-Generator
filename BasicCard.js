var inquirer = require('inquirer');

var toughQuestions = require('./ClozeCard.js');  //Variable has to be named same as function

var clozeQuestions = toughQuestions.clozeQuestions;

var clozeQuestionsPickachu = toughQuestions.clozeQuestionsPikachu;

var partialQuestions = toughQuestions.partialQuestions;

var partialQuestionsPikachu = toughQuestions.partialQuestionsPikachu;

//======================================

function BasicCard (read, front, back) {
    
    this.readable = read; //Makes Question easier to read
    this.front = front;  //Question - fullText
    this.back = back;    //Answer - fullText  Maybe take this away
    
}

//======================================


//==================================================================================

var q1 = new BasicCard("Question 1: ", "Yoshi", "Yoshi is Peach's Green Dinosaur.");
var q2 = new BasicCard("Question 2: ", "Piantas", "Piantas Are Inhibantants of Isle Delfino.") ;
var q3 = new BasicCard("Question 3: ", "1983", "1983 is when Mario Bros came out.");
var q4 = new BasicCard("Question 4: ", "Toadette", "Toadette is Toads Female Counterpart.");
var q5 = new BasicCard("Question 5: ", "Odyssey", "Odyssey is the next Mario 3D Platform Game.");

//==================================================================================

var qP1 = new BasicCard("Question 1: ", "Zubat", "Zubat is pokemon number 41.");
var qP2 = new BasicCard("Question 2: ", "Fairy", "Fair is Super effective against Dark.");
var qP3 = new BasicCard("Question 3: ", "Ash", "Ash Catchum is the original pokemon trainer.");
var qP4 = new BasicCard("Question 4: ", "HM05", "HM05 is Flash.");
var qP5 = new BasicCard("Question 5: ", "Shuckle", "Shuckle is the pokemon with the highest defense.");

//==================================================================================


//==================================================================================

function babyQuestions (){
    
    inquirer.prompt([
        
    {
      type: 'confirm',  
      name:"q1", 
      message: q1.readable + q1.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q1", 
      message: q1.readable + q1.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q2", 
      message: q2.readable + q2.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q2", 
      message: q2.readable + q2.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q3", 
      message: q3.readable + q3.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q3", 
      message: q3.readable + q3.back,  
      default: true
    },
    
    {
      type: 'confirm',  
      name:"q4", 
      message: q4.readable + q4.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q4", 
      message: q4.readable + q4.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q5", 
      message: q5.readable + q5.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q5", 
      message: q5.readable + q5.back,  
      default: true
    }
        
    ]).then(function (answers) {
    console.log("Good Job...Baby!");
});   
}

//==================================================================================


//==================================================================================

function pikaQuestions (){
    
    inquirer.prompt([
        
    {
      type: 'confirm',  
      name:"q1", 
      message: qP1.readable + qP1.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q1", 
      message: qP1.readable + qP1.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q2", 
      message: qP2.readable + qP2.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q2", 
      message: qP2.readable + qP2.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q3", 
      message: qP3.readable + qP3.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q3", 
      message: qP3.readable + qP3.back,  
      default: true
    },
    
    {
      type: 'confirm',  
      name:"q4", 
      message: qP4.readable + qP4.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q4", 
      message: qP4.readable + qP4.back,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q5", 
      message: qP5.readable + qP5.front,  
      default: true
    },
        
    {
      type: 'confirm',  
      name:"q5", 
      message: qP5.readable + qP5.back,  
      default: true
    }
        
    ]).then(function (answers) {
    console.log("Good Job...Baby!");
});   
}

//==================================================================================

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
    choices: ["Mario", "Pokemon"]
    
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
}
         
]).then(function (inquirerResponse) {

    if (inquirerResponse.quizType === "Baby" && inquirerResponse.topicSelect === "Mario"){ 
        babyQuestions();
    } else if (inquirerResponse.quizType === "Medium" && inquirerResponse.topicSelect === "Mario"){
        clozeQuestions();
    } else if (inquirerResponse.quizType === "Hard" && inquirerResponse.topicSelect === "Mario"){
        partialQuestions();
    } else if (inquirerResponse.quizType === "Baby" && inquirerResponse.topicSelect === "Pokemon"){
        pikaQuestions();
    }else if (inquirerResponse.quizType === "Medium" && inquirerResponse.topicSelect === "Pokemon"){
        clozeQuestionsPickachu();
    }else if (inquirerResponse.quizType === "Hard" && inquirerResponse.topicSelect === "Pokemon")
        partialQuestionsPikachu();
});

