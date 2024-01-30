let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let cnh = prompt("Possui CNH? (responda sim ou nao)");
let carro = prompt("Tem carro proprio? (responda sim ou nao)");

if( idade < 18 || cnh === "nao"){
    console.log(nome,", Você não pode dirigir.");
}else if(idade >= 18 && cnh === "sim" && carro === "nao"){
    console.log(nome,", Você pode dirigir mas não tem carro.");
}else if(idade >=18 && cnh === "sim" && carro === "sim"){
    console.log(nome,", Você será o motorista!");
}