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
    question: "A finalidade da direção defensiva é a condução:",
    options: [
      "Em alta velocidade.",
      "De forma educativa e segura.",
      "De automatismos incorretos.",
      "Sem interferência do autocontrole."
    ],
    answer: 1
  },
  {
    question: "Ao notar árvores ou vegetação que possam estar encobrindo a sinalização, o condutor deve:",
    options: [
      "Redobrar a atenção e reduzir a velocidade para identificar restrições de circulação.",
      "Efetuar a poda das árvores para identificar a sinalização.",
      "Solicitar ao agente de trânsito que efetue a poda das árvores.",
      "Redobrar a atenção, reduzir a velocidade e não se preocupar com a sinalização."
    ],
    answer: 0
  },
  {
    question: "Entre outros efeitos, a ingestão de álcool pode provocar no condutor:",
    options: [
      "Visão difusa e agilidade.",
      "Melhor capacidade de raciocínio lógico.",
      "Diminuição da capacidade de visibilidade e reflexo.",
      "Melhora da capacidade de raciocínio."
    ],
    answer: 2
  },
  {
    question: "As condições adversas referem-se, entre outros:",
    options: [
      "Às condições emocionais do condutor.",
      "Às condições da via.",
      "Às condições do tempo.",
      "Todas as alternativas estão corretas."
    ],
    answer: 3
  },
  {
    question: "Tempo de reação é aquele que transcorre entre:",
    options: [
      "Acionar o freio e parar.",
      "Perceber o perigo e parar.",
      "Ver o perigo e tomar providências.",
      "Tempo aproximado de ¾ de segundos."
    ],
    answer: 2
  },
  {
    question: "Sobre condições inseguras, é correto afirmar:",
    options: [
      "É uma condição perigosa que propicia sinistros.",
      "Diz respeito às atitudes tomadas pelo condutor na direção do veículo.",
      "São fundamentos para prevenção de sinistros.",
      "Significa não respeitar os limites estabelecidos para condução segura do veículo."
    ],
    answer: 0
  },
  {
    question: "São leis da física que interferem na condução, exceto:",
    options: [
      "Aderência.",
      "Força centrípeta.",
      "Transferência de massa.",
      "Frenagem de emergência."
    ],
    answer: 3
  },
  {
    question: "São condições adversas, exceto:",
    options: [
      "Tempo.",
      "Condutor.",
      "Poluição.",
      "Veículo."
    ],
    answer: 2
  },
  {
    question: "É permitido o uso de luz alta, à noite:",
    options: [
      "Ao seguir ou cruzar com outro veículo.",
      "Em vias onde não haja iluminação pública.",
      "Em vias onde haja iluminação pública.",
      "Para alertar pedestres que estejam atravessando a pista de rolamento."
    ],
    answer: 1
  },
  {
    question: "Chove forte e o limpador de para-brisa do seu veículo não está sendo suficiente para manter a visibilidade. Nessa situação, você:",
    options: [
      "Para o veículo em local seguro e aguarda.",
      "Limpa o vidro com uma flanela.",
      "Passa as mãos no vidro para retirar a água.",
      "Continua o trajeto sem se preocupar com esse detalhe."
    ],
    answer: 0
  },
  {
    question: "Em caso de sinistro, é função do cinto de segurança:",
    options: [
      "Proteger o tórax e o rosto do motorista.",
      "Proteger a coluna cervical contra os impactos da colisão.",
      "Manter o motorista confortável no assento do banco.",
      "Evitar que os ocupantes do veículo colidam contra as partes internas do veículo ou contra outros ocupantes."
    ],
    answer: 3
  },
  {
    question: "Para evitar a aquaplanagem, o motorista deve:",
    options: [
      "Dirigir em baixa velocidade em pista molhada, evitando andar com os pneus desgastados ou mal calibrados.",
      "Aumentar a velocidade, para ficar menos tempo sob efeito da chuva.",
      "Parar o veículo na pista de rolamento e aguardar o escoamento de água.",
      "Movimentar a direção bruscamente para deixar rastro na pista e aumentar o atrito."
    ],
    answer: 0
  },
  {
    question: "Definimos como lusco-fusco:",
    options: [
      "Cegueira momentânea causada pelo excesso de luz.",
      "Ausência total de luz solar.",
      "Fator de segurança para luz.",
      "A situação de pouca luminosidade que ocorre do anoitecer ao amanhecer no interior de túneis, tempestades ou locais de muita umidade."
    ],
    answer: 3
  },
  {
    question: "São elementos da direção defensiva:",
    options: [
      "Conhecimento, habilidade, atenção, previsão e decisão.",
      "Negligência, imprudência e imperícia.",
      "Cinto de segurança, encosto de cabeça e airbag.",
      "Visão, audição, olfato, paladar e tato."
    ],
    answer: 0
  },
  {
    question: "O deslocamento do veículo de sua trajetória devido à redução ou à perda de aderência dos pneus com o solo é chamado:",
    options: [
      "Deslocamento da massa de ar.",
      "Frenagem de emergência.",
      "Derrapagem.",
      "Curva."
    ],
    answer: 2
  },
  {
    question: "São causas de colisões durante ultrapassagens, exceto:",
    options: [
      "Não avaliar corretamente o espaço disponível e o tempo necessário para a ultrapassagem.",
      "Não observar distância lateral.",
      "Aumentar a velocidade ao mudar de faixa de trânsito.",
      "Forçar ultrapassagem."
    ],
    answer: 2
  },
  {
    question: "Ao avistar uma poça d'água na pista de rolamento, é procedimento incorreto:",
    options: [
      "Desacelerar suavemente.",
      "Segurar firme o volante.",
      "Manter o veículo, o máximo possível, em linha reta.",
      "Desviar, freando bruscamente."
    ],
    answer: 3
  },
  {
    question: "São atitudes corretas no trânsito, resultantes do conhecimento técnico do condutor aliado à prática de direção:",
    options: [
      "Atos inseguros.",
      "Automatismos corretos.",
      "Imperícia.",
      "Ergonomia."
    ],
    answer: 1
  },
  {
    question: "Se deparar com uma situação de risco no trânsito e você deve parar seu veículo imediatamente, o que se deve fazer:",
    options: [
      "Diminuir a marcha.",
      "Colocar o veículo em ponto neutro.",
      "Frear bruscamente realizando uma frenagem de emergência.",
      "Acionar a buzina para alertar os demais condutores."
    ],
    answer: 2
  },
  {
    question: "Ao ter o veículo atingido por vento lateral, o condutor deve:",
    options: [
      "Acelerar o veículo rapidamente.",
      "Abrir as janelas por espaço suficiente para que o ar possa circular e sair, sem desestabilizar o veículo.",
      "Reduzir bruscamente a velocidade.",
      "Parar o veículo na via."
    ],
    answer: 1
  },
  {
    question: "Um veículo vem em sentido contrário ao seu, no período noturno, com faróis altos e ligados provocando o ofuscamento. Nessa situação:",
    options: [
      "Desvia o veículo para a esquerda e se orienta pelas faixas do solo.",
      "Olha para o outro carro e também liga o farol alto.",
      "Desvia o olhar para a direita e se orienta pelas faixas do solo.",
      "Para no acostamento até o outro veículo passar."
    ],
    answer: 2
  },
  {
    question: "O condutor estando em uma via urbana com iluminação pública deve:",
    options: [
      "Usar o farol baixo desde o pôr do sol até o amanhecer.",
      "Manter as luzes do veículo apagadas para facilitar a visão dos outros condutores.",
      "Manter acesas apenas as luzes dos faroletes para facilitar a visão dos outros condutores.",
      "Usar o farol alto no período noturno e opcionalmente no diurno."
    ],
    answer: 0
  },
  {
    question: "Dirigindo um veículo, ao se aproximar de um cruzamento com sinal luminoso, você observa que a luz vermelha está acesa. Neste caso você deve:",
    options: [
      "Aumentar a velocidade do veículo e passar.",
      "Diminuir a velocidade do veículo e parar.",
      "Diminuir a velocidade do veículo e passar.",
      "Frear bruscamente o veículo."
    ],
    answer: 1
  },
  {
    question: "Quando você estiver conduzindo um veículo lembre-se de que, também, é passageiro e pedestre. Assim, deve:",
    options: [
      "Ultrapassar veículos parados em fila, que estejam aguardando a abertura do sinal luminoso.",
      "Ultrapassar outro veículo em pontes e viadutos.",
      "Dar prioridade de passagem aos pedestres apenas, quando atravessar a calçada para entrar em algum estacionamento.",
      "Dar preferência de passagem aos pedestres que estiverem nas faixas de segurança, onde não existir sinal luminoso."
    ],
    answer: 3
  },
  {
    question: "Chama-se aderência, a:",
    options: [
      "Troca de peso entre os eixos do veículo",
      "Aceleração do veículo na curva.",
      "Capacidade de atrito do pneu com o solo que mantém o veículo.",
      "Saída do veículo da trajetória original."
    ],
    answer: 2
  },
  {
    question: "Sobre o airbag, é incorreto afirmar:",
    options: [
      "É instalado junto ao volante para proteger o tórax e o rosto do motorista.",
      "Complementa a ação do cinto de segurança.",
      "Protege o motorista ainda que ele não esteja usando o cinto de segurança.",
      "É acionado quando o veículo sofre algum impacto violento na região frontal."
    ],
    answer: 2
  },
  {
    question: "Ao se deparar com fumaça proveniente de queimadas na pista, o condutor deve:",
    options: [
      "Ligar o pisca-alerta.",
      "Parar o veículo.",
      "Ligar o farol baixo.",
      "Ligar o farol alto."
    ],
    answer: 2
  },
  {
    question: "O fundamento da direção defensiva que corresponde à informação correta sobre o trânsito é:",
    options: [
      "Decisão.",
      "Habilidade.",
      "Atenção.",
      "Conhecimento."
    ],
    answer: 2
  },
  {
    question: "Os riscos e perigos a que os condutores estão sujeitos são, exceto:",
    options: [
      "Pessoas que utilizam transporte coletivo.",
      "Lombadas.",
      "Chuva forte.",
      "Veículo com defeito."
    ],
    answer: 3
  },
  {
    question: "Para regular a velocidade de um veículo em uma curva, o condutor deve considerar:",
    options: [
      "O raio da curva.",
      "O estado da pista.",
      "As condições climáticas.",
      "Todas as alternativas acima."
    ],
    answer: 3
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