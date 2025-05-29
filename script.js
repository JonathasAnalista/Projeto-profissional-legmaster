// ===============================
// Firebase Configuração Legmaster
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyDvvusp4oXSq10OQaYASY0x5nbITAL680c",
  authDomain: "legmaster-firebase.firebaseapp.com",
  projectId: "legmaster-firebase",
  storageBucket: "legmaster-firebase.appspot.com",
  messagingSenderId: "202888695536",
  appId: "1:202888695536:web:3872f77a5e0dd1e1d0bc35",
  measurementId: "G-893VBVSCH8"
};

if (!window.firebaseAppInitialized) {
  firebase.initializeApp(firebaseConfig);
  window.firebaseAppInitialized = true;
}

let db;
document.addEventListener("DOMContentLoaded", () => {
  if (firebase?.firestore) {
    db = firebase.firestore();
  }
});


const auth = firebase.auth();


// visível no escopo global:
window.salvarDesempenhoFirestore = async function(email, prova, acertos) {
  const emailDoc = email.replace(/[.@]/g, "_");
  const data = new Date().toLocaleString("pt-BR");

  try {
    await db.collection("desempenhos").add({
      email,
      prova,
      acertos,
      data,
      docId: emailDoc
    });
    console.log("✅ Desempenho salvo no Firestore.");
  } catch (err) {
    console.error("❌ Erro ao salvar desempenho:", err);
  }
};





async function buscarDesempenhoFirestore(email) {
  const emailDoc = email.replace(/[.@]/g, "_");
  const resultados = [];

  try {
    const snapshot = await db.collection("desempenhos")
      .where("email", "==", email)
      .orderBy("data", "desc")
      .get();

    snapshot.forEach(doc => {
      resultados.push(doc.data());
    });

    console.log("✅ Desempenhos encontrados:", resultados);
    return resultados;
  } catch (err) {
    console.error("Erro ao buscar desempenho no Firestore:", err);
    return [];
  }
}




let currentUser = JSON.parse(localStorage.getItem("usuarioLogado") || "null");


const VERSAO_ATUAL = "1.6.7";
const versaoSalva = localStorage.getItem("versao_legmaster");

if (versaoSalva !== VERSAO_ATUAL) {
  localStorage.setItem("versao_legmaster", VERSAO_ATUAL);
  alert("🚀 Uma nova versão da plataforma está disponível! Recarregando...");
  location.reload();
}



function renderLogin() {
  localStorage.setItem("telaAtual", "login");
  const formBox = document.getElementById("form-box");
  if (!formBox) return;
  formBox.innerHTML = `
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
    <button type="button" class="auth-btn" id="botaoLogin">Entrar</button>`;
  setTimeout(() => {
    const botaoLogin = document.getElementById("botaoLogin");
    if (botaoLogin) {
      botaoLogin.addEventListener("click", () => {
        console.log("Login button clicked");
        login();
      });
    } else {
      console.error("Botão de login não encontrado para adicionar evento.");
    }
  }, 0);
  animateCard();
}

function login() {
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  if (!emailInput || !senhaInput) {
    mostrarAlertaLogin("⚠️ Erro ao localizar campos de login.");
    return;
  }

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!email || !senha) {
    mostrarAlertaLogin("⚠️ Preencha todos os campos.");
    return;
  }

  auth.signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("usuarioLogado", JSON.stringify({ email: user.email }));
      currentUser = { email: user.email };

      if (typeof gtag === "function" && user?.email) {
        gtag("set", { user_id: user.email });
      }

      renderMenuPrincipal();
      if (typeof registrarAcesso === "function") {
        registrarAcesso(user.email);
      }
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        mostrarAlertaLogin("❌ Usuário não encontrado. Verifique o e-mail digitado.");
      } else if (error.code === "auth/wrong-password") {
        mostrarAlertaLogin("🔐 Senha incorreta! Tente novamente com calma.");
      } else if (error.code === "auth/invalid-login-credentials") {
        mostrarAlertaLogin("❗ Email ou senha incorretos. Verifique os dados digitados.");
      } else {
        mostrarAlertaLogin("⚠️ Erro inesperado. Tente novamente mais tarde.");
      }


  console.error("Erro no login:", error.code, error.message);
});

}


