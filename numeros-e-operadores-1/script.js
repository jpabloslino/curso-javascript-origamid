// Operadores aritméticos

// Soma (+)
var soma = 100 + 50;
console.log(`Soma = ${soma}`);

// Subtração (-)
var subtracao = 100 - 50;
console.log(`Subtração = ${subtracao}`);

// Multiplicação (*)
var multiplicacao = 100 * 2;
console.log(`Produto = ${multiplicacao}`);

// Divisão (/)
var divisao = 100/2;
console.log(`Divisão = ${divisao}`);

// Expoente (**) - *É a potenciação*
var expoente = 2**4;
console.log(`Potência = ${expoente}`);

// Módulo (%) - *Retorna o resto da divisão*
var modulo = 14%5;
console.log(`Resto = ${modulo}`);

// Soma de strings mais números

var soma1 = '100' + 50; // 10050
var subtracao1 = '100' - 50; // 50
var multiplicacao1 = '100' * '2'; // 200
var divisao1 = 'Comprei 100' / 2; // NaN (Not a Number) - Com caracteres diferentes de números não funciona

// Teste NaN

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN)); // true

var testeNaN1 = '100' / 2;
console.log(isNaN(testeNaN1)); // false

var num = 80;
var unidade = 'Kg';
var peso = num + unidade;
var pesoPorDois = peso / 2;

console.log(peso); // 80Kg
console.log(pesoPorDois); // NaN