// ✅ Carrega dados do usuário da plataforma
const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

window.currentUser = {
  email: usuarioSalvo.email || null,
  nome: usuarioSalvo.nome || "Desconhecido"
};

console.log("Usuário carregado:", window.currentUser);





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
    "question": "O condutor poderá ultrapassar outro veículo pela direita quando:",
    "options": ["O veículo da frente autorizar.", "A via for de mão única com entrada à esquerda e o condutor do veículo a ser ultrapassado indicar, por sinal, que vai entrar para esse lado.", "A via for de mão única com retorno ou entrada à direita e o condutor do veículo que estiver à direita indicar, por sinal, que vai entrar para esse lado.", "A via for de mão dupla com retorno ou entrada à esquerda e apenas uma faixa de trânsito."],
    "answer": 1
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
    "question": "A placa A-42a adverte o condutor da existência adiante de:",
    "image":"ipd.png",
    "options": ["Início de pista dupla.", "Fim de pista dupla.", "Mão dupla adiante.", "Pista irregular."],
    "answer": 0
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
    "question": "O condutor que estiver circulando pela faixa do meio, em uma pista de rolamento de três faixas, ao perceber que outro que o segue tem o propósito de ultrapassá-lo, deverá:",
    "options": ["Deslocar-se para a faixa da direita, acelerando a marcha.", "Manter-se naquela na qual está circulando, sem acelerar a marcha.", "Manter-se na pista, acelerando a marcha.", "Deslocar-se para a faixa da esquerda, acelerando a marcha."],
    "answer": 1
  },
  {
    "question": "Manter o veículo imobilizado apenas pelo tempo necessário para embarque e desembarque de pessoas, caracteriza-se como:",
    "options": ["Parada para carga e descarga.", "Parada.", "Estacionamento para carga e descarga.", "Estacionamento."],
    "answer": 1
  },
  {
    "question": "Complete a frase. Nos casos de parada cardíaca os lábios ficam imediatamente azulados, as pupilas encontram-se e a vítima apresenta palidez acentuada.",
    "options": ["Contraídas.", "Enrijecidas.", "Dilatadas.", "Rígidas."],
    "answer": 2
  },
  {
    "question": "Ao ultrapassar pela esquerda , o motorista deve:",
    "options": ["Verificar se há espaço.", "Buzinar após ultrapassar.", "Ligar faróis altos.", "Aumentar velocidade ao ser ultrapassado."],
    "answer": 0
  },
  {
    "question": "Quanto aos veículos com prioridade, podemos afirmar:",
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
    "question": "Onde houver marca longitudinal amarela dupla contínua a ultrapassagem é:",
    "options": ["Permitida para os dois sentidos.", "Proibida para um dos sentidos", "Proibida para os dois sentidos.", "Permitida para um dos sentidos."],
    "answer": 2
  },
  {
    "question": "Deixar o veículo morrer na prova é falta:",
    "options": ["Leve - 3 pontos.", "Eliminatória - 4 pontos.", "Grave - 1 ponto.", "Média - 2 pontos."],
    "answer": 3
  },
  {
    "question": "Na sinalização horizontal a cor utilizada para a regulação de fluxos de sentidos opostos, é:",
    "options": ["Amarela.", "Branca.", "Azul.", "Preta."],
    "answer": 0
  },
  {
    "question": "De acordo com os sinais sonoros dos agentes de trânsito, marque a resposta que corresponda a determinação de mandar o veículo seguir:",
    "options": ["Três silvos breves.", "Um silvo longo.", "Dois silvos breves.", "Um silvo breve"],
    "answer": 3
  },
  {
    "question": "Ao cruzar com outro veículo à noite, olhar para:",
    "options": ["Faixa central.", "Faixa da direita.", "Faixa da esquerda.", "Painel do veículo."],
    "answer": 1
  },
  {
    "question": "A Função da suspensão e amortecedores é:",
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
    "question": "A placa R-16 significa:",
    "image": "lmp.png",
    "options": ["Largura permitida por eixo", "Largura limitada.", "Largura máxima por eixo.", "Largura máxima permitida"],
    "answer": 3
  },
  {
    "question": "Deixar o condutor, envolvido em acidente sem vítima, de adotar providências para remover o veículo do local, quando necessária tal medida para assegurar a segurança e a fluidez do trânsito:",
    "options": ["Falta de bom senso.", "Infração leve.", "Infração média.", "Aguardar perícia."],
    "answer": 2
  },
  {
    "question": "Placa TNA-02 indica:",
    "image": "praia.png",
    "options": ["Alagamento.", "Praia.", "Chuva forte.", "Vende-se guarda-chuvas."],
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
    "question": "Qual é a concentração de álcool no SANGUE, comprovado por exames, que é considerado crime de trânsito?",
    "options": ["5 dc/L de sangue.", "6 dc/L de sangue.", "2 dc/L de sangue.", "0,34 ml/L de ar."],
    "answer": 1
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

function salvarDesempenho(prova, acertos) {
  const email = window.currentUser?.email;
  if (!email) return;

  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");

  if (!desempenho[email]) {
    desempenho[email] = [];
  }

  desempenho[email].push({
    prova,
    acertos,
    data: new Date().toLocaleString("pt-BR")
  });

  localStorage.setItem("desempenho", JSON.stringify(desempenho));
}


function showResult() {
  // Esconde o quiz e exibe o resultado
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");

  const totalQuestoes = questions.length;
  const porcentagem = Math.round((score / totalQuestoes) * 100);
  const nomeProva = localStorage.getItem("provaAtual") || "Prova Desconhecida";

  // Exibe o resultado na tela
  document.getElementById("score").textContent =
    `Você acertou ${score} de ${totalQuestoes} questões (${porcentagem}%)`;

  const msg = document.getElementById("message");

  if (score < 21) {
    msg.textContent = "❌ Atenção! Tente de novo! Precisa melhorar seu resultado";
    msg.style.color = "#d32f2f"; // vermelho forte
  } else if (score >= 21 && score <= 27) {
    msg.textContent = "⚠️ Está razoável! Você está quase lá! Dá pra melhorar!";
    msg.style.color = "#1976d2"; // azul forte
  } else {
    msg.textContent = "✅ Parabéns! Excelente desempenho! Continue assim em todos os simulados!";
    msg.style.color = "#388e3c"; // verde forte
  }

  msg.style.fontWeight = "bold";

  // Salva o desempenho no navegador (localStorage)
  salvarDesempenho(nomeProva, score);

  // Envia os dados para o Firestore (monitoramento)
  if (window.currentUser?.email) {
  registrarAcessoFirestore(
    window.currentUser.nome || "",  // vazio se não tiver nome
    window.currentUser.email,
    "Finalizou simulado",
    nomeProva,
    score,
    totalQuestoes
  );
} else {
  console.warn("⚠️ Usuário sem email. Registro não enviado.");
}


}



function registrarAcessoFirestore(nome, email, acao, prova, acertos, totalQuestoes) {
  const data = new Date();
  const dataFormatada = data.toLocaleString("pt-BR");
  const porcentagem = Math.round((acertos / totalQuestoes) * 100);

  if (!firebase?.firestore) {
    console.error("❌ Firestore não está disponível.");
    return;
  }

  firebase.firestore().collection("acessos").add({
    email: email || "sem@email.com",
    acao: acao || "Finalizou simulado",
    prova: prova || "Prova não informada",
    acertos: acertos || 0,
    totalQuestoes: totalQuestoes || 0,
    porcentagem,
    data: dataFormatada
  })
  .then(() => console.log("✅ Registro enviado para a coleção 'acessos'"))
  .catch((err) => console.error("❌ Erro ao enviar para Firestore:", err));
}



showQuestion();
