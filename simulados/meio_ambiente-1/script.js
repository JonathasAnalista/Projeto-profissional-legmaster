
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
        "question": "A destruição da Camada de Ozônio propicia:",
        "options": [
            "Aquecimento global",
            "O aumento da incidência direta de raios solares sobre a terra",
            "Aumento da poluição",
            "Inversão térmica"
        ],
        "answer": 1
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
        "question": "A partir de quantos decibéis, tornam-se irreversíveis os males à saúde humana?",
        "options": [
            "80 decibéis.",
            "60 decibéis.",
            "90 decibéis.",
            "120 decibéis."
        ],
        "answer": 2
    },
    {
        "question": "Alguns dispositivos existentes em seu veículo têm a finalidade de diminuir a poluição lançada ao ambiente. Qual dispositivo não agrega às funções acima mencionadas?",
        "options": [
            "A injeção eletrônica.",
            "A sonda lambda.",
            "O catalisador.",
            "O carburador."
        ],
        "answer": 3
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
        "question": "Assinale a alternativa incorreta. A matéria prima para produção do álcool (etanol) no Brasil é:",
        "options": [
            "Cana-de-açúcar.",
            "Milho.",
            "Metanol.",
            "Eucalipto."
        ],
        "answer": 2
    },
    {
        "question": "Conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
        "options": [
            "Acelerador de moléculas binárias opostas aos gases de escapamento.",
            "Filtro dos gases do escapamento que separa o vapor dos gases.",
            "Transforma os gases tóxicos mais nocivos.",
            "Transformador dos gases tóxicos em gases não-nocivos ao meio ambiente"
        ],
        "answer": 3
    },
    {
        "question": "É o gás incolor, sem cheiro ou gosto, resultante da queima incompleta de combustíveis:",
        "options": [
            "O monóxido de carbono.",
            "Os hidrocarbonetos.",
            "Os óxidos de nitrogênio.",
            "O gás de ozônio."
        ],
        "answer": 0
    },

     {
        "question": "O gás clorofluorcarbono (CFC) utilizado como propelente em vários tipos de sprays, chips de computadores e solventes usados pela indústria eletrônica. É um dos poluentes responsáveis pela ocorrência:",
        "options": [
            "Do aumento de temperatura.",
            "Da redução da camada de ozônio.",
            "Da chuva ácida.",
            "Do efeito estufa."
        ],
        "answer": 1
    },
    {
        "question": "Os ruídos emitidos pelo funcionamento do motor de um veículo são controlados pelo:",
        "options": [
            "Carburador.",
            "Radiador.",
            "Silenciador.",
            "Catalisador."
        ],
        "answer": 2
    },
    {
        "question": "O aquecimento global está associado ao efeito estufa por conta do desmatamento e gases poluentes, onde fica aprisionado o calor que é emitido no planeta terra?",
        "options": [
            "Na parte inferior do planeta",
            "Na parte superior do planeta",
            "No centro do planeta abaixo das nuvens",
            "No universo próximo a terra"
        ],
        "answer": 1
    },
    {
        "question": "São distúrbios provocados em seres humanos causados pela exposição em excesso ao ruído:",
        "options": [
            "deficiências auditivas",
            "irritabilidade e agressividade",
            "insônia, agitação e dispersão",
            "todas as afirmativas estão corretas"
        ],
        "answer": 3
    },
    {
        "question": "A maior causa de poluição do ar nas cidades é decorrência do(a)",
        "options": [
            "atividade industrial na produção de automóveis",
            "trânsito de veículos automotores",
            "atividade industrial em geral",
            "aumento da circulação de bicicletas"
        ],
        "answer": 1
    },
    {
        "question": "Dispositivo destinado ao controle de ruído do motor é equipamento obrigatório para veículos:",
        "options": [
            "Reboques ou semirreboques.",
            "De propulsão humana e de tração animal.",
            "Automotores (motores a combustão).",
            "Elétricos."
        ],
        "answer": 2
    },
    {
        "question": "Substâncias infectantes são aquelas que:",
        "options": [
            "Alteram sua propriedade com o calor",
            "Contém micro-organismos infecciosos",
            "Contém corrosivos",
            "Liberam gás carbônico"
        ],
        "answer": 1
    },
    {
        "question": "O meio ambiente engloba em seus estudos gerais:",
        "options": [
            "O homem, a natureza e os catalisadores.",
            "O homem, a natureza e os poluentes.",
            "O homem, as perspectivas teóricas e as mutações da fauna.",
            "O homem, a natureza e seus elementos"
        ],
        "answer": 3
    },
    {
        "question": "Dos elementos abaixo, jogados pelo condutor em via pública, qual deles demora mais tempo para se decompor?",
        "options": [
            "Plástico.",
            "Papel.",
            "Papelão.",
            "Fumo de cigarro."
        ],
        "answer": 0
    },
    {
        "question": "Não jogue pontas de cigarro nas estradas. Elas podem provocar:",
        "options": [
            "Derrapagem.",
            "Incêndios florestais.",
            "Contaminação das águas.",
            "Explosão em contato com o asfalto."
        ],
        "answer": 1
    },

    {
        "question": "Os veículos que apresentam maior potencial de poluição do ar são aqueles:",
        "options": [
            "Que utilizam como combustíveis o diesel ou a gasolina.",
            "Que utilizam o sistema elétrico.",
            "Movidos a propulsão humana.",
            "Movidos a tração animal."
        ],
        "answer": 0
    },
    {
        "question": "O que é cidadania?",
        "options": [
            "É o direito à proteção, crescimento, ser reconhecido e tratado com dignidade sem preconceitos, com direitos civis, políticos e sociais.",
            "São as leis de quem mora na cidade.",
            "É o direito de falar o que quiser.",
            "É aquele cidadão que prestou serviço militar."
        ],
        "answer": 0
    },
    {
        "question": "O atropelamento é o tipo de acidente de trânsito que mais atinge crianças na grande Belo Horizonte. No HPS, em 2006, 21 crianças morreram vítimas de acidentes de trânsito. São causas de atropelamento:",
        "options": [
            "Descuido dos pedestres.",
            "Pedestre \"provocador\" e condutor mal-educado.",
            "Falta de educação para a segurança no trânsito.",
            "Todas as afirmativas acima estão corretas."
        ],
        "answer": 3
    },
    {
        "question": "O excesso de anúncios afixados em pontos estratégicos é uma poluição:",
        "options": [
            "Dispersiva.",
            "Visual.",
            "Provocativa.",
            "Deficiente."
        ],
        "answer": 1
    },
    {
        "question": "É uma vantagem da utilização do álcool (Etanol) como combustível:",
        "options": [
            "Maior consumo por quilômetro rodado.",
            "Apresenta problemas menores quando na partida a frio.",
            "Menos poluente.",
            "Diminui a corrosão interna do motor."
        ],
        "answer": 2
    },
    {
        "question": "Aplicar boas relações humanas no trânsito é também:",
        "options": [
            "Conversar bastante com os passageiros.",
            "Cumprimentar todos que estão na via.",
            "Ceder sempre a sua vez aos outros.",
            "Ser tolerante com os erros dos outros, priorizando sempre o aspecto segurança."
        ],
        "answer": 3
    },
    {
        "question": "A poluição visual contribui para:",
        "options": [
            "Irritar e provocar mudanças de comportamento ao motorista.",
            "Intoxicar o ambiente.",
            "Desviar a atenção de pedestres e motoristas.",
            "Motoristas e pedestres circularem desordenadamente."
        ],
        "answer": 2
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
        "question": "Não constitui efeitos danosos do ruído:",
        "options": [
            "Insônia.",
            "Efeito estufa.",
            "Irritabilidade.",
            "Dores de cabeça."
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
