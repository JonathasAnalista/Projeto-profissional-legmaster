const mercadopago = require('mercadopago');

console.log('🔄 Iniciando criação da preference...');

mercadopago.configure({
  access_token: 'APP_USR-2844148372696282-052516-b993c3028965be6ae7f7c2bebc57a8c2-2232747525'
});

const preference = {
  items: [
  {
    title: 'Assinatura Legmaster (1 ano) Simulados e Aulas Ilimitadas',
    quantity: 1,
    unit_price: 1.99, // número com ponto
    currency_id: 'BRL'
  }
],

back_urls: {
  success: 'https://legmaster.com.br/sucesso',
  failure: 'https://legmaster.com.br/erro',
  pending: 'https://legmaster.com.br/pendente'
},
auto_return: 'approved',
notification_url: 'https://webhook-legmaster-production.up.railway.app/webhook'
};

mercadopago.preferences.create(preference)
  .then((response) => {
    console.log('✅ Preference criada com sucesso!');
    console.log('🆔 ID da preference:', response.body.id);
  })
  .catch((error) => {
    console.error('❌ Erro ao criar preference:');
    console.trace(error);
  });
