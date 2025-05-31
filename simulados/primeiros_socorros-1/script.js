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
    question: "Em caso de acidente com vítima, qualquer cidadão deve:",
    options: [
      "Retirar a vítima de dentro do veículo imediatamente.",
      "Transportar a vítima imediatamente.",
      "Sinalizar o local e solicitar atendimento especializado às vítimas.",
      "Afastar-se do local imediatamente."
    ],
    answer: 2
  },
  {
    question: "O melhor local no corpo para se verificar a pulsação é:",
    options: [
      "No pescoço.",
      "No pé.",
      "No punho.",
      "Em alguma veia saliente."
    ],
    answer: 0
  },
  {
    question: "O procedimento correto com o acidentado que sofreu queimaduras é:",
    options: [
      "Esfriar a área com água corrente.",
      "Passar pasta de dente na ferida.",
      "Cobrir a ferida com um pano seco.",
      "Dar leite para a pessoa tomar."
    ],
    answer: 0
  },
  {
    question: "Não constitui requisito obrigatório a um socorrista:",
    options: [
      "Ser solidário.",
      "Ser firme e dedicado.",
      "Ser calmo.",
      "Ser da área de saúde."
    ],
    answer: 3
  },
  {
    question: "A sigla SAMU significa:",
    options: [
      "Seção de Atendimento Médico Urbano.",
      "Serviço de Auxílio Médico de Urgência.",
      "Seção de Auxílio Móvel ao Usuário.",
      "Serviço de Atendimento Móvel de Urgência."
    ],
    answer: 3
  },
  {
    question: "O sinal vital que não varia com a idade é:",
    options: [
      "Temperatura.",
      "Pulso.",
      "Respiração.",
      "Pressão arterial."
    ],
    answer: 0
  },
  {
    question: "Em um acidente de trânsito com vítima, o que se deve fazer:",
    options: [
      "Tentar conversar com a vítima.",
      "Movimentar a vítima.",
      "Fazer torniquete.",
      "Retirar o capacete, no caso de motociclista."
    ],
    answer: 0
  },
  {
    question: "A incapacidade de reagir a estímulos dolorosos, nas pernas e braços, após um acidente, é indício de:",
    options: [
      "Traumatismo Femoral.",
      "Lesão na coluna.",
      "Traumatismo Radial.",
      "Hemorragia."
    ],
    answer: 1
  },
  {
    question: "Para evitar agravamento do acidente de trânsito como novas colisões, deve-se, de imediato, tomar a seguinte providência:",
    options: [
      "Sinalizar o local.",
      "Retirar a vítima do veículo.",
      "Retirar o veículo do local.",
      "Verificar a situação das vítimas"
    ],
    answer: 0
  },
  {
    question: "Em acidente automobilístico com fio elétrico caído sobre o veículo, os passageiros deverão, até ser desligada a energia dos cabos de eletricidade:",
    options: [
      "Serem retirados imediatamente.",
      "Sair um a um do veículo.",
      "Afastar o veículo e do fio elétrico.",
      "Permanecer dentro do veículo."
    ],
    answer: 3
  },
  {
    question: "Ao acionar o serviço de atendimento de emergência, o socorrista não precisará passar as seguintes informações:",
    options: [
      "Gravidade aparente do acidente.",
      "Nome da rua ou rodovia e, respectivamente, número ou quilômetro próximo.",
      "Endereço e número do telefone da vítima.",
      "Tipo de acidente: se envolve carro, motocicleta, colisão, atropelamento etc."
    ],
    answer: 2
  },
  {
    question: "Análise secundária é o tratamento dado à vítima consciente e capaz de se expressar. O socorrista deve examinar na análise secundária:",
    options: [
      "Sinais vitais como pulso e respiração.",
      "Dilatação e reatividade das pupilas.",
      "Ferimentos, fraturas e hemorragias.",
      "Temperatura da vítima."
    ],
    answer: 2
  },
  {
    question: "Ao examinar uma vítima, você detecta que ela não respira e não tem pulso. Nessa situação você deve:",
    options: [
      "Aplicar compressas frias sobre a testa.",
      "Aquecer cobertores para diminuir calafrios.",
      "Iniciar imediatamente o procedimento de RCP.",
      "Não fazer nada até chegar o socorro."
    ],
    answer: 2
  },
  {
    question: "Se ao sinalizar 60 passos encontrar uma curva no meio do caminho, a pessoa deve:",
    options: [
      "Parar e recomeçar do zero após a curva.",
      "Continuar a contagem normalmente.",
      "Aumentar mais 10 passos.",
      "Parar e depois recomeçar de onde parou até contar 60 passos."
    ],
    answer: 3
  },
  {
    question: "O que não causa a parada respiratória é:",
    options: [
      "Soterramento.",
      "Afogamento.",
      "Perfuração no pulmão.",
      "Fratura no fêmur."
    ],
    answer: 3
  },
  {
    question: "São tipos de hemorragia:",
    options: [
      "Hemorragia externa e interna.",
      "Hemorragia aberta e fechada.",
      "Hemorragia externa e aberta.",
      "Hemorragia interna e fechada."
    ],
    answer: 0
  },
  {
    question: "Como proceder diante de um motociclista acidentado?",
    options: [
      "Tirar o capacete imediatamente.",
      "Não retirar o capacete e esperar o resgate.",
      "Mover o motociclista para o passeio.",
      "Dar água para passar o susto."
    ],
    answer: 1
  },
  {
    question: "Em sinistro com derramamento de combustível, deve-se:",
    options: [
      "Cobrir com terra, areia ou cal.",
      "Lavar a pista.",
      "Cobrir com lona plástica.",
      "Espalhar o combustível."
    ],
    answer: 0
  },
  {
    question: "Deve receber primeiros socorros primeiro a vítima que estiver:",
    options: [
      "Gritando com dor.",
      "Com muitas fraturas.",
      "Presa às ferragens.",
      "Respirando com dificuldade."
    ],
    answer: 3
  },
  {
    question: "RCP funciona melhor se feita por:",
    options: [
      "3 pessoas.",
      "1 pessoa.",
      "4 pessoas.",
      "2 pessoas."
    ],
    answer: 3
  },
  {
    question: "Na presença de sangramento abundante, o cuidado indicado é:",
    options: [
      "Usar garrote.",
      "Compressão com pano limpo ou gaze.",
      "Dar líquidos.",
      "Água oxigenada."
    ],
    answer: 1
  },
  {
    question: "Manter cabeça abaixo do corpo é socorro para vítima:",
    options: [
      "Em estado de choque.",
      "Com ferimentos na cabeça.",
      "Com pupilas dilatadas.",
      "Com temperatura baixa."
    ],
    answer: 0
  },
  {
    question: "Massagem cardíaca deve ser feita cerca de quantas vezes por minuto:",
    options: [
      "12 a 15 vezes.",
      "30 a 60 vezes.",
      "100 vezes.",
      "60 a 120 vezes."
    ],
    answer: 2
  },
  {
    question: "Relação correta dos números de emergência: 191, 190, 193, 192",
    options: [
      "PM, SAMU, Bombeiros, PRF.",
      "PRF, PM, Bombeiros, SAMU.",
      "Bombeiros, SAMU, PRF, PM.",
      "PRF, Bombeiros, SAMU, PM."
    ],
    answer: 1
  },
  {
    question: "Não é correto com vítima em estado de choque:",
    options: [
      "Deitar com pernas elevadas.",
      "Afrouxar roupas.",
      "Controlar respiração e ventilação.",
      "Dar líquidos à vítima inconsciente."
    ],
    answer: 3
  },
  {
    question: "Se não houver resgate, o socorrista deve primeiro:",
    options: [
      "Lesões contundentes.",
      "Queimaduras de primeiro grau.",
      "Hemorragias.",
      "Sinalizar o local."
    ],
    answer: 3
  },
  {
    question: "Acidente é evitável quando:",
    options: [
      "Condutor não fez o possível para evitar.",
      "Colidiu com velocidade reduzida.",
      "Condições não interferiram.",
      "Fez tudo que era possível."
    ],
    answer: 0
  },
  {
    question: "“Não entre em pânico” refere-se à:",
    options: [
      "Direção defensiva.",
      "Direção preventiva.",
      "Prestação de socorros.",
      "Acionamento de recursos."
    ],
    answer: 2
  },
  {
    question: "Manter tráfego fluindo em acidente ajuda principalmente a:",
    options: [
      "Não atrapalhar usuários da via.",
      "Evitar congestionamento.",
      "Não atrasar motoristas.",
      "Facilitar chegada do socorro."
    ],
    answer: 3
  },
  {
    question: "Sem socorrista, deve-se primeiro verificar se:",
    options: [
      "Há obstrução de vias aéreas.",
      "Há fraturas.",
      "Consegue andar.",
      "Há sangramento abundante."
    ],
    answer: 0
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
