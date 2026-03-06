# QRCode CLI Toolkit

Um **CLI (Command Line Interface)** desenvolvido em **Node.js** para gerar **QR Codes**, **senhas seguras** e gerenciar **histórico de geração de QR Codes**.

O projeto foi criado como um **kit de utilidades simples**, permitindo gerar rapidamente QR Codes para links e criar senhas configuráveis diretamente pelo terminal.

---

# 🚀 Funcionalidades

O CLI oferece as seguintes ferramentas:

### 1️⃣ Gerador de QR Code

- Gera QR Codes a partir de qualquer URL
- Pode exibir o QR Code diretamente no **terminal**
- Pode **salvar o QR Code como imagem PNG**
- Registra automaticamente no **histórico**

### 2️⃣ Gerador de Senhas

- Gera senhas seguras automaticamente
- Configuração controlada via **variáveis de ambiente**
- Permite definir:
  - letras maiúsculas
  - letras minúsculas
  - números
  - caracteres especiais
  - tamanho da senha

### 3️⃣ Histórico de QR Codes

Permite visualizar todos os QR Codes já gerados.

Informações registradas:

- ID único
- Link original
- Nome do arquivo QR Code
- Data de criação

### 4️⃣ Limpeza de Histórico

Remove:

- todos os registros do `history.json`
- todos os arquivos de QR Code da pasta `/qrcodes`

Antes da exclusão o CLI solicita confirmação.

---

# 📦 Tecnologias Utilizadas

O projeto utiliza as seguintes bibliotecas:

| Biblioteca      | Função                               |
| --------------- | ------------------------------------ |
| prompt          | interação via CLI                    |
| chalk           | estilização de mensagens no terminal |
| qrcode          | geração de imagens QRCode            |
| qrcode-terminal | renderização de QRCode no terminal   |

Dependências instaladas:

```json
{
  "chalk": "^5.6.2",
  "prompt": "^1.3.0",
  "qrcode": "^1.5.4",
  "qrcode-terminal": "^0.12.0"
}
```

---

# 📂 Estrutura do Projeto

```
qrcode-project
│
├── data
│   └── history.json
│
├── qrcodes
│   └── qrcode-*.png
│
├── src
│   ├── index.js
│   ├── prompts-schema
│   │
│   └── services
│       ├── password
│       ├── qr-code
│       └── history
│
├── .env
├── package.json
└── README.md
```

Descrição das pastas:

| Pasta      | Função                           |
| ---------- | -------------------------------- |
| `/src`     | Código principal da aplicação    |
| `/data`    | Armazena o histórico de QR Codes |
| `/qrcodes` | Armazena os arquivos PNG gerados |

---

# ⚙️ Instalação

Clone o projeto:

```bash
git clone https://github.com/pablo-monteiro/qrcode-project.git
```

Entre na pasta:

```bash
cd qrcode-project
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o projeto

Modo desenvolvimento (com watch):

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Scripts definidos no `package.json`:

```json
"scripts": {
  "dev": "node --watch --env-file=.env src/index.js",
  "start": "node --env-file=.env src/index.js"
}
```

---

# 🖥 Interface do CLI

Ao iniciar o programa, será exibido o menu:

```
Escolha a ferramenta

1 - QRCode
2 - Password
3 - Ver Histórico
4 - Limpar Histórico
5 - Sair
```

---

# 🔳 Gerando um QR Code

Fluxo do usuário:

```
1 - QRCode
```

Depois será solicitado o link:

```
Digite o link para gerar o QR Code:
```

Exemplo:

```
https://www.youtube.com/
```

Em seguida escolha o tipo de saída:

```
1 - NORMAL (salva arquivo)
2 - TERMINAL (exibe no terminal)
```

### Resultado

Modo **NORMAL**

- Gera arquivo PNG
- Salva em `/qrcodes`
- Registra no histórico

Modo **TERMINAL**

- Exibe QRCode diretamente no terminal
- Não salva arquivo
- Não registra no histórico

---

# 📜 Histórico

Os QR Codes gerados no modo **NORMAL** são registrados no arquivo:

```
/data/history.json
```

Exemplo:

```json
[
  {
    "id": "1772766289520",
    "link": "https://www.youtube.com/",
    "file": "qrcode-www-youtube-com-1772766289489.png",
    "createdAt": "2026-03-06T03:04:49.518Z"
  }
]
```

Campos registrados:

| Campo     | Descrição              |
| --------- | ---------------------- |
| id        | identificador único    |
| link      | URL original           |
| file      | nome do arquivo gerado |
| createdAt | data de criação        |

---

# 🧹 Limpar Histórico

Ao escolher:

```
4 - Limpar Histórico
```

O sistema solicitará confirmação:

```
Tem certeza que deseja apagar todo o histórico e QR Codes? (y/n)
```

Se confirmado:

- o arquivo `history.json` será limpo
- todos os arquivos dentro de `/qrcodes` serão removidos

---

# 🔐 Configuração do Gerador de Senhas

A geração de senha é controlada pelo arquivo `.env`.

Exemplo de configuração:

```
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=10
```

Descrição das variáveis:

| Variável           | Função                      |
| ------------------ | --------------------------- |
| UPPERCASE_LETTERS  | inclui letras maiúsculas    |
| LOWERCASE_LETTERS  | inclui letras minúsculas    |
| NUMBERS            | inclui números              |
| SPECIAL_CHARACTERS | inclui caracteres especiais |
| PASSWORD_LENGTH    | tamanho da senha            |

### Exemplo de senha gerada

```
G7#kP9!Qa2
```

A senha **é exibida apenas no terminal** e **não é salva em histórico**.

---

# 🧠 Arquitetura

O projeto segue uma organização baseada em **services** para separar responsabilidades:

```
services
├── qr-code
├── password
└── history
```

Cada módulo possui responsabilidade única:

| Serviço  | Responsabilidade                 |
| -------- | -------------------------------- |
| qr-code  | geração e salvamento de QR Codes |
| password | geração de senhas                |
| history  | gerenciamento de histórico       |

Essa estrutura facilita:

- manutenção
- escalabilidade
- testes futuros

---

# 📄 Licença

Este projeto está sob a licença **ISC**.

---

# 👨‍💻 Autor

Projeto desenvolvido como parte de estudos em **Node.js e desenvolvimento de CLI tools**.
