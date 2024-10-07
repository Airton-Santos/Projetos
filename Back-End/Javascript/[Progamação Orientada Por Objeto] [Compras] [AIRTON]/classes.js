class Produto {
    constructor(id, descricao, precoUnitario){
        this.id = id
        this.descricao = descricao
        this.precoUnitario = precoUnitario
    }
}


class CarrinhoDeCompras {
    constructor(){
        this.dataDeCriancao = '23-07-2024'
        this.listaDeProdutos = []
    }

    adicionarproduto(prod){
        if (prod instanceof Produto){
            this.listaDeProdutos.push(prod)

        }
        else {
            console.error("Tenha mais atenção o fela da puta")
        }
    }
}