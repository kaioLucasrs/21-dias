let numero = Number(prompt(" Digite um valor "));

console.log("Número", numero + ":"+"            " +"Número",(numero + 1)+":"+"            "+"Número",(numero + 2)+":");

for(let i = 1; i <= 10; i++){
    console.log( numero ," * ", i ," = ", numero * i ,"         ", numero + 1 ," * ", i ," = ", (numero + 1) * i,"            ", numero + 2 ," * ", i ," = ", (numero + 2) * i);
}