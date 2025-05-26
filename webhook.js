// webhook.js - Automatiza a liberação de acesso após pagamento no Mercado Pago

const express = require('express');
const fs = require('fs');
const axios = require('axios');
const nodemailer = require('nodemailer');
const app = express();

const ACCESS_TOKEN = 'APP_USR-2844148372696282-052516-b993c3028965be6ae7f7c2bebc57a8c2-2232747525'; // Substitua pela sua Access Token do Mercado Pago
const EMAIL_REMETENTE = 'jonathasguilhermeti@gmail.com';
const SENHA_APLICATIVO = 'dhga jihe lykf egih'; // Use uma senha de app do Gmail

app.use(express.json());

// Função para gerar senha aleatória
function gerarSenha() {
  const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Configuração do envio de e-mail via Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_REMETENTE,
    pass: SENHA_APLICATIVO
  }
});

// Função para enviar o e-mail de acesso
function enviarEmailAcesso(email, senha) {
  const mailOptions = {
    from: `Legmaster <${EMAIL_REMETENTE}>`,
    to: email,
    subject: 'Seu acesso à Legmaster foi liberado! 🚦',
    text: `Olá!

Seu pagamento foi confirmado e seu acesso está liberado.

E-mail: ${email}
Senha: ${senha}

Acesse: https://legmaster.com.br/login

Bom estudo!
Equipe Legmaster`
  };

  return transporter.sendMail(mailOptions);
}

// Webhook do Mercado Pago
app.post('/webhook', async (req, res) => {
  const body = req.body;

  if (body.type === 'payment' && body.data && body.data.id) {
    const paymentId = body.data.id;

    try {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
      });

      const pagamento = response.data;

      if (pagamento.status === 'approved') {
        const email = pagamento.payer.email;
        const senha = gerarSenha();
        const hoje = new Date();
        const validade = new Date();
        validade.setFullYear(hoje.getFullYear() + 1);

        // Atualiza liberacoes.json
        const liberacoesPath = 'liberacoes.json';
        let liberacoes = [];
        if (fs.existsSync(liberacoesPath)) {
          liberacoes = JSON.parse(fs.readFileSync(liberacoesPath));
        }
        if (!liberacoes.find(u => u.email === email)) {
          liberacoes.push({ email, liberado_em: hoje.toISOString(), valido_ate: validade.toISOString() });
          fs.writeFileSync(liberacoesPath, JSON.stringify(liberacoes, null, 2));
        }

        // Atualiza usuarios.json
        const usuariosPath = 'usuarios.json';
        let usuarios = [];
        if (fs.existsSync(usuariosPath)) {
          usuarios = JSON.parse(fs.readFileSync(usuariosPath));
        }
        if (!usuarios.find(u => u.email === email)) {
          usuarios.push({ email, senha });
          fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2));
        }

        // Envia e-mail com os dados de acesso
        await enviarEmailAcesso(email, senha);
        console.log(`✅ Acesso liberado e e-mail enviado para ${email}`);
      }

      res.sendStatus(200);
    } catch (err) {
      console.error('❌ Erro no webhook:', err.message);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(200); // Notificação ignorada (outro tipo)
  }
});

app.listen(3000, () => {
  console.log('🚀 Webhook rodando na porta 3000');
});
