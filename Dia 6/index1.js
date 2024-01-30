let valor = 50;

for(let i = 0; i <= valor; i++){
    if ( (i % 5) === 0){
    console.log("     ", i);
    }
}

console.log("\n\n");

for(let i = valor; i>= 0; i--){
    if( (i % 5) === 0 ){
        console.log("     ", i);
    }
}