# CÓDIGOS USADOS

---
- Instalação de dependências necessárias para configurar um projeto Express capaz de conectar ao MySQL. No diretório raiz do projeto, execute o seguinte comando:

```
npm i express@4.17.1 mysql2@2.3.3 --save-exact
```

- A novidade aqui está no módulo (ou drive) mysql2, responsável por permitir que uma aplicação Node.js consiga comunicar-se com o MySQL.

---
- Comando para realizar a instalação das dependências mocha, chai, sinon e chai-http como dependências de desenvolvimento:

```
npm i mocha@10.0.0 chai@4.3.6 sinon@14.0.0 chai-http@4.3.0 -D
```
---
```
killall node
```
- Esse comando para todos os processos node que estão rodando diretamente na sua máquina, ou seja, sem ser via docker!
