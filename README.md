# Sistema de Cobrança

Sistema simples de envio de emails em lote para uma lista de destinatários.

## Dependências

O projeto requer Python 3.6+ e as seguintes bibliotecas:

- `python-dotenv==1.0.0` - Para gerenciamento de variáveis de ambiente

Para instalar as dependências, execute:

```bash
pip install -r requirements.txt
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_FROM=seu_email@gmail.com
```

> **Nota**: Se estiver usando Gmail, você precisará gerar uma "Senha de App" nas configurações de segurança da sua conta Google.

2. Crie o arquivo `emails.txt` com a lista de destinatários (um email por linha):

```
destinatario1@example.com
destinatario2@example.com
destinatario3@example.com
```

3. Crie o arquivo `message.txt` com o conteúdo da mensagem que será enviada.

## Como Rodar o Projeto

1. **Clone o repositório** (se ainda não o fez)

2. **Crie e ative um ambiente virtual** (recomendado):

```bash
python3 -m venv .venv
source .venv/bin/activate  # No Linux/Mac
# ou
.venv\Scripts\activate     # No Windows
```

3. **Instale as dependências**:

```bash
pip install -r requirements.txt
```

4. **Configure o arquivo .env** conforme descrito acima

5. **Execute o programa**:

```bash
python main.py
```

ou

```bash
python3 main.py
```

O sistema irá:
- Conectar ao servidor SMTP configurado
- Ler a lista de emails de `emails.txt`
- Ler a mensagem de `message.txt`
- Enviar o email para todos os destinatários
- Exibir o progresso no terminal

## Solução de Problemas

### Erro: "ModuleNotFoundError: No module named 'dotenv'"

Se você receber este erro ao executar o programa, existem duas soluções:

**Opção 1: Executar sem ambiente virtual**

Se o ambiente virtual estiver com problemas, você pode desativá-lo e executar diretamente com o Python do sistema:

```bash
deactivate
python3 main.py
```

**Opção 2: Recriar o ambiente virtual**

Se preferir usar um ambiente virtual, recrie-o corretamente:

```bash
# Instalar o pacote python3-venv (se necessário)
sudo apt install python3.10-venv

# Remover o ambiente virtual antigo
rm -rf .venv

# Criar um novo ambiente virtual
python3 -m venv .venv

# Ativar o ambiente virtual
source .venv/bin/activate

# Instalar as dependências
pip install -r requirements.txt
```

**Opção 3: Instalar diretamente do PyPI**

Se houver problemas com índices privados, instale usando o PyPI público:

```bash
pip install --index-url https://pypi.org/simple python-dotenv==1.0.0
```

## Estrutura do Projeto

```
.
├── config.py          # Configurações e variáveis de ambiente
├── main.py            # Script principal
├── emails.txt         # Lista de destinatários
├── message.txt        # Conteúdo da mensagem
├── requirements.txt   # Dependências do projeto
└── .env              # Variáveis de ambiente (não versionado)
```
