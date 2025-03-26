// Perguntas e respostas melhoradas para o teste de segurança digital
const questions = [
    {
        question: "O que é phishing?",
        options: [
            "Um tipo de golpe que usa e-mails, mensagens ou sites falsos para roubar informações pessoais.",
            "Um vírus que infecta computadores quando conectados à internet.",
            "Um tipo de rede social exclusiva para pessoas acima de 45 anos.",
            "Um programa de antivírus gratuito disponível para smartphones."
        ],
        answer: 0,
        explanation: "Phishing é uma técnica onde criminosos fingem ser instituições confiáveis para enganar pessoas e obter dados sensíveis como senhas e números de cartão de crédito."
    },
    {
        question: "Qual é a melhor prática para criar senhas seguras?",
        options: [
            "Usar a mesma senha em todos os sites para não esquecer.",
            "Criar senhas longas com letras maiúsculas e minúsculas, números e símbolos.",
            "Usar datas de nascimento e nomes de familiares como senha.",
            "Guardar todas as senhas em um papel na gaveta para consulta."
        ],
        answer: 1,
        explanation: "Senhas fortes devem ter pelo menos 12 caracteres, combinando letras, números e símbolos. Cada conta deve ter uma senha única e, idealmente, use um gerenciador de senhas seguro."
    },
    {
        question: "O que fazer se receber uma mensagem suspeita no WhatsApp?",
        options: [
            "Responder imediatamente para descobrir quem enviou.",
            "Verificar a identidade do remetente antes de agir ou responder.",
            "Compartilhar a mensagem com todos os contatos para alertá-los.",
            "Clicar em qualquer link enviado para verificar do que se trata."
        ],
        answer: 1,
        explanation: "Sempre verifique a identidade de quem envia mensagens suspeitas. Ligue para a pessoa usando o número que você já conhece, não clique em links e não compartilhe a mensagem."
    },
    {
        question: "Qual destas é uma forma segura de fazer compras online?",
        options: [
            "Usar computadores públicos para fazer compras.",
            "Comprar apenas em sites que oferecem os menores preços.",
            "Verificar se o site tem cadeado de segurança (https://) e boa reputação.",
            "Sempre optar pelo pagamento via transferência bancária direta."
        ],
        answer: 2,
        explanation: "Sites seguros usam HTTPS (cadeado na barra de endereço). Também é importante verificar a reputação da loja, usar cartões virtuais quando possível e evitar redes Wi-Fi públicas para compras."
    },
    {
        question: "O que é autenticação de dois fatores (2FA)?",
        options: [
            "Um tipo de senha que precisa ser alterada duas vezes por mês.",
            "Um método que exige dois tipos de verificação para acessar uma conta.",
            "Um antivírus que verifica arquivos duas vezes antes de abri-los.",
            "Uma configuração que permite duas pessoas acessarem a mesma conta."
        ],
        answer: 1,
        explanation: "A autenticação de dois fatores adiciona uma camada extra de segurança ao exigir duas formas de verificação: algo que você sabe (senha) e algo que você tem (código enviado ao celular, por exemplo)."
    }
];

// Variáveis de estado
let currentScore = 0;
let answeredQuestions = 0;
let userAnswers = [];

// Função para renderizar as perguntas
function renderQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.dataset.index = index;

        questionDiv.innerHTML = `
        <h3>${index + 1}. ${q.question}</h3>
        <div class="options">
            ${q.options.map((option, i) => `
                <div class="option">
                    <input type="radio" name="question${index}" value="${i}" id="q${index}o${i}">
                    <label for="q${index}o${i}">${option}</label>
                </div>
            `).join('')}
        </div>
        <div class="explanation" style="display: none; margin-top: 1rem; padding: 1rem; background-color: rgba(159, 239, 0, 0.1); border-radius: 5px;">
            <p><strong>Explicação:</strong> ${q.explanation}</p>
        </div>
        `;


        quizContainer.appendChild(questionDiv);


        const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', updateProgress);
        });
    });
}

