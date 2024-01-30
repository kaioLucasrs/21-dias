let nome = "";
let cpf = 0, i = 0;
let saldo = 1400;
let valor = 0, media = 0;
let condicao = 0;
let escolha = 0; 
let maiorvalor = 0;


do{
    nome = prompt( "Digite seu nome" );
    cpf = prompt( "Digite seu cpf" );

    do{
        valor = Number(prompt( "Digite um valor (Não pode ser negativo)" ));
    }while(valor < 0);
  
    if(valor > maiorvalor ){
        maiorvalor = valor;
    }

    escolha = Number(prompt( "Digite 1- se Deseja fazer um Saque ou 2- Depósito?" ));

    
    if(escolha === 1 && saldo >= valor){
        saldo -= valor;
        media += valor;
        i++;
    }else if(saldo < valor){
        console.log( "Não é permitido sacar um valor maior que o saldo !" );        
    }

     if(escolha === 2){
        saldo += valor; 
        media += valor;
        i++;
    }

    condicao = Number(prompt("Digite 1 para continuar ou 2 para parar"));
   

}while(condicao === 1);

media = media / i;
console.log("O saldo total foi de R$"+saldo+", O maior valor inserido foi "+maiorvalor+", E a média dos valores inseridos foi de: "+media,"!");