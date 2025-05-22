
let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
let currentUser = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

function renderLogin() {
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
    <button class="auth-btn" onclick="login()">Entrar</button>`;
  animateCard();
      //Para ativar o button cadastrar cole esse codigo na linha de cima <button class="auth-link" onclick="renderCadastro()">Não tem conta? Cadastre-se</button>

}

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
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  validarAcessoPorPlanilha(email, senha).then(valido => {
    if (valido) {
      // ✅ Atualiza a variável global corretamente
      currentUser = JSON.parse(localStorage.getItem("usuarioLogado"));
      console.log("Usuário logado:", currentUser); // opcional para debug

      renderMenuPrincipal(); // Agora com o nome certo
}})
  }


function mostrarAlerta(mensagem) {
  document.getElementById("alert-message").innerText = mensagem;
  document.getElementById("custom-alert").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("custom-alert").style.display = "none";
}


function renderMenuPrincipal() {
  const nome = currentUser && currentUser.nome ? currentUser.nome : 'Aluno';
  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center;">
      <h2 style="color:#2E7D32; font-size: 26px; margin-bottom: 20px;">Bem-vindo, ${nome}!</h2>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin-top: 40px;">
        <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderAulas()">📚 Assistir às Aulas</button>
        <button class="auth-btn" style="font-size: 20px; padding: 20px;" onclick="renderHome()">📝 Fazer Simulados</button>
      </div>
      
    
    <button class="auth-link" style="margin-top: 25px;" onclick="logout()">Sair</button>
    </div>
  `;
  animateCard();
}

function renderAulas() {
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
  renderSimulados();
}

function renderSimulados() {
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
  animateCard();
}

function renderProvas(materia) {
  const links = {
    "Sinalização": [...Array(3)].map((_, i) => `https://simulado-sinalizacao-${i+1}.netlify.app/`),
    "Normas de Circulação": [...Array(3)].map((_, i) => `https://simulado-normas-circulacao-${i+1}.netlify.app/`),
    "Legislação": [...Array(3)].map((_, i) => `https://simulado-legislacao-${i+1}.netlify.app/`),
    "Infrações": [...Array(3)].map((_, i) => `https://simulado-infracoes-${i+1}.netlify.app/`),
    "Direção Defensiva": [...Array(3)].map((_, i) => `https://simulado-direcao-defensiva-${i+1}.netlify.app/`),
    "Primeiros Socorros": [...Array(3)].map((_, i) => `https://simulado-primeiros-socorros-${i+1}.netlify.app/`),
    "Meio Ambiente": [...Array(3)].map((_, i) => `https://simulado-meio-ambiente-${i+1}.netlify.app/`),
    "Mecânica": [...Array(3)].map((_, i) => `https://simulado-mecanica-${i+1}.netlify.app/`)
  };

  const provas = links[materia] || [];
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

function logout() {
  localStorage.removeItem("usuarioLogado");
  currentUser = null;
  renderIntro();
}


function renderIntro() {
  document.getElementById("form-box").innerHTML = `
    <div style="text-align: center">
      <img src="carro-diamante.png" alt="Logo" style="width: 150px; height: auto; margin-bottom: 20px;" />
      <h2 style="font-size: 36px; color: #2E7D32; margin-bottom: 20px">Legmaster</h2>
      <h2 style="font-size: 24px; color:rgb(16, 82, 19); margin-bottom: 20px">Você no rumo certo!</h2>
      <h2 style="font-size: 18px; color:rgb(10, 22, 10); margin-bottom: 20px">Solicite seu login pelo Whatapp</h2>
      <h2 style="font-size: 24px; color:rgb(255, 0, 0); margin-bottom: 20px"> →→ (35) 99847-5349 ←←</h2> 
      <button class="auth-btn" onclick='renderLogin()'>Acessar</button>
      <p style='margin-top: 25px; font-size: 14px; color: #555;'>• Instrutor de Trânsito, Jonas! Desde 2020 •</p>
    </div>
  `;
  animateCard();
        // Para ativar o botao cadastre-se na tela inicial cole o codigo abaixo na linha de cima
        // <button class="auth-btn" onclick='renderCadastro()'>Cadastre-se</button>

}
function animateCard() {
  const box = document.getElementById("form-box");
  box.style.animation = "fadeIn 0.5s ease-in-out";
}

renderIntro();
