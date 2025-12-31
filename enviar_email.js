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

const { google } = require('googleapis');
const fs = require('fs');

// Carregue as credenciais do arquivo JSON
const credentials = require('./credentials.json');

// Autenticação Google
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// ID da planilha e range (substitua pelos seus dados)
const spreadsheetId = '1R14Puv40KiahHdiUAIZU2Z5eXf4B0vZaCf2yYqQe1MA';
const range = 'GMM!A1:O46'; // Nome da aba e intervalo conforme imagem

async function main() {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  // Ler dados da planilha
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = res.data.values;
  if (!rows || !rows.length) {
    console.log('Nenhum dado encontrado.');
    return;
  }

  // Exemplo de lista de e-mails (adicione todos os nomes e e-mails)
  const emails = {
    'isaac': 'dizolele.isaac@estudante.ufjf.br',
  };

  // Processar dados
  const resultado = [];
  const meses = rows[0].slice(2, 14); // Ajuste conforme cabeçalho

  for (let i = 1; i < rows.length; i++) {
    const nome = rows[i][0];
    const email = emails[nome] || 'email não encontrado';
    const pagamentos = {};
    for (let j = 0; j < meses.length; j++) {
      pagamentos[meses[j]] = rows[i][j + 2] === '✔' ? 'Pago' : 'Não pago';
    }
    resultado.push({ nome, email, ...pagamentos });
  }

  // Salvar resultado em JSON
  fs.writeFileSync('relatorio_pagamentos.json', JSON.stringify(resultado, null, 2));
  console.log('Relatório gerado!');
}

main().catch(console.error);
