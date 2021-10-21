const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
{
    question: 'Who is making the Web Standards?',
    choice1: 'Mozilla',
    choice2: 'Microsoft',
    choice3: 'Apple',
    choice4: 'The World Wide Web Consortium',
    answer: 4,
},
{
    question:
    "How is document type initialized in HTML5 ?",
    choice1: "</DOCTYPE HTML>",
    choice2: "</DOCTYPE>",
    choice3: "<! DOCTYPE HTML>",
    choice4: "</DOCTYPE html>",
    answer: 3,
},
{
    question: "Which of the following HTML Elements is used for making any text bold ?",
    choice1: "<h1>",
    choice2: "<br>",
    choice3: "<o>",
    choice4: "<b>",
    answer: 4,
},
{
    question: "Which of the following HTML element is used for creating an unordered list?",
    choice1: "<ui>",
    choice2: "<ul>",
    choice3: "<em>",
    choice4: "<i>",
    answer:2,
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../Quiz/endQuizz.html') 
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

            acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()