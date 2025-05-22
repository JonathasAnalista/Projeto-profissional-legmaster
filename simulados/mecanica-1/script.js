const questions = [
  {
    question: "O sistema que tem por função ligar e desligar a força motriz do motor da parte restante da transmissão é o(a):",
    options: ["sistema de freios", "correia transmissora", "arrefecimento", "embreagem"],
    answer: 3
  },
  {
    question: "A quilometragem percorrida pelo veículo é indicada pelo:",
    options: ["termômetro", "velocímetro", "hodômetro", "conta-giros"],
    answer: 2
  },
  {
    question: "O conjunto que atua nas curvas fazendo com que uma roda gire mais ou menos do que a outra, chama-se:",
    options: ["diferencial", "árvore de transmissão", "embreagem", "caixa de câmbio"],
    answer: 0
  },
  {
    question: "O distribuidor faz parte do sistema:",
    options: ["elétrico", "arrefecimento", "transmissão", "direção"],
    answer: 0
  },
  {
    question: "Qual a função da bateria no motor do carro (sistema elétrico)?",
    options: ["armazenar a energia", "fazer o carro funcionar", "gerar energia", "dar partida no motor"],
    answer: 0
  },
  {
    question: "A energia necessária para alimentar o motor de um veículo é gerada através:",
    options: ["Do Motor de partida", "Da bateria", "Da bomba de combustível", "Do alternador"],
    answer: 3
  },
  {
    question: "Sistema responsável por controlar manter a temperatura do motor em boas condições é o sistema de:",
    options: ["arrefecimento", "resfriamento", "admissão e escape", "lubrificante"],
    answer: 0
  },
  {
    question: "A finalidade da sangria no sistema de freios é:",
    options: ["Aumentar a pressão do pedal de freio.", "Melhorar a sua lubrificação.", "Manter a altura do pedal constante.", "Eliminar bolhas de ar do sistema de freios"],
    answer: 3
  },
  {
    question: "O aparecimento de trepidação sentida no volante de direção sempre que o veículo alcançar uma determinada faixa de velocidade é sinal da necessidade de?",
    options: ["Balanceamento das rodas.", "Troca do fluído de freios.", "Lubrificação da caixa de direção.", "Verificação dos valores de cambagem"],
    answer: 0
  },
  {
    question: "Qual a peça mais pesada do motor:",
    options: ["bloco do motor", "pistão", "cárter", "eixo de manivelas"],
    answer: 0
  },
  {
    question: "A função básica do sistema de suspensão nos veículos automotores é:",
    options: ["Absorver os balanços do veículo, somente quando está fazendo uma curva.", "Melhorar o controle do carro em pistas escorregadias.", "Absorver os choques provocados pelo piso irregular com o veículo em movimento.", "Absorver impactos no momento de um acidente."],
    answer: 2
  },
  {
    question: "No motor a combustão, a mistura ar-combustível é lançada dentro do cilindro. Qual tipo de motor dispensa distribuidor, velas e bobina?",
    options: ["A álcool.", "A diesel.", "A Gás Natural Veicular.", "À gasolina"],
    answer: 1
  },
  {
    question: "Banda de rodagem, carcaça de lonas e flancos fazem parte do:",
    options: ["freio", "motor", "roda", "pneu"],
    answer: 3
  },
  {
    question: "Para o início do funcionamento do motor de um veículo é necessária energia elétrica para acionar o:",
    options: ["alternador ou motor de partida", "virabrequim e cilindros", "motor de arranque ou de partida", "volante do pistão motor"],
    answer: 2
  },
  {
    question: "Quais os sistemas que compõe um veículo:",
    options: ["alimentação, suspensão", "Freio, direção, lubrificação", "arrefecimento, elétrico, roda, pneu", "Todos acima estão corretas"],
    answer: 3
  },
  {
    question: "Quando o filtro de ar resseca ou fica muito sujo o que fazer?",
    options: ["Hidratar com água morna", "Deve substituí-lo por um novo", "Parar no posto para bater ar", "Assoprar as bordas para limpar"],
    answer: 1
  },
  {
    question: "Amperímetro, hodômetro, botão de luzes e do limpador de para-brisas são:",
    options: ["Instrumentos do painel.", "Órgãos auxiliares do motor.", "Equipamentos obrigatórios.", "Componentes externos do painel"],
    answer: 0
  },
  {
    question: "A baixa calibragem dos pneus:",
    options: ["aumentar sua vida útil", "balanceamento nas rodas", "facilita as manobras", "causa seu desgaste prematuro"],
    answer: 3
  },
  {
    question: "Os quatro tempos de um motor de combustão interna são:",
    options: ["alimentação, injeção, ignição e explosão", "ignição, escapamento, compressão e alimentação", "admissão, compressão, explosão e escapamento", "admissão, lubrificação, explosão e escapamento"],
    answer: 2
  },
  {
    question: "A estabilidade de um veículo em deslocamento é função dos sistemas de:",
    options: ["transmissão e de lubrificação", "alimentação e ignição", "freios, transmissão e pneu", "direção e suspensão"],
    answer: 3
  },
  {
    question: "Qual a função da válvula de expansão (admissão)?",
    options: ["permitir que a mistura AR e combustível se inflama", "permitir que os gases sejam eliminados", "permitir que ar e combustível sejam comprimidos", "permitir que a mistura ar e combustível seja admitido dentro do cilindro"],
    answer: 3
  },
  {
    question: "A energia mecânica dos motores chega nas rodas através do sistema de:",
    options: ["carburação", "ventilação", "rodagem", "transmissão"],
    answer: 3
  },
  {
    question: "Evita o desgaste excessivo do motor (diminui o atrito das peças móveis do motor):",
    options: ["Sistema de ignição.", "Sistema de arrefecimento.", "Sistema de lubrificação.", "Sistema elétrico"],
    answer: 2
  },
  {
    question: "O instrumento do painel que indica a velocidade desenvolvida pelo veículo é o:",
    options: ["Hodômetro.", "Tacógrafo.", "Velocímetro.", "Manômetro."],
    answer: 2
  },
  {
    question: "Para que ocorra a combustão interna em um motor são necessários os seguintes elementos:",
    options: ["Combustível e água.", "Combustível e vapor de água.", "Ar e combustível.", "Água e Nitrogênio."],
    answer: 2
  },
  {
    question: "A bobina tem a função de:",
    options: ["Condensar a corrente elétrica.", "Diminuir a tensão da corrente elétrica.", "Transformar a corrente elétrica de baixa para alta tensão.", "Distribuir a corrente elétrica."],
    answer: 2
  },
  {
    question: "A finalidade da válvula termostática é:",
    options: ["Diminuir o fluxo da água.", "Impedir a passagem da água do radiador para o carburador.", "Indicar a temperatura quando o fluxo de água diminuir.", "Permitir a passagem de água do motor para o radiador quando a temperatura ideal for atingida."],
    answer: 3
  },
  {
    question: "Ao acionar a chave de ignição e o motor do veículo não dar sinal de partida, o defeito pode ser:",
    options: ["Falta de combustível.", "Falta de água no radiador.", "Na bateria ou motor de arranque.", "Entupimento no carburador."],
    answer: 2
  },
  {
    question: "A finalidade da suspensão e dos amortecedores é:",
    options: ["Manter as características da fábrica do veículo.", "Contribuir para o desgaste prematuro dos pneus.", "Causar a perda de controle do veículo.", "Manter a estabilidade do veículo"],
    answer: 3
  },
  {
    question: "Dispositivo destinado ao controle de ruído do motor é equipamento obrigatório para veículos:",
    options: ["Reboques ou semirreboques.", "De propulsão humana e de tração animal.", "Automotores (motores a combustão).", "Elétricos."],
    answer: 2
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
    <div style="text-align: center;  ">
      <img src="${q.image}" alt="Imagem da questão" img.className = "question-image" style="max-width: 350px; height: auto; display: block; margin: 5px auto 5px">
    </div>`;
}

qDiv.innerHTML += `<p style="font-size: 23px;"><strong>${q.question}</strong></p>`;



  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  q.options.forEach((opt, i) => {
    const id = `q${currentQuestion}o${i}`;
    optionsDiv.innerHTML += `
      <label><input type="radio" name="question" value="${i}" id="${id}"> ${String.fromCharCode(65 + i)}) ${opt}</label>
    `;
  });


  const feedbackP = document.createElement("p");
  qDiv.appendChild(feedbackP);

  const btn = document.createElement("button");
  btn.textContent = currentQuestion === questions.length - 1 ? "Finalizar Simulado" : "Próxima";
  btn.style.display = "none";

  qDiv.appendChild(optionsDiv);

  qDiv.appendChild(btn);
  container.appendChild(qDiv);

  const motivacao = document.createElement("p");
  motivacao.textContent = "💡 Dica: Caso erre a questão, leia novamente a pergunta e a resposta correta para memorizar melhor.";
  motivacao.style.marginTop = "15px";
  motivacao.style.fontStyle = "italic";
  motivacao.style.color = "#555";
  qDiv.appendChild(motivacao);

  const radios = container.querySelectorAll("input[type=radio]");
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const selected = parseInt(document.querySelector("input[name='question']:checked").value);
      if (selected === q.answer) {
        radios[selected].parentElement.classList.add("correct");
        score++;
        feedbackP.className = "correct";
        feedbackP.textContent = "✔ Correto!";
      } else {
        radios[selected].parentElement.classList.add("incorrect");
        radios[q.answer].parentElement.classList.add("correct");
        feedbackP.className = "incorrect";
        feedbackP.textContent = `❌ Incorreto. A resposta correta é: ${String.fromCharCode(65 + q.answer)}`;
      }
      radios.forEach(r => r.disabled = true);
      btn.style.display = "inline-block";
    });
  });

  btn.addEventListener("click", () => {
    currentQuestion++;
    updateProgress();
    showQuestion();
  });

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
        msg.textContent = "Atenção! Tente de novo! Precisa melhorar seu resultado";
        msg.style.color = "red";
    } else if (score >= 21 && score <= 27) {
        msg.textContent = "Está razoável! Você está quase lá! Dá pra melhorar!";
        msg.style.color = "blue";
    } else {
        msg.textContent = "Parabéns! Excelente desempenho! Continue assim em todos os simulados!";
        msg.style.color = "green";
    }
    
    salvarDesempenho("Mecânica - Prova 1", score);

    
}

showQuestion();

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