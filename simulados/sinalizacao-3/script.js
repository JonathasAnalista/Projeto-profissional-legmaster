
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
    "question": "A faixa de travessia de pedestre é um tipo de marca que denomina se:",
    "options": ["Horizontal e transversal", "Vertical e transversal", "Horizontal e paralela", "Vertical e paralela"],
    "answer": 0
  },
  {
    "question": "Qual as cores e formato das placas educativas?",
    "options": ["Vermelha e branca, circular", "Branca e preta, retangular", "Amarela e preta, quadrada", "Verde e azul, quadrada"],
    "answer": 1
  },
  {
    "question": "Na sinalização horizontal a cor utilizada para regulação de fluxos de sentidos opostos é:",
    "options": ["Azul", "Vermelho", "Branca", "Amarela"],
    "answer": 3
  },
  {
    "question": "As placas indicativas de sentido (direção) e de distância, de forma retangular, são apresentadas nas cores:",
    "options": ["Verde e azul", "Preta e verde", "Preta e branca", "Branca e azul"],
    "answer": 0
  },
  {
    "question": "As linhas de divisão de fluxos opostos que sinalizam proibição de ultrapassagem são:",
    "options": ["contínuas, simples ou duplas, na cor branca", "contínuas, simples ou duplas, na cor amarela", "tracejadas, simples ou duplas, na cor amarela", "tracejadas, simples ou duplas, na cor branca"],
    "answer": 1
  },
  {
    "question": "A placa no formato octogonal é uma placa de regulamentação! Qual o significado dela?",
    "options": ["Atenção pare!", "Parada obrigatória", "Oito faixas no mesmo sentido, apenas", "Pare a direita"],
    "answer": 1
  },
  {
    "question": "As placas que indicam para os usuários da via que ali pode dispor de serviços indicados, são placas indicativas de serviços:",
    "options": ["de apoio", "de ajuda", "complementares", "auxiliares"],
    "answer": 3
  },
  {
    "question": "De que qual cor é pintado a ciclovia ou a ciclofaixa?",
    "options": ["amarelo", "verde", "vermelho", "azul"],
    "answer": 2
  },
  {
    "question": "As placas com as cores verde e amarela da Bandeira Nacional são usadas pelos veículos de representação pessoal do(s):",
    "options": ["Governadores.", "Presidente e Vice-Presidente da República.", "Prefeitos.", "Secretários municipais."],
    "answer": 1
  },
  {
    "question": "Qual o formato das placas de regulamentação:",
    "options": ["Hexagonal", "Circular", "Quadrada", "Octogonal"],
    "answer": 1
  },
  {
    "question": "A sinalização horizontal é composta por cinco cores:",
    "options": ["branca, preta, azul, marrom e amarela", "azul, amarela, preta, branca e cinza", "amarela, verde, vermelha, preta e branca", "amarela, branca, vermelha, azul e preta"],
    "answer": 3
  },
  {
    "question": "Dispositivo de reflexão e refração da luz utilizado na sinalização de vias e veículos denomina-se:",
    "options": ["Olho de Gato.", "Catadióptrico.", "Indicadores luminosos.", "Tachão de asfalto"],
    "answer": 1
  },
  {
    "question": "Na sinalização horizontal as cores também passam informações. A cor que passa informação de que a via é uma via de mão única (sentido único) e permite o estacionamento é a cor:",
    "options": ["azul", "amarela", "preta", "branca"],
    "answer": 3
  },
   {
    "question": "Para os veículos seguir, quantos silvos breves o agente deve dar?",
    "options": ["Um silvo breve.", "Três silvos breves.", "Dois silvos breves.", "Um silvo longo."],
    "answer": 0
  },
  {
    "question": "As placas indicativas de serviços auxiliares tornam se mais necessárias nas vias:",
    "options": ["Rurais, onde os serviços forem escassos.", "Urbanas, devido ao excesso destes serviços.", "Rurais e urbanas, obrigatoriamente, sem distinção.", "De trânsito rápido, onde não houver acessos especiais"],
    "answer": 0
  },
  {
    "question": "Quando o condutor de veículo estende o braço esquerdo para fora do veículo, na posição horizontal, está indicando que:",
    "options": ["Vai dobrar à esquerda.", "Vai parar o seu veículo.", "O condutor à sua retaguarda pode ultrapassá-lo.", "Vai dar preferência de passagem para o veículo que está a sua esquerda."],
    "answer": 0
  },
  {
    "question": "Relativamente à hierarquia das leis de trânsito, podemos dizer:",
    "options": ["A placa de 'parada obrigatória' e a placa de 'dê a preferência' dão informações semelhantes.", "O policial de trânsito não é superior à sinalização da via.", "A placa de 'dê a preferência' determina uma parada obrigatória.", "O policial de trânsito deverá ser atendido nas determinações que facilite o fluxo de veículos, mesmo contrariando a sinalização da via."],
    "answer": 3
  },
  {
    "question": "Em local sinalizado com linha de divisão simples seccionada, o condutor:",
    "options": ["Não poderá ultrapassar.", "Deverá aumentar a velocidade.", "Poderá efetuar ultrapassagem.", "Não poderá transitar."],
    "answer": 2
  },
  {
    "question": "A mensagem “Respeite a Sinalização” está escrita nas placas:",
    "options": ["De advertência.", "De regulamentação.", "De serviços auxiliares.", "Educativas."],
    "answer": 3
  },
  {
    "question": "De acordo com os sinais sonoros abaixo relacionados, marque a resposta que corresponda a determinação do agente em parar o veículo:",
    "options": ["Um silvo breve.", "Três silvos breves.", "Dois silvos breves.", "Um silvo longo."],
    "answer": 2
  },
  {
    "question": "A sinalização de regulamentação tem por finalidade:",
    "options": ["Informar aos usuários as condições, proibições, obrigações ou restrições no uso das vias.", "Alertar aos usuários da via sobre condições potencialmente perigosas, indicando sua natureza.", "Identificar as vias, os destinos e os locais de interesse, percursos, os destinos, as distâncias e os serviços auxiliares.", "Educar o usuário da via."],
    "answer": 0
  },
  {
    "question": "A sinalização horizontal é classificada em:",
    "options": ["Marcas transversais e semáforo.", "Inscrições no pavimento e placas de regulamentação.", "Marcas longitudinais, transversais, canalização, delimitação e controle de estacionamento e/ou parada e inscrições no pavimento.", "Marcas longitudinais e placas de advertência."],
    "answer": 2
  },
  {
    "question": "É infração de trânsito a desobediência a qualquer dos sinais inscritos nas placas de:",
    "options": ["Regulamentação.", "Indicação.", "Educativas.", "Advertência."],
    "answer": 0
  },
  {
    "question": "Numa via cujas faixas de tráfego sejam separadas por linhas brancas, podemos dizer que:",
    "options": ["É uma via de mão única.", "É uma via de mão dupla.", "É uma estrada.", "É uma ciclovia."],
    "answer": 0
  },
  {
    "question": "As mensagens expressas nas placas de sinalização de advertência são de caráter de:",
    "options": ["Ordem.", "Informação.", "Alerta.", "Educação."],
    "answer": 2
  },
  {
    "question": "As linhas seccionadas ou contínuas, as faixas para pedestres, os sinais e as palavras inscritas no solo, são marcas que caracterizam a sinalização:",
    "options": ["Vertical.", "Horizontal.", "Por gestos.", "Por barreiras."],
    "answer": 1
  },
  {
    "question": "Mensagens adicionais podem ser incorporadas às placas de sinalização de regulamentação e de advertência. Estas mensagens são denominadas:",
    "options": ["Informações complementares.", "Informações especializadas.", "Mensagens avulsas.", "Comunicados extras."],
    "answer": 0
  },
  {
    "question": "As placas de sinalização, quanto à sua função classificam-se em:",
    "options": ["De regulamentação, advertência e indicação.", "De regulamentação, semafórica e indicação.", "De regulamentação, semafórica e advertência.", "De serviços auxiliares, advertência e faixa de proteção para pedestres"],
    "answer": 0
  },
  {
    "question": "O condutor ao avistar cones de cores branca refletiva e laranja na via entende que tem:",
    "options": ["Obras na via", "Acidente na via", "Desfile sete de setembro", "Disputa de corrida de carros potentes"],
    "answer": 0
  },
  {
    "question": "Um silvo longo significa:",
    "options": ["Pare", "Diminua a marcha", "Siga", "Atenção, pare!"],
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
