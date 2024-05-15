/*  CRIAR LISTA DE ALUNOS
    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** 
        cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/


var alunos = [
    { nome: "Julio", nota1: 8, nota2: 7 },
    { nome: "Mariana", nota1: 8, nota2: 9 },
    { nome: "João", nota1: 5, nota2: 6 },
    { nome: "Fabiana", nota1: 7, nota2: 10 },
]




function verificarAprovacao(nome, media) {
    if (media >= 7) {
        alert(nome + " foi aprovado!" + "\n media: " +media);
    } else {
        alert(nome + " foi reprovado."  + "\n media: " +media);
    }
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) /2
}

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    var nome = aluno.nome;
    var nota1 = aluno.nota1;
    var nota2 = aluno.nota2;
    var media = calcularMedia(nota1, nota2);
    verificarAprovacao(nome, media);
}

