// Perguntas e respostas para o teste de segurança digital
// Categorias: 0 = fácil, 1 = médio, 2 = difícil
const questions = [
    {
      question: "O que é engenharia social?",
      options: [
        "Um tipo de vírus que infecta computadores e rouba dados.",
        "Um conjunto de técnicas psicológicas usadas para manipular pessoas a divulgar informações confidenciais ou realizar ações.",
        "Um software que protege computadores contra invasões.",
        "Um curso técnico para aprender a programar computadores."
      ],
      answer: 1,
      category: 0, // Fácil
      explanation: "Engenharia social é o conjunto de técnicas psicológicas usadas para manipular pessoas a realizar ações ou divulgar informações confidenciais. Em vez de explorar falhas técnicas, os atacantes exploram a tendência humana natural de confiar."
    },
    {
      question: "O que é phishing?",
      options: [
        "Um tipo de golpe que usa e-mails, mensagens ou sites falsos para roubar informações pessoais.",
        "Um vírus que infecta computadores quando conectados à internet.",
        "Um tipo de rede social exclusiva para pessoas com pouca familiaridade tecnológica.",
        "Um programa de antivírus gratuito disponível para smartphones."
      ],
      answer: 0,
      category: 0, // Fácil
      explanation: "Phishing é uma técnica onde criminosos fingem ser instituições confiáveis para enganar pessoas e obter dados sensíveis como senhas e números de cartão de crédito. Eles geralmente criam uma falsa sensação de urgência para que você aja sem pensar."
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
      category: 0, // Fácil
      explanation: "Senhas fortes devem ter pelo menos 12 caracteres, combinando letras, números e símbolos. Cada conta deve ter uma senha única e, idealmente, use um gerenciador de senhas seguro como LastPass, Bitwarden ou 1Password para armazenar suas senhas de forma segura."
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
      category: 0, // Fácil
      explanation: "Sempre verifique a identidade de quem envia mensagens suspeitas. Ligue para a pessoa usando o número que você já conhece, não clique em links e não compartilhe a mensagem. Golpistas frequentemente se passam por familiares ou amigos em situações de 'emergência'."
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
      category: 1, // Médio
      explanation: "Sites seguros usam HTTPS (cadeado na barra de endereço). Também é importante verificar a reputação da loja, usar cartões virtuais quando possível e evitar redes Wi-Fi públicas para compras. Prefira sites conhecidos e verifique avaliações de outros consumidores antes de comprar."
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
      category: 1, // Médio
      explanation: "A autenticação de dois fatores adiciona uma camada extra de segurança ao exigir duas formas de verificação: algo que você sabe (senha) e algo que você tem (código enviado ao celular, por exemplo). Ative essa proteção em todas as suas contas importantes como e-mail, redes sociais e bancos."
    },
    {
      question: "O que é um aplicativo de gerenciamento de senhas?",
      options: [
        "Um programa que cria senhas aleatórias para você, mas não as armazena.",
        "Um serviço que armazena suas senhas de forma segura e criptografada.",
        "Um aplicativo que compartilha suas senhas com seus contatos de confiança.",
        "Um programa que elimina a necessidade de usar senhas em sites."
      ],
      answer: 1,
      category: 1, // Médio
      explanation: "Um gerenciador de senhas é um aplicativo que armazena todas as suas senhas de forma segura e criptografada. Você só precisa lembrar de uma senha mestra para acessar todas as outras. Exemplos incluem LastPass, 1Password, Bitwarden e o gerenciador de senhas integrado ao navegador."
    },
    {
      question: "Qual é a melhor ação ao receber um e-mail do seu banco solicitando atualização cadastral urgente?",
      options: [
        "Clicar no link fornecido no e-mail e atualizar imediatamente.",
        "Ignorar completamente, pois bancos nunca enviam e-mails.",
        "Não clicar no link e acessar o site do banco digitando o endereço diretamente no navegador.",
        "Encaminhar o e-mail para todos os contatos para alertá-los."
      ],
      answer: 2,
      category: 1, // Médio
      explanation: "Nunca clique em links de e-mails que parecem ser de instituições financeiras. Em vez disso, acesse o site oficial digitando o endereço no navegador ou use o aplicativo oficial do banco. Bancos raramente pedem atualizações urgentes por e-mail e nunca solicitam senhas por esse meio."
    },
    {
      question: "O que é um backup de dados e por que é importante?",
      options: [
        "É uma cópia de segurança dos seus arquivos importantes, protegendo contra perda de dados.",
        "É um programa que acelera a velocidade da internet.",
        "É um tipo de antivírus que protege contra ransomware.",
        "É um método para limpar arquivos desnecessários do computador."
      ],
      answer: 0,
      category: 1, // Médio
      explanation: "Backup é uma cópia de segurança dos seus arquivos importantes (fotos, documentos, etc.) armazenada em outro local, como um HD externo ou na nuvem. É essencial para recuperar seus dados em caso de falha do dispositivo, roubo, ataque de ransomware ou exclusão acidental."
    },
    {
      question: "Qual é a principal tática usada em ataques de engenharia social?",
      options: [
        "Explorar falhas técnicas em sistemas operacionais.",
        "Manipular emoções humanas como medo, curiosidade ou confiança.",
        "Usar programas avançados para quebrar senhas.",
        "Interceptar conexões de internet públicas."
      ],
      answer: 1,
      category: 2, // Difícil
      explanation: "A engenharia social funciona explorando emoções humanas básicas como medo, curiosidade, respeito à autoridade e confiança. Os atacantes manipulam essas emoções para fazer com que as vítimas tomem decisões que normalmente não tomariam, como compartilhar senhas ou transferir dinheiro."
    },
    {
      question: "O que é pretexting (criação de pretexto) na engenharia social?",
      options: [
        "Criar um vírus que se disfarça como um arquivo legítimo.",
        "Enviar e-mails em massa para várias pessoas esperando que alguém responda.",
        "Criar um cenário falso para obter informações da vítima.",
        "Instalar câmeras escondidas para capturar senhas digitadas."
      ],
      answer: 2,
      category: 2, // Difícil
      explanation: "Pretexting é quando um atacante cria um cenário falso ou uma história inventada para ganhar a confiança da vítima e obter informações. Por exemplo, alguém pode se passar por um pesquisador de mercado oferecendo um prêmio, mas precisando confirmar seus dados pessoais para 'enviar o prêmio'."
    },
    {
      question: "O que é Wi-Fi público e quais cuidados devemos ter ao usá-lo?",
      options: [
        "É qualquer rede sem senha e é completamente segura para uso.",
        "É uma rede disponível em locais públicos e deve ser evitada para transações financeiras.",
        "É uma rede exclusiva para funcionários de estabelecimentos comerciais.",
        "É uma rede que só funciona em dispositivos antigos."
      ],
      answer: 1,
      explanation: "Wi-Fi público são redes disponíveis em locais como cafés, aeroportos e shoppings. Evite acessar contas bancárias, fazer compras online ou inserir senhas importantes nessas redes. Se necessário, use uma VPN (Rede Privada Virtual) para criptografar sua conexão."
    },
    {
      question: "O que é vishing (phishing por voz)?",
      options: [
        "Um tipo de vírus que afeta assistentes de voz como Alexa e Siri.",
        "Um golpe onde criminosos ligam se passando por instituições confiáveis para obter dados pessoais.",
        "Um software que grava conversas telefônicas sem permissão.",
        "Um aplicativo de reconhecimento de voz para aumentar a segurança."
      ],
      answer: 1,
      explanation: "Vishing (Voice Phishing) é uma técnica de engenharia social onde os golpistas fazem ligações telefônicas se passando por instituições confiáveis, como bancos ou empresas de cartão de crédito, para enganar as vítimas e obter informações sensíveis ou convencê-las a realizar transferências financeiras."
    },
    {
      question: "Qual é a melhor atitude ao receber um e-mail ou mensagem criando um senso de urgência extrema?",
      options: [
        "Agir imediatamente conforme solicitado para evitar consequências negativas.",
        "Encaminhar a mensagem para todos os contatos como alerta.",
        "Parar, respirar e verificar a legitimidade da mensagem antes de tomar qualquer ação.",
        "Responder pedindo mais detalhes sobre a situação urgente."
      ],
      answer: 2,
      explanation: "Criar um senso de urgência é uma tática comum de engenharia social para fazer com que as vítimas ajam sem pensar. Sempre pare e verifique a legitimidade de qualquer mensagem urgente. Instituições legítimas raramente exigem ações imediatas sob ameaças. Entre em contato com a organização diretamente usando canais oficiais para confirmar."
    },
    {
      question: "O que é tailgating (carona) em segurança física?",
      options: [
        "Um tipo de vírus que 'pega carona' em downloads legítimos.",
        "Seguir muito próximo de outro veículo na estrada.",
        "Entrar em áreas restritas seguindo alguém que tem acesso autorizado.",
        "Usar o Wi-Fi de um vizinho sem permissão."
      ],
      answer: 2,
      explanation: "Tailgating é uma técnica de engenharia social onde o atacante segue fisicamente uma pessoa autorizada para entrar em uma área restrita. Por exemplo, alguém pode fingir estar carregando muitas caixas e pedir para você segurar a porta, quando na verdade essa pessoa não tem autorização para entrar no local."
    }
  ];
  
  // Variáveis de estado
  let currentScore = 0;
  let answeredQuestions = 0;
  let userAnswers = [];
  
  // Função para renderizar as perguntas
  function renderQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
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
    if (progressBar) {
      const progressPercentage = (answeredQuestions / questions.length) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    }
  
    // Habilitar o botão de enviar se todas as perguntas foram respondidas
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = answeredQuestions < questions.length;
      if (answeredQuestions < questions.length) {
        submitBtn.classList.add('btn-disabled');
      } else {
        submitBtn.classList.remove('btn-disabled');
      }
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
      if (!questionDiv) return;
      
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
        const explanation = questionDiv.querySelector('.explanation');
        if (explanation) {
          explanation.style.display = 'block';
        }
      }
    });
  
    // Mostrar resultado
    showResult();
  
    // Esconder botão de enviar e mostrar botão de reiniciar
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    if (submitBtn) submitBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'block';
  }
  
  // Função para mostrar o resultado
  function showResult() {
    const resultDiv = document.getElementById('result');
    if (!resultDiv) return;
    
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
    const resultDiv = document.getElementById('result');
    if (resultDiv) resultDiv.style.display = 'none';
  
    // Resetar o progresso
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = '0%';
  
    // Renderizar perguntas novamente
    renderQuestions();
  
    // Mostrar botão de enviar e esconder botão de reiniciar
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    if (submitBtn) {
      submitBtn.style.display = 'block';
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-disabled');
    }
    
    if (restartBtn) restartBtn.style.display = 'none';
  }
  
  // Inicialização quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    // Renderizar perguntas do quiz se estiver na página de teste
    if (document.getElementById('quiz-container')) {
      renderQuestions();
      
      const submitBtn = document.getElementById('submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled');
        submitBtn.addEventListener('click', checkAnswers);
      }
      
      const restartBtn = document.getElementById('restart-btn');
      if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
      }
    }
  });
  