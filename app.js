// Obtendo referência do elemento
const form = document.querySelector('.quiz-form');

// Armazanando as respostas corretas do quiz
const correctAnswers = ['A', 'A', 'A', 'A'];

// Adicionando evento de envio ao form
form.addEventListener('submit', event => {
    event.preventDefault();

    // Adicionando uma pontuação baseada nas respostas do usuário
    let score = 0; 
    // Adicionando valores checados do input
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];
    // Checando respostas
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25;
        };
    });
    console.log(score);
});
