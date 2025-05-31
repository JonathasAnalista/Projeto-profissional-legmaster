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
    "question": "O trânsito de qualquer natureza nas vias terrestres do território nacional, abertas à circulação, rege-se pelo:",
    "options": [" Código de Trânsito Brasileiro.", "Código Nacional de Trânsito.", " Código Brasileiro de Trânsito.", "Código de Trânsito"],
    "answer": 0
  },
  {
    "question": "O condutor para conduzir veículo motorizado de duas ou três rodas, com ou sem carro lateral, deverá estar habilitado na categoria:",
    "options": ["“A”.", "“B”.", "“C”.", "“D”."],
    "answer": 0
  },
  {
    "question": "A Licença de Aprendizagem (LADV) suspensa poderá ser obtida novamente após decorridos:",
    "options": ["Seis meses.", "Três meses.", "Doze meses.", "Nove meses."],
    "answer": 0
  },
  {
    "question": "Organizar e manter o Registro Nacional de Carteiras de Habilitação (RENACH) compete:",
    "options": ["ao CONTRAN.", "à SENATRAN.", "ao DETRAN.", "ao CETRAN."],
    "answer": 1
  },
  {
    "question": "Ao comprar um veículo já registrado, o novo proprietário deverá providenciar a transferência, junto ao Detran, no prazo máximo de:",
    "options": ["60 dias.", "45 dias.", " 90 dias.", "30 dias."],
    "answer": 3
  },
  {
    "question": "A operação de carga ou descarga será regulamentada pelo órgão ou entidade sobre a via e é considerada:",
    "options": ["Parada.", "Estacionamento", "Embarque.", "Desembarque"],
    "answer": 1
  },
  {
    "question": "O cinto de segurança é obrigatório em todas as vias do território nacional para:",
    "options": ["O condutor, somente.", "Condutor e passageiros do banco dianteiro.", "Condutor e passageiros dos bancos dianteiro e traseiro","Condutor e passageiros do banco traseiro."],
    "answer": 2
  },
  {
    "question": "A transposição de faixas é um tipo de:",
    "options": ["Deslocamento lateral.", "Interseção.", "Logradouro.", "Via."],
    "answer": 0
  },
  {
    "question": "Nas interseções e suas proximidades, o condutor:",
    "options": ["Poderá efetuar ultrapassagem.", "Poderá estacionar.", "Não poderá efetuar ultrapassagem.", "Não precisa diminuir a velocidade do veículo."],
    "answer": 2
  },
  {
    "question": " Não é procedimento para virar à direita:",
    "options": ["Deslocar-se para a linha divisória da pista.", "Deslocar-se para o bordo direito.", "Observar a preferência de veículos e pedestres.", "Efetuar a manobra no menor espaço possível."],
    "answer": 0
  },

  
  {
    "question": " Realizar, fiscalizar e controlar o processo de formação, aperfeiçoamento, reciclagem e suspensão de condutores, expedir e cassar Licença de Aprendizagem, Permissão para dirigir e Carteira nacional de Habilitação, mediante delegação do órgão federal competente, é de responsabilidade",
    "options": ["da SENATRAN.", "do DETRAN.", "do CETRAN.", "do CONTRAN."],
    "answer": 1
  },

  {
    "question": "Deixar o condutor de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade de trânsito e seus agentes é infração:",
    "options": ["Gravíssima.", "Média.", "Leve.", "Grave"],
    "answer": 3
  },
  {
    "question": "O gás clorofluorcarbono (CFC) utilizado como propelente em vários tipos de sprays, chips de computadores e solventes usados pela indústria eletrônica. É um dos poluentes responsáveis pela ocorrência:",
    "options": ["Do aumento de temperatura.", "Da redução da camada de ozônio.", "Da chuva ácida.", "Do efeito estufa."],
    "answer": 1
  },
  {
    "question": "A sinalização horizontal se apresenta nas seguintes cores:",
    "options": ["Amarela, vermelha, branca, azul e preta.", "Apenas amarela e branca.", "Apenas amarela, vermelha e branca.", "Amarela, vermelha, branca, verde e preta."],
    "answer": 0
  },
  {
    "question": "Na presença de sangramento abundante, qual o cuidado indicado?",
    "options": ["Garrotear (usar garrote).", "Fazer compressão no local do sangramento.", " Dar bastante líquido para a pessoa ir tomando.", "Jogar bastante água oxigenada para coagular e limpar o ferimento."],
    "answer": 1
  },
  {
    "question": "Ao se deparar com um acidente num local onde o socorro seja prestado somente pelo Corpo de Bombeiros, você deverá ligar para o número:",
    "options": ["191.", "193.", "190.", "181."],
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
    "question": "Não faz parte das peças fixas do motor:",
    "options": ["Bloco do motor", "Cilindros.", "Cabeçote.", "Biela."],
    "answer": 3
  },
  {
    "question": "O conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
    "options": ["Transformador de gases tóxicos em gases não nocivos ao meio ambiente.", "Filtro dos gases do escapamento.", " Acelerador de molécula binárias, oposto aos gases de escapamento.", "Filtro dos gases do escapamento, que separa o vapor d'água dos gases de escapamento."],
    "answer": 0
  },
  {
    "question": "Na direção defensiva, é o resultado da prática mais o treinamento:",
    "options": ["Conhecimento", "Decisão.", "Atenção.", "Habilidade."],
    "answer": 3
  },
  {
    "question": " Não é considerado crime de trânsito:",
    "options": ["Dirigir em excesso de velocidade.", "Homicídio culposo.", "Omissão de socorro.", "Lesão corporal culposa."],
    "answer": 0
  },
  {
    "question": "A ordem do Agente da Autoridade de Trânsito, identificada na imagem, significa ordem de:",
    "image": "agseguir.png",
    "options": ["Retorno para os veículos que estão à esquerda.", "Parada obrigatória para todos os veículos.", "Diminuição da velocidade para todos os veículos.", "Seguir para todos os veículos."],
    "answer": 3
  },
  {
    "question": "Nos dias chuvosos, não é recomendável:",
    "options": ["Trafegar com o pisca-alerta acionado.", "Aumentar a distância de segurança para com os veículos que seguem à frente", "Acender os faróis.", "Sinalizar com maior abundância, suas intenções de manobras."],
    "answer": 0
  },
  {
    "question": "A placa A-10b adverte sobre:",
    "image": "quest25.png",
    "options": ["Entroncamento oblíquo à direita.", "Junção de pistas", "Entroncamento oblíquo à esquerda.", "Divisão da pista."],
    "answer": 0
  },
  {
    "question": "O DNIT (Departamento Nacional de Infraestrutura de Transporte) é o responsável por planejar, projetar, regulamentar e operar o trânsito nas:",
    "options": ["Rodovias e Estradas municipais.", "Vias dentro do município.", "Rodovias e Estradas federais", "Rodovias e Estradas estaduais."],
    "answer": 2
  },
  {
    "question": "Para conduzir um caminhão de 8.000 kg com um reboque de5.000 kg engatado atrás é necessário estar habilitado, no mínimo, na categoria:",
  "options": [" 'C'.", "'D'.", "'B'.", "'E'."],
    "answer": 0
  },
  {
    "question": "Substâncias infectantes são aquelas que:",
    "options": ["Contém micro-organismos infecciosos.", "Alteram sua propriedade com o calor", "Contém corrosivos.", "Liberam gás carbônico."],
    "answer": 0
  },
  {
    "question": "Os ruídos emitidos pelo funcionamento do motor de um veículo são controlados pelo:",
    "options": ["Carburador.", "Radiador.", "Catalisador.", "Silenciador."],
    "answer": 3
  },
  {
    "question": "Identifique o significado do gesto do condutor expresso no desenho:",
    "image": "quest30.png",
    "options": ["Dobrar à direita.", "Diminuir a velocidade.", "Dobrar à esquerda.", "Parar."],
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
