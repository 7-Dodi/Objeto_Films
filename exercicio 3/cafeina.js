const filmes = [{  //Importando o vetor de objetos
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];

atualizarFilmes(filmes); //Imprimindo os filmes na tela
const input= document.querySelector("#filme"); //Criando a variavel

function atualizarFilmes (filmesAssistir){ //Criando a função para imprimir os filmes
    const listaFilme= document.querySelector("ul");
    const vetFilme= [];
    for(const film of filmesAssistir){
        const liFilme= document.createElement("li");
        liFilme.textContent= `${film.titulo} - ${film.lancamento}`;
        vetFilme.push(liFilme);
    }
    listaFilme.replaceChildren(...vetFilme);
}

input.addEventListener("keyup", ()=>{ //Adicionando o evento de teclado
    const letraFilme = input.value;
    const filtroFilms = filmes.filter((filmes) =>{
        return filmes.titulo.toLowerCase().includes(letraFilme.toLowerCase());
    });
    atualizarFilmes(filtroFilms);
});