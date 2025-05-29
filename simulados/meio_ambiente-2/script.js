
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
    "question": "As inspeções periódicas de emissão de gases, nos veículos automotores e indústrias, podem ajudar a melhorar as condições de vida dos habitantes dos centros urbanos, pois objetivam:",
    "options": [
      "Contribuir para a segurança dos veículos.",
      "Reduzir as emissões dos poluentes.",
      "Diminuir o desgaste do motor.",
      "Diminuir a emissão de ozônio."
    ],
    "answer": 1
  },
  {
    "question": "Substâncias corrosivas são aquelas:",
    "options": [
      "Que causam danos ambientais.",
      "Que não apresentam riscos para os seres vivos.",
      "Que não contém micro-organismos infecciosos.",
      "Que não oferecem perigo em contato com a pele."
    ],
    "answer": 0
  },
  {
    "question": "Os rótulos de risco são usados nos veículos destinados ao transporte de:",
    "options": [
      "Produtos artesanais.",
      "Cargas indivisíveis.",
      "Cargas perecíveis.",
      "Produtos perigosos."
    ],
    "answer": 3
  },
  {
    "question": "Um dos principais problemas urbanos é o excesso de emissão de ruídos (poluição sonora). Os proprietários de veículos podem ajudar na redução deste problema, desde que:",
    "options": [
      "Regulem periodicamente o motor.",
      "Mantenham o silenciador em bom estado.",
      "Não utilizem livremente os dispositivos sonoros dos veículos.",
      "Todas as respostas estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "O órgão coordenador do meio ambiente em todo Território Nacional é:",
    "options": [
      "o INMETRO.",
      "o CONAMA.",
      "o DETRAN.",
      "a SENATRAN."
    ],
    "answer": 1
  },
  {
    "question": "Nas grandes cidades, as principais fontes de poluição do ar são:",
    "options": [
      "As queimadas.",
      "A queima de carvão.",
      "Os automóveis e as indústrias.",
      "Os incineradores."
    ],
    "answer": 2
  },
  {
    "question": "Exercer a cidadania é, dentre outros:",
    "options": [
      "Manter sempre os faróis altos acesos.",
      "Jogar lixo ou qualquer objeto pela janela do veículo.",
      "Danificar as plantações às margens das vias rurais.",
      "Preservar a natureza, usufruindo dos recursos que nos é dado."
    ],
    "answer": 3
  },
  {
    "question": "Quando o acidente envolve cargas perigosas e liberação de produtos químicos no meio ambiente, deve-se primeiramente:",
    "options": [
      "Isolar rapidamente o local, avaliar os riscos secundários e para si mesmo, depois tentar o socorro.",
      "Acionar um caminhão pipa para jogar água, limpar e liberar rapidamente a rodovia.",
      "Tentar liberar parte da rodovia sinalizando o local.",
      "Se não houver risco de explosão, socorrer as vítimas sem outros receios."
    ],
    "answer": 0
  },
  {
    "question": "A chuva ácida provoca:",
    "options": [
      "Crescimento das florestas.",
      "Derretimento das calotas polares.",
      "Desertificação.",
      "Conservação das estruturas de metálicas."
    ],
    "answer": 2
  },
  {
    "question": "O condutor para transportar um produto perigoso deve passar pelo Curso de Treinamento, denominado:",
    "options": [
      "DD - Direção Defensiva, somente.",
      "TPP – Transporte de Produtos Perigosos.",
      "PS - Primeiros Socorros, apenas.",
      "MA - Meio Ambiente, somente."
    ],
    "answer": 1
  },
  {
    "question": "O meio ambiente engloba em seus estudos gerais:",
    "options": [
      "O homem, a natureza e os catalisadores.",
      "O homem, a natureza e os poluentes.",
      "O homem, as perspectivas teóricas e as mutações da fauna.",
      "O homem, a natureza e seus elementos."
    ],
    "answer": 3
  },
  {
    "question": "São fatores que contribuem para melhorar o meio ambiente:",
    "options": [
      "Redução de gases poluentes através da colocação de filtros.",
      "Fazer manutenção periódica no veículo.",
      "Reciclagem de materiais.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "A má conservação e a regulagem inadequada dos veículos:",
    "options": [
      "Contribuem, principalmente, para a poluição do ar e a poluição sonora.",
      "Contribuem para a poluição da água, apenas.",
      "Não agridem o meio ambiente.",
      "Acarretam, única e exclusivamente, o desgaste do veículo."
    ],
    "answer": 0
  },
  {
    "question": "Somos cidadãos, quando:",
    "options": [
      "Percebemos atitudes inadequadas dos outros e ignoramos as nossas.",
      "Buzinamos para avisar o condutor da frente que o sinal está aberto.",
      "Temos um comportamento positivo e eficaz, contribuindo para a segurança de todos.",
      "Só estacionamos em local proibido quando por alguns segundos."
    ],
    "answer": 2
  },
  {
    "question": "A partir de quantos decibéis, tornam-se irreversíveis os males à saúde humana?",
    "options": [
      "80 decibéis.",
      "60 decibéis.",
      "100 decibéis.",
      "120 decibéis."
    ],
    "answer": 2
  },
  {
    "question": "Assinale a alternativa correta. Dos elementos abaixo citados, não contribui para a poluição do ar:",
    "options": [
      "Fuligem.",
      "Vapor de água.",
      "Queimadas.",
      "Monóxido de carbono."
    ],
    "answer": 1
  },
  {
    "question": "A cidadania no trânsito pode ser definida como:",
    "options": [
      "Ato de transitar na via pública, comportando-se como lhe convier.",
      "Acesso ilimitado aos direitos estabelecidos, sem observar os deveres impostos.",
      "O exercício dos direitos que o Código de Trânsito Brasileiro lhe proporciona, bem como o respeito aos deveres impostos.",
      "Comportamento humano que não causa prejuízos a terceiros, mesmo que contrário à legislação vigente."
    ],
    "answer": 2
  },
  {
    "question": "A educação para o trânsito é um direito de todos e tem por finalidade primordial:",
    "options": [
      "A formação dos infratores contumazes.",
      "Reciclar os trabalhadores da área de trânsito.",
      "Educar o comportamento dos condutores e pedestres para que haja respeito e cidadania no trânsito.",
      "Treinar candidatos à obtenção da CNH."
    ],
    "answer": 2
  },
  {
    "question": "Os gases emitidos pelos veículos são perigosos para a saúde da humanidade porque podem:",
    "options": [
      "Causar irritação nos olhos e garganta.",
      "Agravar moléstias respiratórias como asma e bronquite.",
      "Provocar dores de cabeça e enjoo.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 3
  },
  {
    "question": "O veículo automotor, para não poluir o ambiente, precisa trafegar:",
    "options": [
      "Emitindo gases poluentes acima do permitido.",
      "Emitindo fuligem.",
      "Com o motor regulado.",
      "Com o sistema de escapamento danificado."
    ],
    "answer": 2
  },
  {
    "question": "A emissão de sons, ruídos e vibrações que prejudicam a saúde e o bem-estar público, estão relacionados com a:",
    "options": [
      "Poluição sonora.",
      "Poluição do solo.",
      "Poluição da água.",
      "Poluição do ar."
    ],
    "answer": 0
  },
  {
    "question": "O trânsito em condições seguras é um direito:",
    "options": [
      "Dos pedestres.",
      "Dos motoristas de transporte coletivo.",
      "De todos, e dever dos órgãos e entidades componentes do Sistema Nacional de Trânsito.",
      "Dos animais."
    ],
    "answer": 2
  },
  {
    "question": "Agir com cortesia e solidariedade no trânsito significa:",
    "options": [
      "Fazer novos amigos.",
      "Respeitar os direitos dos outros usuários das vias e ser tolerante.",
      "Dar passagem aos outros condutores, ainda que o sinal esteja aberto para você.",
      "Sair do veículo e ajudar os pedestres a atravessar a rua."
    ],
    "answer": 1
  },
  {
    "question": "Alguns dispositivos existentes em seu veículo têm a finalidade de diminuir a poluição lançada ao ambiente. Isso é feito através da redução do consumo de combustível e melhor controle na emissão de gases poluentes. Qual dispositivo não agrega às funções acima mencionadas?",
    "options": [
      "A injeção eletrônica.",
      "A sonda lambda.",
      "O catalisador.",
      "O carburador."
    ],
    "answer": 3
  },
  {
    "question": "Respirar a fumaça produzida por caminhões ônibus e automóveis, traz prejuízos à saúde humana. Como o Código de Trânsito Brasileiro prevê ações que evitem esses danos?",
    "options": [
      "Controlando as emissões de gases e de ruídos.",
      "Determinando o uso de máscaras.",
      "Determinando rodízio nos grandes centros urbanos.",
      "Incentivando o uso de veículos a diesel."
    ],
    "answer": 0
  },
  {
    "question": "O CONAMA e as agências ambientais do Estado e Município têm como principais preocupações:",
    "options": [
      "A conservação dos equipamentos de segurança das estradas.",
      "A orientação do fluxo de veículos nas vias urbanas.",
      "A fiscalização da produção de veículos.",
      "A defesa da saúde e do meio ambiente."
    ],
    "answer": 3
  },
  {
    "question": "Com relação ao meio ambiente, as queimadas provocam:",
    "options": [
      "Reflorestamento natural.",
      "Aumento da emissão de gás carbônico.",
      "Insônia.",
      "Aumento dos clorofluorcarbonetos."
    ],
    "answer": 1
  },
  {
    "question": "A poluição do ar causa problemas de saúde que resultam, principalmente, em:",
    "options": [
      "Doenças do aparelho digestivo.",
      "Doenças respiratórias.",
      "Alterações visuais.",
      "Doenças do aparelho locomotor."
    ],
    "answer": 1
  },
  {
    "question": "A poluição característica dos veículos automotores movidos a óleo diesel é forte emissão de:",
    "options": [
      "Ozônio.",
      "Gás carbônico.",
      "Monóxido de carbono.",
      "Fumaça preta."
    ],
    "answer": 3
  },
  {
    "question": "Não constitui efeitos danosos do ruído:",
    "options": [
      "Insônia.",
      "Efeito estufa.",
      "Irritabilidade.",
      "Dores de cabeça."
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
