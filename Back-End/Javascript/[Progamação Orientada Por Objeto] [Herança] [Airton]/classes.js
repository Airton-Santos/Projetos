class Usuario {
    constructor(nome, cpf, dataNasc){

        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento ${this.dataNasc}    
        `)
    }
}

class Aluno extends Usuario {
    constructor(nome, cpf, dataNasc, nomeResponsavel, serie, matricula){

        super(nome, cpf, dataNasc);


        this.nomeResponsavel = nomeResponsavel;
        this.serie = serie;
        this.matricula = matricula;

    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento ${this.dataNasc}
            Nome do Responsável: ${this.nomeResponsavel}
            Série: ${this.serie}
            Matricula: ${this.matricula}
        `)
    }
}

class Professor extends Usuario {
    constructor(nome, cpf, dataNasc, formacao, siape){
        super(nome,cpf, dataNasc)

        this.formacao = formacao;
        this.siape = siape;
    }

    imprimirDados(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Data de Nascimento ${this.dataNasc}
            Formação: ${this.formacao}
            Siape: ${this.siape}
        `)
    }
}