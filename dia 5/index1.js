let numero1 = 0;
let numero2 = 0;

numero1 =  Number(prompt(" Digite o primeiro número "));
numero2 =  Number(prompt(" Digite o segundo número "));

let menu = Number(prompt("Escolha qual operação quer realizar: \n 1- soma \n 2- subtração \n 3- multiplicação \n 4- divisão \n 5- módulo"));

switch(menu){
    case 1: 
        console.log("A soma de ",numero1," + ",numero2," é igual a: ",numero1 + numero2);
        break;
    case 2:
        console.log("A subtração de ",numero1," - ",numero2," é igual a: ",numero1 - numero2);
        break;
    case 3:
        console.log("A multiplicação ente ",numero1," * ",numero2," é igual a: ",numero1 * numero2);
        break;
    case 4:
        console.log("A divisão entre ",numero1," : ",numero2," é igual a: ",numero1 / numero2);
        break;
    case 5:
        console.log("O módulo de ",numero1," % ",numero2," é igual a: ",numero1 % numero2);
        break;
    default:
        console.log("Default");
        break;
}