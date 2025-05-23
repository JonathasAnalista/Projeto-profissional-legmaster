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
    "question": "De quem é a preferência de passagem?",
    "image": "quest-1.png",
    "options": [
      "Do veículo 1, pois trafega em linha reta.",
      "Do veículo 2, pois está à direita do veículo 1.",
      "Do veículo 1, pois está à direita do veículo 2.",
      "Do veículo 2, pois trafega em preferencial."
    ],
    "answer": 2
  },
  {
    "question": "Manter o veículo imobilizado apenas pelo tempo necessário para embarque e desembarque de pessoas, caracteriza-se como:",
    "options": [
      "Parada para carga e descarga.",
      "Parada.",
      "Estacionamento para carga e descarga.",
      "Estacionamento."
    ],
    "answer": 1
  },
  {
    "question": "O uso do farol baixo é:",
    "options": [
      "Obrigatório para motocicletas, motonetas e ciclomotores durante o dia e a noite.",
      "Recomendado para ônibus, durante o dia, se estiver em faixa exclusiva.",
      "Obrigatório para automóveis, em qualquer via, mesmo durante o dia.",
      "Recomendado para ciclomotores durante o dia."
    ],
    "answer": 0
  },
  {
    "question": "De acordo com o desenho, marque a resposta correta:",
    "image": "quest-4.png",
    "options": [
      "O veículo 1 perde a preferência por fazer uma conversão à esquerda.",
      "O veículo 2 tem a preferência por trafegar na principal.",
      "O veículo 1 tem a preferência por trafegar à direita do 2.",
      "O veículo 2 tem a preferência por trafegar em linha reta."
    ],
    "answer": 2
  },
  {
    "question": "Quando inexistir uma faixa especial, um veículo de tração animal deverá ocupar:",
    "options": [
      "A faixa mais à esquerda da pista de rolamento.",
      "A faixa mais à direita da pista de rolamento.",
      "Qualquer faixa, desde que facilite o trânsito.",
      "A faixa da direita ou da esquerda, dependendo da categoria do veículo."
    ],
    "answer": 1
  },
  {
    "question": "O condutor poderá ultrapassar outro veículo pela direita quando:",
    "options": [
      "O veículo da frente autorizar.",
      "A via for de mão única com entrada à esquerda e o condutor do veículo a ser ultrapassado indicar, por sinal, que vai entrar para esse lado.",
      "A via for de mão única com retorno ou entrada à direita e o condutor do veículo que estiver à direita indicar, por sinal, que vai entrar para esse lado.",
      "A via for de mão dupla com retorno ou entrada à esquerda e apenas uma faixa de trânsito."
    ],
    "answer": 1
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima nas vias locais será de:",
    "options": [
      "30 km/h.",
      "20 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": 0
  },
  {
    "question": "Na interseção acima, defina a preferência de acordo com a regra:",
    "image": "quest-8.png",
    "options": [
      "A preferência é do veículo 2 porque trafega à direita do veículo 1.",
      "A preferência é do veículo 1 porque trafega em linha reta.",
      "A preferência é do veículo 1 porque trafega em rodovia.",
      "A preferência é do veículo 2 porque se aproxima de interseção em T."
    ],
    "answer": 2
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima será de:",
    "options": [
      "20 Km/h nas vias locais.",
      "80 Km/h nas estradas.",
      "60 Km/h nas vias de trânsito rápido.",
      "60 Km/h nas estradas."
    ],
    "answer": 3
  },
  {
    "question": "Após priorizarem a passagem do veículo em emergência (1), de quem é a preferência?",
    "image": "quest-10.png",
    "options": [
      "Do veículo 2, pois ele passaria na sequência.",
      "Do veículo 3, pois está na mesma via que a ambulância.",
      "Do veículo 2, pois está à direita da ambulância.",
      "Do veículo 3, pois trafega à direita do veículo 2."
    ],
    "answer": 3
  },
  {
    "question": "É velocidade permitida em vias de trânsito rápido quando não há sinalização de regulamentação:",
    "options": [
      "60 km/h.",
      "80 km/h.",
      "90 km/h.",
      "110 km/h."
    ],
    "answer": 1
  },
  {
    "question": "Para convergir à esquerda em rodovias dotadas de acostamento é preciso:",
    "options": [
      "Diminuir a velocidade e observar as regras de segurança.",
      "Aumentar a velocidade para fazer a conversão antes que venham veículos no sentido contrário.",
      "Manter a velocidade e observar o fluxo contrário com vistas à segurança.",
      "Parar no acostamento."
    ],
    "answer": 3
  },
  {
    "question": "É procedimento para se convergir à direita:",
    "options": [
      "Sinalizar à direita e observar o trânsito, deslocar-se para o centro da faixa e realizar a conversão.",
      "Sinalizar e parar à direita da via com vistas à observação das normas de segurança.",
      "Sinalizar e deslocar-se para o bordo direito da pista para convergir usando o menor espaço possível.",
      "Sinalizar e deslocar-se para junto da faixa divisória da pista e realizar a conversão respeitando as regras de preferência."
    ],
    "answer": 2
  },
  {
    "question": "Quando for preciso transportar num veículo de passeio, quatro crianças, três delas serão acomodadas no banco traseiro. Qual criança será colocada no banco dianteiro do veículo?",
    "options": [
      "A mais velha das quatro.",
      "A mais pesada das quatro.",
      "A de maior estatura entre as quatro.",
      "Qualquer uma desde que utilize o dispositivo de retenção."
    ],
    "answer": 3
  },
  {
    "question": "A velocidade máxima permitida em uma via arterial sem sinalização é de:",
    "options": [
      "60 km/hora.",
      "30 km/hora.",
      "80 km/hora.",
      "40 km/hora."
    ],
    "answer": 0
  },
  {
    "question": "As vias rurais se subdividem em:",
    "options": [
      "Rodovias e vias locais.",
      "Rodovias e estradas.",
      "Vias de trânsito rápido, vias coletoras e rodovias.",
      "Vias urbanas e vias rurais."
    ],
    "answer": 1
  },
  {
    "question": "Sobre o desenho acima, é correto afirmar:",
    "image":"quest-17.png",
    "options": [
      "A preferência é do veículo 2 por estar à direita do 3.",
      "O veículo 1 tem a preferência por estar à direita do 2.",
      "O veículo 1 tem preferência sobre o veículo 3.",
      "O veículo 2 tem a preferência para virar à esquerda."
    ],
    "answer": 0
  },
  {
    "question": "De acordo com as regras gerais de circulação, quando o condutor tem preferência de passagem em um cruzamento?",
    "options": [
      "Quando cruzar com veículos em missão de urgência.",
      "Quando for adentrar em uma rodovia.",
      "Quando em cruzamento não sinalizado e este seguir à direita do outro condutor.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 2
  },
  {
    "question": "As marcas de canalização (MC) orientam os fluxos de tráfego em uma via, além de regulamentar áreas de pavimento não utilizáveis. A marca MC-04 regulamenta:",
    "image":"quest-19.png",
    "options": [
      "Ordenação para movimento em retorno.",
      "Fluxos de trânsito de sentidos opostos.",
      "Proteção em áreas de estacionamento.",
      "Acomodação para início de canteiro central."
    ],
    "answer": 3
  },
  {
    "question": "Na interseção, qual veículo tem a preferência de passagem:",
    "image":"quest-20.png",
    "options": [
      "O veículo 1, pois trafega à direita da via.",
      "O veículo 2, pois o veículo 1 antes de convergir, deve parar cedendo-lhe a passagem.",
      "O veículo 1, pois irá adentrar na via preferencial.",
      "O veículo 2, pois trafega na via principal."
    ],
    "answer": 1
  },
  {
    "question": "Nas vias rurais, o pedestre deve transitar:",
    "options": [
      "Pela direita no sentido do fluxo de veículos.",
      "No acostamento junto ao bordo esquerdo.",
      "Pela esquerda do fluxo de veículos.",
      "No acostamento à direita e no contrafluxo dos veículos."
    ],
    "answer": 3
  },
  {
    "question": "Assinale a alternativa correta:",
    "image":"quest-22.png",
    "options": [
      "Entre os veículos 2 e 4, a prioridade de passagem é do veículo 4.",
      "Entre os veículos 2 e 3, a preferência é do veículo 3.",
      "Entre os veículos 1, 3 e 4, a ordem de passagem na interseção é 3, 4 e 1.",
      "Entre os veículos 2, 4 e 1, a ordem de passagem na interseção é 1, 2 e 4."
    ],
    "answer": 2
  },
  {
    "question": "Quando uma via comportar duas ou mais faixas de trânsito e a da direita for destinada ao uso exclusivo de outro tipo de veículo, os demais veículos deverão circular pela faixa:",
    "options": [
      "Da direita.",
      "Da esquerda.",
      "Adjacente à da esquerda.",
      "Adjacente à da direita."
    ],
    "answer": 3
  },
  {
    "question": "Assinale a alternativa errada quanto às normas de circulação:",
    "options": [
      "A circulação será feita pelo lado direito da via, admitidas exceções devidamente sinalizadas.",
      "A ultrapassagem deve ser feita somente pela esquerda, exceto quando o veículo a ser ultrapassado estiver sinalizando com o propósito de entrar à esquerda.",
      "Os veículos de socorro e polícia têm preferência de passagem.",
      "Os veículos precedidos de batedores terão prioridade de passagem."
    ],
    "answer": 2
  },
  {
    "question": "Local onde é permitido realizar parada:",
    "options": [
      "Nas entradas e saídas de veículos em garagens.",
      "A menos de cinco metros das esquinas.",
      "Na área da interseção de fluxos.",
      "Nas marcas de canalização de fluxos."
    ],
    "answer": 0
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa correta:",
    "options": [
      "A circulação será feita sempre pelo lado direito da via.",
      "Os veículos precedidos de batedores terão preferência absoluta na passagem.",
      "Veículos de socorro têm prioridade de passagem, quando acionarem o alarme sonoro e a luz vermelha intermitente.",
      "A ultrapassagem deve ser feita somente pela direita."
    ],
    "answer": 2
  },
  {
    "question": "Observe o desenho acima e responda. O condutor do veículo 1 para ingressar em outra via deverá:",
    "image":"quest-27.png",
    "options": [
      "Apenas aguardar a passagem do veículo 2.",
      "Aguardar a passagem do veículo 3.",
      "Entrar diretamente na via, sem utilizar a faixa de aceleração.",
      "Utilizar a faixa de aceleração, dando preferência ao veículo 2."
    ],
    "answer": 3
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima será de:",
    "options": [
      "20 Km/h nas vias locais.",
      "80 Km/h nas estradas.",
      "60 Km/h nas vias de trânsito rápido.",
      "40 Km/h nas vias coletoras."
    ],
    "answer": 3
  },
  {
    "question": "Em locais onde o estacionamento é proibido, você deverá:",
    "options": [
      "Parar apenas pelo tempo estritamente necessário para embarque ou desembarque.",
      "Cuidar que seus passageiros não abram ou deixem as portas do veículo abertas.",
      "Cuidar para que o embarque e desembarque dos passageiros ocorram sempre do lado da calçada.",
      "Nenhuma das respostas está correta."
    ],
    "answer": 0
  },
  {
    "question": "Segundo a classificação do Código de Trânsito Brasileiro, uma via que não possui interseções e passagem de pedestre em nível é chamada de:",
    "options": [
      "Via preferencial.",
      "Via local.",
      "Via de trânsito rápido.",
      "Via arterial."
    ],
    "answer": 2
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
      <img src="${q.image}" alt="Imagem da questão" img.className = "question-image" style="max-width: 200px; height: auto; display: block; margin: 5px auto 5px">
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
