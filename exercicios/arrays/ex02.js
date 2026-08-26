var alunos = [
    {nome: "Ana", notas: [8, 7, 9]},
    {nome: "Carlos", notas: [5, 6, 4]},
    {nome: "Pedro", notas: [10, 9, 8]},
    {nome: "João", notas: [4, 3, 6]}
]

const newalunos = alunos.map( aluno => {
    media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3
    if (media >= 7 ){
        return {...aluno, media:media , situacao:'aprovado!'}
    } else {
        return {...aluno, media:media , situacao:'reprovado!'}
    }
    
})

// newalunos.forEach(aluno => {
//     console.log(aluno)
// });

const ranking = newalunos.sort((aluno1, aluno2) => aluno2.media - aluno1.media)

ranking.forEach((aluno , index) => {
    posicao = index + 1
    console.log(`${posicao} ${aluno.nome} media:${aluno.media}`)
});