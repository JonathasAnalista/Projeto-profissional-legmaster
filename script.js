
let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
let currentUser = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

const VERSAO_ATUAL = '1.0.2'; // <-- Você só muda isso quando publicar uma nova versão

const versaoSalva = localStorage.getItem('versao_legmaster');

if (versaoSalva !== VERSAO_ATUAL) {
  localStorage.setItem('versao_legmaster', VERSAO_ATUAL);
  alert("🚀 Uma nova versão da plataforma está disponível! Recarregando...");
  location.reload();
}


function renderLogin() {
  localStorage.setItem("telaAtual", "login");
  document.getElementById("form-box").innerHTML = `
    <button onclick="renderIntro()" style="float:right; background:none; border:none; font-size:28px; color:#999; cursor:pointer;">&times;</button>
    <h2 class="auth-title">Login</h2>
    <div class="form-group">
      <label>Email</label>
      <input type="email" id="email" required />
    </div>
    <div class="form-group">
      <label>Senha</label>
      <input type="password" id="senha" required />
    </div>
    <div class="form-group">
      <label>Cidade</label>
      <input type="text" id="cidade" placeholder="Sua cidade" required />
    </div>
    <button class="auth-btn" onclick="login()">Entrar</button>
  `;
  animateCard();
}

//Para ativar o button cadastrar cole esse codigo na linha de cima <button class="auth-link" onclick="renderCadastro()">Não tem conta? Cadastre-se</button>



// function renderCadastro() {
//   document.getElementById("form-box").innerHTML = `
//     <button onclick="renderIntro()" style="float:right; background:none; border:none; font-size:28px; color:#999; cursor:pointer;">&times;</button>
//     <h2 class="auth-title">Cadastro</h2>
//     <div class="form-group">
//       <label>Nome</label>
//       <input type="text" id="nome" required />
//     </div>
//     <div class="form-group">
//       <label>Email</label>
//       <input type="email" id="email" required />
//     </div>
//     <div class="form-group">
//       <label>Senha</label>
//       <input type="password" id="senha" required />
//     </div>
//     <button class="auth-btn" onclick="cadastrar()">Cadastrar</button>
//     <button class="auth-link" onclick="renderLogin()">Já tem conta? Login</button>
//   `;
//   animateCard();
// }

// function cadastrar() {
//   const nome = document.getElementById("nome").value;
//   const email = document.getElementById("email").value;
//   const senha = document.getElementById("senha").value;

//   if (!nome || !email || !senha) return alert("Preencha todos os campos.");
//   if (!email.includes("@")) return alert("Digite um email válido.");
//   if (senha.length < 4) return alert("A senha deve ter no mínimo 4 caracteres.");
//   if (usuarios.some(u => u.email === email)) return alert("Email já cadastrado.");

//   usuarios.push({ nome, email, senha });
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
//   alert("Cadastro realizado! Faça login.");
//   renderLogin();
// }

async function validarAcessoPorPlanilha(email, senha) {
    const planilhaURL = "https://opensheet.elk.sh/1o9KtR9dFCgO37xQQvfMmCa1l1p7YSV19QyAE5YP-D1U/Sheet1";

  try {
    const response = await fetch(planilhaURL);
    const data = await response.json();

    const usuario = data.find(u => u.email?.toLowerCase() === email.toLowerCase());

    if (!usuario) {
      mostrarAlerta("Atenção verifique o campo de email e senha!.");
      return false;
    }

    if (usuario.senha !== senha) {
      mostrarAlerta("Senha incorreta.");
      return false;
    }

    if (usuario.status.toLowerCase() !== "ativo") {
      mostrarAlerta(`Olá ${usuario.nome}, seu acesso está inativo.\nEntre em contato para renovação.\n(35)99847-5349`);
      return false;
    }

    // Opcional: Verificar vencimento
    const hoje = new Date();
    const venc = new Date(usuario.vencimento);
    if (venc < hoje) {
      mostrarAlerta(`Seu acesso venceu em ${usuario.vencimento}.`);
      return false;
    }

    // Se tudo certo, salvar usuário
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    return true;

  } catch (error) {
    console.error("Erro ao acessar planilha:", error);
    mostrarAlerta("Erro ao validar usuário. Verifique sua conexão.");
    return false;
  }
}


