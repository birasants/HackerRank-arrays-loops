// a cada disparo pontuacao de 0 a 100
// para aprovar 3 disparos que tenham pontuacao acima de 70 

// iremos fazer um for dentro do for uma condicao que a cada vez que o jogador fazer pontos acimas de 70 seja contabilizado i++

const disparos = [0, 50, 90, 80, 100, 80, 40];   
let resultado = 0;

for (let i = 0; i<disparos.length;i++){
  if(disparos[i]>70){
    resultado++;
  }
}
if(resultado<3){
  console.log('ELIMINADO')
}else{
console.log(resultado);}