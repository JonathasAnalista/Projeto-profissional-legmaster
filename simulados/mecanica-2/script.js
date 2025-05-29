
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
    "question": "O termômetro é utilizado para indicar:",
    "options": [
      "Alterações na composição do fluido de freio.",
      "A temperatura do líquido de arrefecimento.",
      "A temperatura no interior do veículo.",
      "A temperatura no exterior do veículo."
    ],
    "answer": 1
  },
  {
    "question": "A baixa calibragem dos pneus:",
    "options": [
      "Aumenta a sua vida útil.",
      "Facilita as manobras.",
      "Traz maior conforto aos ocupantes do veículo.",
      "Causa seu desgaste prematuro."
    ],
    "answer": 3
  },
  {
    "question": "A bobina tem a função de:",
    "options": [
      "Condensar a corrente elétrica.",
      "Diminuir a tensão da corrente elétrica.",
      "Transformar a corrente elétrica de baixa para alta tensão.",
      "Distribuir a corrente elétrica."
    ],
    "answer": 2
  },
  {
    "question": "A circulação da água entre o motor e o radiador é forçada:",
    "options": [
      "Pelo carburador.",
      "Pela bomba d´água.",
      "Pela bomba de óleo.",
      "Pela roda d´água."
    ],
    "answer": 1
  },
  {
    "question": "A energia mecânica necessária para movimentar um veículo é gerada pelo:",
    "options": [
      "Motor.",
      "Sistema de transmissão.",
      "Motor de arranque.",
      "Bateria."
    ],
    "answer": 0
  },
  {
    "question": "A estabilidade do veículo também está condicionada aos pneus. O condutor deve conferir regularmente:",
    "options": [
      "A calibragem dos pneus.",
      "O desgaste dos pneus.",
      "A existência de possíveis deformações na carcaça.",
      "Todas acima estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "A finalidade da sangria no sistema de freios é:",
    "options": [
      "Eliminar bolhas de ar do sistema de freios.",
      "Melhorar a sua lubrificação.",
      "Manter a altura do pedal constante.",
      "Aumentar a pressão do pedal de freio."
    ],
    "answer": 0
  },
  {
    "question": "A finalidade do carburador é:",
    "options": [
      "Bombear o combustível para o motor.",
      "Pressionar o ar para a câmara de combustão.",
      "Manter a temperatura do ar limpo e aquecido.",
      "Misturar o ar com o combustível na proporção recomendada."
    ],
    "answer": 3
  },
  {
    "question": "A função básica do sistema de suspensão nos veículos automotores é:",
    "options": [
      "Absorver os balanços do veículo, somente quando está fazendo uma curva.",
      "Melhorar o controle do carro em pistas escorregadias.",
      "Absorver os choques provocados pelo piso irregular com o veículo em movimento.",
      "Absorver impactos no momento de um acidente."
    ],
    "answer": 2
  },
  {
    "question": "A finalidade da válvula termostática é:",
    "options": [
      "Diminuir o fluxo da água.",
      "Impedir a passagem da água do radiador para o carburador.",
      "Indicar a temperatura quando o fluxo de água diminuir.",
      "Permitir a passagem de água do motor para o radiador quando a temperatura ideal for atingida."
    ],
    "answer": 3
  },
  {
    "question": "A função do sistema de freios montados nos veículos é:",
    "options": [
      "Provocar a moderação da marcha, a redução de velocidade e a imobilização do veículo.",
      "Distribuir de forma homogênea a rotação do motor para as rodas.",
      "Aumentar o atrito entre as rodas, travando-as, ao ser acionado.",
      "Parar e acelerar o veículo."
    ],
    "answer": 0
  },
  {
    "question": "A indústria automobilística está em constante aperfeiçoamento nos veículos modernos. A direção que ajuda a diminuir o esforço físico é:",
    "options": [
      "Dinâmica.",
      "Normal.",
      "Elétrica.",
      "Mecânica."
    ],
    "answer": 2
  },
  {
    "question": "A injeção eletrônica é uma das inovações da década de 90 e veio para substituir o “velho” carburador. Sobre ela, marque a incorreta:",
    "options": [
      "Sua manutenção deve ser feita a cada 20.000 km.",
      "Por ser um componente eletrônico, dispensa manutenção periódica.",
      "Os bicos injetores são os elementos que mais precisam de reparos.",
      "Agrega mais eficiência ao sistema de alimentação."
    ],
    "answer": 1
  },
  {
    "question": "A luz do freio do seu veículo está apresentando problema. Nessa situação, você:",
    "options": [
      "Sai assim mesmo.",
      "Procura imediatamente um autoelétrico.",
      "Sinaliza de outra forma.",
      "Desconsidera o fato, pois o freio está normal."
    ],
    "answer": 1
  },
  {
    "question": "A quilometragem percorrida pelo veículo é indicada pelo:",
    "options": [
      "Odômetro.",
      "Velocímetro.",
      "Manômetro.",
      "Conta-giros."
    ],
    "answer": 0
  },
  {
    "question": "A verificação de eventual complementação do nível de água do radiador deve ser feita:",
    "options": [
      "Em qualquer hora do dia.",
      "Com motor quente.",
      "Com o motor frio.",
      "No final de sua jornada diária."
    ],
    "answer": 2
  },
  {
    "question": "Absorve os vapores dos gases emitidos pelo tanque de combustível:",
    "options": [
      "Injeção eletrônica.",
      "Cânister.",
      "Canalizador.",
      "Todas as afirmativas acima."
    ],
    "answer": 1
  },
  {
    "question": "Airbag é um equipamento obrigatório para prevenir:",
    "options": [
      "Superaquecimento do motor.",
      "Problemas de postura.",
      "Ferimentos graves em casos de colisão.",
      "Falhas eletrônicas."
    ],
    "answer": 2
  },
  {
    "question": "Amperímetro, odômetro, botão de luzes e do limpador de para-brisas são:",
    "options": [
      "Instrumentos do painel.",
      "Órgãos auxiliares do motor.",
      "Equipamentos obrigatórios.",
      "Componentes externos do painel."
    ],
    "answer": 0
  },
  {
    "question": "Antes de efetuar uma viagem, o condutor deverá verificar os itens:",
    "options": [
      "Luzes indicadoras de direção e luzes de freio.",
      "Nível de óleo lubrificante e água do radiador.",
      "Palhetas do limpador de para-brisas e funcionamento dos faróis.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "Ao acionar a chave de ignição e o motor do veículo não dar sinal de partida, o defeito pode ser:",
    "options": [
      "Falta de combustível.",
      "Falta de água no radiador.",
      "Na bateria ou motor de arranque.",
      "Entupimento no carburador."
    ],
    "answer": 2
  },
  {
    "question": "Ao utilizar o extintor de incêndio de um veículo, o jato de seu conteúdo deve ser:",
    "options": [
      "Na direção do tanque.",
      "Dirigido para a base das chamas, com movimentos horizontais na forma de um leque.",
      "Na direção somente das chamas.",
      "Em qualquer direção."
    ],
    "answer": 1
  },
  {
    "question": "Ao utilizar um veículo com motor ainda frio, deve-se:",
    "options": [
      "Pressionar o acelerador até o assoalho do veículo antes de dar a partida.",
      "Acelerar bastante para atingir a temperatura ideal.",
      "Evitar acelerações bruscas até o motor atingir a temperatura ideal.",
      "Aguardar a temperatura ideal dos pneus antes de sair."
    ],
    "answer": 2
  },
  {
    "question": "As duas válvulas permanecem fechadas em qual(is) dos tempos do motor?",
    "options": [
      "Admissão.",
      "Explosão.",
      "Compressão.",
      "As afirmativas ‘B’ e ‘C’ estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "Assinale a alternativa correta sobre a Luz Indicadora de Direção (seta):",
    "options": [
      "É a luz do veículo destinada a aumentar a iluminação da via em caso de neblina, chuva forte ou nuvens de pó.",
      "É a luz do veículo destinada a indicar aos demais usuários da via que o condutor tem propósito de mudar de direção para a direita ou para a esquerda.",
      "É a luz que se encontram atrás do veículo, que o condutor está aplicando o freio de serviço.",
      "É o facho de luz do veículo destinada a iluminação a via até uma grande distância do veículo."
    ],
    "answer": 1
  },
  {
    "question": "As peças que compõem o motor necessitam de lubrificação para:",
    "options": [
      "O veículo funcionar facilmente de manhã.",
      "Engatar melhor as marchas.",
      "Aumentar a sua potência.",
      "Reduzir seu desgaste e aquecimento."
    ],
    "answer": 3
  },
  {
    "question": "As motocicletas, em sua maioria, são equipadas com espelhos convexos. Se você olhar um veículo através de um espelho convexo, a posição correta deste veículo é:",
    "options": [
      "Mais próxima do que aquela em que você pensa que ele está.",
      "Não há distinção entre espelho convexo e os demais.",
      "Mais distante do que aquela em que você pensa que ele está.",
      "Distância real."
    ],
    "answer": 0
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": [
      "Amperímetro: indica o nível da água no radiador.",
      "Odômetro: indica o nível de combustível.",
      "Tacógrafo: registra a pressão dos pneus.",
      "Manômetro: indica a pressão do óleo do motor."
    ],
    "answer": 3
  },
  {
    "question": "Atualmente são adotados no Brasil três tipos de cinto de segurança. Qual deles oferece maior proteção?",
    "options": [
      "O transversal.",
      "O abdominal.",
      "O de três pontos.",
      "Todos os cintos oferecem proteção com a mesma intensidade."
    ],
    "answer": 2
  },
  {
    "question": "Banda de rodagem, carcaça de lonas, talões e flancos fazem parte do:",
    "options": [
      "Motor.",
      "Freio.",
      "Roda.",
      "Pneu."
    ],
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
