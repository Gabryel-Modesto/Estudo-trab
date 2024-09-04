// Função que recebe dois argumentos e retorna a soma deles
function sum(a, b) {
    return a + b;
}

// Tentativa de usar a função 'sum' com a sintaxe incorreta.
// Em vez de chamar 'sum(2,2)', está sendo usada a notação de array inválida 'sum[2,2]'
// Isso resultará em um erro de tipo, porque 'sum' é uma função, não um array.
console.log(`Soma: ${sum[2, 2]}`); // Erro: 'sum' não é um array

//============================================================================

// Função anônima atribuída a uma variável 'anonimo'
// Esta função também recebe dois argumentos e retorna a soma deles
const anonimo = function (a, b) {
    return a + b;
};

// Tentativa de usar a função anônima com a sintaxe incorreta.
// Em vez de chamar 'anonimo(2,2)', está sendo usada a notação de array inválida 'anonimo[2,2]'
// Isso resultará em um erro de tipo, porque 'anonimo' é uma função, não um array.
console.log(`Soma: ${anonimo[2, 2]}`); // Erro: 'anonimo' não é um array

//============================================================================

// Função de seta (arrow function) atribuída a uma variável 'ASum'
// Esta função também recebe dois argumentos e retorna a soma deles
const ASum = (a, b) => {
    return a + b;
};

// Tentativa de usar a função de seta com a sintaxe incorreta.
// Em vez de chamar 'ASum(2,2)', está sendo usada a notação de array inválida 'ASum[2,2]'
// Isso resultará em um erro de tipo, porque 'ASum' é uma função, não um array.
console.log(`Soma: ${ASum[2, 2]}`); // Erro: 'ASum' não é um array

//============================================================================

// Função de seta (arrow function) que calcula a subtração de dois argumentos
const Sub = (a, b) => a - b;

// Tentativa de usar a função de seta para subtração com a sintaxe incorreta.
// Em vez de chamar 'Sub(2,2)', está sendo usada a notação de array inválida 'Sub[2,2]'
// Isso resultará em um erro de tipo, porque 'Sub' é uma função, não um array.
console.log(`Subtração: ${Sub[2, 2]}`); // Erro: 'Sub' não é um array

//============================================================================

// Função de seta (arrow function) que retorna uma string formatada
// O parâmetro 'Num' é o número cujo dobro será calculado
const dobro = Num => `O dobro de ${Num} é ${Num * 2}`;

// Definindo uma variável 'numero' com o valor 21
const numero = 21;

// Chamando a função 'dobro' com o valor de 'numero' e imprimindo o resultado
console.log(dobro(numero)); // Saída: 'O dobro de 21 é 42'

//============================================================================

// Array de cidades
const cidades = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

// Usando o método 'filter' para criar um novo array contendo apenas as cidades
// cujo primeiro caractere é 'P'
const filtro = cidades.filter(cidade => cidade[0] === 'P');

// Imprimindo o array filtrado, que deve conter 'Prontera' e 'Payon'
console.log(filtro); // Saída: ['Prontera', 'Payon']

//============================================================================
