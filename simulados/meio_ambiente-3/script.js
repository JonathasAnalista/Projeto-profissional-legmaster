// ✅ Carrega dados do usuário da plataforma
const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

window.currentUser = {
  email: usuarioSalvo.email || null,
  nome: usuarioSalvo.nome || "Desconhecido"
};

console.log("Usuário carregado:", window.currentUser);





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
        "question": "Assinale a alternativa correta. Dos elementos abaixo citados, não contribui para a poluição do ar.",
        "options": ["Fuligem.", "Queimadas.", "Monóxido de Carbono.", "Vapor d’água."],
        "answer": 3
    },
    {
        "question": "No interior de túneis extensos, é aconselhável instalar exaustores, porque nesse ambiente acumulam-se:",
        "options": ["Partículas de fumaça somente.", "Gases tóxicos, somente.", "Partículas de vapor d’água, somente.", "Gases e partículas de fumaça."],
        "answer": 3
    },
    {
        "question": "A destruição da Camada de Ozônio propicia:",
        "options": ["Aquecimento global.", "O aumento de incidência direta de raios solares sobre a Terra.", "Aumento da poluição.", "Inversão térmica."],
        "answer": 1
    },
    {
        "question": "Os rótulos de segurança de produtos perigosos são regulamentados:",
        "options": ["Pelo CONTRAN.", "Pela ONU.", "Pelo CONAMA.", "Pelo DETRAN."],
        "answer": 1
    },
    {
        "question": "Os aldeídos são gerados:",
        "options": ["Pela queima incompleta de combustíveis.", "Pelo efeito estufa.", "Através da queima de álcool como combustível.", "Pela dosagem errada de combustível no cilindro."],
        "answer": 2
    },
    {
        "question": "São componentes antipoluentes dos veículos, exceto:",
        "options": ["Cânister.", "Catalisador.", "Injeção eletrônica.", "Diferencial."],
        "answer": 3
    },
    {
        "question": "São tipos de poluição causados pelo veículo:",
        "options": ["Sonora e radioativa.", "Atmosférica e da água.", "Sonora e da água.", "Sonora e atmosférica."],
        "answer": 3
    },
    {
        "question": "Nos veículos é proibida a utilização de equipamento sonoro não obrigatório que produza __:",
        "options": ["Som acima de 80 decibéis.", "Som acima de 120 decibéis.", "Qualquer volume de som audível pelo lado externo.", "Som acima de 60 decibéis."],
        "answer": 2
    },
    {
        "question": "São gases que se combinam com o vapor d’água e formam a chuva ácida.",
        "options": ["Óxido de nitrogênio e dióxido de enxofre.", "Aldeído e hidrocarboneto.", "Monóxido e dióxido de carbono.", "Oxigênio e ozônio."],
        "answer": 0
    },
    {
        "question": "Sobre o efeito estufa, marque a alternativa correta.",
        "options": ["É o resfriamento das camadas inferiores da atmosfera.", "É o sinônimo da camada de ozônio.", "É o aquecimento das camadas inferiores da atmosfera.", "Todas as alternativas estão corretas."],
        "answer": 2
    },
    {
        "question": "Nos veículos mais modernos, o carburador vem sendo substituído por:",
        "options": ["Ignição eletrônica.", "Distribuidor e bobina.", "Ligação direta.", "Injeção eletrônica."],
        "answer": 3
    },
    {
        "question": "Não é matéria prima para produção de álcool (Etanol) no Brasil:",
        "options": ["Milho.", "Eucalipto.", "Semente de Girassol.", "Cana de açúcar."],
        "answer": 2
    },
    {
        "question": "Os produtos perigosos que espalham fragmentos por até 600 metros são os:",
        "options": ["Corrosivos.", "Explosivos.", "Radioativos.", "Tóxicos."],
        "answer": 1
    },
    {
        "question": "Os veículos que apresentam maior potencial para poluição do ar são aqueles:",
        "options": ["Movidos a diesel.", "Movidos a gás natural.", "Movidos a tração animal.", "Movidos a propulsão humana."],
        "answer": 0
    },
    {
        "question": "A segurança no trânsito é um direito:",
        "options": ["Dos pedestres.", "De todo cidadão.", "Dos ciclistas.", "Dos motociclistas."],
        "answer": 1
    },
    {
        "question": "Os produtos perigosos serão identificados nos veículos que os transportam pelo:",
        "options": ["Adesivo com logomarca da empresa.", "Rótulo de risco e painel de segurança, com a numeração conforme a ONU.", "Nome do motorista escrito externamente pelo veículo.", "Painel de segurança, somente."],
        "answer": 1
    },
    {
        "question": "São deveres do motorista que pratica a cidadania, exceto:",
        "options": ["Preservar o meio ambiente, não jogando lixo nas vias públicas.", "Facilitar a ultrapassagem dos outros condutores.", "Favorecer-se do local do sinistro, caso não seja o culpado.", "Praticar a direção defensiva, visando a segurança no trânsito."],
        "answer": 2
    },
    {
        "question": "O controle de emissão de gases e de ruídos, previsto no CTB é:",
        "options": ["Obrigatório a todo veículo automotor.", "Uma medida opcional.", "Necessária para caminhão e ônibus apenas.", "Uma medida não necessária."],
        "answer": 0
    },
    {
        "question": "Os veículos automotores são responsáveis pela produção de boa parte dos gases nocivos à saúde humana presentes na atmosfera. O que pode potencializar essa poluição?",
        "options": ["Combustíveis de baixa qualidade.", "Motores desregulados.", "O uso excessivo dos veículos.", "Todas estão corretas."],
        "answer": 3
    },
    {
        "question": "O veículo produz gases que são nocivos ao meio ambiente, mas, de que outras maneiras ele também contribui negativamente com o meio ambiente?",
        "options": ["Com o descarte de materiais como pneus e baterias.", "Com a produção excessiva de clorofluorcarbono.", "Com a poluição sonora, provocada pelo ruído dos veículos.", "As opções A e C estão corretas."],
        "answer": 3
    },
    {
        "question": "São órgãos responsáveis pelo controle ambiental, exceto:",
        "options": ["FUNAI.", "CONAMA.", "PROCONVE.", "IBAMA."],
        "answer": 0
    },
    {
        "question": "A emissão de fumaça preta por veículos movidos a óleo diesel é um dos principais problemas ambientais nas áreas urbanas porque esse poluente:",
        "options": [
            "Contém minúsculas partículas inaláveis de fuligem envolvidas por óleo altamente tóxico.",
            "Causa doenças respiratórias por seu alto teor de dióxido de carbono.",
            "Provoca ataques cardíacos por seu elevado conteúdo com monóxido de carbono.",
            "Causa irritação nos olhos e lacrimejamento, levando à perda progressiva da visão."
        ],
        "answer": 0
    },
    {
        "question": "De que forma o motorista pode colaborar para preservação do meio ambiente?",
        "options": ["Sujando as ruas.", "Jogando objetos pela janela do veículo.", "Levando saquinhos dentro do veículo para guardar o lixo.", "Nenhuma das respostas."],
        "answer": 2
    },
    {
        "question": "As inspeções de emissões de gases e ruídos melhoram as condições de vida por que:",
        "options": ["Identificam os veículos que estão em desacordo para reparação.", "Diminuem o desgaste do motor.", "Reduzem a emissão de gases poluentes.", "Reduzem o custo de manutenção dos veículos."],
        "answer": 0
    },
    {
        "question": "Respirar a fumaça preta produzida por caminhões, ônibus e automóveis, traz prejuízos à saúde humana. Como podemos melhorar tal situação?",
        "options": ["Determinando o uso de máscaras.", "Usando mais combustíveis fósseis.", "Incentivando o uso de veículos a diesel.", "Mantendo os motores bem regulados."],
        "answer": 3
    },
    {
        "question": "Nas grandes cidades, as principais fontes de poluição do ar são:",
        "options": ["A queima do carvão.", "Nos interiores.", "Os veículos automotores e as indústrias.", "As queimadas."],
        "answer": 2
    },
    {
        "question": "A má conservação e a regulagem inadequada dos veículos:",
        "options": [
            "Contribuem apenas para a poluição da água, apenas.",
            "Contribuem para a poluição do solo, apenas.",
            "Não agridem o meio ambiente.",
            "Contribuem, principalmente, para a poluição do ar e a poluição sonora."
        ],
        "answer": 3
    },
    {
        "question": "A contaminação do ar por partículas originadas pelo funcionamento dos motores de combustão interna gera:",
        "options": ["Poluição atmosférica.", "Poluição sonora.", "Chuva ácida.", "Ocorrência de fenômenos."],
        "answer": 0
    },
    {
        "question": "São ações do condutor cidadão:",
        "options": [
            "Conhecer e respeitar as Normas de Trânsito e o direito dos outros, bem como preservar o meio ambiente.",
            "Ser amigável, cordial, tolerante e cooperativo com os demais usuários da via, relevando erros e defeitos dos demais.",
            "Não possuir autocritica, pois o condutor bem formado está sempre com a razão.",
            "As opções “a” e “b” estão corretas."
        ],
        "answer": 3
    },
    {
        "question": "Além dos males causados pela poluição do ar por veículos, assinale a alternativa que corresponde à consequência da chuva ácida:",
        "options": ["Corrosão em metais.", "Tortura.", "Dor de cabeça.", "Edema pulmonar."],
        "answer": 0
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

function salvarDesempenho(prova, acertos) {
  const email = window.currentUser?.email;
  if (!email) return;

  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");

  if (!desempenho[email]) {
    desempenho[email] = [];
  }

  desempenho[email].push({
    prova,
    acertos,
    data: new Date().toLocaleString("pt-BR")
  });

  localStorage.setItem("desempenho", JSON.stringify(desempenho));
}


function showResult() {
  // Esconde o quiz e exibe o resultado
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");

  const totalQuestoes = questions.length;
  const porcentagem = Math.round((score / totalQuestoes) * 100);
  const nomeProva = localStorage.getItem("provaAtual") || "Prova Desconhecida";

  // Exibe o resultado na tela
  document.getElementById("score").textContent =
    `Você acertou ${score} de ${totalQuestoes} questões (${porcentagem}%)`;

  const msg = document.getElementById("message");

  if (score < 21) {
    msg.textContent = "❌ Atenção! Tente de novo! Precisa melhorar seu resultado";
    msg.style.color = "#d32f2f"; // vermelho forte
  } else if (score >= 21 && score <= 27) {
    msg.textContent = "⚠️ Está razoável! Você está quase lá! Dá pra melhorar!";
    msg.style.color = "#1976d2"; // azul forte
  } else {
    msg.textContent = "✅ Parabéns! Excelente desempenho! Continue assim em todos os simulados!";
    msg.style.color = "#388e3c"; // verde forte
  }

  msg.style.fontWeight = "bold";

  // Salva o desempenho no navegador (localStorage)
  salvarDesempenho(nomeProva, score);

  // Envia os dados para o Firestore (monitoramento)
  if (window.currentUser?.email) {
  registrarAcessoFirestore(
    window.currentUser.nome || "",  // vazio se não tiver nome
    window.currentUser.email,
    "Finalizou simulado",
    nomeProva,
    score,
    totalQuestoes
  );
} else {
  console.warn("⚠️ Usuário sem email. Registro não enviado.");
}


}



function registrarAcessoFirestore(nome, email, acao, prova, acertos, totalQuestoes) {
  const data = new Date();
  const dataFormatada = data.toLocaleString("pt-BR");
  const porcentagem = Math.round((acertos / totalQuestoes) * 100);

  if (!firebase?.firestore) {
    console.error("❌ Firestore não está disponível.");
    return;
  }

  firebase.firestore().collection("acessos").add({
    email: email || "sem@email.com",
    acao: acao || "Finalizou simulado",
    prova: prova || "Prova não informada",
    acertos: acertos || 0,
    totalQuestoes: totalQuestoes || 0,
    porcentagem,
    data: dataFormatada
  })
  .then(() => console.log("✅ Registro enviado para a coleção 'acessos'"))
  .catch((err) => console.error("❌ Erro ao enviar para Firestore:", err));
}



showQuestion();
