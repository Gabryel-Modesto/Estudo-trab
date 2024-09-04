// Função 'soma' que aceita um número variável de argumentos usando o operador spread '...'
function soma(...numeros) {
    // A função 'reduce' é usada para somar todos os números no array 'numeros'
    // 'accum' é o acumulador que armazena a soma parcial, e 'num' é o valor atual
    // O valor inicial do acumulador é 0 (o segundo argumento para 'reduce')
    return numeros.reduce((accum, num) => accum + num, 0);
}

// Chamando a função 'soma' com dois argumentos: 1 e 1
// Espera-se que a saída seja 2, a soma dos dois números
console.log(soma(1, 1)); // Saída: 2

// Chamando a função 'soma' com um grande número de argumentos (doze 2's)
// Espera-se que a saída seja 24, a soma de todos os números
console.log(soma(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2)); // Saída: 24
