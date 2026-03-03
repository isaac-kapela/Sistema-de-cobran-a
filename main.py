#!/usr/bin/env python3
"""
Sistema Simples de Envio de Emails
Envia uma mensagem de texto para uma lista de emails
"""

import smtplib
import sys
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
import config


def ler_emails(arquivo):
    """Lê lista de emails do arquivo, um por linha"""
    try:
        with open(arquivo, 'r', encoding='utf-8') as f:
            emails = [linha.strip() for linha in f if linha.strip() and '@' in linha]
        return emails
    except FileNotFoundError:
        print(f"❌ Arquivo não encontrado: {arquivo}")
        print(f"💡 Crie o arquivo com um email por linha")
        sys.exit(1)


def ler_mensagem(arquivo):
    """Lê o conteúdo da mensagem do arquivo"""
    try:
        with open(arquivo, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"❌ Arquivo não encontrado: {arquivo}")
        print(f"💡 Crie o arquivo com o texto da mensagem")
        sys.exit(1)


def criar_servidor_smtp():
    """Cria e autentica conexão com servidor SMTP"""
    try:
        servidor = smtplib.SMTP(config.EMAIL_HOST, config.EMAIL_PORT)
        servidor.starttls()
        servidor.login(config.EMAIL_USER, config.EMAIL_PASSWORD)
        print(f"✅ Conectado ao servidor {config.EMAIL_HOST}")
        return servidor
    except Exception as e:
        print(f"❌ Erro ao conectar ao servidor: {e}")
        sys.exit(1)


def enviar_email(servidor, destinatario, assunto, mensagem):
    """Envia um email para um destinatário"""
    try:
        msg = MIMEMultipart()
        msg['From'] = config.EMAIL_FROM
        msg['To'] = destinatario
        msg['Subject'] = assunto
        
        msg.attach(MIMEText(mensagem, 'plain', 'utf-8'))
        
        servidor.send_message(msg)
        return True
    except Exception as e:
        print(f"   ❌ Erro: {e}")
        return False


def main():
    """Função principal"""
    print("╔════════════════════════════════════════════════╗")
    print("║     Sistema de Envio de Emails - Python       ║")
    print("╚════════════════════════════════════════════════╝\n")
    
    # Assunto fixo
    assunto = "🔔 Lembrete: Pagamento GMM - Início do Mês"
    
    # Lê a lista de emails
    print(f"\n📋 Lendo emails de: {config.EMAILS_FILE}")
    emails = ler_emails(config.EMAILS_FILE)
    print(f"   Encontrados: {len(emails)} emails")
    
    # Lê a mensagem
    print(f"\n📄 Lendo mensagem de: {config.MESSAGE_FILE}")
    mensagem = ler_mensagem(config.MESSAGE_FILE)
    print(f"   Tamanho: {len(mensagem)} caracteres")
    
    # Confirmação
    print(f"\n⚠️  Você vai enviar para {len(emails)} destinatários")
    print(f"   Assunto: {assunto}")
    resposta = input("\n🤔 Confirma o envio? (s/N): ").strip().lower()
    
    if resposta != 's':
        print("❌ Envio cancelado")
        sys.exit(0)
    
    # Conecta ao servidor
    print(f"\n🔌 Conectando ao servidor SMTP...")
    servidor = criar_servidor_smtp()
    
    # Envia emails
    print(f"\n📨 Enviando emails...\n")
    enviados = 0
    erros = 0
    
    for email in emails:
        print(f"   → {email}...", end=" ")
        if enviar_email(servidor, email, assunto, mensagem):
            print("✅")
            enviados += 1
        else:
            erros += 1
    
    # Fecha conexão
    servidor.quit()
    
    # Resumo
    print(f"\n{'='*50}")
    print(f"✅ Enviados com sucesso: {enviados}")
    print(f"❌ Erros: {erros}")
    print(f"{'='*50}\n")


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Operação cancelada pelo usuário")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Erro inesperado: {e}")
        sys.exit(1)
