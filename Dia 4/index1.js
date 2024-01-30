let fome = prompt("Você está com fome? (responda sim ou nao)");
let dinheiro = prompt("Você tem dinheiro? (responda sim ou nao)");
let restaurante = prompt("O restaurante está aberto? (responda aberto ou fechado)");

if(fome === "nao" || dinheiro === "nao" ){
    console.log(" Hoje a janta será em casa! ");
}else if( fome === "sim" && dinheiro === "sim" && restaurante === "fechado"){
    console.log(" Peça um delivery! ");
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "aberto"){
    console.log(" Hoje o jantar será em seu restaurante preferido! ");
}