function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const cidadeInput = document.getElementById("cidade");
  const cidade = cidadeInput ? cidadeInput.value.trim() : "";

  if (!email || !senha || !cidade) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  validarAcessoPorPlanilha(email, senha).then(valido => {
    if (valido) {
      const usuario = { email, senha };
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      if (typeof gtag === "function") {
        gtag('set', { user_id: email });
      }

      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdA1E_9sq-owsp9HdKT4kGH549C1ziUNAHTLpM-KLmPpr6nKg/formResponse";
      const formData = new FormData();
      formData.append("entry.749872362", email);
      formData.append("entry.683876114", cidade);

      fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      renderTelaInicial();
      renderMenuPrincipal();
    } else {
      alert("❌ Email ou senha inválidos!");
    }
  }).catch(error => {
    console.error("Erro ao validar acesso:", error);
    alert("Erro ao tentar logar. Tente novamente.");
  });
}




  





function mostrarAlerta(mensagem) {
  document.getElementById("alert-message").innerText = mensagem;
  document.getElementById("custom-alert").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("custom-alert").style.display = "none";
}


function renderMenuPrincipal() {
  localStorage.setItem("telaAtual", "menu");
  const nome = currentUser?.nome || currentUser?.email || 'Aluno';
  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 26px; margin-bottom: 20px;"> 👋 Olá, <span style="color:#00796B">${nome}</span>!</h2>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin-top: 40px;">
      <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderAulas()">📚 Assistir às Aulas</button>
      <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderHome()">📝 Fazer Simulados</button>
      <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderDesempenho()">📊 Ver Desempenho</button>
    </div>

      
    
    <button class="auth-link" style="margin-top: 25px;" onclick="logout()">Sair</button>
    </div>
  `;
  animateCard();
}

function renderAulas() {
  localStorage.setItem("telaAtual", "aulas");
  const materias = [
    "Legislação",
    "Direção Defensiva",
    "Primeiros Socorros",
    "Meio Ambiente",
    "Mecânica",
    "Infrações",
    "Sinalização",
    "Normas de Circulação"
  ];

  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 24px; margin-bottom: 20px;">Escolha a matéria:</h2>
      <div style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        justify-content: center;
      ">
        ${materias.map(mat => `
          <button class="auth-btn"
            onclick="abrirAulas('${mat}')"
            style="
              min-width: 110px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              white-space: normal;
              word-break: break-word;
              font-weight: bold;
              padding: 10px;
            "
          >
            ${mat}
          </button>
        `).join("")}
      </div>

      <button class="auth-link" style="margin-top: 30px;" onclick="renderMenuPrincipal()">← Voltar</button>
      <p style='margin-top: 25px; font-size: 14px; color: #555;'>• Desenvolvedor e Instrutor de Trânsito Jonas •</p>

    </div>
  `;
  animateCard();
}


