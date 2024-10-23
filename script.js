const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Lisboa"],
        answer: 2
    },
    {
        question: "¿Qué es HTML?",
        options: ["Un lenguaje de programación", "Un lenguaje de marcado", "Un sistema operativo", "Un navegador web"],
        answer: 1
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges", "Julio Cortázar"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
        document.getElementById('score').textContent = 'Puntuación: ' + score;
    }
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('nextButton').style.display = 'none';
    } else {
        document.getElementById('question').textContent = '¡Juego terminado! Tu puntuación es: ' + score;
        document.getElementById('options').innerHTML = '';
        document.getElementById('nextButton').style.display = 'none';
    }
}

// Iniciar el juego
showQuestion();
