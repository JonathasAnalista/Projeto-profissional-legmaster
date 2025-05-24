
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
    "image": "curva_acentuada_direita.png",
    "options": [
        "Curva acentuada à direita.",
        "Curva à direita.",
        "Curva curta à direita.",
        "Curva longa à direita."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "curva_acentuada_s_direita.png",
    "options": [
        "Curva em Z à direita.",
        "Curva em S à direita.",
        "Curva acentuada em S à direita.",
        "Curva acentuada em Z à direita."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "comprimento_maximo_permitido.png",
    "options": [
        "Comprimento máximo limitado.",
        "Largura máxima permitida.",
        "Comprimento máximo permitido.",
        "Largura máxima limitada."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "ciclistapedestre.png",
    "options": [
        "Pedestres ande pela esquerda , ciclistas pela direita.",
        "Pedestres ande pela direita , ciclistas pela esquerda.",
        "Banhistas ande pela esquerda , ciclistas pela direita.",
        "Banhistas ande pela direita , ciclistas pela esquerda."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa inscrição no pavimento?",
    "image": "ip_vire_esquerda.png",
    "options": [
        "Obrigatório virar à esquerda.",
        "Mantenha à direita.",
        "Vire à direita.",
        "Vire à esquerda."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa inscrição no pavimento?",
    "image": "ip_cruz_santo_andre.png",
    "options": [
        "Cruz de santo andré - cruzamento cicloviário.",
        "Cruz de santo andré - cruzamento rodoferroviário.",
        "Cruz de santo andré - cruzamento rodoviário.",
        "Cruz de santo andré - cruzamento Portoviário."
    ],
    "answer": 1
    },

    {
    "question": "O que significa o gesto do condutor?",
    "image": "gc_dobrar_esquerda.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 0
    },

    {
    "question": "O que significa o gesto do condutor?",
    "image": "gc_diminuir_marcha.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 1
    },

    {
    "question": "O que significa a ordem do Agente de trânsito?",
    "image": "ga_diminuir.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 1
    },

    {
    "question": "O que significa a ordem do Agente de trânsito?",
    "image": "ga_parar.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 0
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "at_patrimonio_natural.png",
    "options": [
        "Patrimônio natural com barreiras.",
        "Patrimônio histórico.",
        "Patrimônio cultural com barreiras.",
        "Patrimônio natural."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "at_centro_cultura.png",
    "options": [
        "Centro cultural.",
        "Centro de cultura.",
        "Centro de artes.",
        "Centro Bibliotecário."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "sa_camping.png",
    "options": [
        "Área indígena.",
        "Proteção para indígenas.",
        "Área de campismo.",
        "Barraca de proteção contra animais selvagens."
    ],
    "answer": 2
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "sa_mecanico.png",
    "options": [
        "Oficina mecânica.",
        "Serviço mecânico.",
        "Serviço de reparo de veículos.",
        "Serviço de manutenção de veículos."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa sinalização semafórica?",
    "image": "ss_nao_pode_atravessar.png",
    "options": [
        "Os veículos devem atravessar a via.",
        "Os pedestres devem atravessar a via.",
        "Os veículos devem parar instantaneamente.",
        "Os pedestres não podem atravessar a via."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "parada_ob_frente.png",
    "options": [
        "Parada obrigatória.",
        "Parada obrigatória para pedestres.",
        "Parada obrigatória para veículos leves.",
        "Parada obrigatória à frente."
    ],
    "answer": 3
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "cruzamento_vias.png",
    "options": [
        "Cruzamento de vias com quarto vias.",
        "Cruzamento de vias.",
        "Cruzamento em cruz.",
        "Cruz de santo andré."
    ],
    "answer": 1
    },

    {
    "question": "O que significa essa placa de regulamentação de formato Octogonal?",
    "image": "parada_obg.png",
    "options": [
        "Atenção : Parada obrigatória.",
        "Atenção, Pare!.",
        "Parada obrigatória.",
        "Pare!."
    ],
    "answer": 2
    },

     {
    "question": "Diante dessa placa de regulamentação você entende que:?",
    "image": "vire_direita.png",
    "options": [
        "A conversão para o lado direito é permetida se quiser.",
        "A conversão para o lado direito é obrigatório.",
        "Somente veículos pesados devem convergir à direita.",
        "Somente veículos leves devem convergir à direita."
    ],
    "answer": 1
    },

    {
    "question": "Diante dessa placa de atrativos turísticos você entende que:?",
    "image": "marina.png",
    "options": [
        "indica a presença de uma (marina), um local para fiscalizar e controlar a entrada e saída de embarcações.",
        "indica a presença de uma (marina), um local onde pequenos barcos podem ser ancorados e atracados.",
        "indica a presença de uma (marina), um local onde barcos e embarcações podem ser ancorados e atracados.",
        "indica a presença de uma (marina), um local onde apenas navios podem ser ancorados e atracados."
    ],
    "answer": 2
    },

    {
    "question": "Diante dessa placa de atrativos turísticos você entende que:?",
    "image": "aeroclub.png",
    "options": [
        "indica a presença de um (aeroclube) na área.",
        "indica a presença de um (avião pequeno) na área.",
        "indica a presença de um (grande avião) na área.",
        "indica apresentação da (esquadrilha de fumaça)."
    ],
    "answer": 0
    },

    {
    "question": "Diante dessa placa de serviços auxiliares você entende que:?",
    "image": "restaurante.png",
    "options": [
        "Indica a presença de um supermercado próximo.",
        "Informa que há um restaurante nas proximidades.",
        "Indica uma área exclusiva para piqueniques.",
        "Informa a obrigatoriedade de parar para refeição."
    ],
    "answer": 1
    },

    {
    "question": "A placa SAU-26, “Ponto de parada”, indica:",
    "image": "pontoparada.png",
    "options": [
        "Estacionamento de ônibus.",
        "Parada de veículos de autoridades.",
        "Carga e descarga de mercadorias.",
        "Parada de veículos de transporte coletivo ou individual de passageiros."
    ],
    "answer": 3
    },

    {
    "question": "Diante do gesto do agente você entende que:",
    "image": "ag_lanterna.png",
    "options": [
        "É uma ordem de parada somente para o veículo no qual a lanterna está direcionada.",
        "É uma ordem de parada aos veículos para que os pedestres possam atravesar a via.",
        "É uma ordem de parada pra todos os veículos que vem na direção do agente.",
        "É uma ordem de parada para todos os veículos que estão na via."
    ],
    "answer": 0
    },

    {
    "question": "Diante do gesto do agente você entende que:",
    "image": "ag_seguir.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 2
    },

    {
    "question": "Diante do gesto do condutor você entende que:",
    "image": "gc_direita.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 2
    },

    {
    "question": "Diante da inscrição no pavimento você entende que:",
    "image": "deficiente.png",
    "options": [
        "Local proibido de parada de veículos conduzidos por deficientes físicos.",
        "Local de estacionamento de veículos conduzidos por deficientes físicos ou que os transporte.",
        "Local de embarque e desembarque de deficientes físicos.",
        "Local de trânsito de deficientes físicos."
    ],
    "answer": 1
    },

    {
    "question": "Diante da marca de canalização no pavimento você entende que:",
    "image": "canalizacao_ip.png",
    "options": [
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido estacionar.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido circular.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde é permitido circular, parar ou estaciona.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido circular, parar ou estacionar."
    ],
    "answer": 3
    },

    {
    "question": "A placa A-2a adverte uma:",
    "image": "curva_esquerda.png",
    "options": [
        "Curva acentuada à esquerda.",
        "Curva à esquerda.",
        "Curva curta à esquerda.",
        "Curva longa à esquerda."
    ],
    "answer": 1
    },

    {
    "question": "A placa A-26a adverte uma via de:",
    "image": "sentido_unico.png",
    "options": [
        "Sentido duplo.",
        "Sentido obrigatório.",
        "Sentido único.",
        "Nenhuma das respostas acima."
    ],
    "answer": 2
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