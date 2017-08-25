var inquirer = require('inquirer');

var inquiryData = require('./BasicCard.js');
//===================================================================

function quizCard (cloze, partial) {
    
    this.cloze = cloze; //Cloze just shows you George Washington 
    this.partial = partial; //Just show you part of question
    
}

//==================================================================

var q1Cloze = new quizCard("Yoshi is", "...Peach's Green Dinosaur.");
var q2Cloze = new quizCard("Piantas Are", "...Inhibantants of Isle Delfino.") ;
var q3Cloze = new quizCard("1983 is when", "...Mario Bros came out.");
var q4Cloze = new quizCard("Toadette is", "...Toads Female Counterpart.");
var q5Cloze = new quizCard("Odyssey is", "...the next Mario 3D Platform Game.");

var answerKeyMario = {
    line1:"\\≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠//",
    q1: "Yoshi is Peachs Green Dinosaur",
    q2: "Piantas are Inhibantants of Isle Delfino",
    q3: "1983 is when Mario Bros came out",
    q4: "Toadette is Toads Female Counterpart",
    q5: "Odyssey is the next Mario 3D Platform Game",
    line2:"\\≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠//"
}
//==================================================================

var q1PikaCloze = new quizCard("Zubat is pokemon number", "...pokemon number 41.");
var q2PikaCloze = new quizCard("Fairy is", "...Super Effective against Dark.");
var q3PikaCloze = new quizCard("Ash Catchum is", "...the original pokemon trainer.");
var q4PikaCloze = new quizCard("HM05 is", "...is Flash.");
var q5PikaCloze = new quizCard("Shuckle is the", "...pokemon with the highest defense.");

var answerKeyPika = {
    
    line1:"\\≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠//",
    q1:"Zubat is pokemon number 41",
    q2: "Fairy is Super Effective against Dark", 
    q3: "Ash Catchum is the original pokemon trainer",
    q4: "HM05 is Flash",
    q5: "Odyssey is the next Mario 3D Platform Game",
    line2:"\\≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠//",
}

//==================================================================


//============================================================================================================
exports.clozeQuestions = function() {


    inquirer.prompt([
    
    {
        
        type: 'confirm',
        name: "instructions",
        message: "You'll Be Given the Answer, finish the rest of the statement.  Understand?", //If No go back to quizType
        default: true 
        
    },
        
        
    {
        type: "input",
        message: q1Cloze.cloze,
        name: "q1Clz"
        
    },
        
    {
        type: "input",
        message: q2Cloze.cloze,
        name: "q2Clz"
        
    },
        
    {
        type: "input",
        message: q3Cloze.cloze,
        name: "q3Clz"
        
    },
        
    {
        type: "input",
        message: q4Cloze.cloze,
        name: "q4Clz"
        
    },
    
    {
        type: "input",
        message: q5Cloze.cloze,
        name: "q5Clz"
        
    },
    
    
]).then(function (cloze) {
        
    for (key in answerKeyMario){
        console.log(answerKeyMario[key]);
    }
    
});
    
}

//============================================================================================================


//============================================================================================================
exports.clozeQuestionsPikachu = function() {


    inquirer.prompt([
    
    {
        
        type: 'confirm',
        name: "instructions",
        message: "You'll Be Given the Answer, finish the rest of the statement.  Understand?", //If No go back to quizType
        default: true 
        
    },
        
        
    {
        type: "input",
        message: q1PikaCloze.cloze,
        name: "q1Clz"
        
    },
        
    {
        type: "input",
        message: q2PikaCloze.cloze,
        name: "q2Clz"
        
    },
        
    {
        type: "input",
        message: q3PikaCloze.cloze,
        name: "q3Clz"
        
    },
        
    {
        type: "input",
        message: q4PikaCloze.cloze,
        name: "q4Clz"
        
    },
    
    {
        type: "input",
        message: q5PikaCloze.cloze,
        name: "q5Clz"
        
    },
    
    
]).then(function (cloze) {
    for (key in answerKeyPika){
        console.log(answerKeyPika[key]);
    }
    
});
    
}

//============================================================================================================


//============================================================================================================

exports.partialQuestions = function () { 

inquirer.prompt([

    {
        type: 'confirm',
        message: "You'll Be Given thee Statement, finish the rest of the Answer.  Understand?", //If No go back to quizType
        name: "instructions",
        default: true 
    
    },
    
    {
        
        type: "input",
        message: q1Cloze.partial,
        name: "q1Prt"
        
    },
    
    {
        
        type: "input",
        message: q2Cloze.partial,
        name: "q2Prt"
        
    },
    
    {
        
        type: "input",
        message: q3Cloze.partial,
        name: "q3Prt"
        
    },
    
    {
        
        type: "input",
        message: q4Cloze.partial,
        name: "q4Prt"
        
    },
    
    {
        
        type: "input",
        message: q5Cloze.partial,
        name: "q5Prt"
        
    }


]).then(function (partial) {
    for (key in answerKeyMario){
        console.log(answerKeyMario[key]);
    }
});

};

//============================================================================================================


//============================================================================================================

exports.partialQuestionsPikachu = function () { 

inquirer.prompt([

    {
        type: 'confirm',
        message: "You'll Be Given thee Statement, finish the rest of the Answer.  Understand?", //If No go back to quizType
        name: "instructions",
        default: true 
    
    },
    
    {
        
        type: "input",
        message: q1PikaCloze.partial,
        name: "q1Prt"
        
    },
    
    {
        
        type: "input",
        message: q2PikaCloze.partial,
        name: "q2Prt"
        
    },
    
    {
        
        type: "input",
        message: q3PikaCloze.partial,
        name: "q3Prt"
        
    },
    
    {
        
        type: "input",
        message: q4PikaCloze.partial,
        name: "q4Prt"
        
    },
    
    {
        
        type: "input",
        message: q5PikaCloze.partial,
        name: "q5Prt"
        
    }


]).then(function (partial) {
    for (key in answerKeyPika){
        console.log(answerKeyPika[key]);
    }
});

};

//============================================================================================================
