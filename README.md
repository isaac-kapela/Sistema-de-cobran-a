# 📧 Sistema Simples de Envio de Emails

Sistema minimalista em Python para enviar emails em massa a partir de uma lista.

## 🎯 Funcionalidade

Envia um texto de email para uma lista de destinatários de forma simples e direta.

## 🚀 Instalação

### Pré-requisitos

- Python 3.6 ou superior
- pip

### Passos

1. Clone o repositório:
```bash
cd Sistema-de-cobran-a
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Configure o arquivo `.env`:
```bash
cp .env.example .env
nano .env  # ou use seu editor preferido
```

4. Edite o `.env` com suas credenciais:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
```

## 📝 Configuração

### 1. Configure suas credenciais de email

Edite o arquivo `.env`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
EMAIL_FROM=seu-email@gmail.com
```

**Para Gmail:**
- Ative a verificação em duas etapas
- Gere uma senha de app em: https://myaccount.google.com/apppasswords
- Use essa senha no campo `EMAIL_PASSWORD`

### 2. Crie a lista de emails

Edite o arquivo `emails.txt` com um email por linha:

```
joao@example.com
maria@example.com
pedro@example.com
```

### 3. Crie sua mensagem

Edite o arquivo `message.txt` com o texto que deseja enviar:

```
Olá!

Esta é sua mensagem personalizada.

Atenciosamente,
Sua equipe
```

## 🎮 Uso

Execute o script:

```bash
python main.py
```

O script irá:
1. Solicitar o assunto do email
2. Mostrar quantos emails serão enviados
3. Pedir confirmação
4. Enviar os emails
5. Exibir o resultado

### Exemplo de execução:

```
╔════════════════════════════════════════════════╗
║     Sistema de Envio de Emails - Python       ║
╚════════════════════════════════════════════════╝

📧 Digite o assunto do email: Importante: Reunião

📋 Lendo emails de: emails.txt
   Encontrados: 3 emails

📄 Lendo mensagem de: message.txt
   Tamanho: 150 caracteres

⚠️  Você vai enviar para 3 destinatários
   Assunto: Importante: Reunião

🤔 Confirma o envio? (s/N): s

🔌 Conectando ao servidor SMTP...
✅ Conectado ao servidor smtp.gmail.com

📨 Enviando emails...

   → joao@example.com... ✅
   → maria@example.com... ✅
   → pedro@example.com... ✅

==================================================
✅ Enviados com sucesso: 3
❌ Erros: 0
==================================================
```

## 📁 Estrutura do Projeto

```
Sistema-de-cobranca/
├── main.py           # Script principal
├── config.py         # Configurações
├── requirements.txt  # Dependências Python
├── .env              # Suas configurações (não commitar!)
├── .env.example      # Exemplo de configuração
├── .gitignore        # Arquivos ignorados
├── emails.txt        # Lista de emails (um por linha)
├── message.txt       # Texto da mensagem
└── README.md         # Esta documentação
```

## 🔒 Segurança

**⚠️ IMPORTANTE:**

- ✅ O arquivo `.env` está no `.gitignore` - não será commitado
- ✅ Use senhas de aplicativo, não sua senha principal
- ✅ Nunca compartilhe suas credenciais
- ✅ Revise a lista de emails antes de enviar

## 🐛 Solução de Problemas

### Erro de autenticação Gmail

**Problema:** `smtplib.SMTPAuthenticationError`

**Solução:**
1. Certifique-se de que a verificação em duas etapas está ativa
2. Gere uma nova senha de app
3. Use a senha de app no `.env`, não sua senha normal

### Erro: "Arquivo não encontrado"

**Problema:** `FileNotFoundError: emails.txt` ou `message.txt`

**Solução:**
- Crie os arquivos `emails.txt` e `message.txt` no mesmo diretório do script

### Conexão recusada

**Problema:** `Connection refused`

**Solução:**
- Verifique se o `EMAIL_HOST` e `EMAIL_PORT` estão corretos
- Para Gmail: `smtp.gmail.com` porta `587`
- Para Outlook: `smtp-mail.outlook.com` porta `587`

## 🎨 Personalização

### Usar outros provedores de email

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

**Servidor customizado:**
```env
EMAIL_HOST=seu-servidor.com
EMAIL_PORT=587
```

## 📄 Licença

ISC

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

---

Desenvolvido com ❤️ por Microraptor
