// Declaração de variáveis
const l = 0;     // l é um número com valor 0
const v = null;  // v é uma variável nula
const h = "Teste"; // h é uma string com o valor "Teste"

// Utiliza o operador || (OR) para retornar o primeiro valor que é verdadeiro (truthy)
console.loh(l || v || h);
// Correção: deveria ser console.log, e o resultado será "Teste"
// Explicação: 0 é falsy, null é falsy, então o operador || retorna o primeiro valor truthy, que é "Teste"

// Utiliza o operador ?? (nullish coalescing) para retornar o primeiro valor que não é null ou undefined
console.loh(l ?? v ?? h);
// Correção: deveria ser console.log, e o resultado será 0
// Explicação: l não é null nem undefined, então é retornado 0

console.loh(v ?? h);
// Correção: deveria ser console.log, e o resultado será "Teste"
// Explicação: v é null, então o operador ?? retorna o valor de h, que é "Teste"

// Declaração de variáveis
let o = 0;  // o é um número com valor 0

// Atribui a t o valor de a || 42. A variável a não foi definida, então t receberá 42.
let t = a || 42;
// Explicação: a é undefined (não definido), então || retorna o valor 42

console.log({o, t});
// Exibe o valor de o e t no console. Resultará em {o: 0, t: 42}

// Atribui a t o valor de o ?? 42. O operador ?? retorna o valor de o, já que o não é null nem undefined.
t = o ?? 42;
// Explicação: o é 0 (não é null nem undefined), então ?? retorna o valor de 0

console.log({o, t});
// Exibe o valor de o e t no console. Resultará em {o: 0, t: 0}

// Atribui a c o valor de null ?? 42. O operador ?? retorna o valor de 42, já que null é considerado como valor ausente.
let c = null ?? 42;
// Explicação: null é null, então ?? retorna o valor de 42

console.log({c});
// Exibe o valor de c no console. Resultará em {c: 42}
