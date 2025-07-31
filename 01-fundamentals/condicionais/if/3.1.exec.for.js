function discountCalc(valor, vip, primeiraCompra) {
  let discount = 0;
  const cliente = {
    valorCompra: valor,
    isVip: vip,
    isPrimeiraCompra: primeiraCompra
  };
  if (cliente.isVip) {
    discount = discount + 20;
  }
  if (cliente.valorCompra > 500){
    discount = discount + 15;
  }
  if (cliente.isPrimeiraCompra){
    discount = discount + 10;
  }

  if (discount > 40){
    discount = 40;
  }

  let valorDesconto = (cliente.valorCompra * discount) / 100;
  let valorFinal =  cliente.valorCompra - valorDesconto;

  return  `valorFinal: ${valorFinal}, descontoTotal: ${discount} `


}

//console.log(discountCalc(600, true, false));

function calcularDesconto(valor, isVIP, isPrimeiraCompra) {
  let descontoTotal = 0;

  if (isVIP) {
    descontoTotal += 20;
  }

  if (valor > 500) {
    descontoTotal += 15;
  }

  if (isPrimeiraCompra) {
    descontoTotal += 10;
  }

  // Limitar desconto máximo a 40%
  if (descontoTotal > 40) {
    descontoTotal = 40;
  }

  const valorDesconto = (valor * descontoTotal) / 100;
  const valorFinal = valor - valorDesconto;

  return {
    valorFinal: valorFinal,
    descontoTotal: descontoTotal
  };
}

// Teste
console.log(calcularDesconto(600, true, false)); // { valorFinal: 408, descontoTotal: 35 }
console.log(calcularDesconto(1000, true, true)); // { valorFinal: 600, descontoTotal: 40 }
