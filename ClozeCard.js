var BasicCard = require ('./BasicCard');

function quizCard (cloze, partial) {
    
    this.cloze = cloze; //Cloze just shows you George Washington 
    this.partial = partial; //Just show you part of question
    
}

module.exports = quizCard;
