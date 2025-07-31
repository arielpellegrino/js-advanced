function calculaImc(peso, altura){
  imc = peso / (altura * altura);

  if(imc < 18.5){
    return  "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9){
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9){
    return "Sobrepeso";
  }  else if (imc > 30){
    return "Obesidade";
  } else {
    return "Dado inválido ou ausente";
  }
}

console.log(calculaImc(70,1.75))
console.log(calculaImc(130,1.60))