function abrirAulas(materia) {
  const videos = {
    "Legislação": [
      "https://www.youtube.com/embed/UNxVbj42Vmw",
      "https://www.youtube.com/embed/xmPJDRS8FOg"
      
    ],
    "Direção Defensiva": [  
      "https://www.youtube.com/embed/8_TQ9XecThc",
      "https://www.youtube.com/embed/ZfjS7Qwm90g"
    ],

    "Sinalização": [
      "https://www.youtube.com/embed/fRlX8zEkKTY",
      "https://www.youtube.com/embed/LnQ071-bhfM"

    ],

    "Normas de Circulação": [
      "https://www.youtube.com/embed/o4WyAXfECug",
      "https://www.youtube.com/embed/96lyf5KvblM"

    ],

    "Mecânica": [
      "https://www.youtube.com/embed/S0SQpzVPryA"
    ],

    "Meio Ambiente": [
      "https://www.youtube.com/embed/0m9JnMq0b_Q"
    ],

    "Infrações": [
      "https://www.youtube.com/embed/QI5QYjwkrko"
    ],

    "Primeiros Socorros": [
      "https://www.youtube.com/embed/y3WEzqDoMz4"
    ],



    // Adicione as demais matérias aqui...
  };

  const lista = videos[materia] || [];

  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 22px; margin-bottom: 15px;">${materia}</h2>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${lista.map(link => `<iframe width="100%" height="215" src="${link}" frameborder="0" allowfullscreen></iframe>`).join("")}
      </div>
      <button class="auth-link" style="margin-top: 25px;" onclick="renderAulas()">← Voltar às Matérias</button>
    
    </div>
  `;
  animateCard();
}

function renderHome() {
  localStorage.setItem("telaAtual", "home");
  renderSimulados();
}

function renderSimulados() {
  localStorage.setItem("telaAtual", "simulados");
  const nome = currentUser && currentUser.nome ? currentUser.nome : 'Aluno';
  document.getElementById("form-box").innerHTML = `
      <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 26px; margin-bottom: 20px;">Olá, ${nome}!</h2>
      <p style="font-size: 18px; color: #444;">Escolha uma matéria para iniciar seu simulado:</p>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 30px;">
        <button class="auth-btn" onclick="renderProvas('Sinalização')">Sinalização</button>
        <button class="auth-btn" onclick="renderProvas('Normas de Circulação')">Normas de Circulação</button>
        <button class="auth-btn" onclick="renderProvas('Direção Defensiva')">Direção Defensiva</button>
        <button class="auth-btn" onclick="renderProvas('Legislação')">Legislação</button>
        <button class="auth-btn" onclick="renderProvas('Primeiros Socorros')">Primeiros Socorros</button>
        <button class="auth-btn" onclick="renderProvas('Mecânica')">Mecânica</button>
        <button class="auth-btn" onclick="renderProvas('Meio Ambiente')">Meio Ambiente</button>
        <button class="auth-btn" onclick="renderProvas('Infrações')">Infrações</button>
        
        
      </div>
      
      <button class="auth-link" style="margin-top: 20px;" onclick="renderMenuPrincipal()">← Voltar</button>
      <p style='margin-top: 25px; font-size: 14px; color: #555;'>• Desenvolvedor e Instrutor de Trânsito Jonas •</p>
    
    </div>
  `;

      

    let indexAtual = 0;

    function mostrarProximoDepoimento() {
      const texto = document.getElementById("depoimento-texto");
      const autor = document.getElementById("depoimento-autor");

      if (texto && autor) {
        texto.textContent = `“${depoimentos[indexAtual].texto}”`;
        autor.textContent = depoimentos[indexAtual].autor;
        indexAtual = (indexAtual + 1) % depoimentos.length;
      }
    }

    setInterval(mostrarProximoDepoimento, 5000); // troca a cada 5s


  animateCard();
}

function renderProvas(materia) {
  localStorage.setItem("telaAtual", "provas");
  const basePath = 'simulados'; // pasta onde estão suas provas locais

  const nomes = {
    "Sinalização": "sinalizacao",
    "Normas de Circulação": "normas_circulacao",
    "Legislação": "legislacao",
    "Infrações": "infracoes",
    "Direção Defensiva": "direcao_defensiva",
    "Primeiros Socorros": "primeiros_socorros",
    "Meio Ambiente": "meio_ambiente",
    "Mecânica": "mecanica"
  };

  const prefixo = nomes[materia] || "";
  const provas = [...Array(3)].map((_, i) => `${basePath}/${prefixo}-${i + 1}/index.html`);

  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 24px; margin-bottom: 10px;">${materia}</h2>
      <p style="font-size: 17px; color: #444;">Escolha uma prova:</p>
      <div style="display: flex; flex-direction: column; align-items: center; margin: 30px 0; gap: 15px;">
        ${provas.map((url, i) => `<button class="auth-btn" onclick="window.open('${url}', '_blank')">Prova ${i + 1}</button>`).join('')}
      </div>
      <button class="auth-link" onclick="renderSimulados()">← Voltar</button>
    
    </div>
  `;
  animateCard();
}

