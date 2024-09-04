// Definindo um array com nomes de cidades
const cidades = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

// Usando o operador spread para espalhar os elementos do array como argumentos separados
console.log(...cidades); // Saída: Prontera Izlude Payon Alberta Geffen Morroc

// Tentando espalhar os caracteres do primeiro elemento do array (uma string)
console.log(...cidades[0]); // Saída: P r o n t e r a

// Atribuindo a referência do array 'cidades' a 'copiaCidades'
// Ambos apontam para o mesmo array na memória
const copiaCidades = cidades;

// Removendo o último elemento do array 'copiaCidades' duas vezes
copiaCidades.pop(); // Remove 'Morroc'
copiaCidades.pop(); // Remove 'Geffen'

// Adicionando um elemento indefinido ao final do array
copiaCidades.push(); // Adiciona 'undefined'

// Imprimindo os arrays 'cidades' e 'copiaCidades'
// Ambos refletem as alterações feitas, pois são a mesma referência
console.log({cidades, copiaCidades});
// Saída: { cidades: ['Prontera', 'Izlude', 'Payon', 'Alberta', undefined], copiaCidades: ['Prontera', 'Izlude', 'Payon', 'Alberta', undefined] }

// Criando uma cópia do array 'cidades' usando o operador spread
const cloneCidade = [...cidades];

// Adicionando um novo elemento ao array clonado
cloneCidade.push('Alderaban');

// Imprimindo os arrays 'cidades', 'copiaCidades' e 'cloneCidade'
// 'cloneCidade' contém o novo elemento, mas 'cidades' e 'copiaCidades' não são afetados
console.log({cidades, copiaCidades, cloneCidade});
// Saída: { cidades: ['Prontera', 'Izlude', 'Payon', 'Alberta', undefined], copiaCidades: ['Prontera', 'Izlude', 'Payon', 'Alberta', undefined], cloneCidade: ['Prontera', 'Izlude', 'Payon', 'Alberta', undefined, 'Alderaban'] }

// Tentando criar um objeto a partir do array 'cidades' usando o operador spread
const objetoCidade = {...cidades};

// Criando uma cópia do objeto 'objetoCidade'
const objetoCidadeClone = {...objetoCidade};

// Adicionando uma nova propriedade ao objeto clonado
objetoCidadeClone.test = "Test";

// Imprimindo 'objetoCidade', que não contém a nova propriedade 'test'
// 'objetoCidade' é um objeto criado a partir do array, não é um array de fato
console.log({objetoCidade});
// Saída: { objetoCidade: { '0': 'Prontera', '1': 'Izlude', '2': 'Payon', '3': 'Alberta', '4': 'Geffen', '5': 'Morroc' } }
