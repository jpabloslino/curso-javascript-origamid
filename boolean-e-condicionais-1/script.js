// Boolean (valores booleanos), possuem apenas dois valores possíveis:
// true ou false

var possuiGraduacao = true;  // verdadeiro
var possuiDoutorado = false; // falso

// Serve para fazer comparações (estrutura condicional)

// Aqui vai comparar se a pessoa tem graduação e vai mostrar uma mensagem, caso ela tenha e caso não tenha
if(possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
}

// Aqui vai comparar se a pessoa tem doutorado, e também mostrará uma mensagem se a pessoa tiver ou não
if(possuiDoutorado) {
    console.log('Possui doutorado');
} else {
    console.log('Não possui doutorado');
}

// Pode se ter mais de uma comparação, com else-if

if(possuiDoutorado){
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao){
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}

// Nesse caso, retornará 'Possui graduação, mas não possui doutorado'

// Há como comparar strings, se é true ou false

var nome = 'João' + 5;

if(nome){
    console.log(nome); // João5
} else {
    console.log('Nome não existe');
}

var nome1 = 'João';

if(nome1){
    console.log(nome1); // João
} else {
    console.log('Nome não existe');
}

var nome2 = 'João' / 3;

if(nome2){
    console.log(nome2);
} else {
    console.log('Nome não existe');
    // A expressão se torna falsa, pois não existe divisão de números com caracteres diferentes de números.
    // Ex: var num = '5' / 1;  retorna 5, pois 5/1=5
    //     var num2 = 'M28' / 2;  retorna falso
}

// Expressões que são resultem em: 0, NaN, Undefined, null, false, '' ou "", retornaram falso para a sentença

// Operador lógico de negação (!)
// Serve para negar uma afirmação booleana, ou seja, !true é o mesmo que false

// if(!true)   false
// if(!1)      false
// if(!'')     true
// if(!undefined)  true
// if(!!' ')   true
// if(!!'')    false

// O símbolo !! pode verificar se uma expressão é verdadeira ou falsa

if(!possuiGraduacao){
    console.log(possuiGraduacao);         // Aqui vai mostrar que a variável possuiGraduacao é true
    console.log('Não possui graduação');  // Com (!), a afirmação se torna false e a mensagem aparece na tela
}

// Operadores de Comparação - sempre retornarão um valor booleano

if(10>5);   // true
if(5>10);   // false
if(20<10);  // false
if(10<=10); // true
if(10>=11); // false

// São Operadores de Comparação: <, >, <=, >=, !, ==, ===, !=, !==

// (===) faz uma comparação estrita, ou seja, o mesmo tipo de dado deve ser o mesmo

if(10=='10');   // true
if(10==10);     // true
if(10==='10');  // false
if(10===10);    // true
if(10!=15);     // true
if(10!='15');   // false
if(10!=='10');  // true