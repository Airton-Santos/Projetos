class Livro {
    constructor(titulo, nomeDoAutor, genero, editora){
        this.titulo = titulo;
        this.nomeDoAutor = nomeDoAutor; 
        this.genero = genero;
        this.editora = editora;
    }
}

class ListaDeLivros {
    constructor() {
        this.dataDeCriacao = new Date();
        this.livros = [];
    }

    // Método para adicionar um livro à lista
    adicionarLivro(livro) {
        if(livro instanceof Livro){
            this.livros.push(livro);
        }
        else {
            console.log("O fela da puuta ta vendo que aqui é só livro seu viado!")
        }
    }

    // Método para exibir a lista de livros
    exibirLivros() {
        this.livros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.nomeDoAutor}, Gênero: ${livro.genero}, Editora: ${livro.editora}`);
        });
    }
}