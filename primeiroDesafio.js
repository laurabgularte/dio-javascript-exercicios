/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const valorCombustivel = 5.79;
const mediaPorKm =10;
const distanciaViagem =100;


const litrosConsumidos = distanciaViagem / mediaPorKm;
const gastoLitros = litrosConsumidos * valorCombustivel;





console.log(gastoLitros);