"use strict";

var alunos = [{
  nome: 'Gabriel',
  nota: 7
}, {
  nome: 'Mbappe',
  nota: 5
}, {
  nome: 'Neymar',
  nota: 8
}, {
  nome: 'Cristiano',
  nota: 6
}, {
  nome: 'Messi',
  nota: 4
}];
function alunosComNotaAlta(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = alunosComNotaAlta(alunos);
console.log(alunosAprovados);