const nodemailer = require('nodemailer');

// Configurações do transporte (exemplo com Gmail)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gpmicroraptor2025@gmail.com', // Seu e-mail
        pass: 'npms axzp ymzi dsly' // Sua senha de app do Gmail
    }
});

// Configurações do e-mail
let mailOptions = {
    from: 'gpmicroraptor2025@gmail.com',
    to: 'dizolele.isaac@estudante.ufjf.br',
    subject: 'Assunto da Cobrança',
    text: 'Olá, este é um e-mail de cobrança automático enviado pelo Node.js!'
};

// Enviando o e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Erro ao enviar e-mail:', error);
    } else {
        console.log('E-mail enviado:', info.response);
    }
});
