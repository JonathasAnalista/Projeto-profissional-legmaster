
const questions = [
  {
    "question": "A distância percorrida pelo veículo, logo após o condutor perceber efetivamente o perigo e acionar os freios, é denominada:",
    "options": ["distância de reação", "distância de frenagem", "distância de seguimento", "distância de parada"],
    "answer": 0
  },
  {
    "question": "Aquaplanagem ou hidroplanagem é:",
    "options": ["perda de estabilidade do veiculo", "derrapagem do veículo em pista seca", "perda da aderência dos pneus com o solo em qualquer tipo de situação", "perda da aderência dos pneus devido uma fina camada de água no solo"],
    "answer": 3
  },
  {
    "question": "O contato dos pneus com o solo e chamado de:",
    "options": ["aderência", "derrapagem", "aquaplanagem", "hidroplanagem"],
    "answer": 0
  },
  {
    "question": "Sono, fadiga, embriaguez, drogas, são condições adversas do:",
    "options": ["condutor", "passageiros", "pedestres", "bebida"],
    "answer": 0
  },
  {
    "question": "Ao cruzar com outro veículo à noite, utilize a luz baixa. Evite a guerra de faróis. Em caso de ofuscamento, desvie sua visão para:",
    "options": ["Faixa central.", "A faixa da direita.", "A faixa da esquerda.", "O painel do veículo."],
    "answer": 1
  },
  {
    "question": "Tipo de colisão que envolve apenas 1 veículo e não se sabem suas possíveis causas é chamada de:",
    "options": ["colisão misteriosa", "colisão frontal", "colisão lateral", "colisão exata"],
    "answer": 0
  },
  {
    "question": "Transferência de massa, aderência, força centrípeta, força centrifuga, comportamento sobre esterçante são:",
    "options": ["leis da física que se relacionam ao ato de dirigir", "aceleração de velocidade", "quando o motorista viaja de noite e não enxerga muito bem", "motor está desregulado"],
    "answer": 0
  },
  {
    "question": "No Brasil são dotados 3 tipos de cinto de segurança, qual o tipo que oferece mais segurança ao condutor:",
    "options": ["o de três pontos", "o sub abdominal", "o de dois pontos", "o de cinco pontos"],
    "answer": 0
  },
  {
    "question": "A desaceleração brusca e o uso incorreto dos freios podem provocar o desgarramento da parte traseira do veículo. Este tipo de reação é chamada de comportamento:",
    "options": ["Sub-esterçante.", "Inseguro.", "Sobre-esterçante.", "Inadequado."],
    "answer": 2
  },
  {
    "question": "“Horário de pico” é aquele com tráfego:",
    "options": ["Disperso e com alta velocidade.", "Denso e com baixa velocidade.", "Desenvolvido ao final da madrugada e início do dia.", "Menor em relação a movimentação de pedestres e veículos"],
    "answer": 1
  },
  {
    "question": "Automatismo correto significa:",
    "options": ["Atenção fixa.", "Atenção dispersiva.", "Gesto inconsciente efetuado de forma segura.", "Indisciplina na condução do veículo."],
    "answer": 2
  },
  {
    "question": "Nas retas, o motorista deve manter suas mãos no volante na posição:",
    "options": ["\"Dez e dez\" ou \"oito e quinze\".", "\"Duas e trinta\" ou \"nove e quinze\".", "\"Nove e quinze\" ou \"dez e dez\".", "\"Dez e trinta\" ou \"nove e vinte\"."],
    "answer": 2
  },
  {
    "question": "A ciência que estuda a relação do homem e a máquina é chamada de:",
    "options": ["ergonomia", "astronomia", "homofobia", "ciências contábeis"],
    "answer": 0
  },
  {
    "question": "Debrear é o mesmo que:",
    "options": ["Apoiar o pé no pedal de freio continuamente.", "Regular o cabo em todas as trocas de óleo.", "Acionar a embreagem.", "Acionar a alavanca de mudanças."],
    "answer": 2
  },
  {
    "question": "Aponte a hipótese de ocorrência de travamento de rodas:",
    "options": ["Quando o atrito do sistema de freios com as rodas é menor que o atrito dos pneus com o solo.", "Quando um veículo em desaceleração tende a 'sair de traseira' em uma curva.", "Quando o atrito do sistema de freios com as rodas é maior que o atrito dos pneus com o solo.", "Quando o atrito do sistema de freios com as rodas é igual ao atrito dos pneus com o solo"],
    "answer": 2
  },
  {
    "question": "As motocicletas, em sua maioria, são equipadas com espelhos convexos. Se você olhar um veículo através de um espelho convexo, a posição correta deste veículo é:",
    "options": ["Mais próxima do que aquela em que você pensa que ele está.", "Não há distinção entre espelho convexo e os demais.", "Mais distante do que aquela em que você pensa que ele está.", "Distância real"],
    "answer": 0
  },
  {
    "question": "A distância percorrida pelo veículo do momento em que o motorista vê o perigo, até a imobilização total do veículo, é denominada:",
    "options": ["distância de frenagem", "distância de parada", "distância de seguimento", "distância de reação"],
    "answer": 1
  },
  {
    "question": "Os veículos produzidos a partir de 1º de janeiro de 1999 deverão ser dotados nos assentos dianteiros próximos às portas:",
    "options": ["De cintos de dois pontos sem retrator", "De cintos do tipo três pontos graduável, com retrator.", "O tipo três pontos, com ou sem retrator, ou do tipo Subabdominal.", "Cintos de segurança do tipo subabdominal."],
    "answer": 1
  },
  {
    "question": "O motociclista deve ter em mente que ele deve ser visto, seja de dia ou trafegando no período noturno. Por isso, é importante:",
    "options": ["Empinar a moto para impressionar os pedestres para ser notado", "usar equipamentos de proteção de cor clara ou vivas, capacetes com cores forte, florescentes ou com branco, se possível, jaquetas de cores mais claras, com detalhes coloridos e que abusem das faixas refletivas", "Buzinar constantemente para ser notado assim evitando acidentes", "Trafegar pela calçada pois assim estará mais seguro"],
    "answer": 1
  },
  {
    "question": "Qual a posição correta do banco do motorista para ter uma postura correta ao dirigir?",
    "options": ["O encosto do banco deve estar em um ângulo de 100 a 120 graus", "O encosto do banco deve estar em um ângulo de 60 a 90 graus", "O encosto do banco deve estar em um ângulo de 100 a 160 graus", "A perna deve ficar esticada a todo momento esse é o ângulo correto"],
    "answer": 0
  },
  {
    "question": "Sobre acidentes de trânsito podemos afirmar que a maioria deles está associada a:",
    "options": ["Falhas mecânicas.", "Deficiência da via.", "Falta de sinalização.", "Falhas humanas."],
    "answer": 3
  },
  {
    "question": "Das alternativas abaixo, qual delas não faz parte dos fundamentos da direção defensiva:",
    "options": ["Interação e popularidade", "Conhecimento e decisão", "Habilidade e previsão", "Atenção e Habilidade"],
    "answer": 0
  },
  {
    "question": "Ao dirigir em uma rodovia, ocorre uma situação de ventos laterais fortes. Nessa situação, você:",
    "options": ["Fecha as janelas do veículo e continua com a mesma velocidade.", "Abre a janela do veículo e continua com a mesma velocidade.", "Reduz a marcha do veículo adotando uma Velocidade compatível com a situação e abre os vidros.", "Mantém a velocidade normal."],
    "answer": 2
  },
  {
    "question": "Entre outros efeitos, a ingestão de álcool pode provocar no condutor:",
    "options": ["Visão difusa e agilidade.", "Melhor capacidade de raciocínio lógico.", "Diminuição da capacidade de visualização.", "Melhora da capacidade de raciocínio."],
    "answer": 2
  },
  {
    "question": "São tipos de direção defensiva:",
    "options": ["Disciplinar e Legal.", "Preventiva e Corretiva.", "Eficiente e Utilitária.", "Segura e Insegura."],
    "answer": 1
  },
  {
    "question": "A cegueira momentânea causada pelo excesso de luz provoca:",
    "options": ["Ofuscamento.", "Catarata.", "Penumbra.", "Nevoeiro."],
    "answer": 0
  },
  {
    "question": "Às imprudências cometidas pelo condutor chamamos de ato:",
    "options": ["Consciente.", "Correto.", "Inseguro.", "Seguro."],
    "answer": 2
  },
  {
    "question": "Com o acúmulo de água na pista pode ocorrer a aquaplanagem se o veículo estiver:",
    "options": ["Em velocidade muito reduzida.", "Em velocidade alta e pneus carecas.", "Com problemas nos freios.", "Com folga na direção."],
    "answer": 1
  },
  {
    "question": "Em uma curva, a diminuição brusca da velocidade provoca transferência de massa fazendo com que o eixo dianteiro fique mais:",
    "options": ["Pesado que o eixo traseiro, tendendo a \"desgarrar a traseira\".", "Leve que o eixo traseiro, tendendo a \"desgarrar a dianteira\".", "Pesado que o eixo traseiro, tendendo a \"desgarrar a dianteira\".", "Leve que o eixo traseiro tendendo a \"desgarrar a traseira\"."],
    "answer": 0
  },
  {
    "question": "Em pequenas manobras é permitido ao condutor:",
    "options": ["Deixar de usar o cinto de segurança.", "Transitar em marcha a ré.", "Deixar de usar o capacete de segurança.", "Transitar com o veículo desligado."],
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
    
    salvarDesempenho("Direção Defensiva - Prova 1", score);

    
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