
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


const questions = [{
    question: "Organizar e manter o Registro Nacional de Veículos Automotores (RENAVAM), compete:",
    options: ["ao DETRAN.", "ao CETRAN.", "ao CONTRAN.", "à SENATRAN."],
    answer: 3
}, {
    question: "A expedição da Permissão para Dirigir, da Carteira Nacional de Habilitação, dos Certificados de Registro e o de Licenciamento Anual, é competência:",
    options: ["do DETRAN.", "do CETRAN.", "do CONTRANDIFE.", "da SENATRAN."],
    answer: 0
}, {
    question: "É competência da JARI:",
    options: ["Cumprir e fazer cumprir a legislação de trânsito e a execução das normas e diretrizes estabelecidas pelo CONTRAN, no âmbito de suas atribuições.", "Administrar fundo de âmbito Nacional destinado à segurança e educação de trânsito.", "Julgar os recursos interpostos pelos infratores.", "Coletar dados, elaborar estudos sobre acidentes de trânsito e suas causas."],
    answer: 2
}, {
    question: "Obedece a legislação municipal do domicílio ou residência de seus proprietários, o registro e o licenciamento dos veículos de:",
    options: ["Somente os ciclomotores e bicicletas.", "Propulsão humana e de tração animal.", "Reboque, semirreboque e bonde.", "Somente os de propulsão humana."],
    answer: 1
}, {
    question: "A categoria habilita o condutor a dirigir veículo motorizado, não abrangido pela categoria “A”, cujo peso bruto total não exceda a 3.500 quilogramas e cuja lotação não exceda a 8 lugares, excluído o do motorista.",
    options: ["“C”.", "“B”.", "“E”.", "“D”."],
    answer: 1
}, {
    question: "Para habilitar-se na categoria “E”, o condutor deverá possuir no mínimo:",
    options: ["18 anos de idade e 2 anos na categoria “B”.", "21 anos de idade e 2 anos na categoria “B”.", "21 anos de idade e 3 anos na categoria “B”.", "21 anos de idade e 1 ano na categoria “C”."],
    answer: 3
}, {
    question: "O condutor que tiver a sua Permissão para Dirigir cassada, poderá reiniciar o processo de habilitação, que consiste em prestar exames de:",
    options: ["Aptidão física e mental, avaliação psicológica e legislação de trânsito, apenas.", "Aptidão física e mental, avaliação psicológica, legislação de trânsito e prática de direção veicular.", "Prática de direção veicular, somente.", "Legislação de trânsito e prática de direção veicular, somente."],
    answer: 1
}, {
    question: "Do condutor de veículo destinado à condução de escolares, exige-se:",
    options: ["Não ter cometido nenhuma infração de trânsito.", "Idade superior a 18 anos.", "Ter sido submetido a Curso Especializado de Transporte Escolar.", "Apresentação do Registro Nacional de Transportadores Urbanos."],
    answer: 2
}, {
    question: "A aprendizagem somente poderá realizar-se:",
    options: ["Nos termos, horários e locais estabelecidos pela autoridade de trânsito.", "Das 8 horas às 18 horas, em qualquer local.", "Em áreas fechadas ao trânsito.", "Somente no período matutino."],
    answer: 0
}, {
    question: "A formação do condutor compreende a realização:",
    options: ["De exame escrito e de direção veicular.", "De exame de aptidão física e mental.", "De avaliação psicológica.", "Todas acima estão corretas."],
    answer: 3
}, {
    question: "A idade mínima de 21 anos é exigida aos condutores:",
    options: ["De transporte de perecíveis.", "Das categorias \"B\" e \"C\".", "De transporte coletivo de passageiros e de produtos perigosos.", "De transporte de cargas."],
    answer: 2
}, {
    question: "A PPD concede ao condutor o direito de dirigir:",
    options: ["Apenas no estado da federação que a expediu.", "Somente no município de residência.", "Em todo território nacional.", "Exceto nas rodovias."],
    answer: 2
}, {
    question: "Após a aprovação no exame teórico haverá a expedição:",
    options: ["Do CRLV.", "Da LADV.", "Da PPD.", "Da CNH."],
    answer: 1
}, {
    question: "Para conduzir um trator de rodas na via pública:",
    options: ["não é necessário ser habilitado, por ser máquina agrícola.", "é necessário estar habilitado na categoria “A”.", "basta possuir PPD ou CNH, no mínimo, na categoria “B”.", "é obrigatório estar habilitado em uma das categorias “C”, “D” ou “E”."],
    answer: 2
}, {
    question: "O condutor habilitado na categoria “B” há dois anos, reincidente em infração média nos últimos doze meses, poderá:",
    options: ["Fazer adição da categoria “A”.", "Adicionar a ACC.", "Mudar para a categoria “C”.", "Mudar sua categoria de habilitação para “D”."],
    answer: 3
}, {
    question: "É sempre considerado veículo de carga:",
    options: ["Carro-de-mão.", "Charrete.", "Triciclo.", "Trator de rodas."],
    answer: 0
}, {
    question: "Assinale a alternativa incorreta:",
    options: ["A CNH de categoria “A” permite conduzir veículos de 2 ou 3 rodas.", "O condutor habilitado em qualquer categoria poderá conduzir motos de até 100cc.", "Os condutores serão responsáveis pelos atos praticados na direção do veículo.", "Com categoria “E” o condutor poderá conduzir veículos das categorias inferiores, com exceção dos veículos de 2 ou 3 rodas."],
    answer: 1
}, {
    question: "É considerado órgão executivo rodoviário dos estados e do distrito federal:",
    options: ["DER.", "DNIT.", "Polícia Rodoviária Federal.", "Todas estão corretas."],
    answer: 0
}, {
    question: "Em caso de morte, a indenização do seguro DPVAT é de:",
    options: ["R$11.500,00.", "R$2.700,00.", "R$13.500,00.", "Até R$13.500,00."],
    answer: 2
}, {
    question: "Executar a fiscalização de trânsito, quando e conforme convênio firmado, como agente do órgão ou entidade executivos de trânsito ou executivos rodoviários, concomitantemente com os demais agentes credenciados, compete:",
    options: ["Polícias militares dos Estados do Distrito Federal.", "Departamento de trânsito dos Estados.", "Agentes do DNIT.", "Agentes da SENATRAN."],
    answer: 0
}, {
    question: "O condutor habilitado na categoria “A” pode conduzir:",
    options: ["Motocicletas de até 125cc.", "Veículos de 2 ou 3 rodas.", "Motocicletas a partir de 125cc.", "Veículos motorizados de 4 rodas (quadriciclos)."],
    answer: 1
}, {
    question: "São exemplos de classificação quanto à categoria:",
    options: ["Oficial e fabricante.", "Aprendizagem e experiência.", "Particular e aluguel.", "Carga e passageiro."],
    answer: 2
}, {
    question: "Só poderá realizar exame de direção veicular para primeira habilitação, o candidato que cumprir a carga horária mínima de:",
    options: ["25 horas-aulas para categoria “A” e 25 para categoria “B”.", "20 horas-aulas para categoria “A” ou “B”.", "15 horas-aulas para categoria “A” e 20 para categoria “B”.", "20 horas-aulas para categoria “A” e 15 para categoria “B”."],
    answer: 1
}, {
    question: "Veículo misto destinado ao transporte de passageiros e carga no mesmo compartimento:",
    options: ["Caminhonete.", "Utilitário.", "Micro-ônibus.", "Camioneta."],
    answer: 3
}, {
    question: "Para o licenciamento de um veículo em outro Estado deve-se:",
    options: ["Obrigatoriamente alterar os caracteres de suas placas.", "Pedir autorização ao Conselho Nacional de Trânsito.", "Dar ciência ao departamento de trânsito do estado de origem.", "Pedir autorização ao conselho de trânsito do estado de origem."],
    answer: 2
}, {
    question: "Qual a carga horária exigida ao mudar para as categorias “C”, “D” ou “E”?",
    options: ["15 h/a.", "25 h/a.", "20 h/a.", "16 h/a."],
    answer: 2
}, {
    question: "Um candidato à obtenção da Carteira Nacional de Habilitação, durante o exame de direção veicular para a categoria B, derruba um cone de balizamento. Nessas condições, ele será:",
    options: ["Aprovado, desde que não cometa outra falta grave.", "Reprovado, devendo realizar novo exame de direção.", "Aprovado, desde que não cometa outra falta média.", "Reprovado, devendo recomeçar todo o procedimento de formação do condutor."],
    answer: 1
}, {
    question: "O que é um micro-ônibus, segundo o Código de Trânsito Brasileiro?",
    options: ["É um veículo de carga, com capacidade máxima de três mil e quinhentos quilos.", "É um veículo automotor de carga, com capacidade para até vinte e cinco passageiros.", "É um veículo de transporte coletivo, com capacidade máxima para até quarenta e nove passageiros.", "É um veículo automotor de transporte coletivo com capacidade para até vinte passageiros."],
    answer: 3
}, {
    question: "Dentro do Sistema Nacional de Trânsito, o responsável por implantar, manter e operar sistema de estacionamento rotativo pago é?",
    options: ["Órgão ou entidade executivo de trânsito do Município.", "Órgão ou entidade executivo de trânsito do Estado.", "Órgão ou entidade executivo de trânsito da União.", "Órgão ou entidade executivo de trânsito do Bairro."],
    answer: 0
}, {
    question: "O condutor que exerce atividade remunerada de transporte de pessoas ou bens, ao renovar o exame de aptidão física e mental terá que submeter-se, além da avaliação de aptidão física e mental:",
    options: ["ao curso de atualização.", "à avaliação psicológica.", "ao curso de reciclagem.", "ao exame teórico-técnico."],
    answer: 1
}];



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
