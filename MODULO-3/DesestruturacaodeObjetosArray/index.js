// Definindo um objeto 'dadosPessoa' com propriedades 'name', 'job' e 'pais'
const dadosPessoa = {
    name: "Gabryel",
    job: "Develeper", // Note que parece haver um erro de digitação aqui, deveria ser "Developer"
    pais: ["Jocymar", "Josi"] // Um array com dois nomes
};

//=============================================

// Extraindo a propriedade 'name' do objeto 'dadosPessoa' e atribuindo-a à variável 'name'
const name = dadosPessoa.name;

// Desestruturando o objeto 'dadosPessoa' para extrair as propriedades 'job' e 'pais'
// As variáveis 'job' e 'pais' agora contêm os valores das propriedades correspondentes no objeto
const { job, pais } = dadosPessoa;

// Imprimindo as variáveis 'name', 'job', e 'pais'
// 'name' é 'Gabryel', 'job' é 'Develeper' (com erro de digitação), e 'pais' é o array ['Jocymar', 'Josi']
console.log(name, job, pais);

// Desestruturando o array 'pais' para extrair os elementos em variáveis 'pai' e 'mae'
// 'pai' recebe o valor 'Jocymar' e 'mae' recebe o valor 'Josi'
const [ pai, mae ] = pais;

//=============================================

// Função 'Usuario' que recebe um objeto com as propriedades 'name', 'job', e 'pais'
// Gera um id aleatório para o usuário
function Usuario({ name, job, pais }) {
    const id = Math.floor(Math.random() * 9999); // Gera um número aleatório entre 0 e 9998
    return {
        id, // O id gerado
        name, // O nome recebido
        job, // O trabalho recebido
        pais // O array de países recebido
    };
}

// Chamando a função 'Usuario' com o objeto 'dadosPessoa'
// A função retorna um novo objeto com um id gerado e as outras propriedades do objeto passado
const Gabryel = Usuario(dadosPessoa);

// Imprimindo o objeto 'Gabryel' que contém as propriedades de 'dadosPessoa' e um id aleatório
console.log(Gabryel);