document.addEventListener("DOMContentLoaded", () => {
  const tela = localStorage.getItem("telaAtual");
  if (tela === "login") {
    renderLogin();
  } else {
    renderIntro();
  }
});

auth.onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem("usuarioLogado", JSON.stringify({ email: user.email }));
    currentUser = { email: user.email };
    renderMenuPrincipal();
  } else {
    renderIntro();
  }
});


// =====================
// ALERTA PERSONALIZADO
// =====================
function mostrarAlerta(mensagem) {
  document.getElementById("alert-message").innerText = mensagem;
  document.getElementById("custom-alert").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("custom-alert").style.display = "none";
}

// =====================
// MENU PRINCIPAL
// =====================
function renderMenuPrincipal() {
  localStorage.setItem("telaAtual", "menu");
  const nome = currentUser && currentUser.email ? currentUser.email.split('@')[0] : 'Aluno';
  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 26px; margin-bottom: 20px;">Bem-vindo, ${nome}!</h2>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin-top: 40px;">
        <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderAulas()">📚 Assistir às Aulas</button>
        <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderHome()">📝 Fazer Simulados</button>
        <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderDesempenho()">📊 Ver Desempenho</button>
        <button class="auth-link" style="margin-top: 25px;" onclick="logout()">Sair</button>
      </div>
    </div>
  `;
  animateCard();
}

// =====================
// LOGOUT
// =====================
function logout() {
  auth.signOut().then(() => {
    localStorage.removeItem("usuarioLogado");
    renderLogin();
  });
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
        <button class="auth-btn" onclick="renderProvas('Provas gerais')">Provas gerais</button>

        
        
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
    "Mecânica": "mecanica",
    "Provas gerais": "provas_gerais",
  };

  const prefixo = nomes[materia] || "";
  const provas = [...Array(3)].map((_, i) => `${basePath}/${prefixo}-${i + 1}/index.html`);

  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 24px; margin-bottom: 10px;">${materia}</h2>
      <p style="font-size: 17px; color: #444;">Escolha uma prova:</p>
      <div style="display: flex; flex-direction: column; align-items: center; margin: 30px 0; gap: 15px;">
        ${provas.map((url, i) => `<button class="auth-btn" onclick="abrirProva('${materia} - Prova ${i + 1}', '${url}')">Prova ${i + 1}</button>`).join('')}
      </div>
      <button class="auth-link" onclick="renderSimulados()">← Voltar</button>
    
    </div>
    
  `;
  animateCard();



}

function abrirProva(nomeProva, url) {
  localStorage.setItem("provaAtual", nomeProva);
  window.open(url, "_blank");
}

async function renderDesempenho() {
  localStorage.setItem("telaAtual", "desempenho");

  const email = currentUser?.email;
  if (!email) return;

  const dados = await buscarDesempenhoFirestore(email);

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
      <button class="auth-btn" id="btn-acessar">Acessar</button>
      <br><br>
      <a href="https://wa.me/5535998475349?text=Olá%20Instrutor%20Jonas!%20Gostaria%20de%20solicitar%20acesso%20à%20plataforma%20Legmaster. Como funciona?" target="_blank">
        <button class="auth-btn" style="transition: all 0.3s ease; background-color:rgb(51, 139, 139);">
          Solicitar Acesso
        </button>
      </a>
      <div id="depoimento" style="margin: 20px 0; font-size: 14px; text-align: center; font-style: italic; color: #555;">
        <p id="depoimento-texto">“...”</p>
        <strong id="depoimento-autor">– ...</strong>
      </div>
    </div>
  `;

  document.getElementById("btn-acessar").addEventListener("click", renderLogin);

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
  if (box) box.style.animation = "fadeIn 0.5s ease-in-out";
}

function mostrarAlertaLogin(msg) {
  const alerta = document.getElementById("alerta-login");
  const texto = document.getElementById("mensagem-alerta-login");

  if (alerta && texto) {
    texto.textContent = msg;
    alerta.style.display = "block";

    setTimeout(() => {
      alerta.style.display = "none";
    }, 5000);
  } else {
    console.warn("⚠️ Alerta de login não pôde ser exibido. Elemento não encontrado.");
  }
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



