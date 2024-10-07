let buttonAdicionar = document.getElementById("btnAdicionar")
let inputDesc = document.getElementById("iptdesc")
let inputPrec = document.getElementById("iptpreco")
let inputId = document.getElementById("iptId")
let c1 = document.getElementById("container1")
let c2 = document.getElementById("container2")

let cesta = new CarrinhoDeCompras()

function quandoClicarBotaoAdicionar(){
    let p1 = new Produto (
        inputId.value,
        inputDesc.value,
        inputPrec.value
    )

    cesta.adicionarproduto(p1)

    desenharCarrinhoDeCompras(cesta, c1)
}


console.log(cesta)

buttonAdicionar.addEventListener('click', quandoClicarBotaoAdicionar)


