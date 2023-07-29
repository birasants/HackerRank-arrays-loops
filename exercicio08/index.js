const resultados = ['V','E','V','E'];
let soma = 0;
const pontoA = 3;
const pontoB = 1;
const pontoC = 0;
for(let letra of resultados){
  if(letra=== 'V' || letra ==='v'){
    soma+= pontoA;
  }else if(letra === 'E' || letra === 'e'){
    ponto = 1;
    soma+=pontoB;
  }else{
    soma+=pontoC
  }
}
console.log(soma);