let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");

let Imc = peso/(altura * altura);
let nascimento = 2023 - idade;

console.log("Olá ",nome,", você tem ",idade," anos, nasceu em ",nascimento,", tem ",altura,", de altura, pesa",peso,"kg seu IMC é",Imc,"Kg/m2");    