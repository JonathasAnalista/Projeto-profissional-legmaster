
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
    "question": "A placa A-13b indica:",
    "image":"quest-1.png",
    "options": ["Confluência à esquerda.", "Confluência à direita.", "Entroncamento oblíquo à esquerda.", "Entroncamento oblíquo à direita."],
    "answer": 1
  },
  {
    "question": "No sistema de arrefecimento não se utiliza o seguinte componente:",
    "options": ["Filtro de óleo.", "Ventoinha ou ventilador.", "Radiador.", "Bomba d'água."],
    "answer": 0
  },
  {
    "question": "Velocidade mínima em via de trânsito rápido sem sinalização:",
    "options": ["30 km/h.", "40 km/h.", "80 km/h.", "60 km/h."],
    "answer": 1
  },
  {
    "question": "Automatismo correto significa:",
    "options": ["Atenção fixa.", "Atenção dispersiva.", "Gesto inconsciente seguro.", "Indisciplina na condução."],
    "answer": 2
  },
  {
    "question": "A placa R-18 significa:",
    "image":"quest5.png",
    "options": ["Comprimento máximo permitido.", "Largura máxima permitida.", "Peso máximo por eixo.", "Altura máxima permitida."],
    "answer": 0
  },
  {
    "question": "Cuidados que reduzem poluição ambiental:",
    "options": ["Regular carburador.", "Manter bobina e velas.", "Verificar ruídos no escapamento.", "Todas as alternativas."],
    "answer": 3
  },
  {
    "question": "Quando, dirigindo um veículo numa via de mão única com retorno ou entrada à esquerda, o condutor que estiver à frente indicar, por sinal, que vai entrar para esse lado, você poderá:",
    "options": ["Ultrapassar pela esquerda.", "Fazer um retorno.", " Acelerar o veículo", "Ultrapassar pela direita."],
    "answer": 3
  },
  {
    "question": "Validade da Permissão para Dirigir:",
    "options": ["5 anos.", "10 anos.", "1 ano.", "A mesma do exame médico."],
    "answer": 2
  },
  {
    "question": "Conduta em declive acentuado:",
    "options": ["Usar ponto morto.", "Mesma marcha do aclive.", "Testar acelerador e desengrenar.", "Desligar o motor."],
    "answer": 1
  },
  {
    "question": "Conduta incorreta para fratura:",
    "options": ["Manter deitado.", "Tala imobilize articulação.", "Puxar membro para posição natural.", "Aplicar pano limpo."],
    "answer": 2
  },
  {
    "question": "Não altera aderência:",
    "options": ["Tipo de solo.", "Tipo de combustível.", "Chuva.", "Calibragem dos pneus."],
    "answer": 1
  },
  {
    "question": "Estacionar em desacordo gera:",
    "options": ["Multa e retenção CNH.", "Retenção veículo e CNH.", "Multa e remoção.", "Multa e retenção do veículo."],
    "answer": 2
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
    "question": "Placa TNA-03 indica:",
    "image":"tna03.png",
    "options": ["Praia.", "Plantações.", "Ilha.", "Natureza."],
    "answer": 2
  },
  {
    "question": "O responsável pela infração relativa ao transporte de carga com excesso de peso nos eixos ou quando a carga proveniente de mais de um embarcador ultrapassar o peso bruto total é o:",
    "options": ["Transportador e embarcador.", "Proprietário.", "Transportador.", "Embarcador."],
    "answer": 2
  },
  {
    "question": "Diante do gesto do condutor você entende que:",
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
    "question": "Infração grave na PPD resulta em:",
    "options": ["Multa gravíssima e reciclagem.", "Grave com suspensão da PPD.", "PPD cassada e reinício.", "Multa média e suspensão."],
    "answer": 2
  },
  {
    "question": "Aquaplanagem é:",
    "options": ["Perda da aderência dos pneus devido a uma camada fina de água no solo", "Derrapagem do veículo em pista seca.", "Perda da aderência dos pneus em qualquer tipo de situação.", "Perda de estabilidade do veículo."],
    "answer": 0
  },
  {
    "question": "Para licenciar um veículo é obrigatório:",
    "options": ["Pagar IPVA.", "Pagar DPVAT.", "Atender recall.", "Todos os anteriores."],
    "answer": 3
  },
  {
    "question": "Não é considerado infração de trânsito:",
    "options": ["Ultrapassagem perigosa.", "Avançar o sinal vermelho.", "Omissão de socorro.", "Estacionamento irregular."],
    "answer": 2
  },
  {
    "question": "A placa A-14 adverte que, você vai encontrar:",
    "image": "semaforo.png",
    "options": ["Um semáforo.", "Um cruzamento com semáforo.", "Um semáforo à frente.", "Um semáforo desligado."],
    "answer": 2
  },
  {
    "question": "Óculos obrigatórios para capacete aberto:",
    "options": ["Óculos EPI.", "Óculos de sol.", "Óculos com grau.", "Nenhuma das respostas."],
    "answer": 3
  },
  {
    "question": "Incorreto para reduzir poluentes:",
    "options": ["Usar catalisador.", "Gás natural.", "Regular motor.", "Incentivar transporte individual."],
    "answer": 3
  },
  {
    "question": "O trabalho de remoção de um acidentado deve ser feito por pessoal especializado, com equipamentos apropriados. Mas se numa emergência, esse transporte precisar ser feito por você, qual procedimento pode ser considerado inadequado?",
    "options": ["Verificar se há deformações na coluna vertebral.", "Improvisar uma marca para transporte do acidentado.", " Remover a vítima do local de maneira mais rápida possível, pois esta necessita de atendimento urgente.", "Evitar freadas bruscas e excesso de velocidade que podem agravar o estado da vítima."],
    "answer": 2
  },
  {
    "question": "Analise a preferência acima e responda:",
    "image": "quest25.png",
    "options": ["Entre o veículo 4, 3 e 2. Tem preferência o veículo 4", "Entre o veículo 3, 2 e 1. Tem preferência o veículo 2", "Entre o veículo 1, 2 e 3. Tem a preferência o veículo 3", "Entre o veículo 2, 3 e 4. Tem preferência o veículo 2"],
    "answer": 3
  },
  {
    "question": "Prever o perigo com antecedência:",
    "options": ["Definir itinerário.", "Evitar indecisões.", "Definir trajetos.", "Todas as anteriores."],
    "answer": 3
  },
  {
    "question": "Órgão máximo normativo do SNT:",
    "options": ["SENATRAN.", "CONTRAN.", "CIRETRAN.", "Ministério da Justiça."],
    "answer": 1
  },
  {
    "question": "Prazo para apresentar infrator:",
    "options": ["15 dias.", "45 dias.", "30 dias.", "48 horas."],
    "answer": 2
  },
  {
    "question": "Conduta correta no semáforo amarelo:",
    "image":"quest29.png",
    "options": ["Reduzir velocidade.", "Frear bruscamente.", "Acelerar.", "Manter velocidade."],
    "answer": 0
  },
   {
    "question": "Analise o desenho e marque a preferência:",
    "image": "quest30.png",
    "options": ["Do veículo 1, porque o veículo 2 irá fazer conversão", "Do veículo 2, porque está à direita do veículo 1", "Do veículo 1, porque está em linha reta", "Nenhuma das anteriores"],
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
        <img src="${q.image}" alt="Imagem da questão" class="question-image" style="max-width: 220px; height: auto; display: block; margin: 5px auto;">
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
