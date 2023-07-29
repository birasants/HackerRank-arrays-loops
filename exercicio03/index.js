const precos = [100, 200, 300, 40, 500];

let quantdd = precos.length;
let soma = 0;


for(let produto of precos){
  soma+=produto;
}
  if(quantdd >= 5){
     let menor = precos[0];
    for(let produto of precos){
      if(produto < menor){
        menor = produto;
      }
      
        }console.log(soma - menor); 
        
  }else{
    console.log(soma);
  }
