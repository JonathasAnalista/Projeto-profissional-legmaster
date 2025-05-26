
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
    "question": "A Carteira Nacional de Habilitação se tornará inválida quando:",
    "options": ["O veículo for removido.", "A Carteira Nacional de Habilitação for cassada.", "A Carteira Nacional de Habilitação for roubada.", "O veículo for retido."],
    "answer": 1
  },
  {
    "question": "Diante de uma vítima de trânsito, deve-se primeiramente verificar se:",
    "options": ["Ocorreu a obstrução de vias aéreas.", "Ocorreram fraturas.", "A vítima consegue ficar em pé.", "Ocorreu sangramento abundante."],
    "answer": 0
  },
  {
    "question": "Transitar pela contramão em vias de duplo sentido é infração... penalidade:",
    "options": ["Gravíssima; multa.", "Grave; multa (cinco vezes).", "Gravíssima; multa (três vezes).", "Grave; multa."],
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
    "question": "Um veículo que vai entrar numa rodovia pela direita deve:",
    "options": ["Ter preferência de passagem.", "Ter prioridade de passagem.", "Aguardar, pois a preferência é da rodovia.", "Nenhuma das anteriores."],
    "answer": 2
  },
  {
    "question": "A queima incompleta de fuligem pode causar:",
    "options": ["Alergia.", "Asma.", "Bronquite crônica.", "Todas estão corretas."],
    "answer": 3
  },
  {
    "question": "O processo de oxidação ocorre por:",
    "options": ["Deixar de usar óleo no motor.", "Deixar de usar óleo no carburador.", "Deixar de usar aditivo na água do radiador.", "Nenhuma das acima."],
    "answer": 2
  },
  {
    "question": "Ações para prever e evitar acidentes são chamadas de:",
    "options": ["Direção correta.", "Direção corretiva.", "Direção defensiva.", "Direção de alto risco."],
    "answer": 2
  },
  {
    "question": "A placa A-41 adverte:",
    "image": "santoandre.png",
    "options": ["Cruz de Santo André.", "Pista dividida.", "Comprimento máximo permitido.", "Passagem de nível sem barreira."],
    "answer": 0
  },
  {
    "question": "Sob chuva de granizo, o condutor deve:",
    "options": ["Aumentar a velocidade.", "Parar em local seguro.", "Ligar o pisca-alerta e parar.", "Parar sob viaduto."],
    "answer": 1
  },
  {
    "question": "Marque a incorreta sobre luz baixa:",
    "options": ["Iluminar a margem direita.", "Tornar visíveis placas.", "Alcance de 750 metros.", "Alcance de 750 metros."],
    "answer": 1
  },
  {
    "question": "Infração com veículo do exterior deve:",
    "options": ["Não existe multa.", "Ser paga antes de sair do país.", "Não precisa ser paga.", "Ser paga depois da saída."],
    "answer": 1
  },
  {
    "question": "Na parada cardíaca, pupilas:",
    "options": ["Contraídas.", "Enrijecidas.", "Dilatadas.", "Rígidas."],
    "answer": 2
  },
  {
    "question": "Ao ultrapassar pela esquerda:",
    "options": ["Verificar se há espaço.", "Buzinar após ultrapassar.", "Ligar faróis altos.", "Aumentar velocidade ao ser ultrapassado."],
    "answer": 0
  },
  {
    "question": "Veículos com prioridade:",
    "options": ["Deixar livre a faixa da esquerda.", "Pedestres aguardam no passeio.", "Velocidade reduzida no cruzamento.", "Todas estão corretas."],
    "answer": 3
  },
  {
    "question": "Veículos que mais poluem o ar:",
    "options": ["Diesel ou gasolina.", "Sistema elétrico.", "Propulsão humana.", "Tração animal."],
    "answer": 0
  },
  {
    "question": "Placa R-28 indica que condutor vai:",
    "image": "sentidoduplo.png",
    "options": ["Entrar em uma via de duplo sentido de circulação.", "Entrar em uma via de sentido único de circulação.", "Entrar em uma via que vai e vem.", "Entrar em uma via obrigatória de sentidos contrários."],
    "answer": 0
  },
  {
    "question": "Terá CNH cassada quem for flagrado em:",
    "options": ["I, apenas.", "I e II.", "II, apenas.", "I, II e III."],
    "answer": 1
  },
  {
    "question": "Deixar o veículo morrer na prova é falta:",
    "options": ["Leve - 3 pontos.", "Eliminatória - 4 pontos.", "Grave - 1 ponto.", "Média - 2 pontos."],
    "answer": 3
  },
  {
    "question": "Bicicletas não devem circular nas calçadas de vias:",
    "options": ["Terrestres.", "Coletoras.", "Locais.", "De trânsito rápido."],
    "answer": 0
  },
  {
    "question": "Fazer reparo em via pública é:",
    "options": ["Infração média.", "Grave em rodovias.", "Leve em vias comuns.", "B e C corretas."],
    "answer": 3
  },
  {
    "question": "Ao cruzar com outro veículo à noite, olhar para:",
    "options": ["Faixa central.", "Faixa da direita.", "Faixa da esquerda.", "Painel do veículo."],
    "answer": 1
  },
  {
    "question": "Função da suspensão e amortecedores:",
    "options": ["Manter características do veículo.", "Desgastar pneus.", "Perder controle.", "Manter estabilidade."],
    "answer": 3
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
    "question": "Inscrições no solo servem para:",
    "options": ["Regulamentar vias preferenciais.", "Reduzir perigos.", "Indicar cruzamentos.", "Melhorar percepção do condutor."],
    "answer": 3
  },
  {
    "question": "Condutor que não remove veículo após acidente com dano comete:",
    "options": ["Falta de bom senso.", "Infração leve.", "Infração média.", "Aguardar perícia."],
    "answer": 2
  },
  {
    "question": "Placa TNA-02 indica:",
    "image": "praia.png",
    "options": ["Ilha.", "Praia.", "Coqueiros.", "Vende-se água de côco."],
    "answer": 1
  },
  {
    "question": "Com ventos laterais fortes, o condutor deve:",
    "options": ["Fechar janelas e manter velocidade.", "Abrir janelas e manter velocidade.", "Reduzir marcha e abrir vidros.", "Manter velocidade normal."],
    "answer": 2
  },
  {
    "question": "É órgão recursal:",
    "options": ["SENATRAN.", "PRF.", "JARI.", "DETRAN."],
    "answer": 2
  },
  {
    "question": "Tipos de hemorragia:",
    "options": ["Externa e interna.", "Aberta e fechada.", "Externa e aberta.", "Interna e fechada."],
    "answer": 0
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
