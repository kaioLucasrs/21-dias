let sexoAluno = "";
let notaAluno = 0;
let acima7 = 0;
let homens = 0;
let notaHomem = 0;
let mediaGeral = 0;
let condicao = 1;
let i = 0;

while(condicao != 0){
    i++;

    notaAluno = Number(prompt("Digite a nota do aluno"));
    sexoAluno = prompt("Digite o sexo do aluno (homem ou mulher)");
    condicao = prompt("Digite 1 para cadastrar outra nota ou 0 para parar");

    if(sexoAluno === "mulher" && notaAluno > 7){
        acima7++;
    }else {
        homens++;
        if(notaAluno > notaHomem)
        notaHomem = notaAluno;
    }

    mediaGeral += notaAluno;
}

mediaGeral = mediaGeral / i;

console.log("A média geral entre os alunos é de: "+mediaGeral+"!",acima7,"mulheres obtiveram nota acima de 7!",homens,"Homens enviaram suas notas e a maior nota entre os homens foi de:",notaHomem);
