var BasicCard = require ('./BasicCard');

//==================================================================

var q1Cloze = new quizCard("Yoshi", "Yoshi is Peach's Green Dinosaur.");
var q2Cloze = new quizCard("Piantas", "Piantas Are Inhibantants of Isle Delfino.") ;
var q3Cloze = new quizCard("1983", "1983 is when Mario Bros. came out.");
var q4Cloze = new quizCard("Toadette", "Toadette is Toads Female Counterpart.");
var q5Cloze = new quizCard("Odyssey", "Odyssey is the next Mario 3D Platform Game.");

var qP1Cloze = new quizCard("Zubat", "Zubat is pokemon number 41.");
var qP2Cloze = new quizCard("Fairy", "Fair is Super effective against Dark.");
var qP3Cloze = new quizCard("Ash Catchum is the original pokemon trainer.");
var qP4Cloze = new quizCard("HM05", "HM05 is Flash.");
var qP5Cloze = new quizCard("Shuckle", "Shuckle is the pokemon with the highest defense.");

function quizCard (cloze, partial) {
    
    this.cloze = cloze; //Cloze just shows you George Washington 
    this.partial = partial; //Just show you part of question
    
}

module.exports = quizCard;

//===================================================================

//inquirer.prompt([
//    
//    {
//        
//        
//    }
//    
//    
//]).then(function (answers) {
//    // Use user feedback for... whatever!! 
//});