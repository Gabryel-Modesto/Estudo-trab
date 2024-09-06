// Função para calcular a média aritmética simples de um conjunto de números
const average = (...numbers) => {
    // Calcula a soma dos números usando reduce
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    // Retorna a média dividindo a soma pelo número de elementos
    return sum / numbers.length
}

// Exemplo de uso da função average
console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)

// Função para calcular a média ponderada de um conjunto de números com pesos
const weightedAverage = (...entries) => {
    // Calcula a soma ponderada dos números
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    // Calcula a soma dos pesos (considerando peso padrão 1 se não fornecido)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    // Retorna a média ponderada dividindo a soma ponderada pela soma dos pesos
    return sum / weightSum
}

// Exemplo de uso da função weightedAverage
console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
)}`)

// Função para calcular a mediana de um conjunto de números
const median = (...numbers) => {
    // Ordena os números em ordem crescente
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    // Encontra o índice do meio
    const middle = Math.floor(orderedNumbers.length / 2)
    // Verifica se o número de elementos é ímpar
    if (orderedNumbers.length % 2 !== 0) {
        // Retorna o valor central para uma lista de comprimento ímpar
        return orderedNumbers[middle]
    }
    // Calcula a média dos dois valores centrais para uma lista de comprimento par
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

// Exemplos de uso da função median
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

// Função para calcular a moda de um conjunto de números
const mode = (...numbers) => {
    // Cria um array de pares [número, quantidade de ocorrências]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    // Ordena o array pelo número de ocorrências em ordem decrescente
    quantities.sort((a, b) => b[1] - a[1])
    // Retorna o número com mais ocorrências (a moda)
    return quantities[0][0]
}

// Exemplo de uso da função mode
console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
