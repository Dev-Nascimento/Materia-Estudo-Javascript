/*
//Comando de saída de texto (document.write)
document.write("Hello World <br>");

//Calculando um número via write
document.write(100+15);

//Estilisando um texto com css via Js
document.write("<h4 style='color:#bb4206'>Isso é um texto via javascript</h4>");

//As três formas de declara uma variável
var nome = "Luiz Nascimento";

var nome;
nome = "Fernando";

var cadastro = nome, idade, peso, altura;
nome = "Luiz Nascimento";
idade = 31;
peso = 91.2;
altura = 164.0;

//Variáveis e seus tipos de dados
var texto "Texto-String"; //Declarando uma string
var num = 10; // Declarando um Numeral inteiro
var nu = 10.6; //Declarando um numeral real/ float
var bolean = true; //Declando um Bolean
var undefined; // Declando uma variável sem valor

//Comentário de linha única
/*
Comentário
De várias linhas
*/

var jogador = "Luiz Claudio";
var vidas = 50;
var munição = 100;
var pontos = 0;
var tiros = 1500;
var acertos = 795;
var mediaDeAcertos = (acertos / tiros) * 100;

document.write("Jogador: <span style='color: #F51069'>" + jogador + "</span><br>");
document.write("Vida: <span style='color: #F51069'> " + vidas + "</span><br>");
document.write("Munição: <span style='color: #F51069'>" + munição + "</span><br>");
document.write("Pontos: <span style='color: #F51069'> " + (pontos + (vidas * 10)) + "</span><br>");
document.write("Media de acertos: <span style='color: #F51069'>" +  mediaDeAcertos + "%</span><br>");

//Declarando uma constante uma constante tem seu seu valor fixo enquanto as variáveis não 
const profissão = "Programador";
document.write("Profissão: <span style='color: #DC0540'> " + profissão + "</span><br>");

//Ativando o modo console do browse
const max = 100;
const min = 200;

console.log(max*min);
