
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
    "question": "O condutor deve sinalizar e deslocar com antecedência seu veículo para a faixa mais à direita da sua mão de direção para:",
    "options": ["Entrar à direita.", "Mudar de faixa de trânsito.", "Para retornar pela mesma via.", "Entrar à esquerda."],
    "answer": 0
  },
  {
    "question": "Todo condutor de veículo deve dar preferência de passagem ao pedestre:",
    "options": ["Somente quando se tratar de deficiente físico.", "Somente quando se tratar de idosos e crianças.", "Em qualquer situação.", "Somente nas faixas de segurança."],
    "answer": 2
  },
  {
    "question": "Em uma rua de duplo sentido de circulação não sinalizada, o condutor que quiser virar à direita deverá:",
    "options": ["Atingir o ponto central do cruzamento e convergir.", "Parar o seu veículo, observar e convergir, atingindo o eixo central.", "Aproximar-se o máximo possível do bordo direito da pista e fazer a conversão em velocidade segura.", "Posicionar-se junto ao meio-fio da esquerda, acelerando a marcha."],
    "answer": 2
  },
  {
    "question": "O condutor que estiver circulando pela faixa do meio, em uma pista de rolamento de três faixas, ao perceber que outro que o segue tem o propósito de ultrapassá-lo, deverá:",
    "options": ["Deslocar-se para a faixa da direita, acelerando a marcha.", "Manter-se naquela na qual está circulando, sem acelerar a marcha.", "Manter-se na pista, acelerando a marcha.", "Deslocar-se para a faixa da esquerda, acelerando a marcha."],
    "answer": 1
  },
  {
    "question": "A transposição de faixas, movimentos de conversão à direita e esquerda e retornos denomina-se:",
    "options": ["Conversão.", "Ultrapassagem.", "Passagem.", "Deslocamento lateral."],
    "answer": 3
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa errada:",
    "options": ["A circulação será feita pelo lado direito da via, admitidas as exceções devidamente sinalizadas.", "Os veículos precedidos de batedores terão prioridade de passagem.", "A ultrapassagem deve ser feita somente pela direita.", "Os veículos de socorro têm prioridade de passagem, gozam de livre circulação, estacionamento e parada quando identificados por alarme sonoro e iluminação vermelha intermitente."],
    "answer": 2
  },
  {
    "question": "A alternância entre luz alta e baixa por um curto período de tempo e de forma intermitente somente poderá ser usada para:",
    "options": ["Sinalizar a intenção de ultrapassar o veículo à frente ou para indicar risco à segurança para os veículos em sentido contrário.", "Indicar conversões e retornos em rodovias e estradas.", "Sinalizar frenagem de emergência.", "Embarque e desembarque de passageiros."],
    "answer": 0
  },
  {
    "question": "Todo condutor de veículo automotor deve guardar distância, exceto:",
    "options": ["Frontal e lateral, entre o seu e os demais veículos, bem como em relação ao bordo da pista.", "Lateral em 1,5 m ao ultrapassar ciclistas.", "Frontal em 3 metros, sob qualquer circunstância.", "Verificando sempre a velocidade e as condições do local, do veículo e as condições climáticas."],
    "answer": 2
  },
  {
    "question": "É direito dos pedestres:",
    "options": ["A utilização das calçadas públicas, passarelas, passagens próprias e acostamentos de vias rurais.", "Andar nas pistas de rolamento, quando houver calçada.", "Realizar travessia em túneis e viadutos, ainda que não haja passagem exclusiva.", "Transitar em desacordo com a sinalização."],
    "answer": 0
  },
  {
    "question": "Sobre a classificação das vias e suas características, é falso afirmar:",
    "options": ["As vias coletoras destinam-se a coletar e distribuir o trânsito para vias de maior fluxo.", "A velocidade máxima permitida em vias locais não sinalizadas é 30 km/h.", "As vias rurais são divididas em estradas e vias de trânsito rápido.", "A velocidade máxima permitida em rodovias não sinalizadas é determinada conforme o porte do potencial do veículo."],
    "answer": 2
  },
  {
    "question": "É permitido estacionar:",
    "options": ["Afastado da guia da calçada a mais de 50 centímetros.", "De acordo com as condições regulamentadas especificamente pela sinalização.", "Nas pistas de rolamentos.", "Sobre a calçada."],
    "answer": 1
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa errada:",
    "options": ["A circulação será feita pelo lado direito da via, admitidas as exceções devidamente sinalizadas.", "O condutor que for ingressar numa via procedente de lote lindeiro a essa via, tem prioridade sobre pedestres e veículos.", "Ao efetuar ultrapassagem, todo condutor deve afastar-se dos veículos que ultrapassa, mantendo distância lateral.", "Os veículos precedidos de batedores terão prioridade de passagem, respeitadas as demais normas de circulação."],
    "answer": 1
  },
  {
    "question": "Na mudança de direção o condutor deve:",
    "options": ["Sinalizar e deslocar para a faixa apropriada com antecedência.", "Aguardar no acostamento para convergir à esquerda, em qualquer situação.", "Aproximar-se do bordo da pista esquerda, ao sair de uma pista dupla pelo esquerdo.", "Piscar o farol, se não se tratar de um deslocamento lateral."],
    "answer": 0
  },
  {
    "question": "Com relação ao movimento realizado pelo veículo 2, é correto afirmar:",
    "image":"quest-14.png",
    "options": ["É uma ultrapassagem permitida, desde que seja sinalizada e clara.", "É uma ultrapassagem perigosa, porém permitida, se feita com segurança.", "É uma ultrapassagem permitida, pois o veículo retoma a sua faixa após a ultrapassagem.", "É uma ultrapassagem proibida, pois a sinalização horizontal não permiti transposição de faixas."],
    "answer": 3
  },
  {
    "question": "Tem prioridade no trânsito:",
    "options": ["O motociclista, pois trafega em maior velocidade.", "O condutor de transporte coletivo, por ser maior.", "O pedestre idoso ou gestante.", "O pedestre, pois é a estrutura mais frágil do trânsito."],
    "answer": 3
  },
  {
    "question": "Como se classificam as vias públicas?",
    "options": ["Arteriais e coletoras.", "Rodovias e estradas.", "Urbanas e rurais.", "Ruas e avenidas."],
    "answer": 2
  },
  {
    "question": "Sobre estacionamento é correto afirmar:",
    "options": ["É proibido estacionar junto a hidrantes, registro de água ou acessos a galerias subterrâneas.", "É a imobilização do veículo com finalidade e tempo estritamente necessário para embarque e desembarque de passageiro.", "É permitido estacionar em viadutos, pontes e túneis.", "Sempre quando existem proibições de estacionamento, necessariamente existem proibições de parada."],
    "answer": 0
  },
  {
    "question": "De acordo com a figura acima, qual veículo deverá passar primeiro?",
    "image":"quest-18.png",
    "options": ["O veículo 1, pois existe sinalização para os demais veículos.", "O veículo 2, pois está à direita dos demais.", "A ambulância.", "O veículo 1 passará primeiro somente se um pedestre iniciar travessia diante do veículo 2."],
    "answer": 0
  },
  {
    "question": "Chamam-se interseções a todo cruzamento:",
    "options": ["Semaforizado.", "Em nível, entroncamento ou bifurcação.", "Sobre ferrovias.", "Com rotatória."],
    "answer": 1
  },
  {
    "question": "Quando uma via comportar várias faixas no mesmo sentido, são as da direita destinadas:",
    "options": ["Aos veículos mais rápidos e à ultrapassagem.", "Às bicicletas.", "Às motocicletas.", "Aos veículos mais lentos e de grande porte."],
    "answer": 3
  },
  {
    "question": "Veículos de tração e propulsão humana, quando na ausência de pista própria ou acostamento, devem circular:",
    "options": ["Pelo bordo da pista, à direita.", "Pelo bordo da pista, à esquerda.", "Pelo centro da pista.", "Pela calçada, faixa de trânsito mais à direita da pista de rolamento."],
    "answer": 0
  },
  {
    "question": "Verificar se o espaço é suficiente, sinalizar com antecedência e retomar a posição anterior, são procedimentos para executar:",
    "options": ["Passagem e retorno com o veículo em movimento.", "A transposição de faixa.", "Passagem e conversão com o veículo em movimento.", "Ultrapassagem."],
    "answer": 3
  },
  {
    "question": "Nas vias providas de acostamento e sem locais apropriados para manobras de retorno, o condutor deverá:",
    "options": ["Seguir em frente até encontrar um cruzamento.", "Fazer o sinal regulamentar de braço, diminuir a velocidade na faixa da direita e convergir com segurança.", "Aguardar no acostamento à direita para cruzar a pista com segurança.", "Aproximar-se do eixo central da pista, sem atingir a contramão de direção e convergir com segurança."],
    "answer": 2
  },
  {
    "question": "Em uma rodovia dotada de acostamento, para entrar à esquerda, o condutor deve:",
    "options": ["Seguir até encontrar um cruzamento.", "Atingir o ponto central.", "Deslocar seu veículo para a esquerda sem atingir a contramão.", "Aguardar no acostamento, à direita, para cruzar a pista com segurança."],
    "answer": 3
  },
  {
    "question": "O condutor deve sinalizar e deslocar, com antecedência, o seu veículo para a faixa mais à esquerda da sua mão de direção para:",
    "options": ["Fazer uma ultrapassagem.", "Mudar de faixa de direção.", "Aumentar a velocidade.", "Entrar à esquerda."],
    "answer": 3
  },
  {
    "question": "Quanto ao uso de luzes em veículos, é correto afirmar:",
    "options": ["É necessário, que todos os veículos em circulação pública, mantenham o alerta de luz, os faróis acesos.", "O condutor deve utilizar o pisca-alerta em imobilização ou em situação de emergência.", "Nos túneis providos de iluminação pública não poderá manter acesos os faróis do veículo.", "Durante a noite, em circulação, se necessário, manterá acesa a luz de placa."],
    "answer": 1
  },
  {
    "question": "Durante o dia, o uso de buzina é permitido:",
    "options": ["Em qualquer situação.", "Em qualquer situação, desde que em toque breve.", "Para alertar sobre perigo, desde que em toque breve.", "Em área hospitalar e escolar."],
    "answer": 2
  },
  {
    "question": "Os veículos lentos, quando transitando em fila, deverão:",
    "options": ["Andar próximos um ao outro, para evitar que outros veículos ultrapassem.", "Manter distância suficiente entre eles para que os veículos que os ultrapassam possam se intercalar na fila com segurança.", "Andar sempre na esquerda da via esperando da pista de rolamento, sob todas as condições.", "Parar toda vez que outro condutor começar a ultrapassá-lo."],
    "answer": 1
  },
  {
    "question": "São deslocamentos laterais, exceto:",
    "options": ["Ultrapassagem.", "Passagem.", "Retorno.", "Conversão."],
    "answer": 1
  },
  {
    "question": "Possui preferência em cruzamentos não sinalizados, exceto:",
    "options": ["O veículo que transita por rodovia, sobre o de via que pretende segui-la.", "O veículo que já estiver circulando, sobre o veículo que pretende adentrá-la.", "O veículo que vem pela direita.", "Os caminhões e coletivos ou ônibus."],
    "answer": 3
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
