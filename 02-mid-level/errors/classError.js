// Criação de classes customizaveis de erros
class ValidaErro extends Error {
  constructor(message, field){
      super(message);
      this.name = 'ValidaErro';
      this.field  = 'field';
  }
}

class NetworkError extends Error {
  constructor(message, statusCode){
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

try {
  throw new ValidaErro('Email inválido', 'email');
} catch (error){
  if (error instanceof ValidaErro){
    console.log(`Erro no campo ${error.field}: ${error.message}`);
  }
}

