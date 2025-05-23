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
    'question': 'Marque a alternativa que NÃO corresponde a um requisito para o candidato à Permissão Para Dirigir (PPD):',
    'options': ['Ser maior de dezoito anos de idade.', 'Possuir documento de identificação e CPF.', 'Ser penalmente imputável.', 'Ser alfabetizado.'],
    'answer': 0
}, {
    'question': 'Qual a carga horária obrigatória no curso teórico-técnico para o candidato à Permissão Para Dirigir (PPD)?',
    'options': ['30 horas/aula.', '35 horas/aula.', '30 horas/aula.', '45 horas/aula.'],
    'answer': 3
}, {
    'question': 'A atual legislação de trânsito intitula-se:',
    'options': ['Código Nacional de Trânsito.', 'Código de Trânsito.', 'Código de Trânsito Brasileiro.', 'Código Brasileiro de Trânsito.'],
    'answer': 2
}, {
    'question': 'A utilização das vias por pessoas, veículos e animais é para fins de:',
    'options': ['Circulação, parada e estacionamento.', 'Circulação e estacionamento.', 'Circulação, parada e operação de carga ou descarga.', 'Circulação, parada, estacionamento e operação de carga ou descarga.'],
    'answer': 3
}, {
    'question': 'São consideradas vias terrestres urbanas e rurais:',
    'options': ['Ruas, avenidas e vias internas pertencentes aos condomínios constituídos por unidades autônomas.', 'Ruas, avenidas, logradouros, caminhos, passagens, estradas, rodovias, praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo.', 'Estradas e rodovias.', 'Praias abertas à circulação pública.'],
    'answer': 1
}, {
    'question': 'A Junta Administrativa de Recursos de Infrações é um órgão colegiado componente do:',
    'options': ['Conselho Estadual de Trânsito.', 'Conselho Nacional de Trânsito.', 'Sistema Nacional de Trânsito.', 'Departamento Nacional de Trânsito.'],
    'answer': 2
}, {
    'question': 'Ao Departamento Estadual de Trânsito (DETRAN) cabe, entre outras, a atribuição de:',
    'options': ['Vistoriar, registrar e emplacar veículos.', 'Organizar estatística de trânsito em todo o país.', 'Propor a alteração de sinalização.', 'Emitir carteira internacional.'],
    'answer': 0
}, {
    'question': 'A autorização para conduzir veículos de propulsão humana e de tração animal ficará a cargo:',
    'options': ['Dos Estados.', 'Dos Municípios.', 'Do DETRAN.', 'Do SENATRAN.'],
    'answer': 1
}, {
    'question': 'A Licença de Aprendizagem para prática de direção veicular em via pública (LADV), ou em locais autorizados para este fim, será expedida pelo DETRAN ao candidato que:',
    'options': ['Tenha completado 16 (dezesseis) anos de idade.', 'Tenha completado 18 (dezoito) anos de idade.', 'Tenha sido aprovado nos exames de aptidão física e mental, avaliação psicológica e de legislação de trânsito.', 'Tenha prestado o exame em veículo particular.'],
    'answer': 2
}, {
    'question': 'Somente poderá transitar pelas vias terrestres o veículo cujo peso e dimensões atenderem aos limites estabelecidos pelo:',
    'options': ['SENATRAN.', 'CONTRAN.', 'DETRAN.', 'CONTRANDIFE.'],
    'answer': 1
}, {
    'question': 'A não obtenção da Carteira Nacional de Habilitação pelo permissionário, implica em reiniciar todo o processo de habilitação, no prazo de:',
    'options': ['15 (quinze) dias.', '30 (trinta) dias.', '360 (trezentos e sessenta) dias.', 'A qualquer tempo.'],
    'answer': 3
}, {
    'question': 'Para que os veículos destinados à condução de escolares possam circular nas vias, exige-se:',
    'options': ['Cintos de segurança para o condutor e seu auxiliar, somente.', 'Registro de veículo especial.', 'Lanternas de luz verde nas extremidades laterais direita e esquerda.', 'Inspeção semestral para verificação dos equipamentos obrigatórios e de segurança.'],
    'answer': 3
}, {
    'question': 'A cópia fotostática ou fotocópia (xerox) da Carteira Nacional de Habilitação:',
    'options': ['Não é válida para substituir documento original.', 'É valida quando autenticada em cartório.', 'É válida quando não plastificada.', 'É válida quando apresentada junto com o documento de identidade do portador.'],
    'answer': 0
}, {
    'question': 'O candidato à obtenção da habilitação de categoria “D” deverá preencher os seguintes requisitos:',
    'options': ['Apenas ser maior de 21 anos, possuir CPF, saber ler e escrever.', 'Somente saber ler e escrever, e possuir documento de identidade.', 'Ser maior de 21 anos, possuir habilitação “B” há pelo menos 2 anos ou “C” há pelo menos 1 ano e não ter cometido mais de uma infração gravíssima nos últimos doze meses.', 'Ser maior de 18 anos, saber ler e escrever, possuir identidade e CPF.'],
    'answer': 2
}, {
    'question': 'As categorias existentes para a habilitação, são:',
    'options': ['ACC – “A” – “B” – “C” – “D” – “E”.', '“A” – “B” – “C” – “D”.', '“B” – “C” – “D” – “E”.', '“A” – “B” – “C” – “D” – “E”.'],
    'answer': 3
}, {
    'question': 'Quem deve pagar o Seguro Obrigatório DPVAT?',
    'options': ['Todos os proprietários de veículos com mais de 15 anos.', 'Todas as pessoas, sendo ou não proprietárias de veículos.', 'Todos os proprietários de veículos automotores.', 'Somente os proprietários de 2 ou mais automóveis.'],
    'answer': 2
}, {
    'question': 'A avaliação psicológica será preliminar e complementar ao exame de aptidão física e mental:',
    'options': ['Quando da obtenção da ACC e da CNH.', 'Quando da renovação, caso o condutor exerça serviço remunerado de transporte de pessoas ou bens.', 'Quando da substituição do documento de habilitação obtido em país estrangeiro.', 'Todas as afirmativas estão corretas.'],
    'answer': 3
}, {
    'question': 'A bicicleta quanto à tração é:',
    'options': ['Veículo automotor.', 'Veículo de propulsão humana.', 'Não é considerada um veículo, à luz do CTB.', 'Veículo de tração animal.'],
    'answer': 1
}, {
    'question': 'A Carteira Nacional de Habilitação permite, a quem a possuir, o direito de dirigir:',
    'options': ['Qualquer tipo de veículo, apenas na localidade onde foi emitida.', 'Veículos automotores, para os quais foi habilitado, em todo território nacional.', 'Qualquer tipo de veículo automotor.', 'Veículos automotores, para os quais foi habilitado, apenas na localidade onde foi emitida.'],
    'answer': 1
}, {
    'question': 'A habilitação de categoria “A”:',
    'options': ['É para conduzir veículos cujo PBT não exceda a 3.500 kg.', 'Para conduzir veículos motorizados de duas ou três rodas e também quadriciclos.', 'Para combinações de veículos cuja unidade acoplada tenha 6.000 mil kg ou mais de PBT.', 'Para conduzir veículos motorizados de duas ou três rodas.'],
    'answer': 3
}, {
    'question': 'A placa de veículo de autoescola (aprendizagem ou, no padrão Mercosul, comercial) tem as seguintes características:',
    'options': ['Fundo branco e caracteres vermelhos.', 'Fundo branco e caracteres pretos.', 'Fundo preto e caracteres brancos.', 'Fundo cinza e caracteres pretos.'],
    'answer': 0
}, {
    'question': 'A realização de qualquer ato público que interfira no trânsito depende de:',
    'options': ['Licença especial do Prefeito.', 'Autorização do Governador.', 'Prévia autorização da autoridade de trânsito, do órgão com circunscrição sobre a via.', 'Autorização de todos os moradores locais ou da Associação de Moradores.'],
    'answer': 2
}, {
    'question': 'As características de um veículo podem ser modificadas quando:',
    'options': ['Houver prévia permissão da autoridade de trânsito.', 'O proprietário quitar seus débitos com o órgão competente.', 'O proprietário "cansar" da cor do modelo.', 'Sofrer um acidente grave.'],
    'answer': 0
}, {
    'question': 'Caminhão-trator é um veículo destinado:',
    'options': ['Ao transporte de carga.', 'A tracionar ou arrastar outro veículo.', 'Ao transporte de passageiros.', 'Ao trabalho agrícola.'],
    'answer': 1
}, {
    'question': 'Caso o proprietário do veículo seja devedor de multa de trânsito não poderá:',
    'options': ['Renovar o Licenciamento Anual do Veículo.', 'Renovar a Carteira Nacional de Habilitação.', 'Renovar o exame toxicológico.', 'Circular com o veículo fora da área urbana.'],
    'answer': 0
}, {
    'question': 'Como é chamado um veículo automotor de duas ou três rodas cuja potência não seja maior do que 50cc, ou elétrico com capacidade máxima de 4 kW, que é capaz de desenvolver no máximo a velocidade de 50 km/h?',
    'options': ['Motocicleta.', 'Ciclomotor.', 'Mobilete.', 'Bicicleta a motor.'],
    'answer': 1
}, {
    'question': 'Complete a frase: Charrete é um veículo de tração animal destinado ao transporte de:',
    'options': ['Cargas.', 'Objetos.', 'Pessoas.', 'Todas estão corretas.'],
    'answer': 2
}, {
    'question': 'Constitui(em) documento(s) de porte obrigatório:',
    'options': ['Comprovante de pagamento atualizado do IPVA.', 'Certificado de registro do veículo, somente.', 'ACC, Permissão para Dirigir ou CNH e CRLV-e.', 'Comprovante de pagamento do seguro obrigatório.'],
    'answer': 2
}, {
    'question': 'De acordo com a Legislação os veículos, quanto a espécie, são classificados em:',
    'options': ['Oficial, de passageiros, de aluguel e de corrida.', 'Oficial, particular, de passageiro e de aluguel.', 'Automotor, elétrico, tração animal, propulsão humana e reboque.', 'De passageiros, de carga, misto, de competição, de tração, especial e coleção.'],
    'answer': 3
}, {
    'question': 'O condutor para transportar explosivos, líquidos inflamáveis ou substâncias tóxicas deve se submeter ao curso de treinamento denominado:',
    'options': ['TPP (Curso Especializado de Transporte de Produtos Perigosos).', 'NPS (Curso de Noções de Primeiros Socorros).', 'TCI (Curso Especializado de Transporte Cargas Inflamáveis).', 'TCP (Curso Especializado de Transporte de Cargas Poluentes).'],
    'answer': 0
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
