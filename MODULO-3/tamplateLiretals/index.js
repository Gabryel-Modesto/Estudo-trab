// Definindo uma variável 'name' com o valor 'Gabryel'
const name = 'Gabryel';

// Usando uma template string (ou template literal) para criar uma string multilinha e interpolar valores
console.log(`Olá, ${name}!
    Estamos em ${Date()}
     2 + 2 = ${2 + 2}`);

// Explicação do que acontece aqui:
// 1. `${name}` é substituído pelo valor da variável 'name', que é 'Gabryel'.
// 2. `${Date()}` é substituído pela string retornada pela função Date(), que mostra a data e hora atuais.
// 3. `${2 + 2}` é substituído pelo resultado da expressão 2 + 2, que é 4.

// O resultado será uma string com as variáveis interpoladas e a string mantida em múltiplas linhas.
