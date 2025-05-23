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

const questions =[
  {
    "question": "Dirigir veículo com Carteira Nacional de Habilitação ou Permissão para Dirigir cassada ou com suspensão do direito de dirigir é infração __________, com fator agravante __________, tendo como medidas administrativas __________ e __________.",
    "options": [
      "Gravíssima; x5; apreensão do veículo.",
      "Grave; x5; recolhimento da habilitação; remoção do veículo.",
      "Gravíssima; x3; Recolhimento da habilitação e Retenção do veículo.",
      "Gravíssima; x2; recolhimento da habilitação; remoção do veículo."
    ],
    "answer": 2
  },
  {
    "question": "Dirigir veículo sem as adaptações impostas pela Comissão de Exames Especiais do DETRAN por ocasião da concessão ou da renovação da habilitação para dirigir, constitui infração _____________, gerando como penalidade ____________.",
    "options": [
      "Gravíssima; retenção do veículo.",
      "Gravíssima; multa.",
      "Grave; multa (três vezes).",
      "Grave; advertência por escrito."
    ],
    "answer": 1
  },
  {
    "question": "A multa reparatória, determinada pelo Código de Trânsito Brasileiro, destina-se a:",
    "options": [
      "Reparar ou indenizar prejuízo material que tenha resultado de crime.",
      "Indenizar qualquer prejuízo material.",
      "Suspender a penalidade de cassação da Carteira Nacional de Habilitação.",
      "Indenizar dano moral."
    ],
    "answer": 0
  },
  {
    "question": "O pagamento da multa poderá ser efetuado até a data do vencimento expressa na notificação, por:",
    "options": [
      "100% do seu valor.",
      "80% do seu valor.",
      "50% do seu valor.",
      "90% do seu valor."
    ],
    "answer": 1
  },
  {
    "question": "A advertência por escrito deverá ser aplicada pela autoridade de trânsito ao condutor do veículo quando:",
    "options": [
      "Ficar caracterizado que a infração foi involuntária e sem gravidade, mesmo que reincidente.",
      "O agente de trânsito assim o desejar.",
      "Se tratar de infração leve ou média, não tendo condutor cometido outra infração nos últimos doze meses.",
      "O condutor se arrepender."
    ],
    "answer": 2
  },

  {"question": "A fiscalização da gestão de trânsito poderá ser realizada com a utilização de aparelhos que, quanto ao modo de operação, podem ser classificados em:", "options": ["Automático e não automático.", "Eletrônico e audiovisual.", "Fixo e móvel.", "Todas estão corretas."], "answer": 0},
  {"question": "A cassação da CNH é um procedimento que:", "options": ["O agente da autoridade de trânsito pode tomar quando julgar que o condutor do veículo cometeu uma infração gravíssima.", "Depende de decisão pessoal da autoridade de trânsito.", "O agente da autoridade de trânsito pode tomar, desde que comunique com antecedência à autoridade policial local.", "Deve ser adotado apenas pela autoridade de trânsito, conforme estabelecido no Código de Trânsito Brasileiro."], "answer": 3},
  {"question": "A cada infração cometida de natureza grave, são computados os seguintes números de pontos:", "options": ["5", "7", "3", "4"], "answer": 0},
  {"question": "A critério do agente, não se dará a retenção imediata do veículo:", "options": ["De transporte de pessoas e suas bagagens.", "De transporte de valores.", "De transporte coletivo de passageiros e produtos perigosos e perecíveis.", "De transporte de passageiros."], "answer": 2},
  {"question": "A frequência obrigatória em curso de reciclagem, ocorrerá se o condutor:", "options": ["Tiver suspenso o direito de dirigir.", "Se envolver em acidente grave para o qual haja contribuído.", "For condenado judicialmente por delito de trânsito.", "Todas acima."], "answer": 3},
  {"question": "Considerando o erro metrológico admitido para o etilômetro, a partir de quantos decigramas de álcool por litro de ar é considerado crime de trânsito?", "options": ["0,27 mg/l", "0,28 mg/l", "0,34 mg/l", "0,50 mg/l"], "answer": 2},
  {"question": "A pena de detenção atribuída ao condutor afasta-se do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída é de:", "options": ["1 a 4 anos", "2 a 4 anos", "6 meses a 1 ano", "6 meses a 2 anos"], "answer": 2},
  {"question": "A remoção do veículo ocorrerá quando o condutor:", "options": ["Transitar com o veículo sem nova vistoria, após acidente.", "Estacionar onde houver guia da calçada rebaixada, para entrada ou saída de veículo.", "Parar o veículo fora da posição estabelecida.", "Estacionar na frente de qualquer escola."], "answer": 1},
  {"question": "A responsabilidade pelas infrações referente a atos praticados na direção dos veículos cabe:", "options": ["Ao proprietário do veículo.", "Ao proprietário do veículo e ao condutor.", "Aos pais ou responsáveis pelo condutor.", "Ao condutor."], "answer": 3},
  {"question": "Ao condutor infrator, conforme o caso, podem ser aplicadas as seguintes penalidades:", "options": ["Advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da PPD e frequência em curso de reciclagem.", "Multa, advertência, apreensão e remoção do veículo.", "Multa, apreensão e cassação da permissão para dirigir.", "Multa, advertência, cassação da CNH e apreensão do veículo, apenas."], "answer": 0},
  {
    "question": "Ao condutor que se evadir da fiscalização, não submetendo o veículo à pesagem obrigatória nos pontos de passagem, fixos ou móveis, será aplicado(a):",
    "options": [
      "Advertência por escrito e multa.",
      "Frequência obrigatória em curso de reciclagem.",
      "Multa, além da obrigação de retornar ao ponto de elevação para fim de pesagem obrigatória.",
      "Somente a obrigação de retornar ao ponto de elevação para fim de pesagem obrigatória."
    ],
    "answer": 2
  },
  {
    "question": "Após a devida constatação da condução de veículo sob o efeito do álcool, será lavrado o auto de infração e adotadas as providências de:",
    "options": [
      "Medidas administrativas previstas no CTB.",
      "Medidas paliativas.",
      "Medidas judiciais.",
      "Todas as alternativas acima estão corretas."
    ],
    "answer": 0
  },
  {
    "question": "Após uma forte chuva você está trafegando por uma avenida e passa sobre uma poça d’água molhando alguns pedestres na calçada. Essa atitude é considerada pelas autoridades como:",
    "options": [
      "Uma brincadeira de mau gosto.",
      "Um grande desrespeito pelos pedestres.",
      "Uma infração leve sujeito somente a uma advertência verbal.",
      "Uma infração média com penalidade de multa."
    ],
    "answer": 3
  },
  {
    "question": "Caso a defesa prévia seja indeferida ou não apresentada, a autoridade de trânsito deverá aplicar a penalidade e notificar o proprietário do veículo em no máximo __________.",
    "options": [
      "15 dias.",
      "60 dias.",
      "30 dias.",
      "180 dias."
    ],
    "answer": 3
  },
  {
    "question": "Ao __________ caberá sempre a responsabilidade pela infração referente às características e componentes agregados do veículo, habilitação legal e compatível de seus condutores, quando esta for exigida. Assinale a alternativa que completa a questão:",
    "options": [
      "Transportador.",
      "Proprietário.",
      "Condutor.",
      "Passageiro."
    ],
    "answer": 1
  },
  {
    "question": "Avançar o sinal vermelho do semáforo ou de parada obrigatória é infração ___________, gerando como penalidade ___________.",
    "options": [
      "Grave; multa (três vezes).",
      "Grave; multa.",
      "Gravíssima; multa.",
      "Gravíssima; multa (três vezes)."
    ],
    "answer": 2
  },
  {
    "question": "Conduzir bicicleta em passeios onde não seja permitida a circulação desta, ou de forma agressiva, é infração ________ gerando como medida administrativa ________.",
    "options": [
      "Leve; retenção da bicicleta.",
      "Grave; remoção da bicicleta.",
      "Média; retenção da bicicleta.",
      "Média; remoção da bicicleta."
    ],
    "answer": 3
  },
  {
    "question": "Buzinar em locais e horários proibidos por sinalização acarretará _________ e é uma infração _________.",
    "options": [
      "Advertência por escrito; leve.",
      "Multa; leve.",
      "Multa grave; retenção do veículo.",
      "Advertência verbal; recolhimento da habilitação."
    ],
    "answer": 1
  },
  {
    "question": "Conduzir o veículo sem os documentos de porte obrigatório, acarretará:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa e retenção do veículo para regularização.",
      "Multa e apreensão da CNH.",
      "Multa apenas."
    ],
    "answer": 1
  },
  {
    "question": "É considerado crime de trânsito:",
    "options": [
      "Dirigir com a CNH cassada ou com o direito de dirigir suspenso, gerando perigo de dano.",
      "Violar a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir.",
      "Deixar o condutor de prestar ou providenciar socorro à vítima de acidente de trânsito, podendo fazê-lo.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "É infração grave:",
    "options": [
      "Conduzir o veículo sem os documentos de porte obrigatório.",
      "Deixar de dar preferência de passagem a veículos que vier da direita.",
      "Conduzir veículos com dispositivo antirradar.",
      "Avançar o sinal de parada obrigatória."
    ],
    "answer": 1
  },
  {
    "question": "Deixar de dar preferência de passagem a veículo que vier pela direita em interseção não sinalizada é considerado infração de natureza:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 2
  },
  {
    "question": "Dirigir com CNH ou PPD de categoria diferente da do veículo que esteja conduzindo, terá como penalidade e medida administrativa:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa (2 vezes) e retenção do veículo.",
      "Advertência por escrito ao proprietário do veículo e recolhimento do documento de habilitação.",
      "Apreensão do veículo e recolhimento da Carteira Nacional de Habilitação."
    ],
    "answer": 1
  },
  {
    "question": "Deixar de dar passagem pela esquerda, quando solicitado, é infração:",
    "options": [
      "Média.",
      "Leve.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 0
  },
  {
    "question": "Dirigir o veículo usando calçado que não se firme nos pés ou comprometa a utilização dos pedais, é infração:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
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
  motivacao.textContent = "💡 Dica: Se errar, leia a questão completa e memorize a correta.";
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
