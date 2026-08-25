const postagens = [
  { id: 1, autor: "TechAline", plataforma: "YouTube", visualizacoes: 45000, curtidas: 3200, patrocinado: true },
  { id: 2, autor: "DevGamer", plataforma: "Twitch", visualizacoes: 12000, curtidas: 850, patrocinado: false },
  { id: 3, autor: "ChefLucas", plataforma: "Instagram", visualizacoes: 8500, curtidas: 1200, patrocinado: true },
  { id: 4, autor: "TechAline", plataforma: "Instagram", visualizacoes: 15000, curtidas: 2100, patrocinado: false },
  { id: 5, autor: "ViajeComigo", plataforma: "YouTube", visualizacoes: 120000, curtidas: 15000, patrocinado: true },
  { id: 6, autor: "DevGamer", plataforma: "YouTube", visualizacoes: 35000, curtidas: 4100, patrocinado: true },
  { id: 7, autor: "ChefLucas", plataforma: "TikTok", visualizacoes: 95000, curtidas: 18000, patrocinado: false },
  { id: 8, autor: "ViajeComigo", plataforma: "Instagram", visualizacoes: 4000, curtidas: 150, patrocinado: false }
];

let maior = postagens.filter( postagem => postagem.visualizacoes >= 20000)

// console.log(maior)

let taxaeng = postagens.map( postagem => {
    return {autor:postagem.autor,taxa:((postagem.curtidas / postagem.visualizacoes)*100).toFixed(2)}
})

// console.log(taxaeng)

let organicview = postagens
.filter(postagem => !postagem.patrocinado)
.reduce((acumulador,postagem)=>{ return acumulador + postagem.visualizacoes
},0)

// console.log(organicview)

let master = produtos.reduce((acumulador,postagem)=>{
    
})