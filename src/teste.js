

let alunos = [
    { nome: 'Gabriel', nota: 7 },
    { nome: 'Mbappe', nota: 5 },
    { nome: 'Neymar', nota: 8 },
    { nome: 'Cristiano', nota: 6 },
    { nome: 'Messi', nota: 4 }
];

function alunosComNotaAlta(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

let alunosAprovados = alunosComNotaAlta(alunos);
console.log(alunosAprovados);