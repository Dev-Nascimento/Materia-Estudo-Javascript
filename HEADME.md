# **Faaaaala seus arquitetos do mundo digital, Dev Nascimento na area!**

## **Hoje vamos entrar no universo js ou o tão conhecido *Javascript***
<br>

# Introdução ao JavaScript para Desenvolvimento Web

---

## Visão Geral

O JavaScript é uma linguagem de programação essencial para o desenvolvimento web. Ela possibilita a criação de interações dinâmicas, tornando as páginas mais responsivas e oferecendo uma experiência mais envolvente aos usuários.

## Principais Conceitos

### 1. **Variáveis e Tipos de Dados**
   - Declaração de variáveis, tipos de dados **(string, number, boolean)**, e como atribuir valores.

```javascript
let nome = "John";
let idade = 25;
let ativo = true;
```

### 2. **Sintaxe Básica**
#### Declaração de Variáveis
   - Utilize **var, let e const** para declarar variáveis.

```javascript
var nome = "Luiz Nascimento";
let nome = "Luiz Nascimento";
const nome = "Luiz Nascimento";
```

### 3. **Estruturas de Controle**
   - Uso de estruturas como **if, else, e switch** para controle de fluxo.

```javascript
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

### 4. **Laços de Repetição**
   - Use **for, while, do while** para iterações.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 5. **Funções**
   - Definição de funções para modularizar o código e reutilizar blocos de lógica.

```javascript
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
```

### 6. **Arrays e Objetos**
   - Manipulação de listas (Arrays) e estruturas mais complexas **(Objetos)**.

```javascript
let frutas = ["maçã", "banana", "laranja"];
let pessoa = { nome: "Maria", idade: 30, cidade: "São Paulo" };
```

### 7. **Eventos e Manipulação do DOM**
   - Utilização de eventos para interagir com o usuário e manipulação do DOM para atualizar a interface.

```javascript
let botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
  alert("Botão clicado!");
});
```