// Função para atualizar o progresso
function updateProgress() {
    // Contar quantas perguntas foram respondidas
    answeredQuestions = 0;
    questions.forEach((_, index) => {
        const answered = document.querySelector(`input[name="question${index}"]:checked`);
        if (answered) answeredQuestions++;
    });

    // Atualizar a barra de progresso
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (answeredQuestions / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Habilitar o botão de enviar se todas as perguntas foram respondidas
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = answeredQuestions < questions.length;
    if (answeredQuestions < questions.length) {
        submitBtn.classList.add('btn-disabled');
    } else {
        submitBtn.classList.remove('btn-disabled');
    }
}

// Função para verificar as respostas
function checkAnswers() {
    currentScore = 0;
    userAnswers = [];

    // Desabilitar as opções para evitar mudanças após enviar
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = true;
    });

    // Verificar cada resposta
    questions.forEach((q, index) => {
        const questionDiv = document.querySelector(`.question[data-index="${index}"]`);
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        // Armazenar resposta do usuário
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            userAnswers.push(userAnswer);

            // Marcar visualmente a questão como correta ou incorreta
            if (userAnswer === q.answer) {
                currentScore++;
                questionDiv.classList.add('correct');
            } else {
                questionDiv.classList.add('incorrect');
            }

            // Mostrar explicação
            questionDiv.querySelector('.explanation').style.display = 'block';
        }
    });

    // Mostrar resultado
    showResult();

    // Esconder botão de enviar e mostrar botão de reiniciar
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'block';
}

// Função para mostrar o resultado
function showResult() {
    const resultDiv = document.getElementById('result');
    const percentage = (currentScore / questions.length) * 100;

    let message, advice;

    if (percentage >= 80) {
        message = "Excelente! Você está bem preparado contra golpes digitais.";
        advice = "Continue se mantendo informado sobre novas ameaças.";
    } else if (percentage >= 60) {
        message = "Bom trabalho! Você tem conhecimentos básicos sobre segurança digital.";
        advice = "Recomendamos explorar um pouco mais as seções 'Como se Proteger' e 'Principais Golpes'.";
    } else {
        message = "Você pode melhorar seus conhecimentos sobre segurança digital.";
        advice = "Sugerimos que leia atentamente o conteúdo de todas as seções do site antes de navegar na internet.";
    }

    resultDiv.innerHTML = `
        <h3>Seu Resultado</h3>
        <div class="score">${currentScore}/${questions.length}</div>
        <p>${message}</p>
        <p>${advice}</p>
        <div class="feedback">
            <h4>Revisão das respostas:</h4>
            ${questions.map((q, index) => `
                <div class="feedback-item">
                    <span class="feedback-icon ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}">
                        ${userAnswers[index] === q.answer ? '✓' : '✗'}
                    </span>
                    <span>Questão ${index + 1}: ${userAnswers[index] === q.answer ? 'Correta' : 'Incorreta'}</span>
                </div>
            `).join('')}
        </div>
    `;

    resultDiv.style.display = 'block';

    // Scroll até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Função para reiniciar o teste
function restartQuiz() {
    // Limpar respostas e pontuação
    currentScore = 0;
    answeredQuestions = 0;
    userAnswers = [];

    // Esconder resultado
    document.getElementById('result').style.display = 'none';

    // Resetar o progresso
    document.getElementById('progress-bar').style.width = '0%';

    // Renderizar perguntas novamente
    renderQuestions();

    // Mostrar botão de enviar e esconder botão de reiniciar
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('restart-btn').style.display = 'none';

    // Desabilitar botão de enviar até que todas as perguntas sejam respondidas
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').classList.add('btn-disabled');
}

// Eventos
document.addEventListener('DOMContentLoaded', function () {
    renderQuestions();

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.classList.add('btn-disabled');

    submitBtn.addEventListener('click', checkAnswers);


    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function(event) {
            // Prevent the click from immediately propagating
            event.stopPropagation();
            
            // Toggle the active class
            menu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                menu.classList.remove('active');
            }
        });
    }
});

// Optional: Add a function for explicit toggling if needed
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}