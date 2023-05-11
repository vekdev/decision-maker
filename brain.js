const answer = document.getElementById("answer")
const enteredAnswersList = document.getElementById("answers")
const questionEntryField = document.getElementById("question")
const questionTextParagraph = document.getElementById("questionText")
const questionWrapper = document.getElementById("questionWrapper")
const answerWrapper = document.getElementById("answerWrapper")

let userAnswers = []

document.getElementById("addAnswer").addEventListener("click", _ => {
    if (answer.value) {
        userAnswers.push(answer.value)
        populateAnswers(answer.value)
        answer.value = ""
    }
})

document.getElementById("addQuestion").addEventListener("click", () => {
    if (questionEntryField.value) {
        questionTextParagraph.textContent = questionEntryField.value
        questionEntryField.value = ""
        answerWrapper.style.display = "block"
        questionWrapper.style.display = "none"
    }
})

document.getElementById("getAnswer").addEventListener("click", e => {
    e.preventDefault()
    const randomElement = Math.floor(Math.random() * userAnswers.length)

    const answerParagraphElement = document.getElementById("computerAnswer")
    if (userAnswers.length > 1) {
        answerParagraphElement.innerText = userAnswers[randomElement]
    } else if (userAnswers.length === 1) {
        answerParagraphElement.innerText = "You have only given me one possible answer. It appears you have made the decision yourself and have no use for me, in which case stop wasting my time (and yours). If it was a mistake though... try again ;-)"
    } else {
        answerParagraphElement.innerText = "You haven't provided any possible answers dimwit"
    }
})

function populateAnswers(answer) {
    const newLine = document.createElement("li")
    newLine.textContent = answer
    enteredAnswersList.appendChild(newLine)
}

questionEntryField.addEventListener("keyup", () => {
    questionTextParagraph.textContent = questionEntryField.value
})
