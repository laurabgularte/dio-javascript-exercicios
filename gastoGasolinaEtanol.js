/*Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const preçoEtanol = 5.99;
const preçoGasolina = 5.25 ;
const tipoCombustivel= 'etanol';
const mediaPorKm= 12;
const distanciaViagem= 99;
const litrosConsumidos = distanciaViagem / mediaPorKm;

if(tipoCombustivel === 'etanol'){
  const gastoLitros = litrosConsumidos * preçoEtanol;
  console.log(gastoLitros);
}
else{
  const gastoLitros = litrosConsumidos * preçoGasolina;
  console.log(gastoLitros);
}
