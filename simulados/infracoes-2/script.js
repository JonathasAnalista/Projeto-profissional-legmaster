
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
{"question": "Dirigir segurando ou manuseando o aparelho celular é uma infração:", "options": ["Grave.", "Média.", "Leve.", "Gravíssima."], "answer": 3},
{"question": "Um condutor está dirigindo um automóvel a uma velocidade de 110 km/h em uma rodovia de pista simples. Neste caso, ele está cometendo uma infração:", "options": ["Média/Multa.", "Leve/Advertência por escrito.", "Gravíssima/Advertência por escrito.", "Grave/Multa."], "answer": 0},
{"question": "Será aplicada a penalidade de frequência obrigatória em curso de reciclagem quando o condutor:", "options": ["Atingir 19 pontos em sua CNH.", "Tiver suspenso o direito de dirigir.", "Tiver o veículo retido.", "Atingir 20 pontos na sua CNH e tiver cometido apenas uma infração gravíssima."], "answer": 1},
{"question": "Constitui infração grave:", "options": ["Transitar em marcha à ré, salvo para pequenas manobras.", "Ultrapassar pela contramão nas cinco metros das faixas de pedestres.", "Deixar de dar passagem pela esquerda quando solicitado.", "Conduzir veículo sem estar com as luzes acesas."], "answer": 0},
{"question": "São circunstâncias agravantes de penalidades, exceto:", "options": ["Cometer infração sobre faixa de pedestre.", "Se o infrator exercer atividade remunerada de transporte de carga ou passageiros.", "Envolver-se em sinistro que resulte vítima, mesmo que o infrator preste socorro.", "Cometer infração conduzindo veículos sem placas."], "answer": 2},
{"question": "É infração gravíssima ultrapassar:", "options": ["Cortejos, desfiles e formações militares.", "Pela direita de coletivo ou escolar parado para embarque e desembarque.", "Veículos parados em razão de sinal luminoso.", "Veículos em fila."], "answer": 1},
{"question": "São penalidades, entre outras:", "options": ["Multa, apreensão e recolhimento da CNH.", "Advertência por escrito, multa e suspensão da CNH.", "Advertência por escrito, multa e remoção do veículo.", "Advertência por excesso de carga, recolhimento de carga."], "answer": 1},
{"question": "Constitui infração utilizar o desrespeito às sinalizações de trânsito quando:", "options": ["Quando o veículo for de socorro.", "Quando for prestar atendimento emergencial.", "Quando o agente de trânsito determinar.", "Não houver agentes ou sinalização."], "answer": 1},
{"question": "Será aplicada a penalidade de suspensão do direito de dirigir prevista no CTB, quando o condutor:", "options": ["Tiver vencido o CRLV e a razão de vencimento não constar no sistema do CRV.", "For pego com CNH vencida.", "For condenado por infração penal de trânsito.", "For reincidente na frequência obrigatória em curso de reciclagem."], "answer": 2},
{"question": "Constitui infração grave, exceto:", "options": ["Fazer ou deixar que se faça reparo de veículo na pista de rolamento.", "Transitar em contramão, em vias de sentido único.", "Efetuar conversão em local proibido.", "Seguir veículos de urgência e com prioridade de passagem."], "answer": 1},
{"question": "Não ocorrerá recolhimento da CRLV do infrator quando:", "options": ["Houver suspeita sobre a autenticidade do documento de licenciamento anual.", "O responsável deixar de promover a baixa do registro do veículo irrecuperável ou definitivamente desmontado.", "O prazo do licenciamento anual estiver vencido.", "O veículo for retido e o problema for sanado no local."], "answer": 3},
{"question": "Sobre multas é correto afirmar:", "options": ["As multas de natureza gravíssima não podem ser multiplicadas.", "Se pagas até a data do vencimento, o infrator somente pagará 20% do valor da multa.", "Depois de emitida a notificação de penalidade, o proprietário do veículo tem até 60 dias para recorrer da infração.", "Se o condutor atingir 20 pontos no prontuário, no período de 12 meses, tendo duas ou mais infrações gravíssimas, o seu direito de dirigir será suspenso pelo prazo de 6 a 12 meses."], "answer": 3},

  {
    "question": "Aplicada a penalidade será expedida ao infrator:",
    "options": ["Uma intimação.", "Uma citação.", "Uma notificação.", "Um extrato de multa."],
    "answer": 2
  },
  {
    "question": "Conduzir motocicleta, motoneta ou ciclomotor, sem usar capacete de segurança com viseiras ou óculos de proteção, é infração _________ e terá como penalidade __________.",
    "options": ["Gravíssima; multa e suspensão do direito de dirigir.", "Grave; multa.", "Média; multa.", "Gravíssima; multa e recolhimento da CNH."],
    "answer": 0
  },
  {
    "question": "Um infrator contumaz é aquele:",
    "options": ["Que se reabilitou após curso de reciclagem.", "Que jamais cometeu uma infração.", "Que constantemente comete infrações.", "Que só comete infrações gravíssimas."],
    "answer": 2
  },
  {
    "question": "Sobre advertência por escrito, é incorreto afirmar:",
    "options": ["Poderá ser aplicada mesmo que o condutor já tenha outra infração em seu prontuário.", "Não depende da gravidade da infração.", "É medida educativa que substitui a penalidade de multa.", "Poderá ser aplicada quando a infração for leve ou média."],
    "answer": 0
  },
  {
    "question": "O excesso de velocidade superior à máxima permitida em mais de 50% constitui infração gravíssima:",
    "options": ["Não agravada, sujeita a multa.", "Não agravada, sujeita à advertência por escrito.", "Multiplicada por 4, sujeita à suspensão do direito de dirigir e recolhimento da CNH.", "Multiplicada por 3, sujeita à suspensão do direito de dirigir e recolhimento da CNH."],
    "answer": 3
  },
  {
    "question": "É incorreto afirmar sobre penalidades:",
    "options": ["Em infrações gravíssimas, serão computados 7 (sete) pontos no prontuário do condutor.", "A suspensão do direito de dirigir só será aplicada quando o condutor atingir 40 (quarenta) pontos em seu prontuário, nos últimos 12 meses.", "No caso de reincidência, a suspensão do direito de dirigir será aplicada de 8 (oito) a 24 (vinte e quatro) meses.", "Em infrações graves, serão computados 5 (cinco) pontos."],
    "answer": 1
  },
  {
    "question": "Dirigir o veículo com a Carteira Nacional de Habilitação ou Permissão para Dirigir suspensa ou cassada é infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 3
  },
  {
    "question": "Uma motocicleta trafega a 100 km/h em uma via de Trânsito Rápido não sinalizada. Nesse caso, o condutor está:",
    "options": ["Dentro da velocidade máxima permitida.", "Cometendo infração média.", "Cometendo infração grave.", "Cometendo infração gravíssima."],
    "answer": 2
  },
  {
    "question": "Constitui infração cometida por pedestres, exceto:",
    "options": ["Transitar pela pista de rolamento.", "Realizar a travessia de pista de rolamento através de dispositivos próprios, como passarelas e faixas de segurança.", "Cruzar a pista em viadutos, pontes ou túneis.", "Promover aglomerações na via, sem permissão do órgão responsável."],
    "answer": 1
  },
  {
    "question": "Avançar o sinal vermelho do semáforo é infração:",
    "options": ["Leve, com penalidade de advertência por escrito.", "Média, com penalidade de advertência por escrito.", "Grave, com penalidade de multa.", "Gravíssima, com penalidade de multa."],
    "answer": 3
  },
  {
    "question": "O veículo que transitar com excesso de carga está sujeito a:",
    "options": ["Multa por infração gravíssima e retenção do veículo.", "Multa por infração média e retenção do veículo.", "Multa por infração média e retenção do veículo até o transbordo da carga excedente.", "Multa por infração gravíssima, suspensão do direito de dirigir e recolhimento da CNH."],
    "answer": 2
  },
  {
    "question": "O condutor com habilitação cassada poderá reabilitar-se:",
    "options": ["Imediatamente.", "Após dois anos.", "Após 6 meses.", "Após quatro anos."],
    "answer": 1
  },
  {
    "question": "Conduzir bicicleta em passeio onde não seja permitida a circulação desta será infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 1
  },
  {
    "question": "O uso do farol xenônio em desacordo com as normas estabelecidas pelo CONTRAN, será considerado infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 2
  },
  {
    "question": "O condutor que deixa de manter distância de seguimento entre o veículo que dirige e o que segue imediatamente à sua frente está cometendo:",
    "options": ["Uma falta leve, que deve ser convertida em advertência por escrito se não causar sinistro.", "Uma infração grave que será punida com multa.", "Uma falta de educação e cortesia.", "Uma infração média que será punida com retenção de veículo."],
    "answer": 1
  },
  {
    "question": "O condutor será multado quando:",
    "options": ["Trafegar em velocidade superior à máxima estabelecida para a via.", "Fizer retorno em local próprio.", "Ultrapassar outro veículo pela esquerda.", "Usar luz alta em vias sem iluminação pública."],
    "answer": 0
  },
  {
    "question": "Segundo o Código de Trânsito Brasileiro, o transbordo do excesso de carga é uma:",
    "options": ["Medida administrativa.", "Penalidade.", "Infração.", "Medida educativa."],
    "answer": 0
  },
  {
    "question": "Quando o condutor atingir 20 pontos em seu prontuário, no período de 12 meses, com duas ou mais infrações gravíssimas, será punido com:",
    "options": ["A retenção da habilitação.", "A cassação do documento de habilitação.", "A suspensão do direito de dirigir.", "Multa apenas."],
    "answer": 2
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
