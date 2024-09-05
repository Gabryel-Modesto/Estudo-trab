
const usuario = {
    name: "Gabryel",
    email: "gabryel@hotmail",  
    amigos: [{
        name: "Juju",
        endereco: {
            ciadade: "São paulo", 
            numero: "40"
        }
    }],
    age: 42,
    celular: {
        codPais: "55",
        ddd: "27",
        numero: "12545245"
    }
};

// Tentativa de acessar a propriedade 'ddd' do objeto 'celular' dentro do primeiro amigo. 
// Isso resultará em erro porque 'celular' não existe dentro do objeto 'amigos'.
// Console.log irá gerar um erro: Cannot read property 'ddd' of undefined.
console.log(usuario.amigos[0].celular.ddd);

// Uso do operador de encadeamento opcional (?.) para evitar erro se 'celular' não existir.
// Neste caso, 'celular' não está presente em 'amigos', então a expressão retornará undefined sem lançar erro.
console.log(usuario.amigos[0].celular?.ddd); // Retorna undefined porque 'celular' não é uma propriedade de 'amigos[0]'

// Uso do operador de encadeamento opcional para acessar a propriedade 'irmaos' que pode não existir.
// Aqui, 'irmaos' não está definido no objeto 'usuario', então a expressão retorna undefined sem lançar erro.
console.log(usuario?.irmaos?.length); // Retorna undefined porque 'irmaos' não existe no objeto 'usuario'

// Tentativa de acessar o nome do 6º irmão (índice 5) dentro da propriedade 'irmaos'.
// Como 'irmaos' não está definido no objeto 'usuario', isso retornará undefined sem gerar erro.
console.log(usuario.irmaos?.[5].name); // Retorna undefined porque 'irmaos' não está definido no objeto 'usuario'
