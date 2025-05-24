
const somAcerto = new Audio("acerto.mp3");
const somErro = new Audio("erro.mp3");

function habilitarAudios() {
  somAcerto.volume = 0;
  somErro.volume = 0;

  somAcerto.play().catch(() => {});
  somErro.play().catch(() => {});

  setTimeout(() => {
    somAcerto.pause(); somErro.pause();
    somAcerto.currentTime = 0; somErro.currentTime = 0;
    somAcerto.volume = 1; somErro.volume = 1;
  }, 200);

  document.body.onclick = null;
}





const questions = [
    {
    "question": "O que significa essa placa de advertência?",
    "image": "pista_sinuosa_esquerda.png",
    "options": [
        "Curva proíbida para ciclomotores.",
        "Curva com dois movimentos contrários.",
        "Pista sinuosa à direita.",
        "Pista sinuosa à esquerda."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "via_lateral_esquerda.png",
    "options": [
        "Via lateral à direita.",
        "Via lateral à esquerda.",
        "Via lateral à esquerda, com três vias.",
        "Via lateral à esquerda, com duas vias."
    ],
    "answer": 1
    },

    {
    "question": "O que você entende vendo essa placa de regulamentação?",
    "image": "proibido_estacionar.png",
    "options": [
        "É proíbido parar, mas o estacionamento é permitido para operação de carga.",
        "É proíbido parar e estacionar.",
        "É proíbido estacionar, mas a parada é permitida para embarque e desembarque de passageiros.",
        "É proíbido estacionar, mas a parada é permitida para veículos pesados apenas."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "proibido_esquerda_direita.png",
    "options": [
        "Proíbido mudar de faixa ou pista de trânsito em qualquer circunstância.",
        "Proíbido mudar de faixa ou pista de trânsito.",
        "Proíbido mudar de faixa ou pista de trânsito da direita para a esquerda.",
        "Proíbido mudar de faixa ou pista de trânsito da esquerda para a direita."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "arquitetura_religiosa.png",
    "options": [
        "Arquitetura religiosa.",
        "Arquitetura histórica.",
        "Igreja da Aparecida do Norte.",
        "Igreja da Universal."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "museu.png",
    "options": [
        "Prefeitura.",
        "museu.",
        "Centro de eventos.",
        "Conservatório músical."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "terminal_rodoviario.png",
    "options": [
        "Estacionamento exclusivo para portadores de deficiências.",
        "Estacionamento para veículos leves.",
        "Terminal ferroviário.",
        "Terminal rodoviário."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image" : "pedagio.png",
    "options": [
        "Shopping.",
        "Pedagio.",
        "Rodoviária.",
        "McDonald's."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de advertência A-12?",
    "image": "intersecao_circulo.png",
    "options": [
        "Interseção livre para os PCD.",
        "Rotatória há 500 metros.",
        "Rotatória há 100 metros.",
        "Interseção em circulo."
    ],
    "answer": 3
    },

    {
    "question": "O que significa a placa de advertência A-19?",
    "image": "depressao.png",
    "options": [
        "Rachaduras na via.",
        "Buracos na via.",
        "Depressão.",
        "Desnível na via."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação R-6c?",
    "image": "proibido_parar_estacionar.png",
    "options": [
        "Proíbido parar e estacionar, exceto para motocicletas.",
        "Proíbido parar e estacionar, exceto para estragados.",
        "Proíbido parar e estacionar.",
        "Proíbido parar e estacionar, exceto para ônibus."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação R-14?",
    "image": "peso_bruto_maximo_permitido.png",
    "options": [
        "Peso bruto total máximo permitido.",
        "Peso bruto total máximo limitado.",
        "largura total máximo permitido.",
        "largura total máximo limitado."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "festas_populares.png",
    "options": [
        "Festa junina.",
        "Escola de dança comunitária.",
        "Dança de rua tradicional.",
        "Festas populares."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "feira_tipica.png",
    "options": [
        "Barraca de pastel.",
        "Feira típica.",
        "Barraca de cachorro quente.",
        "Feira típica de artesanatos."
    ],
    "answer": 1
    },

    {
    "question": "Olhando essa placa de serviços auxiliares SAU-01, você entende que?",
    "image": "area_estacionamento.png",
    "options": [
        "tem uma área de estacionamento.",
        "Tem uma escola ao lado.",
        "Tem uma área de estacionamento e uma escola ao lado.",
        "Tem uma área de estacionamento e uma feira ao lado."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de serviços auxiliares SAU-10?",
    "image": "pronto_socorro.png",
    "options": [
        "Cemitério.",
        "Hospital.",
        "Pronto socorro.",
        "Farmácia."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de advertência A-17?",
    "image": "pista_irregular.png",
    "options": [
        "Pista irregular.",
        "Saliência ou lombada.",
        "Quebra-molas.",
        "Pista emburacada."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de advertência A-28?",
    "image": "pista_escorregadia.png",
    "options": [
        "Pista com deslizamento",
        "Pista com curva sinuosa à direita.",
        "Pista com curva sinuosa à esquerda.",
        "Pista escorregadia."
    ],
    "answer": 3
    },

     {
    "question": "Diante dessa placa de regulamentação você entende que:?",
    "image": "uso_correntes.png",
    "options": [
        "O motorista é obrigado a usar correntes na roda porque a via apresenta dificuldade de circulação.",
        "O motorista deixou o carro encravar e agora tem que usar correntes nas rodas",
        "O motorista está conduzindo um trator traçado 4x4.",
        "O motorista atolou o carro na lama e agora tem que usar correntes nas rodas."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de regulamentação R-21?",
    "image": "alfandega.png",
    "options": [
        "Semáforo a frente.",
        "Ponte móvel.",
        "Pedágio.",
        "Alfândega."
    ],
    "answer": 3
    },

    {
    "question": "O que signifia essa placa de atrativos turísticos?",
    "image": "artesanato.png",
    "options": [
        "Competição de artesanatos.",
        "Artesanato.",
        "Artesanato e artes plásticas.",
        "Artesanatos feito por artesãos clássicos."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "pavilhao_exposicao.png",
    "options": [
        "Presidente da república brasileira.",
        "Competição de golfe nacional.",
        "Pavilhão de exposições.",
        "Campeonato de golfe brasileiro."
    ],
    "answer": 2
    },

    {
    "question": "A placa de advertência A-14 indica:",
    "image": "semaforo_frente.png",
    "options": [
        "Semáforo.",
        "Semáforo à frente.",
        "Semáforo rotátivo.",
        "Semáforo em manutenção."
    ],
    "answer": 1
    },

    {
    "question": "A placa de advertência A-21c indica:",
    "image": "estreitamento_direita.png",
    "options": [
        "Alargamento de pista à direita.",
        "Confluência de vias à direita.",
        "Estreitamento de pista à direita.",
        "Alargamento de pista à esquerda."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação R-24b?",
    "image": "passagem_obrigatoria.png",
    "options": [
        "Sentido único.",
        "Vire à direita.",
        "Passagem obrigatória.",
        "Passagem obrigatória à direita."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação R-27?",
    "image": "onibus_direita.png",
    "options": [
        "Apenas os ônibus, mantenham-se à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se somente à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se à esquerda."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de advertência A-39?",
    "image": "passagem_sem_barreira.png",
    "options": [
        "Passagem de nível sem barreira.",
        "Passagem de nível com barreira.",
        "Cruz de santo André.",
        "Cruzamento de vias com barreiras."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de advertência A-34?",
    "image": "criancas.png",
    "options": [
        "Crianças.",
        "Crianças jogando bola.",
        "Crinças brincando.",
        "Crianças Treinando futebol."
    ],
    "answer": 0
    },

    {
    "question": "A placa A-40 adverte uma:",
    "image": "passagem_com_barreira.png",
    "options": [
        "Passagem de nível sem barreira.",
        "Passagem de nível com barreira.",
        "Cruz de santo André.",
        "Cruzamento de vias com barreiras."
    ],
    "answer": 1
    },

    {
    "question": "A placa A-48 adverte:",
    "image": "comprimento_limitado.png",
    "options": [
        "Largura permitida.",
        "Largura limitada.",
        "Comprimento Permitido.",
        "Comprimento limitado."
    ],
    "answer": 3
    },


];






let currentQuestion = 0;
let score = 0;
let startTime = new Date();

function updateTimer() {
  const now = new Date();
  const diff = Math.floor((now - startTime) / 1000);
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;
  document.getElementById("timer").textContent = `Tempo: ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<h3>Questão ${currentQuestion + 1} de ${questions.length}</h3>`;

  if (q.image) {
    qDiv.innerHTML += `
      <div style="text-align: center;">
        <img src="${q.image}" alt="Imagem da questão" class="question-image" style="max-width: 200px; height: auto; display: block; margin: 5px auto;">
      </div>`;
  }

  qDiv.innerHTML += `<p style="font-size: 23px;"><strong>${q.question}</strong></p>`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  const feedbackP = document.createElement("p");
  qDiv.appendChild(feedbackP);

  q.options.forEach((opt, i) => {
    const btnAlt = document.createElement("button");
    btnAlt.textContent = String.fromCharCode(65 + i) + ") " + opt;
    btnAlt.className = "option-button";
    btnAlt.style.display = "block";
    btnAlt.style.width = "100%";
    btnAlt.style.padding = "12px";
    btnAlt.style.margin = "6px 0";
    btnAlt.style.borderRadius = "8px";
    btnAlt.style.border = "none";
    btnAlt.style.fontSize = "24px";
    btnAlt.style.cursor = "pointer";
    btnAlt.style.transition = "0.3s";
    btnAlt.style.textAlign = "left";       // ✅ ALINHA O TEXTO À ESQUERDA
    btnAlt.style.paddingLeft = "16px";

    btnAlt.addEventListener("click", () => {
      const isCorrect = i === q.answer;
      if (isCorrect) {
        somAcerto.cloneNode().play();
        btnAlt.style.backgroundColor = "#4CAF50";
        btnAlt.style.color = "#fff";
        score++;
        feedbackP.className = "correct";
        feedbackP.textContent = "✔ Correto!";
      } else {
        somErro.cloneNode().play();
        btnAlt.style.backgroundColor = "#F44336";
        btnAlt.style.color = "#fff";
        feedbackP.className = "incorrect";
        feedbackP.textContent = `❌ Incorreto. A resposta correta é: ${String.fromCharCode(65 + q.answer)})`;
        optionsDiv.querySelectorAll("button").forEach((btn, j) => {
          if (j === q.answer) {
            btn.style.backgroundColor = "#4CAF50";
            btn.style.color = "#fff";
          } else {
            btn.disabled = true;
          }
        });
      }

      btnAlt.disabled = true;
      btnNext.style.display = "inline-block";
    });

    optionsDiv.appendChild(btnAlt);
  });

  const btnNext = document.createElement("button");
  btnNext.textContent = currentQuestion === questions.length - 1 ? "Finalizar Simulado" : "Próxima";
  btnNext.style.display = "none";
  btnNext.className = "auth-btn";
  btnNext.addEventListener("click", () => {
    currentQuestion++;
    updateProgress();
    showQuestion();
  });

  qDiv.appendChild(optionsDiv);
  qDiv.appendChild(btnNext);
  container.appendChild(qDiv);

  const motivacao = document.createElement("p");
  motivacao.textContent = "💡 Dica: Se errar, leia a questão completa e memorize a alternativa correta.";
  motivacao.style.marginTop = "15px";
  motivacao.style.fontStyle = "italic";
  motivacao.style.color = "#555";
  qDiv.appendChild(motivacao);

  updateProgress();
}

function updateProgress() {
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} questões (${Math.round((score / questions.length) * 100)}%)`;

const msg = document.getElementById("message");
if (score < 21) {
  msg.textContent = "❌ Atenção! Tente de novo! Precisa melhorar seu resultado";
  msg.style.color = "#d32f2f"; // vermelho forte
  msg.style.fontWeight = "bold";
} else if (score >= 21 && score <= 27) {
  msg.textContent = "⚠️ Está razoável! Você está quase lá! Dá pra melhorar!";
  msg.style.color = "#1976d2"; // azul forte
  msg.style.fontWeight = "bold";
} else {
  msg.textContent = "✅ Parabéns! Excelente desempenho! Continue assim em todos os simulados!";
  msg.style.color = "#388e3c"; // verde forte
  msg.style.fontWeight = "bold";
}

  salvarDesempenho("Direção Defensiva - Prova 1", score);
}

function salvarDesempenho(prova, acertos) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) return;

  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");
  if (!desempenho[usuario.email]) desempenho[usuario.email] = [];

  desempenho[usuario.email].push({
    prova,
    acertos,
    data: new Date().toLocaleString()
  });

  localStorage.setItem("desempenho", JSON.stringify(desempenho));
}

showQuestion();
