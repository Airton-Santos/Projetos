let aluno1 = new Aluno('Alex', '20/04/2000','13123114', 'Maceió');
let aluno2 = new Aluno('Airton','30/04/2004' ,'782367891', 'Maceió');
let aluno3 = new Aluno('Nathan','10/04/2004' ,'8237468', 'RioLargo');
let aluno4 = new Aluno('Luis','20/03/2005' ,'543345343', 'Maceió');

console.log(aluno1.nome);
console.log(aluno1.dataDeNascimento);

console.log(aluno2.nome);
console.log(aluno2.dataDeNascimento);

console.log(aluno3.nome);
console.log(aluno3.dataDeNascimento);

console.log(aluno4.nome);
console.log(aluno4.dataDeNascimento);

console.log("============================================");


let professor1 = new Professores('Alexandre', 'POO', '30/04/2002');
let professor2 = new Professores('Thiago', 'Banco De Dados', '03/02/2005');
let professor3 = new Professores('Alex', 'Progamação Web', '10/02/2010');

console.log(`Prof. ${professor1.nome} - ${professor1.disciplina} - ${professor1.dataDeContratacao}`);
console.log(`Prof. ${professor2.nome} - ${professor2.disciplina} - ${professor2.dataDeContratacao}`);
console.log(`Prof. ${professor3.nome} - ${professor3.disciplina} - ${professor3.dataDeContratacao}`);


console.log("============================================");


let alunos = [];

if (professor1 instanceof Aluno) {
    alunos.push(professor1);
}

if (aluno4 instanceof Aluno) {
    alunos.push(aluno4);
}

console.log(alunos);