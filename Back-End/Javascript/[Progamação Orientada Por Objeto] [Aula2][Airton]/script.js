let alunos = ["Joao", "Mari", "Jose", "Pedro", "Paulo"] // vetor com elementos alunos

alert(alunos[3]) // mostrando no alert quem é o elemento 3 no vetor
alunos[alunos.length-1] = "Gerson" // verificando quem é o 4 elemento do vetor e substituindo por Gerson
alunos.push("Joaquim") //colocando nome joaquim no final do vetor alunos
let notas = ["10", "8", "5", "7", "9", "6"] //vetor com elemento notas

for(let i = 0; i < alunos.length; i++) {
    console.log("Aluno: " + alunos[i] + " Nota: " + notas[i])
}

//Criação de objetos

let aluno1 = {
    nome: 'Pedro',
    cpf: '123.654.789-08',
    nota: 10
}

let aluno2 = {
    nome: 'Tiago',
    cpf: '236.874.748-00',
    nota: 6
}

let aluno3 = {
    nome: 'joão',
    cpf: '238.235.780-76',
    nota: 5
}

let aluno4 = {
    nome: 'Irineu',
    cpf: '230.857.532-75',
    nota: 2
}

let aluno5 = {
    nome: 'Caio',
    cpf: '245.753.864-66',
    nota: 7
}


console.log("Nome: " + aluno4.nome)
console.log("CPF: " + aluno4.cpf)
console.log("Nota: " + aluno4.nota)

//parte 2


let carro1 = {
    modelo: 'Spin Ls',
    marca: 'Chevrolet',
    ano: '2020',
    quilometragem: '74.766 km',
    cor: 'Prata',
    preco: '61.990'
}

let carro2 = {
    modelo: 'Chevrolet',
    marca: 'Classic Life',
    ano: '2015',
    quilometragem: '68.000 km',
    cor: 'Branco',
    preco: '33.000'
}

let carro3 = {
    modelo: 'Fiat',
    marca: 'Palio Attractive',
    ano: '2013',
    quilometragem: '175.286 km',
    cor: 'Branco',
    preco: '29.000'
}

let carro4 = {
    modelo: 'Hyundai',
    marca: 'Hb20',
    ano: '2023',
    quilometragem: '1.234 km',
    cor: 'Branco',
    preco: '84.000'
}

let carro5 = {
    modelo: 'Nissan',
    marca: 'Versa S',
    ano: '2019',
    quilometragem: '46.000 km',
    cor: 'Branco',
    preco: '52.990'
}

console.log(carro4.modelo)
console.log(carro4.marca)
console.log(carro4.ano)
console.log(carro4.quilometragem)
console.log(carro4.cor)
console.log(carro4.preco)