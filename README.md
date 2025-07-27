# Email Receiver

A lightweight, TypeScript-based email receiver that listens for incoming SMTP messages over the network. Built with `smtp-server` and `mailparser`, this tool is ideal for local development, testing, or lightweight email collection setups.

## Features

- Listens for incoming SMTP email messages
- Parses and logs incoming emails for debugging or basic monitoring
- Built with TypeScript and easily customizable
- Can be compiled into a standalone Windows executable using `pkg`

---

## Getting Started

### 📦 Install Dependencies

Clone the repo and install required packages:

````bash
git clone https://github.com/jrshutske/email-receiver.git
cd email-receiver
npm install


### ▶️ Run the Syslog Server

```bash
npm start
````

### 🧪 Send a Test Syslog Message

```bash
npm test
```

### 🛠️ Build a Windows Executable

```bash
npm run buildexe
```

or

```bash
npx tsc
npx pkg . --targets node16-win-x64 --output email-server.exe
```
