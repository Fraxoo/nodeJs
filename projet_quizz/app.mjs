import { log } from "console";
import { stdin, stdout } from "process";
import { createInterface } from "readline";

// Je crée une classe
// Une classe est une structure de données qui peut contenir plusieurs variables ou fonctions (comme les structs en C)
class Question {
    /**
     * Le constructeur est la fonction appelée par l'opérateur new lorsque l'on veut créer une variable (instance à partir d'une classe).
     * @param {string} phrase la question et les choix de réponses. 
     * @param {number} goodAnswerValue le numéro de la bonne réponse
     */
    constructor(phrase, goodAnswerValue) {
        this.phrase = phrase;
        this.goodAnswerValue = goodAnswerValue;
    }
}

// Je déclare un tableau de questions
const questions = [
    new Question("Quelle est la couleur des cheveux blancs d'Henri IV ?\n1. Blanc\n2. Rouge", 1),
    new Question("Quelle est la capitale de la France ?\n1. Londres\n2. Paris", 2),
    new Question("Combien de côtés a un triangle ?\n1. Trois\n2. Quatre", 1),
    new Question("Quel est le plus grand océan du monde ?\n1. Atlantique\n2. Pacifique", 2),
    new Question("Qui a peint la Joconde ?\n1. Léonard de Vinci\n2. Picasso", 1),
    new Question("Quelle est la planète la plus proche du Soleil ?\n1. Mercure\n2. Mars", 1),
    new Question("En quelle année a eu lieu la Révolution française ?\n1. 1789\n2. 1815", 1),
];

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input: stdin,
    output: stdout
});

let score = 0;
let nbQuestion = questions.length;
let nbInput = 0;

// Codez ici...



console.log(questions[nbInput].phrase);


logger.addListener("line", onUserAnswer);

function onUserAnswer(answer) {
    
    if (questions[nbInput].goodAnswerValue == answer) {
        score++;
        console.log(`Bonne reponse +1 points vous avez actuellment : ${score} points`);
    } else {
        console.log("mauvaise reponse");

    }
    nbInput++;
    if (nbInput >= questions.length) {
        logger.removeListener("line", onUserAnswer);
        logger.close();
    }else{
        console.log(questions[nbInput].phrase);

    }
}

