
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
    question: "NÃO é correto adotar a seguinte conduta para imobilização em caso de fratura:",
    options: [
      "Antes de imobilizar, puxar o membro colocando-o na posição natural.",
      "Aplicar panos limpos sobre as fraturas expostas.",
      "Manter a vítima deitada.",
      "O comprimento de uma tala deverá ser suficiente para imobilizar, também, a articulação."
    ],
    answer: 0
  },
  {
    question: "Em caso de acidente:",
    options: [
      "É obrigação de todos retirar, imediatamente, o veículo do local.",
      "Não existe obrigação legal em socorrer.",
      "É obrigação de todos prestar ou providenciar auxílio, desde que não corra risco pessoal.",
      "A obrigação de socorrer é apenas do causador do acidente."
    ],
    answer: 2
  },
  {
    question: "Embora cada acidente tenha suas particularidades, algumas medidas são padrão, dentre elas podemos destacar:",
    options: [
      "Aliviar a dor, oferecendo analgésico à vítima.",
      "Acionar o socorro especializado.",
      "Transportar a vítima em qualquer situação.",
      "Oferecer líquido à vítima."
    ],
    answer: 1
  },
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
    question: "A vítima apresenta uma fratura exposta. Nessa situação o socorrista deve:",
    options: [
      "Puxar o membro para que o osso volte para o lugar",
      "Observar se a vítima respira, imobilizar o membro e acalmar a vítima.",
      "Fazer torniquete no membro afetado.",
      "Empurrar o osso para sua posição normal."
    ],
    answer: 1
  },
  {
    question: "Não sendo possível a chegada imediata do resgate, o cuidado indicado na presença de sangramento abundante é:",
    options: [
      "Dar bastante líquido para a pessoa ir tomando.",
      "Fazer compressão no local do sangramento.",
      "Jogar bastante água oxigenada para coagular e limpar o ferimento.",
      "Deixar o sangramento parar sozinho."
    ],
    answer: 1
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
    question: "Uma pessoa bateu a cabeça, perdeu a consciência e depois acordou dizendo que está bem. O que fazer?",
    options: [
      "Neste caso, não há necessidade de ir ao hospital.",
      "Recomendar que a pessoa fique acordada durante 24 horas.",
      "Sempre levar a pessoa ao hospital.",
      "Levar ao hospital somente se tiver que fazer curativo."
    ],
    answer: 2
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
    question: "Agir com prudência, respeitar os limites de seu conhecimento, seguir os protocolos estabelecidos, prevenir e evitar danos maiores são, entre outras, ações do:",
    options: [
      "Ciclista.",
      "Socorrista.",
      "Pedestre.",
      "Passageiro."
    ],
    answer: 1
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
    question: "Não constitui procedimento correto com uma vítima em estado de choque:",
    options: [
      "Manter a vítima deitada com as pernas elevadas, se não houver fratura dos membros inferiores.",
      "Afrouxar suas roupas no pescoço, peito e cintura.",
      "Controlar a respiração e manter a boa ventilação.",
      "Dar bastante líquido à vítima inconsciente, que vomitou."
    ],
    answer: 3
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
    question: "Nas hemorragias externas devemos:",
    options: [
      "Fazer torniquete para conter o sangramento.",
      "Dar líquido para a vítima ingerir, caso ela peça.",
      "Evitar contato direto com o sangue da vítima.",
      "Movimentar a vítima."
    ],
    answer: 2
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
    question: "Conter o sangramento com gaze estéril, sem aplicar pressão direta e chamar o resgate é procedimento adequado em caso de:",
    options: [
      "Parada respiratória.",
      "Parada cardíaca.",
      "Acidente em que a vítima apresenta fratura aberta com sangramento.",
      "Crise convulsiva."
    ],
    answer: 2
  },
  {
    question: "Se uma vítima de acidente pedir água para beber, você deve:",
    options: [
      "Mantê-la em jejum.",
      "Dar bastante líquido para hidratar a vítima.",
      "Deixá-la beber, apenas o que quiser.",
      "Dar leite ou líquido adocicados, de preferência."
    ],
    answer: 0
  },
  {
    question: "Ao transportar uma vítima é incorreto:",
    options: [
      "Manter a vítima em jejum.",
      "Transportar a vítima imobilizada.",
      "Manter, a qualquer custo, a vítima acordada.",
      "Manter as vias aéreas livres, desobstruídas."
    ],
    answer: 2
  },
  {
    question: "Não constitui medida básica para prestar assistência à vítima de acidente, após ter sinalizado o local:",
    options: [
      "Assumir a situação.",
      "Proteger o acidentado.",
      "Verificar os sinais vitais.",
      "Determinar que o acidentado busque socorro."
    ],
    answer: 3
  },
  {
    question: "O procedimento correto, na impossibilidade da presença do socorro especializado, quando a vítima apresenta objeto empalado no ferimento, é:",
    options: [
      "Proteger o ferimento com bandagens e retirar o objeto.",
      "Proteger o ferimento com bandagens e não retirar o objeto.",
      "Remover o objeto empalado e controlar o sangramento.",
      "Remover o objeto empalado e lavar o ferimento com água e sabão."
    ],
    answer: 1
  },
  {
    question: "Vítima que usava cinto de segurança está inconsciente dentro do veículo. Nessa situação você deve:",
    options: [
      "Sinalizar o local e chamar o resgate.",
      "Retirar o cinto de segurança.",
      "Retirar a vítima do veículo e deitá-la.",
      "Se for banco reclinável, incliná-lo o máximo possível."
    ],
    answer: 0
  },
  {
    question: "Não constitui procedimento correto diante de acidente de trânsito, com vítima:",
    options: [
      "Arrastar a vítima do local do acidente.",
      "Sinalizar o local, para evitar novos acidentes.",
      "Acionar o pisca-alerta dos veículos próximo ao local.",
      "Definir a melhor colocação do triângulo."
    ],
    answer: 0
  },
  {
    question: "Para evitar agravamento do acidente de trânsito como novas colisões, atropelamento ou incêndios, deve-se, de imediato, tomar a seguinte providência:",
    options: [
      "Sinalizar o local.",
      "Retirar a vítima do veículo.",
      "Retirar o veículo do local.",
      "Verificar a situação das vítimas."
    ],
    answer: 0
  },
  {
    question: "São serviços gratuitos de atendimento às emergências que podem ser acionados em caso de acidente:",
    options: [
      "Corpo de Bombeiros, reboque, Defesa Civil.",
      "Corpo de Bombeiros, DER, Polícia Militar.",
      "Corpo de Bombeiros, plano de saúde, hospital mais próximo.",
      "Corpo de Bombeiros, SAMU, Polícia Militar."
    ],
    answer: 3
  },
  {
    question: "A convicção nas ações a serem realizadas pelo socorrista, no local do acidente, além de manter a calma e garantir a segurança, consiste em:",
    options: [
      "Retirar o veículo do local, sinalizar a pista.",
      "Retirar a vítima do veículo, sinalizar o local.",
      "Acionar o resgate, controlar a situação, evitar os riscos secundários.",
      "Medir a pressão arterial e dar líquido à vítima."
    ],
    answer: 2
  },
  {
    question: "Por que é importante para o condutor ter conhecimentos de Primeiros Socorros?",
    options: [
      "Para se automedicar em caso de acidente.",
      "Para saber o que fazer em caso de acidente de trânsito, protegendo as vítimas contra males maiores.",
      "Para dispensar o socorro médico em caso de acidentes de trânsito.",
      "Alternativas '1' e '3' estão corretas."
    ],
    answer: 1
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
    question: "Uma vítima de acidente de trânsito está gritando, com muita dor. Nessa situação, você deve:",
    options: [
      "Dar remédio para dor.",
      "Fazer massagem no local da dor.",
      "Fazer compressas quentes no local da dor.",
      "Tranquilizá-la enquanto aguarda a chegada do resgate."
    ],
    answer: 3
  },
  {
    question: "Em acidentes de trânsito: afastar os curiosos, desligar o motor do veículo envolvido e orientar para que não fumem no local – são ações do socorrista na possibilidade de ocorrência de:",
    options: [
      "Atropelamento.",
      "Derramamento de combustível.",
      "Obstáculo na pista.",
      "Cabos de eletricidade caindo no local."
    ],
    answer: 1
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
