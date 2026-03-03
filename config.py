import os
from dotenv import load_dotenv

load_dotenv()

# Configurações de Email
EMAIL_HOST = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.getenv('EMAIL_PORT', '587'))
EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')
EMAIL_FROM = os.getenv('EMAIL_FROM', EMAIL_USER)

# Arquivos
EMAILS_FILE = os.getenv('EMAILS_FILE', 'emails.txt')
MESSAGE_FILE = os.getenv('MESSAGE_FILE', 'message.txt')

# Validação
if not EMAIL_USER or not EMAIL_PASSWORD:
    raise ValueError("Configure EMAIL_USER e EMAIL_PASSWORD no arquivo .env")