function renderDesempenho() {
  localStorage.setItem("telaAtual", "desempenho");
  const email = currentUser?.email;
  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");
  const dados = desempenho[email] || [];

  let total = dados.reduce((sum, item) => sum + item.acertos, 0);

  document.getElementById("form-box").innerHTML = `
    <div style="text-align:center;">
      <h2 style="color:#2E7D32; font-size: 24px;">📊 Desempenho</h2>
      <br>
      ${dados.length === 0 ? "<p class='desempenho-vazio'>Nenhuma prova realizada ainda.</p>" : `
        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #e0f2f1;">
              <th style="padding: 8px; border: 1px solid #ccc;">Prova</th>
              <th style="padding: 8px; border: 1px solid #ccc;">Acertos</th>
              <th style="padding: 8px; border: 1px solid #ccc;">Data</th>
            </tr>
          </thead>
          <tbody>
            ${dados.map(d => `
              <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">${d.prova}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${d.acertos}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${d.data}</td>
              </tr>`).join('')}
          </tbody>
        </table>
        <button class="auth-btn" style="margin-top: 20px;" onclick="apagarHistorico()">🗑️ Apagar Histórico</button>
      `}
      <button class="auth-link" style="margin-top: 20px;" onclick="renderMenuPrincipal()">← Voltar</button>
    </div>
  `;
  animateCard();
}
function apagarHistorico() {
  if (!confirm("Tem certeza que deseja apagar todo o histórico de desempenho?")) return;

  const email = currentUser?.email;
  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");

  delete desempenho[email];
  localStorage.setItem("desempenho", JSON.stringify(desempenho));

  alert("Histórico apagado com sucesso!");
  renderDesempenho();
}






function logout() {
  localStorage.removeItem("usuarioLogado");
  currentUser = null;
  renderIntro();
}
 
function verificarLiberacao(email) {
      return fetch('liberacoes.json')
      .then(res => res.json())
      .then(data => {
      const liberado = data.find(u => u.email === email);
      if (!liberado) return false;

      const hoje = new Date();
      const dataLiberacao = new Date(liberado.liberado_em);
      const validade = new Date(dataLiberacao);
      validade.setFullYear(validade.getFullYear() + 1);

      return hoje <= validade;
    })
      .catch(() => false);
    }

