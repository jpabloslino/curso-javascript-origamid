var nome = 'João'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {} // Object

// Primitivos são dados imutáveis

console.log(nome); // Mostrar a variável na tela
console.log(typeof nome); // Mostrar o tipo de dado na tela

console.log(idade);
console.log(typeof idade);

console.log(possuiFaculdade);
console.log(typeof possuiFaculdade);

console.log(time);
console.log(typeof time); // sempre vai retornar como objeto

console.log(comida);
console.log(typeof comida);

console.log(simbolo);
console.log(typeof simbolo);

console.log(novoObjeto);
console.log(typeof novoObjeto);

var sobrenome = 'Pablo'
var nomeCompleto = nome + ' ' + sobrenome; // Concatenando duas Strings diferentes
console.log(nomeCompleto);

var gols = 1283;
var frase = 'Pelé fez ' + gols + ' gols'; // Concatenando uma String com um número
console.log(frase);

var ano = '2018';
var mes = 8;
console.log(ano + mes); // vai concatenar a string e o número, não somará os dois valores

// var frase1 = 'Esse é o 'melhor' jogo'; incorreto
// var frase2 = "Esse é o "melhor" jogo"; incorreto
var frase3 = 'Esse é o "melhor" jogo'; // correto
console.log(frase3);
var frase4 = "Esse é o \"melhor\" jogo"; // correto
console.log(frase4);

// Template String

var golsRomario = 1000;
var frase5 = 'Romario fez ' + golsRomario + ' gols';
console.log(frase5);
var frase6 = `Romario fez ${golsRomario} gols`; // ${} serve para colocar uma variável sem precisar fazer o exemplo acima
console.log(frase6);

// ----------------------------------------------------------------------------------------------------

// Exercícios

// 1 - Declare uma variável contendo uma String
var frase7 = 'O Pelé é o melhor jogador de futebol da história';
console.log(frase7);

// 2 - Declare uma variável contendo um número dentro de uma String
var num1 = 908;
var frase8 = `Cristiano Ronaldo tem ${num1} gols`;
console.log(frase8);

// 3 - Declare uma variável com a sua idade
var idadeJoao = 19;

// 4 - Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nomePessoa = 'João';
var sobrenomePessoa = 'Pablo';
var nomeCompletoPessoa = `${nomePessoa} ${sobrenomePessoa}`;
console.log(nomeCompletoPessoa);

// 5 - Coloque a seguinte frase em uma variável: It's time
var frase9 = "It's time";
var frase10 = `${frase9} for Corinthians vs Palmeiras`;
console.log(frase10);

// 6 - Verifique o tipo de variável que contém o seu nome
console.log(typeof nomePessoa);