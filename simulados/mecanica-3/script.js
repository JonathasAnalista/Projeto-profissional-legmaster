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
    question: "A finalidade da suspensão e dos amortecedores é:",
    options: [
      "Manter as características da fábrica do veículo.",
      "Contribuir para o desgaste prematuro dos pneus.",
      "Causar a perda de controle do veículo.",
      "Manter a estabilidade do veículo."
    ],
    answer: 3
  },
  {
    question: "A válvula termostática fica localizada entre o radiador e o motor, ajudando a controlar o calor produzido pela queima da mistura ar-combustível. Esta peça é componente do sistema de:",
    options: [
      "Ignição.",
      "Arrefecimento.",
      "Elétrico.",
      "Alimentação."
    ],
    answer: 1
  },
  {
    question: "Como se desenvolve o processo de oxidação?",
    options: [
      "Deixando de usar óleo no motor.",
      "Deixando de usar óleo no carburador.",
      "Deixando de usar aditivo na água do radiador.",
      "Nenhuma das questões acima."
    ],
    answer: 2
  },
  {
    question: "Como se prevenir contra incêndios?",
    options: [
      "Realize manutenções preventivas periódicas nos sistemas de arrefecimento, de alimentação de combustível, de lubrificação e elétrico.",
      "Evite adaptações ou improvisos em instalações.",
      "Nunca se distraia com cigarro, nem aqueça alimentos no interior do veículo.",
      "Todas acima estão corretas."
    ],
    answer: 3
  },
  {
    question: "Constituem alguns equipamentos e sistemas do veículo importantes para evitar situações de perigo que podem levar a acidentes de trânsito:",
    options: [
      "Suspensão e sistema de direção.",
      "Iluminação e lanternas indicadoras de direção.",
      "Freios e pneus.",
      "Todas as alternativas estão corretas."
    ],
    answer: 3
  },
  {
    question: "Constituem equipamentos de uso obrigatório, exceto:",
    options: [
      "Espelhos retrovisores.",
      "Macaco.",
      "Ar condicionado.",
      "Chave de roda."
    ],
    answer: 2
  },
  {
    question: "O conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
    options: [
      "Transformador de gases tóxicos em gases não nocivos ao meio ambiente.",
      "Filtro dos gases do escapamento.",
      "Acelerador de molécula binárias, oposto aos gases de escapamento.",
      "Filtro dos gases do escapamento, que separa o vapor d'água dos gases."
    ],
    answer: 0
  },
  {
    question: "Em caso de mau funcionamento do motor ou sua parada total, os dois sistemas que devemos diagnosticar primeiramente são:",
    options: [
      "Alimentação e ignição.",
      "Lubrificação e de frenagem.",
      "Arrefecimento e de lubrificação.",
      "Alimentação e de iluminação."
    ],
    answer: 0
  },
  {
    question: "Debrear é o mesmo que:",
    options: [
      "Apoiar o pé no pedal de freio continuamente.",
      "Regular o cabo em todas as trocas de óleo.",
      "Acionar a embreagem.",
      "Acionar a alavanca de mudanças."
    ],
    answer: 2
  },
  {
    question: "Dispositivo destinado ao controle de ruído do motor é equipamento obrigatório para veículos:",
    options: [
      "Reboques ou semirreboques.",
      "De propulsão humana e de tração animal.",
      "Automotores (motores a combustão).",
      "Elétricos."
    ],
    answer: 2
  },
  {
    question: "É a medida máxima permitida para trincas no para brisas fora da área crítica de visão em automóveis:",
    options: [
      "20 cm.",
      "10 mm.",
      "10 cm.",
      "5 mm."
    ],
    answer: 2
  },
  {
    question: "É considerado como equipamento de segurança (obrigatório):",
    options: [
      "Cortina nos vidros traseiros.",
      "Encosto de cabeça.",
      "Alarme.",
      "Direção hidráulica."
    ],
    answer: 1
  },
  {
    question: "É dispositivo de segurança veicular montado no interior das portas do veículo, cuja função é proteger a região da bacia dos ocupantes:",
    options: [
      "O encosto da cabeça.",
      "As barras laterais.",
      "A carroceria deformável.",
      "O airbag."
    ],
    answer: 1
  },
  {
    question: "É equipamento obrigatório para as motocicletas, exceto:",
    options: [
      "Faróis dianteiros de cor branca ou amarela.",
      "Espelhos retrovisores.",
      "Para-brisas.",
      "Iluminação da placa traseira."
    ],
    answer: 2
  },
  {
    question: "Equipamento obrigatório que oferece ao condutor segurança ao efetuar manobras:",
    options: [
      "Faróis principais dianteiros.",
      "Luz de ré.",
      "Luzes de posição dianteiras.",
      "Lanternas de posição traseiras."
    ],
    answer: 1
  },
  {
    question: "É um circuito que tem como função provocar uma faísca na câmara de combustão:",
    options: [
      "Ignição.",
      "Arrefecimento.",
      "Alimentação.",
      "Injeção."
    ],
    answer: 0
  },
  {
    question: "Indica problemas na queima de combustível:",
    options: [
      "Queima incompleta do óleo do motor.",
      "Emissão de fumaça pelo escapamento.",
      "Gases e partículas na atmosfera.",
      "Regulagem eletrônica do veículo."
    ],
    answer: 1
  },
  {
    question: "Em condições normais de funcionamento e com o cuidado adequado, o veículo proporcionará desempenho satisfatório se você:",
    options: [
      "Verificar o nível do líquido de arrefecimento semanalmente.",
      "Verificar diariamente o nível do fluído de freio.",
      "Lavar o motor do veículo semanalmente.",
      "Encerar a pintura mensalmente."
    ],
    answer: 0
  },
  {
    question: "Em que tipo de motor a combustão é provocada por uma faísca?",
    options: [
      "A diesel.",
      "A vapor.",
      "À gasolina, etanol e GNV.",
      "Elétrico."
    ],
    answer: 2
  },
  {
    question: "Esse componente dura aproximadamente dez mil quilômetros, mas quem trafega em vias empoeiradas deve trocá-lo com mais frequência. Estamos referindo:",
    options: [
      "À bateria.",
      "Ao fluído de freio.",
      "Ao filtro de ar.",
      "À palheta dos limpadores."
    ],
    answer: 2
  },
  {
    question: "Evita o desgaste excessivo do motor:",
    options: [
      "Sistema de ignição.",
      "Sistema de arrefecimento.",
      "Sistema de lubrificação.",
      "Sistema elétrico."
    ],
    answer: 2
  },
  {
    question: "Existem equipamentos capazes de diminuir o impacto do corpo do ocupante com o veículo em caso de colisão. Por exemplo:",
    options: [
      "Airbags.",
      "Paraquedas.",
      "Suspensão.",
      "Almofadas."
    ],
    answer: 0
  },
  {
    question: "Fazem parte da embreagem:",
    options: [
      "Platô, disco de fricção e rolamento da embreagem.",
      "Junta homocinética e pivôs.",
      "Pedal e câmbio.",
      "Molas e amortecedores."
    ],
    answer: 0
  },
  {
    question: "Fazem parte do sistema de suspensão de um veículo:",
    options: [
      "Cilindro mestre e estabilizador.",
      "Molas e caixa de direção.",
      "Coroa/pinhão e pastilhas.",
      "Molas e amortecedores."
    ],
    answer: 3
  },
  {
    question: "Mesmo sabendo ser uma infração, muitas pessoas cortam as molas do veículo para deixá-lo mais baixo. Esse procedimento prejudica diretamente:",
    options: [
      "A estabilidade do veículo.",
      "O desempenho das lonas.",
      "As peças móveis do motor.",
      "A vida útil do disco de fricção."
    ],
    answer: 0
  },
  {
    question: "Fazem parte do sistema elétrico:",
    options: [
      "Radiador e ventoinha.",
      "Carburador e filtro de ar.",
      "Cabeçote, cilindros e pistão.",
      "Bateria, distribuidor e bobina."
    ],
    answer: 3
  },
  {
    question: "Fazem parte dos equipamentos de segurança obrigatórios no veículo:",
    options: [
      "Cinto de segurança, válvula de expansão e triângulo.",
      "Triângulo, macaco e tapete.",
      "Macaco, ar condicionado e pneu reserva.",
      "Airbags, cintos de segurança e encosto de cabeça."
    ],
    answer: 3
  },
  {
    question: "Instrumento do painel que indica a temperatura do motor:",
    options: [
      "Amperímetro.",
      "Termômetro.",
      "Odômetro.",
      "Manômetro."
    ],
    answer: 1
  },
  {
    question: "A regulagem correta da luz é de muita importância para a segurança do condutor. Na luz baixa, o farol do lado direito deve ter uma elevação de quinze graus em relação ao farol do lado esquerdo. Esse desnível permite:",
    options: [
      "Iluminar a margem direita da via.",
      "Tornar visíveis as placas de sinalização.",
      "Ter um alcance de até 750 metros.",
      "Melhorar a visão do acostamento pelo condutor."
    ],
    answer: 1
  },
  {
    question: "O aparecimento de trepidação sentida no volante de direção sempre que o veículo alcançar uma determinada faixa de velocidade é sinal da necessidade do trabalho de manutenção indicada com:",
    options: [
      "Balanceamento das rodas.",
      "Troca do fluído de freios.",
      "Lubrificação da caixa de direção.",
      "Verificação dos valores de cambagem."
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
  motivacao.textContent = "💡 Dica: Se errar, leia a questão errada 2X para memorizar a correta.";
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
