/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preçoEtiqueta= 100;
const formaPagamento = 1;

if(formaPagamento === 1){
  console.log(preçoEtiqueta - (preçoEtiqueta * 0.1));
}

else if(formaPagamento === 2){
console.log(preçoEtiqueta - (preçoEtiqueta * 0.15));
}

else if(formaPagamento === 3){
  console.log(preçoEtiqueta);
  }
  else{
    console.log(preçoEtiqueta +(preçoEtiqueta * 0.1));
  }