
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
    "question": "Usar a buzina nas áreas urbanas, no período entre às 22 (vinte e duas) e 06 (seis) horas, é infração LEVE punível com:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa e retenção do veículo.",
      "Multa e apreensão do veículo.",
      "Multa"
    ],
    "answer": 3
  },
  {
    "question": "Conduzir bicicleta em passeios onde não seja permitida a circulação desta, ou de forma agressiva, é infração ________ gerando como medida administrativa ________.",
    "options": [
      "Leve; retenção da bicicleta.",
      "Grave; remoção da bicicleta.",
      "Média; retenção da bicicleta.",
      "Média; remoção da bicicleta."
    ],
    "answer": 3
  },
  {
    "question": "Dirigir um veículo com características alteradas como por exemplo a (cor ou suspensão rebaixada entre outras características), sem seguir os requisitos para a modificação perante a lei, constitui uma infração:",
    "options": [
      "Grave, multa e retenção do veículo",
      "Média, multa e retenção do veículo",
      "Gravíssima, multa e apreensão do veículo",
      "Grave, multa e remoção do veículo"
    ],
    "answer": 0
  },
  {
    "question": "Promover, na via, competição, eventos organizados, exibição e demonstração de perícia em manobra de veículo, ou deles participar, como condutor, sem permissão da autoridade de trânsito com circunscrição sobre a via é infração:",
    "options": [
      "Gravíssima, multa 10x, suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Leve, multa 10x, suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Grave, multa 5x, suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Média, multa 3x, suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo."
    ],
    "answer": 0
  },
  {
    "question": "Deixar o condutor ou passageiro de usar o cinto de segurança, conforme previsto no art. 65 é uma infração:",
    "options": [
      "Grave, multa e retenção do veículo até que o condutor coloque o cinto de segurança",
      "Gravíssima, multa e remoção do veículo até que o condutor coloque o cinto de segurança",
      "Média, multa e retenção do veículo até que o condutor coloque o cinto de segurança",
      "Leve, multa e retenção do veículo até que o condutor coloque o cinto de segurança"
    ],
    "answer": 0
  },
  {
    "question": "Deixar de manter distância de seguimento do veículo da frente é infração:",
    "options": [
      "Grave, 5 pontos",
      "Leve, 3 pontos",
      "Gravíssima, 7 pontos",
      "Média, 4 pontos"
    ],
    "answer": 0
  },
  {
    "question": "É infração LEVE quando:",
    "options": [
      "Quando o condutor parar o veículo sobre a faixa de pedestre quando o semáforo fecha",
      "Parar no acostamento da pista ou usar a buzina entre as 22h às 06h em locais proibidos ou áreas residenciais",
      "Quando o condutor estacionar na contramão de direção",
      "Quando estacionar a menos de 5m do alinhamento da via transversal (esquina)"
    ],
    "answer": 1
  },
  {
    "question": "Dirigir, ameaçando os pedestres que estejam atravessando a via pública, ou os demais veículos, será considerada:",
    "options": [
      "Uma infração gravíssima; terá multa e suspensão do direito de dirigir, retenção do veículo e recolhimento da CNH",
      "Uma infração grave, punida com multa e recolhimento da CNH",
      "Uma infração média, punida com multa e retenção do veículo",
      "Uma infração gravíssima; terá uma multa (cinco vezes)"
    ],
    "answer": 0
  },
  {
    "question": "Aplicada a penalidade, será expedida ao infrator:",
    "options": [
      "Citação",
      "Extrato de multa",
      "Notificação",
      "Intimação"
    ],
    "answer": 2
  },
  {
    "question": "Na infração 'estacionar o veículo afastado da guia da calçada (meio-fio) a mais de um metro de distância', será computado:",
    "options": [
      "7",
      "4",
      "5",
      "3"
    ],
    "answer": 2
  },
  {
    "question": "A fiscalização da gestão de trânsito poderá ser realizada com a utilização de aparelhos que, quanto ao modo de operação, podem ser classificados em:",
    "options": [
      "Automático e não automático.",
      "Radar e medidor ótico.",
      "Fixo, estático, móvel e portátil.",
      "Eletrônico e audiovisual."
    ],
    "answer": 2
  },
  {
    "question": "O responsável pela infração relativa ao transporte de carga com excesso de peso nos eixos ou quando a carga proveniente de mais de um embarcador ultrapassar o peso bruto total é o:",
    "options": [
      "Embarcador.",
      "Transportador e embarcador.",
      "Proprietário.",
      "Transportador"
    ],
    "answer": 3
  },
  {
    "question": "Em qual hipótese o veículo poderá ser removido:",
    "options": [
      "Se deixar acabar o combustível",
      "Se parar na contramão de direção",
      "Se estacionado em posição ou lugar errado",
      "Se furar o pneu"
    ],
    "answer": 2
  },
  {
    "question": "Um condutor despercebido passou por um radar no qual o limite era 80 km/h e ele passou a 90 km/h. Qual infração ele cometeu?",
    "options": [
      "Leve, 3 pontos",
      "Média, 4 pontos",
      "Gravíssima, 7 pontos",
      "Grave, 5 pontos"
    ],
    "answer": 1
  },
  {
    "question": "Qual alternativa abaixo não é considerada uma infração de trânsito:",
    "options": [
      "Roubo de carros",
      "Desrespeito da lei de trânsito",
      "Estacionar errado",
      "Excesso de velocidade"
    ],
    "answer": 0
  },
  {
    "question": "Dirigir o veículo usando calçado que não se firme nos pés ou comprometa a utilização dos pedais é infração:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 1
  },
  {
    "question": "Estacionar a menos de 5 metros da esquina da via transversal é infração:",
    "options": [
      "Média, 4 pontos.",
      "Leve, 3 pontos.",
      "Grave, 5 pontos",
      "Gravíssima, 7 pontos."
    ],
    "answer": 0
  },
  {
    "question": "Qual é a concentração de álcool no sangue, comprovada por exames, que é considerada crime de trânsito?",
    "options": [
      "5 dc/L de sangue.",
      "6 dc/L de sangue.",
      "2 dc/L de sangue.",
      "0,34 ml/L de ar."
    ],
    "answer": 1
  },
  {
    "question": "Deixar o condutor de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade de trânsito e seus agentes é infração:",
    "options": [
      "Gravíssima, 7 pontos",
      "Leve, 3 pontos",
      "Média, 4 pontos",
      "Grave, 5 pontos"
    ],
    "answer": 3
  },
  {
    "question": "Deixar o veículo imobilizado na via por falta de combustível é infração _____ e tem como medida administrativa _____?",
    "options": [
      "Gravíssima, retenção do veículo",
      "Grave, remoção do veículo",
      "Média, remoção do veículo",
      "Leve, retenção do veículo"
    ],
    "answer": 2
  },
  {
    "question": "Deixar o condutor envolvido em sinistro com vítima de prestar ou providenciar socorro à vítima, podendo fazê-lo, é infração:",
    "options": [
      "Média, 4 pontos, apreensão da carteira",
      "Grave, 5 pontos, recolhimento da habilitação",
      "Gravíssima, multa x10, suspensão do direito de dirigir",
      "Gravíssima, multa x5, suspensão do direito de dirigir e recolhimento da habilitação"
    ],
    "answer": 3
  },
  {
    "question": "Usar o veículo para arremessar, sobre os pedestres ou veículos, água ou detritos é infração _____ e terá como penalidade _____?",
    "options": [
      "Gravíssima e remoção do veículo",
      "Média e multa",
      "Leve e retenção do veículo",
      "Grave e multa apenas"
    ],
    "answer": 1
  },
  {
    "question": "Conduzir o veículo sem acionar o limpador de para-brisas durante a chuva é infração punida com:",
    "options": [
      "Advertência pelo agente de trânsito.",
      "Apreensão do veículo e multa.",
      "Multa e retenção do veículo.",
      "Remoção do veículo e multa"
    ],
    "answer": 2
  },
  {
    "question": "Estacionar o veículo em desacordo com as regras de sinalização regulamentada pela autoridade de trânsito, especificamente em locais onde haja hidrantes, é considerada uma infração de trânsito?",
    "options": [
      "Leve e retenção do veículo",
      "Gravíssima e remoção do veículo",
      "Média e remoção do veículo",
      "Grave e retenção do veículo"
    ],
    "answer": 2
  },
  {
    "question": "Na infração 'Estacionar o veículo afastado da guia da calçada de cinquenta centímetros a um metro' são computados os seguintes pontos:",
    "options": [
      "7 (sete).",
      "4 (quatro).",
      "5 (cinco).",
      "3 (três)."
    ],
    "answer": 3
  },
  {
    "question": "Não é considerado crime de trânsito:",
    "options": [
      "Lesão corporal culposa.",
      "Homicídio culposo.",
      "Omissão de socorro.",
      "Dirigir em excesso de velocidade"
    ],
    "answer": 3
  },
  {
    "question": "Em uma via rural não pavimentada, desprovida de sinalização regulamentadora de velocidade, foi registrada por instrumento eletrônico (radar), um condutor dirigindo seu veículo a 100 km/h. Esse condutor cometeu infração de natureza:",
    "options": [
      "Grave.",
      "Média.",
      "Leve.",
      "Gravíssima (3 vezes)."
    ],
    "answer": 3
  },
  {
    "question": "Na infração 'avançar o sinal vermelho do semáforo' são computados os seguintes pontos:",
    "options": [
      "3 (três).",
      "5 (cinco).",
      "4 (quatro).",
      "7 (sete)."
    ],
    "answer": 3
  },
  {
    "question": "Transitar com o veículo desligado ou desengrenado, em declive, é uma infração:",
    "options": [
      "Média.",
      "Gravíssima.",
      "Grave.",
      "Leve."
    ],
    "answer": 0
  },
  {
    "question": "Constitui penalidade de suspensão do direito de dirigir conduzir motocicleta ou motoneta transportando criança:",
    "options": [
      "Com 7 anos de idade.",
      "Menor de 10 anos de idade.",
      "Menor de 9 anos de idade.",
      "Menor de 7 anos de idade."
    ],
    "answer": 1
  }
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

  const nomeProva = localStorage.getItem("provaAtual") || "Prova Desconhecida";
  salvarDesempenho(nomeProva, score);
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
