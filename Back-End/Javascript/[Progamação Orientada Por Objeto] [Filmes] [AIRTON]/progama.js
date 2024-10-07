const series = [
    {
        poster: "./img/poster1.png",
        nome: "Stranger Things",
        atorPrincipal: {
            nome: "Millie Bobby Brown",
            dataDeNascimento: "19 de fevereiro de 2004",
            nacionalidade: "Britânica"
        },
        temporadas: 4,
        anoDeLancamento: 2016
    },
    {
        poster: "./img/poster2.png",
        nome: "Breaking Bad",
        atorPrincipal: {
            nome: "Bryan Cranston",
            dataDeNascimento: "7 de março de 1956",
            nacionalidade: "Americana"
        },
        temporadas: 5,
        anoDeLancamento: 2008
    },
    {
        poster: "./img/poster3.png",
        nome: "Friends",
        atorPrincipal: {
            nome: "Jennifer Aniston",
            dataDeNascimento: "11 de fevereiro de 1969",
            nacionalidade: "Americana"
        },
        temporadas: 10,
        anoDeLancamento: 1994
    },
    {
        poster: "./img/poster4.png",
        nome: "Game of Thrones",
        atorPrincipal: {
            nome: "Kit Harington",
            dataDeNascimento: "26 de dezembro de 1986",
            nacionalidade: "Britânica"
        },
        temporadas: 8,
        anoDeLancamento: 2011
    },
    {
        poster: "./img/poster5.png",
        nome: "The Office",
        atorPrincipal: {
            nome: "Steve Carell",
            dataDeNascimento: "16 de agosto de 1962",
            nacionalidade: "Americana"
        },
        temporadas: 9,
        anoDeLancamento: 2005
    },
    {
        poster: "./img/poster6.png",
        nome: "The Witcher",
        atorPrincipal: {
            nome: "Henry Cavill",
            dataDeNascimento: "5 de maio de 1983",
            nacionalidade: "Britânica"
        },
        temporadas: 2,
        anoDeLancamento: 2019
    },
    {
        poster: "./img/poster7.png",
        nome: "The Mandalorian",
        atorPrincipal: {
            nome: "Pedro Pascal",
            dataDeNascimento: "2 de abril de 1975",
            nacionalidade: "Chilena"
        },
        temporadas: 3,
        anoDeLancamento: 2019
    },
    {
        poster: "./img/poster8.png",
        nome: "Black Mirror",
        atorPrincipal: {
            nome: "Vários",
            dataDeNascimento: "N/A",
            nacionalidade: "N/A"
        },
        temporadas: 5,
        anoDeLancamento: 2011
    },
    {
        poster: "./img/poster9.png",
        nome: "Sherlock",
        atorPrincipal: {
            nome: "Benedict Cumberbatch",
            dataDeNascimento: "19 de julho de 1976",
            nacionalidade: "Britânica"
        },
        temporadas: 4,
        anoDeLancamento: 2010
    },
    {
        poster: "./img/poster10.png",
        nome: "Narcos",
        atorPrincipal: {
            nome: "Wagner Moura",
            dataDeNascimento: "27 de junho de 1976",
            nacionalidade: "Brasileira"
        },
        temporadas: 3,
        anoDeLancamento: 2015
    }
];


let top5 = []

// Adicionando séries à array top5
top5.push(series[0]); // Stranger Things
top5.push(series[1]); // Breaking Bad
top5.push(series[2]); // Friends
top5.push(series[3]); // Game of Thrones
top5.push(series[4]); // The Office


let lancamentos = []

// Adicionando séries à array lancamentos
lancamentos.push(series[5]); // The Witcher
lancamentos.push(series[6]); // The Mandalorian
lancamentos.push(series[7]); // Black Mirror
lancamentos.push(series[8]); // Sherlock
lancamentos.push(series[9]); // Narcos



document.addEventListener("DOMContentLoaded", function() {

    let section = document.getElementById('series');

    series.forEach(serie => {
        
        let containerSerie = document.createElement('div');
        
        containerSerie.classList.add('card'); // Adicionando classe 'card' para estilização CSS


        containerSerie.innerHTML = `
            <img class="poster" src="${serie.poster}">
            <div class="info">
                <h4>${serie.nome}</h4>
                <p><strong>Ator Principal:</strong> ${serie.atorPrincipal.nome}</p>
                <p><strong>Temporadas:</strong> ${serie.temporadas}</p>
                <p><strong>Ano de Lançamento:</strong> ${serie.anoDeLancamento}</p>
            </div>
        `;

        section.appendChild(containerSerie);
    });

});
