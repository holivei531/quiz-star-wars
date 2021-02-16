// // Obtendo referência dos elementos
// const form = document.querySelector('.quiz-form');
// const finalResult = document.querySelector('.result');

// // Armazanando as respostas corretas do quiz
// const correctAnswers = ['A', 'A', 'A', 'A'];

// // Adicionando evento de envio ao form
// form.addEventListener('submit', event => {
//     event.preventDefault();

//     // Adicionando uma pontuação baseada nas respostas do usuário
//     let score = 0; 
//     // Adicionando valores checados do input
//     const userAnswers = [
//         form.inputQuestion1.value,
//         form.inputQuestion2.value,
//         form.inputQuestion3.value,
//         form.inputQuestion4.value,
//     ];
//     // Checando respostas
//     userAnswers.forEach((userAnswer, index) => {
//         if (userAnswer === correctAnswers[index]) {
//             score += 25;
//         };
//     });

//     // Rolando a página para o top após enviar o form (para melhor visibilidade no mobile)
//     scrollTo(0, 0);

//     // Removendo a classe display none
//     finalResult.classList.remove('d-none');

//     // Mostrando a porcentagem de acerto do usuário
//     let counter = 0;

//     const timer = setInterval(() => {
//         if (counter === score) {
//             clearInterval(timer);
//         };
//         finalResult.querySelector('span').textContent = `${counter}%`;
//         counter++;
//     }, 10);
// });

// obtendo referencia dos elementos
const form = document.querySelector('.quiz-form');

// armazenando respostas corretas
const correctAnswers = ['A', 'A', 'A', 'A'];

// adicionando evento de envio no formulario
form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    // obtendo resposta do usuario
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    // checando respostas
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            console.log(score += 25);
        };
    });
});
