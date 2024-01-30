let menu = 0;
let litros = 0;

menu = Number(prompt("Bem vindo ao posto! escolha uma das opções: \n 1- gasolina \n 2- álcool \n 3- calibrar"));

switch(menu){
    case 1:
        litros = Number(prompt("Digite quantos R$ quer abastecer (1L gasolina = R$5.58)"));
        console.log("Você abasteceu:",litros / 5.58,"L");
        break;
    case 2:
        litros = Number(prompt("Digite quantos R$ quer abastecer (1L de álcool = R$3)"));
        console.log("Você abasteceu:",litros / 3,"L");
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!");
        break;
    default:
        console.log("Default");
        break;

}