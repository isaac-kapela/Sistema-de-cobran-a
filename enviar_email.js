const nodemailer = require('nodemailer');

// Criação do transportador SMTP (Gmail)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gpmicroraptor2025@gmail.com', // Seu e-mail
        pass: 'okjw lkdg epcl fhqw' // Sua senha de app do Gmail
    }
});

// Função para enviar e-mail
async function enviarEmail() {
  try {
    const info = await transporter.sendMail({
      from: "gpmicroraptor2025@gmail.com",
      to: 'dizolele.isaac@estudante.ufjf.br',
      subject: 'Teste de envio de e-mail',
      text: 'Este é um e-mail de teste enviado com Nodemailer.',
      html: `
        <h2>Olá!</h2>
        <p>Este é um e-mail de teste enviado com <b>Nodemailer</b>.</p>
      `
    });

    console.log('✅ E-mail enviado com sucesso!');
    console.log('ID da mensagem:', info.messageId);

  } catch (erro) {
    console.error('❌ Erro ao enviar e-mail:', erro);
  }
}

// Executa
enviarEmail();