function renderIntro() {
  localStorage.setItem("telaAtual", "intro");
  document.getElementById("form-box").innerHTML = `  

    



    <div style="text-align: center">

      <img src="logo_nova.jpg" alt="Logo" style="width: 150px; height: auto; margin-bottom: 20px;" />


      <h3 style="font-size: 20px; color: rgb(2, 147, 173); margin-bottom: 20px">
        “Simulados e aulas que garantem sua aprovação no Detran!”
      </h3>

      <div style="margin-top: 20px; padding-left: 30px; text-align: left; font-size: 14px; color: #333; line-height: 1.8;">
        <p>✔️ Aulas atualizadas com o CTB</p>
        <p>✔️ Simulados com questões reais</p>
        <p>✔️ Método validado por +850 alunos</p>
        <br>
      </div>
      
          <!-- Botões dentro do card branco -->
        <div class="auth-card" id="form-box" style="padding: 40px 30px; border-radius: 16px; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); max-width: 400px; margin: auto;">

          <!-- Botão Acessar -->
          <button class="auth-btn" onclick="renderLogin()" style="width: 100%; padding: 12px; margin-bottom: 15px; background-color: #4CAF50; color: white; border: none; border-radius: 6px; font-size: 16px;">
            Acessar
          </button>

          <!-- Botão WhatsApp -->
          <a href="https://wa.me/5535998475349?text=Olá%20Instrutor%20Jonas!%20Gostaria%20de%20solicitar%20acesso%20à%20plataforma%20Legmaster" target="_blank">
            <button class="auth-btn" style="width: 100%; padding: 12px; background-color: rgb(51, 139, 139); color: white; border: none; border-radius: 6px; font-size: 16px;">
              Solicitar Acesso
            </button>
          </a>

          <!-- ✅ Botão Mercado Pago centralizado abaixo -->
          <div style="margin-top: 20px; display: flex; justify-content: center;">
            <div id="wallet_container"></div>
          </div>

          <!-- Depoimento -->
          <div id="depoimento" style="margin-top: 25px; text-align: center; font-style: italic; font-size: 14px; color: #555;">
            <p id="depoimento-texto">“O legal é que os simulados são objetivos e interativos. consegui minha aprovação acertei 25!!”</p>
            <strong id="depoimento-autor">– Gabriel, Jacutinga MG</strong>
          </div>

        </div>






     
    </div>

    
   

    

  `;
      const depoimentos = [
      { texto: "Os simulados com perguntas reais da prova me ajudou a passar, tirei 28 pontos", autor: "– Maria, Jacutinga MG" },
      { texto: "O legal é que os simulados são objetivos e interativos. consegui minha aprovação acertei 25!!", autor: "– Gabriel,Jacutinga MG" },
      { texto: "As aulas, as correções de provas e o simulado são ótimos! vai ajudar muita gente.", autor: "– Joyce, Jacutinga MG" },
      { texto: "Passei de primeira graças à plataforma Legmaster! passei com 23", autor: "– Carla, Jacutinga MG" },
      { texto: "Excelente metodologia, me senti muito preparado! Depois de 3 reprovas agora fooii! tirei 24 pontos", autor: "– João, Jacutinga MG" },
      { texto: "As aulas são claras e objetivas. Aprovada!", autor: "– Marina, Jacutinga MG" }
    ];

    let indexAtual = 0;

    function mostrarProximoDepoimento() {
      const texto = document.getElementById("depoimento-texto");
      const autor = document.getElementById("depoimento-autor");

      if (texto && autor) {
        texto.textContent = `“${depoimentos[indexAtual].texto}”`;
        autor.textContent = depoimentos[indexAtual].autor;
        indexAtual = (indexAtual + 1) % depoimentos.length;
      }
    }

    setInterval(mostrarProximoDepoimento, 5000);

  animateCard();
}




function animateCard() {
  const box = document.getElementById("form-box");
  box.style.animation = "fadeIn 0.5s ease-in-out";
}

const tela = localStorage.getItem("telaAtual");



// Se não estiver logado, força para tela inicial
if (!currentUser && tela !== "intro" && tela !== "login") {
  renderIntro();
} else {
  switch (tela) {
    case "login": renderLogin(); break;
    case "menu": renderMenuPrincipal(); break;
    case "desempenho": renderDesempenho(); break;
    case "aulas": renderAulas(); break;
    case "simulados": renderSimulados(); break;
    default: renderIntro(); break;
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Impede o prompt automático
  deferredPrompt = e;

  if (!localStorage.getItem('pwaInstalado')) {
    const confirmar = confirm("📱 Deseja instalar este site como um app no seu celular?");
    if (confirmar) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          console.log("✅ Aplicativo instalado com sucesso");
          localStorage.setItem('pwaInstalado', 'true');
        } else {
          console.log("❌ Usuário recusou a instalação");
        }
      });
    }
  }
});

function atualizarUserIDAnalytics() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

  if (usuario && (usuario.email || usuario.nome)) {
    const id = usuario.email || usuario.nome;
    gtag('config', 'G-XXXXXXXXXX', { user_id: id });
    console.log("✅ user_id enviado ao Analytics:", id);
  }
}

