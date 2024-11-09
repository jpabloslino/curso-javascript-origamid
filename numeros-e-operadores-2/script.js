// A ordem das operações matemáticas importam

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // 110
console.log(soma1);

console.log('----------------');

// Operadores Aritméticos Unários

// Incremento
var incremento = 5;
console.log(incremento++);  // 5
console.log(incremento);    // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2);   // 6

// Decremento
var decremento = 5;
console.log(decremento--);  // 5
console.log(decremento);    // 4

var decremento2 = 5;
console.log(--decremento2); // 4
console.log(decremento2);   // 4

console.log('---------------')

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '19';
+idade; // 19 (número)
-idade; // -19 (número)
console.log(+idade + 6); // 25

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo

console.log('----------------------');

// Exercícios

// 1 - Qual o resultado da seguinte expressão:
var total = 10 + 5 * 2 / 2 + 20; // 35

// 2 - Crie duas expressões que retorne NaN
var exp1 = 'Isso é um teste';
var exp2 = 'M';
+exp1;
-exp2;
console.log(+exp1);
console.log(-exp2);

// 3 - Somar a string "200" com o número 50 e retornar 250
var n = + '200' + 50;
console.log(n);

// 4 - Incremente o número 5 e retorne o seu valor incrementado
var inc = 5;
console.log(inc++); // 5
console.log(inc);   // 6

// 5 - Como dividir o peso por 2?
var numero = 80/2;
var und = ' kg';
var peso = numero + und;
console.log(peso);