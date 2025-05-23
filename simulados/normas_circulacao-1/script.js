
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
    "question": "A transposição de faixas, ultrapassagem, retornos, conversões denomina-se:",
    "options": ["deslocamento lateral", "passagem", "ultrapassagem", "conversão livre"],
    "answer": 0
  },
  {
    "question": "Nas vias dotadas de acostamento, onde não houver local apropriado para a operação de retorno ou entrada à esquerda, antes de realizar manobras para este lado o condutor deverá parar o veículo:",
    "options": ["No acostamento à direita.", "No centro da via.", "No acostamento da esquerda.", "Junto ao eixo central."],
    "answer": 0
  },
  {
    "question": "Dirigindo em um veículo numa via dividida ao centro por uma sinalização com duas linhas, sendo a primeira linha à sua esquerda tracejada e a segunda contínua, você poderá:",
    "options": ["Ultrapassar outro veículo pela esquerda, quando as condições forem favoráveis.", "Ultrapassar outro veículo pela direita, quando as condições forem favoráveis.", "Fazer um retorno para o lado direito da via.", "Estacionar."],
    "answer": 0
  },
  {
    "question": "O condutor manterá acesos os faróis do veículo não equipado com DRL, utilizando luz baixa durante a noite e durante o dia, em:",
    "options": ["Vias não iluminadas.", "Túneis providos de iluminação pública e nas rodovias de pista simples fora do perímetro urbano.", "Vias não providas de acostamento.", "Viadutos e trincheiras."],
    "answer": 1
  },
  {
    "question": "A ordem correta de uma ultrapassagem segura é:",
    "options": ["Usar luz indicadora de direção, ver espaço e visibilidade, ultrapassar só em faixa tracejada/seccionada.", "Buzinar sucessivamente, usar luz indicadora de direção, ultrapassar só em faixa contínua.", "Ligar a luz alta, usar a luz indicadora de direção para a direita, ultrapassar só em faixa seccionada.", "Todas afirmativas estão corretas."],
    "answer": 0
  },
  {
    "question": "A imobilização de veículos por tempo superior ao necessário para embarque ou desembarque de passageiros denomina-se:",
    "options": ["Transposição de faixas.", "Estacionamento.", "Parada.", "Ultrapassagem."],
    "answer": 1
  },
  {
    "question": "Ao seguir um veículo em uma via de mão única e o mesmo indicar por sinal que vai entrar à esquerda, você entenderá que pode:",
    "options": ["Ultrapassar pela faixa da direita.", "Ultrapassar pela faixa da esquerda.", "Esperar na via ele entrar à esquerda.", "Buzinar sucessivamente para apressá-lo."],
    "answer": 0
  },
  {
    "question": "Dar passagem, pela esquerda, quando solicitado:",
    "options": ["É uma opção do condutor.", "Só deve ser permitido quando se tratar de motocicletas.", "É apenas uma questão de educação do condutor.", "É dever de todo condutor de veículo automotor."],
    "answer": 3
  },
  {
    "question": "A faixa de trânsito destinada a se fazer ultrapassagem e circular em maior velocidade é:",
    "options": ["A da direita.", "A da esquerda.", "Qualquer uma.", "A de sinalização com linhas amarelas."],
    "answer": 1
  },
  {
    "question": "Os veículos que se deslocam sobre trilhos, respeitadas as normas de circulação, têm a preferência de passagem:",
    "options": ["Nos cruzamentos não sinalizados.", "Na rotatória.", "Nos túneis.", "Sobre os demais veículos."],
    "answer": 3
  },

  
  {
    "question": "As vias terrestres abertas à circulação, de acordo com sua utilização, classificam-se em:",
    "options": ["Rodovias e vias locais", "Rodovias e estradas", "Vias urbanas e vias rurais", "Vias de trânsito rápido e vias coletoras"],
    "answer": 2
  },

  {
    "question": "As praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo são, para efeito do Código de Trânsito Brasileiro, considerados:",
    "options": ["Vias terrestres", "Áreas autônomas", "Vias privadas", "Áreas restritas"],
    "answer": 0
  },
  {
    "question": "Qual é a posição adequada para posicionar o dispositivo auxiliar de retenção (bebê conforto) para uma criança de 0 a 1 ano?",
    "options": ["No meio do banco traseiro.", "No assoalho atrás do banco do motorista.", "De forma que o rosto da criança fique voltado para o vidro traseiro.", "Desde que se dirija devagar, preso no cinto de segurança do banco do carona."],
    "answer": 2
  },
  {
    "question": "O ciclista, na falta de ciclovia ou ciclofaixa, deve andar:",
    "options": ["No sentido contrário aos carros na via", "No mesmo sentido dos veículos na via", "Pela calçada e junto aos pedestres", "No centro da via em cima da linha divisória"],
    "answer": 1
  },
  {
    "question": "Ao sair da via pelo lado esquerdo, em pista com circulação nos dois sentidos, o procedimento do condutor deverá ser:",
    "options": ["Em pista com circulação nos dois sentidos não é permitido sair pelo lado esquerdo.", "Aproximar-se o máximo possível do eixo da linha divisória da via e efetuar a manobra com segurança.", "Aproximar-se o máximo possível do bordo esquerdo e executar a manobra no menor espaço possível.", "Aproximar-se do acostamento e executar a manobra no maior tempo possível."],
    "answer": 1
  },
  {
    "question": "O embarque e desembarque de passageiros de transporte coletivo deverá acontecer:",
    "options": ["Sempre que solicitado por idosos e deficientes físicos", "Somente nos pontos estabelecidos para este fim", "Em qualquer ponto da via, desde que não atrapalhe o trânsito", "Sempre que o passageiro solicitar"],
    "answer": 1
  },
  {
    "question": "O condutor de veículo que pretender sair da via pelo lado esquerdo (virar à esquerda) numa via de mão única deverá:",
    "options": ["Aguardar nas margens da via até todos os veículos passarem", "Aproximar-se do eixo central da via e efetuar a conversão à esquerda com atenção", "Aproximar-se do bordo direito da via e efetuar a manobra com atenção", "Deslocar-se totalmente para a esquerda da via e efetuar a conversão com segurança"],
    "answer": 3
  },
  {
    "question": "Em vias dotadas de acostamento, qual dos veículos abaixo está fazendo a conversão à esquerda corretamente?",
    "image": "quest18.png",
    "options": ["O veículo 1", "O veículo 3", "O veículo 2", "Nenhum deles"],
    "answer": 1
  },
  {
    "question": "O extintor de incêndio é equipamento obrigatório:",
    "options": ["Para os veículos automotores, exceto motocicletas", "Somente por ocasião do licenciamento do veículo", "Para caminhão, caminhão-trator, micro-ônibus, veículos de transporte de inflamáveis e coletivo de passageiros", "Apenas para veículos novos"],
    "answer": 2
  },
  {
    "question": "Ao se aproximar de um cruzamento, uma forma segura de agir é:",
    "options": ["Reduzir a velocidade", "Manter a mesma velocidade", "Aumentar a velocidade", "Parar o veículo"],
    "answer": 0
  },
  {
    "question": "Veículos transitando por fluxos que se cruzem, ao se aproximarem de local não sinalizado, têm preferência:",
    "options": ["Quem vem pela direita", "Quem vai em linha reta", "Quem se desloca pela via de fluxo mais intenso", "O ônibus, por transportar mais passageiros"],
    "answer": 0
  },
  {
    "question": "Quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da _________ destinadas ao deslocamento dos veículos mais _______ e de maior porte, quando não houver faixa especial:",
    "options": ["Direita; rápidos", "Esquerda; lentos", "Direita; lentos", "Esquerda; rápidos"],
    "answer": 2
  },
  {
    "question": "Os usuários das vias terrestres devem:",
    "options": ["Circular somente pelo lado direito da via", "Ceder sempre o direito de passagem aos veículos de transporte coletivo", "Circular sempre com velocidade reduzida", "Abster-se de todo ato que possa constituir perigo ou obstáculo ao trânsito"],
    "answer": 3
  },
  {
    "question": "O cinto de segurança é obrigatório em todas as vias do território nacional para:",
    "options": ["O condutor, somente", "Condutor e passageiros do banco dianteiro", "Condutor e passageiros dos bancos dianteiro e traseiro", "Condutor e passageiros do banco traseiro"],
    "answer": 2
  },
  {
    "question": "Analise a preferência acima e responda:",
    "image": "quest25.png",
    "options": ["Entre o veículo 4, 3 e 2. Tem preferência o veículo 4", "Entre o veículo 3, 2 e 1. Tem preferência o veículo 2", "Entre o veículo 1, 2 e 3. Tem a preferência o veículo 3", "Entre o veículo 2, 3 e 4. Tem preferência o veículo 2"],
    "answer": 3
  },
  {
    "question": "Ao aproximar-se de um cruzamento não sinalizado, surgindo um veículo à sua direita, o condutor deve:",
    "options": ["Parar o veículo, respeitando a preferência", "Diminuir a velocidade", "Usar atenção difusa e passar", "Não se preocupar, se estiver transitando em uma avenida"],
    "answer": 0
  },
  {
    "question": "Ao ser ultrapassado em via de acostamento, deve-se:",
    "options": ["Deslocar-se obrigatoriamente para o acostamento", "Desviar-se para a direita, reduzir ou manter a velocidade", "Reduzir bastante a velocidade", "Não se preocupar, pois a responsabilidade é de quem ultrapassa"],
    "answer": 1
  },
  {
    "question": "Em uma via coletora sem sinalização, o condutor poderá atingir a velocidade de no máximo:",
    "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    "answer": 1
  },
  {
    "question": "Os condutores de ciclomotores não poderão circular nas vias:",
    "options": ["Locais", "Arteriais", "Coletoras", "De trânsito rápido"],
    "answer": 3
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
    <div style="text-align: center;  ">
      <img src="${q.image}" alt="Imagem da questão" img.className = "question-image" style="max-width: 250px; height: auto; display: block; margin: 5px auto 5px">
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
  motivacao.textContent = "💡 Dica: Se errar, leia a questão completa e memorize a alternativa correta.";
  motivacao.style.marginTop = "15px";
  motivacao.style.fontStyle = "italic";
  motivacao.style.color = "#555";
  qDiv.appendChild(motivacao);

  const radios = container.querySelectorAll("input[type=radio]");
  radios.forEach(radio => {
  radio.addEventListener("click", () => {
    const selected = parseInt(document.querySelector("input[name='question']:checked").value);
    if (selected === q.answer) {
      somAcerto.cloneNode().play();
      radios[selected].parentElement.classList.add("correct");
      score++;
      feedbackP.className = "correct ";
      feedbackP.textContent = "✔ Correto!";
    } else {
      somErro.cloneNode().play();
      feedbackP.className = "incorrect ";
      feedbackP.textContent = `❌ Incorreto. A resposta correta é: ${String.fromCharCode(65 + q.answer)}`;
    }

    radios.forEach((r, i) => {
    const label = r.closest("label");
      if (i === selected && i !== q.answer) label.classList.add("incorrect-answer");
      if (i === q.answer) label.classList.add("correct-answer");
      });
    btn.style.display = "inline-block";
  });
}); // <-- FECHAMENTO correto aqui



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
