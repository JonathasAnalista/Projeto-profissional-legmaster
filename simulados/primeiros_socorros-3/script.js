
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
    question: "Em acidente envolvendo motociclista, o procedimento adequado é:",
    options: [
      "Remover o capacete somente em caso de muita dor.",
      "Mudar a posição do motociclista para acomodá-lo melhor.",
      "Remover o capacete para facilitar a respiração.",
      "Aguardar socorro especializado e não remover o capacete."
    ],
    answer: 3
  },
  {
    question: "Em caso de acidente com veículo transportando produtos inflamáveis, o procedimento correto do condutor é:",
    options: [
      "Providenciar, o mais rápido possível, o escoamento do produto.",
      "Sinalizar o local com tochas de fogo.",
      "Efetuar, primeiramente a limpeza do veículo.",
      "Isolar o local."
    ],
    answer: 3
  },
  {
    question: "Em caso de acidente:",
    options: [
      "É obrigação de todos sempre prestar auxílio à vítima, mesmo que não saiba fazer.",
      "É obrigação de todos prestarem auxílio, desde que não haja risco pessoal.",
      "É obrigação de todos prestarem auxílio, mesmo com risco pessoal.",
      "Não existe obrigação legal em socorrer."
    ],
    answer: 1
  },
  {
    question: "Em caso de ferimentos nos olhos, não se deve:",
    options: [
      "Lavar o olho com água limpa.",
      "Retirar corpos estranhos encravados.",
      "Cobrir o olho ferido com gaze ou pano limpo.",
      "Pedir que a vítima feche o outro olho."
    ],
    answer: 1
  },
  {
    question: "O condutor que envolver-se em acidente grave poderá ser submetido:",
    options: [
      "ao exame toxicológico.",
      "à frequência obrigatória em curso de reciclagem.",
      "ao exame de direção veicular.",
      "aos exames médicos e psicológicos."
    ],
    answer: 1
  },
  {
    question: "Em caso de primeiros socorros, o colar cervical serve para:",
    options: [
      "Liberar o movimento cervical.",
      "Limitar os movimentos das pernas.",
      "Imobilizar a coluna cervical.",
      "Estancar hemorragia."
    ],
    answer: 2
  },
  {
    question: "Em qual situação devemos retirar uma vítima do veículo, antes da chegada do socorro profissional?",
    options: [
      "Em qualquer situação.",
      "Quando for conveniente.",
      "Quando houver perigo imediato de incêndio ou outros riscos evidentes.",
      "Para liberar a pista."
    ],
    answer: 2
  },
  {
    question: "Em um acidente a vítima está dentro do veículo que tem fumaça em seu interior. Nesta situação, o que fazer após chegar à conclusão de que não há risco pessoal?",
    options: [
      "Retirar a pessoa de dentro do carro, após imobilizá-la da melhor forma possível.",
      "Deixar a vítima sentada dentro do veículo e oferecer muito leite a ela, aguardando a dissipação da fumaça.",
      "Afastar-se rapidamente chamando o resgate.",
      "Jogar água no veículo e até na vítima para resfriar o local."
    ],
    answer: 0
  },
  {
    question: "Em que situação e como você deve soltar o cinto de segurança de uma vítima que sofreu um acidente?",
    options: [
      "Quando o cinto de segurança dificultar a respiração, soltar sem movimentar o corpo da vítima.",
      "Para liberar os movimentos da vítima.",
      "Quando estiver muito calor.",
      "Em hipótese alguma deve-se retirar o cinto."
    ],
    answer: 0
  },
  {
    question: "Em que situação o socorrista deve usar a pressão digital na artéria?",
    options: [
      "Em pequenos sangramentos.",
      "Nas entorses.",
      "Nas contusões.",
      "Nos grandes sangramentos."
    ],
    answer: 0
  },
  {
    question: "Em relação às condições adotadas durante o dia, a distância para sinalizar o local de um acidente à noite ou sob chuva deverá ser:",
    options: [
      "Corresponde a mais 10 passos.",
      "A mesma.",
      "Dobrada e com a utilização de dispositivos luminosos.",
      "Com chuva contamos no máximo 40 passos."
    ],
    answer: 2
  },
  {
    question: "Em um acidente com vítimas, quando possível, devemos manter o tráfego fluindo por vários motivos. Para a vítima, o motivo mais importante é:",
    options: [
      "Não atrapalhar os usuários da via.",
      "Não congestionar a via.",
      "Não atrasar os compromissos dos motoristas.",
      "Possibilitar a chegada mais rápida de uma equipe de socorro."
    ],
    answer: 3
  },
  {
    question: "Em um acidente de trânsito em que haja fios de rede elétrica sobre o veículo, você deve:",
    options: [
      "Instruir os ocupantes para que saiam do veículo.",
      "Tentar remover os fios com pedaço de pau.",
      "Instruir os ocupantes para que permaneçam dentro do veículo e chamar o resgate.",
      "Retirar os ocupantes do veículo imediatamente."
    ],
    answer: 2
  },
  {
    question: "Em um acidente de trânsito, deverá receber os primeiros socorros, primeiramente, a vítima que estiver:",
    options: [
      "Gritando com muita dor.",
      "Com muitas fraturas.",
      "Presa às ferragens.",
      "Respirando com dificuldade."
    ],
    answer: 3
  },
  {
    question: "Em um acidente, deve-se evitar atitudes que possam colocar a vítima em perigo ocasionando maiores danos. Qual das atitudes está incorreta?",
    options: [
      "Levar a vítima imediatamente ao hospital, sem perder mais tempo.",
      "Verificar sua respiração, pulsação e sangramento.",
      "Sinalizar o local para evitar outros acidentes.",
      "Prestar auxílio e chamar resgate."
    ],
    answer: 0
  },
  {
    question: "Em um acidente, vítima inconsciente e identificada uma parada respiratória e cardíaca, exige-se do socorrista:",
    options: [
      "Fazer respiração boca-a-boca.",
      "Movimentar a vítima para que a mesma recupere a consciência.",
      "Fazer ressuscitação cardiopulmonar.",
      "Treinamento prático e específico."
    ],
    answer: 2
  },
  {
    question: "Embora cada acidente tenha suas circunstâncias peculiares, algumas medidas devem ser tomadas pelo socorrista, dentre elas:",
    options: [
      "Aliviar a dor, oferecendo analgésico à vítima.",
      "Transportar a vítima em qualquer situação.",
      "Oferecer líquido à vítima.",
      "Assumir a situação de emergência."
    ],
    answer: 3
  },
  {
    question: "Enquanto se aguarda socorro especializado para atender a vítima que apresenta queimaduras, o procedimento adequado consiste em aplicar:",
    options: [
      "Algodão embebido em álcool.",
      "Algodão embebido em óleo mineral.",
      "Pomada curativa e anestésica.",
      "Compressas de água fria com pano limpo."
    ],
    answer: 3
  },
  {
    question: "Entre as regras fundamentais para sinalizar o local do acidente de trânsito, destaca-se a de:",
    options: [
      "Permitir que pessoas parem na pista.",
      "Não é necessário sinalizar nos dois sentidos.",
      "Iniciar a sinalização num ponto em que os condutores ainda não possam ver o acidente.",
      "Manter o tráfego parado nos dois sentidos."
    ],
    answer: 2
  },
  {
    question: "Deixar o condutor de prestar socorro à vítima de sinistro de trânsito quando solicitado pela autoridade de trânsito e seus agentes é infração:",
    options: [
      "Gravíssima.",
      "Média.",
      "Leve.",
      "Grave."
    ],
    answer: 3
  },
  {
    question: "Deixar o condutor envolvido em sinistro de trânsito de ajudar ou providenciar ajudar à vítima, é infração:",
    options: [
      "Gravíssima X5 e suspensão do direito de dirigir.",
      "Média.",
      "Leve.",
      "Grave."
    ],
    answer: 0
  },
  {
    question: "Indique abaixo uma das técnicas que podem ser adotadas para conter uma hemorragia externa quando não for possível a presença do resgate:",
    options: [
      "Fazer compressão no ferimento, utilizando gaze ou pano limpo.",
      "Aplicar torniquete.",
      "Fazer compressão utilizando as mãos diretamente no ferimento.",
      "Movimentar a vítima imediatamente."
    ],
    answer: 0
  },
  {
    question: "O trabalho de remoção de um acidentado deve ser feito por pessoal especializado, com equipamentos apropriados. Mas se numa emergência, esse transporte precisar ser feito por você, qual procedimento pode ser considerado inadequado?",
    options: [
      "Verificar se há deformações na coluna vertebral.",
      "Remover a vítima do local de maneira mais rápida possível, pois esta necessita de atendimento urgente.",
      "Improvisar uma marca para transporte do acidentado.",
      "Evitar freadas bruscas e excesso de velocidade que podem agravar o estado da vítima."
    ],
    answer: 1
  },
  {
    question: "Localize a metade inferior do osso esterno, subindo dois dedos a partir do início da costela. Esse é um dos procedimentos para executar a massagem cardíaca que deve ser repetida a cerca de ___ por minuto:",
    options: [
      "12 a 15 vezes.",
      "30 a 60 vezes.",
      "100 vezes.",
      "60 a 120 vezes."
    ],
    answer: 2
  },
  {
    question: "Manter a cabeça mais baixa que o corpo é socorro prestado à vítima:",
    options: [
      "Em estado de choque.",
      "Com ferimentos na cabeça.",
      "Com as pupilas dilatadas.",
      "Com temperatura baixa."
    ],
    answer: 0
  },
  {
    question: "Ao se deparar com um acidente num local onde o socorro seja prestado somente pelo Corpo de Bombeiros, você deverá ligar para o número:",
    options: [
      "191.",
      "193.",
      "190.",
      "181."
    ],
    answer: 1
  },
  {
    question: "Na presença de sangramento abundante, qual o cuidado indicado?",
    options: [
      "Garrotear (usar garrote).",
      "Fazer compressão no local do sangramento.",
      "Dar bastante líquido para a pessoa ir tomando.",
      "Jogar bastante água oxigenada para coagular e limpar o ferimento."
    ],
    answer: 1
  },
  {
    question: "Não constitui medida básica para prestar assistência à vítima de acidente, após ter sinalizado o local:",
    options: [
      "Verificar, primeiramente, os sinais vitais.",
      "Determinar que o acidentado busque socorro.",
      "Assumir a situação.",
      "Proteger o acidentado."
    ],
    answer: 1
  },
  {
    question: "No sinistro onde uma das vítimas tem uma parte do seu corpo amputada, o que fazer?",
    options: [
      "Colocar a parte amputada dentro de 2 sacos plásticos e depois colocar em um recipiente com gelo",
      "Colocar a parte amputada dentro de 1 sacos plásticos e depois colocar em um recipiente com gelo",
      "Colocar a parte amputada dentro de 3 sacos plásticos e depois colocar em um recipiente com gelo",
      "Colocar a parte amputada dentro de pelo menos 4 sacos plásticos e depois colocar em um recipiente com gelo"
    ],
    answer: 0
  },
  {
    question: "Num acidente observamos que o ferimento de uma vítima esguicha sangue no mesmo ritmo de sua pulsação. Conclui-se que ocorreu o corte de:",
    options: [
      "Uma veia.",
      "Uma artéria.",
      "Um músculo.",
      "Um nervo."
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
