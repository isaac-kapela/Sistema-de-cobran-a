const nodemailer = require('nodemailer');

// Criação do transportador SMTP (Gmail)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gpmicroraptor2025@gmail.com', 
        pass: 'okjw lkdg epcl fhqw' 
    }
});

// Lista de destinatários
const listaEmails = [
  'dizolele.isaac@estudante.ufjf.br',
  'kapelajoao4@gmail.com'
];

// Função para enviar e-mail para todos da lista
async function enviarEmailsParaLista() {
  for (const destinatario of listaEmails) {
    try {
      const info = await transporter.sendMail({
        from: 'gpmicroraptor2025@gmail.com',
        to: destinatario,
        subject: 'Teste de envio de e-mail',
        text: 'Este é um e-mail de teste enviado com Nodemailer.',
        html: `
          <h2>Olá!</h2>
          <p>Este é um e-mail de teste enviado com <b>Nodemailer</b>.</p>
        `
      });
      console.log(`✅ E-mail enviado para ${destinatario}! ID: ${info.messageId}`);
    } catch (erro) {
      console.error(`❌ Erro ao enviar para ${destinatario}:`, erro);
    }
  }
}

// Executa
enviarEmailsParaLista();
