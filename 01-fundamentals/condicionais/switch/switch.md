# Exercícios SWITCH - 5 Níveis de Complexidade

## 📝 Instruções
- Tente resolver cada exercício antes de ver a solução
- Os exercícios estão organizados em 5 níveis de dificuldade crescente
- Use JavaScript e a estrutura SWITCH para implementar as soluções
- Explore diferentes formas de usar o SWITCH: básico, fall-through, com expressões, etc.

---

## 🟢 NÍVEL 1 - BÁSICO
*Switch simples com casos únicos*

### Exercício 1.1 - Tradutor de Dias da Semana
Crie uma função que receba um número (1-7) e retorne o dia da semana correspondente.

**Entrada:** `3`
**Saída esperada:** `"Quarta-feira"`

<details>
<summary>💡 Solução</summary>

```javascript
function traduzirDiaSemana(numeroDia) {
    switch (numeroDia) {
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Dia inválido";
    }
}

// Teste
console.log(traduzirDiaSemana(3)); // "Quarta-feira"
console.log(traduzirDiaSemana(7)); // "Domingo"
console.log(traduzirDiaSemana(10)); // "Dia inválido"
```
</details>

### Exercício 1.2 - Classificador de Notas por Letra
Crie uma função que converta notas numéricas em letras:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- Abaixo de 60: F

**Entrada:** `85`
**Saída esperada:** `"B"`

<details>
<summary>💡 Solução</summary>

```javascript
function classificarNota(nota) {
    const faixa = Math.floor(nota / 10);
    
    switch (faixa) {
        case 10:
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}

// Teste
console.log(classificarNota(85)); // "B"
console.log(classificarNota(95)); // "A"
console.log(classificarNota(45)); // "F"
```
</details>

### Exercício 1.3 - Calculadora Básica
Crie uma calculadora que execute operações básicas (+, -, *, /) usando switch.

**Entrada:** `10, 5, "+"`
**Saída esperada:** `15`

<details>
<summary>💡 Solução</summary>

```javascript
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default:
            return "Operação inválida";
    }
}

// Teste
console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 0, "/")); // "Erro: Divisão por zero"
```
</details>

---

## 🟡 NÍVEL 2 - INTERMEDIÁRIO
*Switch com fall-through e agrupamento de casos*

### Exercício 2.1 - Classificador de Estações do Ano
Crie uma função que determine a estação do ano baseada no mês (considerando hemisfério sul).

**Entrada:** `6` (Junho)
**Saída esperada:** `"Inverno"`

<details>
<summary>💡 Solução</summary>

```javascript
function determinarEstacao(mes) {
    switch (mes) {
        case 12:
        case 1:
        case 2:
            return "Verão";
        case 3:
        case 4:
        case 5:
            return "Outono";
        case 6:
        case 7:
        case 8:
            return "Inverno";
        case 9:
        case 10:
        case 11:
            return "Primavera";
        default:
            return "Mês inválido";
    }
}

// Teste
console.log(determinarEstacao(6)); // "Inverno"
console.log(determinarEstacao(12)); // "Verão"
console.log(determinarEstacao(9)); // "Primavera"
```
</details>

### Exercício 2.2 - Sistema de Desconto por Categoria
Crie um sistema que aplique descontos baseado na categoria do cliente:
- VIP: 20%
- Premium: 15%
- Gold/Silver: 10%
- Bronze/Basic: 5%
- Outros: 0%

**Entrada:** `valor: 100, categoria: "Gold"`
**Saída esperada:** `{ valorFinal: 90, desconto: 10 }`

<details>
<summary>💡 Solução</summary>

```javascript
function aplicarDesconto(valor, categoria) {
    let percentualDesconto;
    
    switch (categoria.toLowerCase()) {
        case "vip":
            percentualDesconto = 20;
            break;
        case "premium":
            percentualDesconto = 15;
            break;
        case "gold":
        case "silver":
            percentualDesconto = 10;
            break;
        case "bronze":
        case "basic":
            percentualDesconto = 5;
            break;
        default:
            percentualDesconto = 0;
    }
    
    const valorDesconto = (valor * percentualDesconto) / 100;
    const valorFinal = valor - valorDesconto;
    
    return {
        valorFinal: valorFinal,
        desconto: percentualDesconto,
        valorDesconto: valorDesconto
    };
}

// Teste
console.log(aplicarDesconto(100, "Gold")); 
// { valorFinal: 90, desconto: 10, valorDesconto: 10 }
console.log(aplicarDesconto(100, "VIP")); 
// { valorFinal: 80, desconto: 20, valorDesconto: 20 }
```
</details>

### Exercício 2.3 - Conversor de Unidades de Temperatura
Crie um conversor que funcione entre Celsius, Fahrenheit e Kelvin.

**Entrada:** `valor: 25, de: "C", para: "F"`
**Saída esperada:** `77`

<details>
<summary>💡 Solução</summary>

```javascript
function converterTemperatura(valor, de, para) {
    const unidadeOrigem = de.toUpperCase();
    const unidadeDestino = para.toUpperCase();
    
    // Primeiro converter tudo para Celsius
    let celsius;
    
    switch (unidadeOrigem) {
        case "C":
            celsius = valor;
            break;
        case "F":
            celsius = (valor - 32) * 5/9;
            break;
        case "K":
            celsius = valor - 273.15;
            break;
        default:
            return "Unidade de origem inválida";
    }
    
    // Depois converter de Celsius para a unidade desejada
    switch (unidadeDestino) {
        case "C":
            return Math.round(celsius * 100) / 100;
        case "F":
            return Math.round((celsius * 9/5 + 32) * 100) / 100;
        case "K":
            return Math.round((celsius + 273.15) * 100) / 100;
        default:
            return "Unidade de destino inválida";
    }
}

// Teste
console.log(converterTemperatura(25, "C", "F")); // 77
console.log(converterTemperatura(32, "F", "C")); // 0
console.log(converterTemperatura(0, "C", "K")); // 273.15
```
</details>

---

## 🟠 NÍVEL 3 - INTERMEDIÁRIO-AVANÇADO
*Switch com lógica complexa e casos compostos*

### Exercício 3.1 - Sistema de Tarifas de Transporte
Crie um sistema que calcule tarifas baseado em:
- Tipo de transporte (ônibus, metrô, trem, taxi)
- Categoria do usuário (estudante, idoso, trabalhador, turista)
- Horário (pico, normal, madrugada)

**Entrada:** `{ transporte: "metro", categoria: "estudante", horario: "pico" }`
**Saída esperada:** `{ tarifa: 1.60, descricao: "Metrô - Estudante - Horário de Pico" }`

<details>
<summary>💡 Solução</summary>

```javascript
function calcularTarifa({ transporte, categoria, horario }) {
    const tarifaBase = {
        "onibus": 4.40,
        "metro": 4.40,
        "trem": 4.70,
        "taxi": 5.50
    };
    
    let tarifa = tarifaBase[transporte];
    if (!tarifa) {
        return { erro: "Tipo de transporte inválido" };
    }
    
    // Aplicar desconto por categoria
    switch (categoria.toLowerCase()) {
        case "estudante":
            tarifa *= 0.5; // 50% desconto
            break;
        case "idoso":
            tarifa = 0; // Gratuito
            break;
        case "trabalhador":
            tarifa *= 0.9; // 10% desconto
            break;
        case "turista":
            // Sem desconto
            break;
        default:
            return { erro: "Categoria de usuário inválida" };
    }
    
    // Aplicar ajuste por horário
    switch (horario.toLowerCase()) {
        case "pico":
            if (categoria !== "idoso") { // Idosos mantêm gratuidade
                tarifa *= 1.2; // 20% a mais
            }
            break;
        case "normal":
            // Tarifa normal
            break;
        case "madrugada":
            tarifa *= 0.8; // 20% desconto
            break;
        default:
            return { erro: "Horário inválido" };
    }
    
    // Aplicar desconto adicional para combinações específicas
    switch (`${transporte}_${categoria}_${horario}`) {
        case "metro_estudante_madrugada":
            tarifa *= 0.7; // Desconto adicional para estudantes no metrô de madrugada
            break;
        case "onibus_trabalhador_normal":
            tarifa *= 0.95; // Pequeno desconto adicional
            break;
    }
    
    return {
        tarifa: Math.round(tarifa * 100) / 100,
        descricao: `${transporte.charAt(0).toUpperCase() + transporte.slice(1)} - ${categoria.charAt(0).toUpperCase() + categoria.slice(1)} - Horário ${horario.charAt(0).toUpperCase() + horario.slice(1)}`
    };
}

// Teste
console.log(calcularTarifa({ transporte: "metro", categoria: "estudante", horario: "pico" }));
// { tarifa: 2.64, descricao: "Metro - Estudante - Horário Pico" }

console.log(calcularTarifa({ transporte: "onibus", categoria: "idoso", horario: "normal" }));
// { tarifa: 0, descricao: "Onibus - Idoso - Horário Normal" }
```
</details>

### Exercício 3.2 - Sistema de Níveis de Acesso
Crie um sistema que determine permissões baseado no cargo e departamento:
- CEO: acesso total
- Diretor: acesso ao seu departamento + relatórios gerais
- Gerente: acesso ao seu departamento
- Funcionário: acesso básico ao seu departamento
- Estagiário: acesso limitado

**Entrada:** `{ cargo: "Gerente", departamento: "TI", recurso: "servidor" }`
**Saída esperada:** `{ acesso: true, nivel: "escrita", motivo: "Gerente TI tem acesso de escrita aos servidores" }`

<details>
<summary>💡 Solução</summary>

```javascript
function verificarAcesso({ cargo, departamento, recurso }) {
    const recursos = {
        "servidor": ["TI"],
        "financeiro": ["Financeiro", "Contabilidade"],
        "rh": ["RH", "Pessoas"],
        "marketing": ["Marketing", "Vendas"],
        "relatorio_geral": ["todos"],
        "sistema_principal": ["TI", "Financeiro"]
    };
    
    let nivelAcesso = "negado";
    let motivo = "";
    
    switch (cargo.toLowerCase()) {
        case "ceo":
            nivelAcesso = "total";
            motivo = "CEO tem acesso total a todos os recursos";
            break;
            
        case "diretor":
            if (recurso === "relatorio_geral") {
                nivelAcesso = "leitura";
                motivo = "Diretor tem acesso de leitura aos relatórios gerais";
            } else if (recursos[recurso] && recursos[recurso].includes(departamento)) {
                nivelAcesso = "escrita";
                motivo = `Diretor do ${departamento} tem acesso de escrita ao ${recurso}`;
            } else {
                motivo = "Diretor não tem acesso a este recurso fora do seu departamento";
            }
            break;
            
        case "gerente":
            switch (recurso) {
                case "relatorio_geral":
                    nivelAcesso = "leitura";
                    motivo = "Gerente tem acesso de leitura aos relatórios gerais";
                    break;
                default:
                    if (recursos[recurso] && recursos[recurso].includes(departamento)) {
                        nivelAcesso = "escrita";
                        motivo = `Gerente do ${departamento} tem acesso de escrita ao ${recurso}`;
                    } else {
                        motivo = "Gerente não tem acesso a este recurso fora do seu departamento";
                    }
            }
            break;
            
        case "funcionario":
            if (recursos[recurso] && recursos[recurso].includes(departamento)) {
                switch (recurso) {
                    case "servidor":
                    case "sistema_principal":
                        nivelAcesso = "leitura";
                        motivo = `Funcionário do ${departamento} tem acesso de leitura ao ${recurso}`;
                        break;
                    default:
                        nivelAcesso = "escrita";
                        motivo = `Funcionário do ${departamento} tem acesso ao ${recurso}`;
                }
            } else {
                motivo = "Funcionário não tem acesso a este recurso";
            }
            break;
            
        case "estagiario":
            switch (departamento.toLowerCase()) {
                case "ti":
                    if (recurso === "servidor") {
                        nivelAcesso = "leitura";
                        motivo = "Estagiário de TI tem acesso limitado de leitura aos servidores";
                    }
                    break;
                case "marketing":
                    if (recurso === "marketing") {
                        nivelAcesso = "leitura";
                        motivo = "Estagiário de Marketing tem acesso de leitura aos recursos de marketing";
                    }
                    break;
                default:
                    motivo = "Estagiário tem acesso muito limitado";
            }
            break;
            
        default:
            motivo = "Cargo não reconhecido";
    }
    
    return {
        acesso: nivelAcesso !== "negado",
        nivel: nivelAcesso,
        motivo: motivo
    };
}

// Teste
console.log(verificarAcesso({ cargo: "Gerente", departamento: "TI", recurso: "servidor" }));
// { acesso: true, nivel: "escrita", motivo: "Gerente do TI tem acesso de escrita ao servidor" }

console.log(verificarAcesso({ cargo: "Estagiario", departamento: "TI", recurso: "servidor" }));
// { acesso: true, nivel: "leitura", motivo: "Estagiário de TI tem acesso limitado de leitura aos servidores" }
```
</details>

### Exercício 3.3 - Processador de Comandos de Jogo
Crie um sistema que processe comandos de um jogo de RPG considerando contexto e estado do jogador.

**Entrada:** `{ comando: "atacar", alvo: "goblin", arma: "espada", mana: 50, hp: 80 }`
**Saída esperada:** `{ sucesso: true, dano: 25, manaGasta: 0, mensagem: "Você ataca o goblin com sua espada causando 25 de dano!" }`

<details>
<summary>💡 Solução</summary>

```javascript
function processarComando({ comando, alvo, arma, item, mana, hp, inventario = [] }) {
    let resultado = {
        sucesso: false,
        dano: 0,
        cura: 0,
        manaGasta: 0,
        hpGasto: 0,
        mensagem: "",
        novoItem: null
    };
    
    switch (comando.toLowerCase()) {
        case "atacar":
            if (hp <= 0) {
                resultado.mensagem = "Você está morto e não pode atacar!";
                break;
            }
            
            if (!alvo) {
                resultado.mensagem = "Você precisa especificar um alvo para atacar!";
                break;
            }
            
            switch (arma?.toLowerCase()) {
                case "espada":
                    resultado.dano = Math.floor(Math.random() * 20) + 15; // 15-35 dano
                    resultado.sucesso = true;
                    resultado.mensagem = `Você ataca ${alvo} com sua espada causando ${resultado.dano} de dano!`;
                    break;
                    
                case "arco":
                    resultado.dano = Math.floor(Math.random() * 15) + 10; // 10-25 dano
                    resultado.sucesso = true;
                    resultado.mensagem = `Você dispara uma flecha em ${alvo} causando ${resultado.dano} de dano!`;
                    break;
                    
                case "cajado":
                    if (mana < 10) {
                        resultado.mensagem = "Mana insuficiente para usar o cajado!";
                        break;
                    }
                    resultado.dano = Math.floor(Math.random() * 25) + 20; // 20-45 dano
                    resultado.manaGasta = 10;
                    resultado.sucesso = true;
                    resultado.mensagem = `Você conjura um feitiço em ${alvo} causando ${resultado.dano} de dano mágico!`;
                    break;
                    
                default:
                    resultado.dano = Math.floor(Math.random() * 8) + 5; // 5-13 dano
                    resultado.sucesso = true;
                    resultado.mensagem = `Você ataca ${alvo} com as mãos nuas causando ${resultado.dano} de dano!`;
            }
            break;
            
        case "usar":
            if (!item) {
                resultado.mensagem = "Você precisa especificar um item para usar!";
                break;
            }
            
            if (!inventario.includes(item)) {
                resultado.mensagem = `Você não possui ${item} no inventário!`;
                break;
            }
            
            switch (item.toLowerCase()) {
                case "pocao_vida":
                    resultado.cura = Math.floor(Math.random() * 30) + 20; // 20-50 cura
                    resultado.sucesso = true;
                    resultado.mensagem = `Você usa uma poção de vida e recupera ${resultado.cura} HP!`;
                    break;
                    
                case "pocao_mana":
                    resultado.cura = Math.floor(Math.random() * 25) + 15; // 15-40 mana
                    resultado.sucesso = true;
                    resultado.mensagem = `Você usa uma poção de mana e recupera ${resultado.cura} de mana!`;
                    break;
                    
                case "bomba":
                    if (!alvo) {
                        resultado.mensagem = "Você precisa especificar um alvo para a bomba!";
                        break;
                    }
                    resultado.dano = Math.floor(Math.random() * 40) + 30; // 30-70 dano
                    resultado.hpGasto = 5; // Dano para o próprio jogador
                    resultado.sucesso = true;
                    resultado.mensagem = `Você joga uma bomba em ${alvo} causando ${resultado.dano} de dano! Você sofre 5 de dano pelo impacto!`;
                    break;
                    
                default:
                    resultado.mensagem = `Você não sabe como usar ${item}!`;
            }
            break;
            
        case "examinar":
            if (!alvo) {
                resultado.mensagem = "Você precisa especificar algo para examinar!";
                break;
            }
            
            switch (alvo.toLowerCase()) {
                case "bau":
                case "tesouro":
                    const tesouros = ["pocao_vida", "pocao_mana", "moedas", "gema", "chave"];
                    resultado.novoItem = tesouros[Math.floor(Math.random() * tesouros.length)];
                    resultado.sucesso = true;
                    resultado.mensagem = `Você examina o ${alvo} e encontra: ${resultado.novoItem}!`;
                    break;
                    
                case "porta":
                    if (inventario.includes("chave")) {
                        resultado.sucesso = true;
                        resultado.mensagem = "A porta está trancada, mas você tem uma chave!";
                    } else {
                        resultado.mensagem = "A porta está trancada. Você precisa de uma chave.";
                    }
                    break;
                    
                default:
                    resultado.sucesso = true;
                    resultado.mensagem = `Você examina ${alvo}. Não há nada de especial.`;
            }
            break;
            
        case "fugir":
            const chanceFuga = Math.random();
            switch (true) {
                case hp < 20: // HP baixo, mais difícil fugir
                    if (chanceFuga > 0.3) {
                        resultado.sucesso = true;
                        resultado.mensagem = "Você consegue fugir apesar de estar ferido!";
                    } else {
                        resultado.mensagem = "Você está muito ferido para fugir!";
                    }
                    break;
                    
                case mana > 20: // Com mana, pode usar magia para fugir
                    resultado.manaGasta = 15;
                    resultado.sucesso = true;
                    resultado.mensagem = "Você usa magia para fugir rapidamente!";
                    break;
                    
                default: // Fuga normal
                    if (chanceFuga > 0.2) {
                        resultado.sucesso = true;
                        resultado.mensagem = "Você consegue fugir da batalha!";
                    } else {
                        resultado.mensagem = "Você não conseguiu fugir!";
                    }
            }
            break;
            
        default:
            resultado.mensagem = `Comando '${comando}' não reconhecido!`;
    }
    
    return resultado;
}

// Teste
console.log(processarComando({
    comando: "atacar",
    alvo: "goblin",
    arma: "espada",
    mana: 50,
    hp: 80
}));

console.log(processarComando({
    comando: "usar",
    item: "pocao_vida",
    inventario: ["pocao_vida", "espada", "chave"],
    hp: 30
}));
```
</details>

---

## 🔴 NÍVEL 4 - AVANÇADO
*Switch complexo com estados e transições*

### Exercício 4.1 - Máquina de Estados de Pedido
Crie um sistema que gerencie transições de estado de pedidos de e-commerce.

**Estados possíveis:** pendente → confirmado → preparando → enviado → entregue → concluído
**Entrada:** `{ estadoAtual: "confirmado", acao: "iniciar_preparo", usuario: "funcionario" }`

<details>
<summary>💡 Solução</summary>

```javascript
function gerenciarEstadoPedido({ estadoAtual, acao, usuario, pedidoInfo = {} }) {
    const PERMISSOES = {
        "cliente": ["cancelar", "confirmar_recebimento"],
        "funcionario": ["confirmar", "iniciar_preparo", "finalizar_preparo", "cancelar"],
        "transportadora": ["marcar_enviado", "marcar_entregue"],
        "admin": ["forcar_transicao", "cancelar", "confirmar", "iniciar_preparo", "finalizar_preparo", "marcar_enviado", "marcar_entregue"]
    };
    
    // Verificar permissão
    if (!PERMISSOES[usuario] || !PERMISSOES[usuario].includes(acao)) {
        return {
            sucesso: false,
            novoEstado: estadoAtual,
            mensagem: `Usuário ${usuario} não temPermissão para executar a ação '${acao}'`
        };
    }
    
    let novoEstado = estadoAtual;
    let sucesso = false;
    let mensagem = "";
    let acaoAdicional = null;
    
    switch (estadoAtual) {
        case "pendente":
            switch (acao) {
                case "confirmar":
                    novoEstado = "confirmado";
                    sucesso = true;
                    mensagem = "Pedido confirmado com sucesso";
                    acaoAdicional = "enviar_email_confirmacao";
                    break;
                case "cancelar":
                    novoEstado = "cancelado";
                    sucesso = true;
                    mensagem = "Pedido cancelado";
                    acaoAdicional = "estornar_pagamento";
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'pendente'`;
            }
            break;
            
        case "confirmado":
            switch (acao) {
                case "iniciar_preparo":
                    if (pedidoInfo.estoqueDisponivel !== false) {
                        novoEstado = "preparando";
                        sucesso = true;
                        mensagem = "Preparo do pedido iniciado";
                        acaoAdicional = "reservar_estoque";
                    } else {
                        mensagem = "Não é possível iniciar preparo: estoque insuficiente";
                    }
                    break;
                case "cancelar":
                    novoEstado = "cancelado";
                    sucesso = true;
                    mensagem = "Pedido cancelado";
                    acaoAdicional = "estornar_pagamento";
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'confirmado'`;
            }
            break;
            
        case "preparando":
            switch (acao) {
                case "finalizar_preparo":
                    if (pedidoInfo.itensVerificados !== false) {
                        novoEstado = "pronto_envio";
                        sucesso = true;
                        mensagem = "Preparo finalizado, pedido pronto para envio";
                        acaoAdicional = "notificar_transportadora";
                    } else {
                        mensagem = "Não é possível finalizar: nem todos os itens foram verificados";
                    }
                    break;
                case "cancelar":
                    novoEstado = "cancelado";
                    sucesso = true;
                    mensagem = "Pedido cancelado durante preparo";
                    acaoAdicional = "liberar_estoque_e_estornar";
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'preparando'`;
            }
            break;
            
        case "pronto_envio":
            switch (acao) {
                case "marcar_enviado":
                    if (pedidoInfo.codigoRastreamento) {
                        novoEstado = "enviado";
                        sucesso = true;
                        mensagem = `Pedido enviado - Código: ${pedidoInfo.codigoRastreamento}`;
                        acaoAdicional = "enviar_codigo_rastreamento";
                    } else {
                        mensagem = "Código de rastreamento é obrigatório para marcar como enviado";
                    }
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'pronto_envio'`;
            }
            break;
            
        case "enviado":
            switch (acao) {
                case "marcar_entregue":
                    novoEstado = "entregue";
                    sucesso = true;
                    mensagem = "Pedido marcado como entregue";
                    acaoAdicional = "solicitar_confirmacao_cliente";
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'enviado'`;
            }
            break;
            
        case "entregue":
            switch (acao) {
                case "confirmar_recebimento":
                    novoEstado = "concluido";
                    sucesso = true;
                    mensagem = "Pedido concluído com sucesso";
                    acaoAdicional = "solicitar_avaliacao";
                    break;
                default:
                    mensagem = `Ação '${acao}' não permitida no estado 'entregue'`;
            }
            break;
            
        case "concluido":
            mensagem = "Pedido já está concluído";
            break;
            
        case "cancelado":
            mensagem = "Pedido já está cancelado";
            break;
            
        default:
            mensagem = `Estado '${estadoAtual}' não reconhecido`;
    }
    
    // Verificar transições forçadas por admin
    if (acao === "forcar_transicao" && usuario === "admin" && pedidoInfo.novoEstadoForcado) {
        novoEstado = pedidoInfo.novoEstadoForcado;
        sucesso = true;
        mensagem = `Estado forçado pelo admin para '${novoEstado}'`;
        acaoAdicional = "log_transicao_forcada";
    }
    
    return {
        sucesso,
        estadoAnterior: estadoAtual,
        novoEstado,
        mensagem,
        acaoAdicional,
        timestamp: new Date().toISOString()
    };
}

// Teste
console.log(gerenciarEstadoPedido({
    estadoAtual: "confirmado",
    acao: "iniciar_preparo",
    usuario: "funcionario",
    pedidoInfo: { estoqueDisponivel: true }
}));

console.log(gerenciarEstadoPedido({
    estadoAtual: "pronto_envio",
    acao: "marcar_enviado",
    usuario: "transportadora",
    pedidoInfo: { codigoRastreamento: "BR123456789" }
}));
```
</details>

### Exercício 4.2 - Sistema de Combate RPG Avançado
Crie um sistema de combate que considere classes, elementos, status effects e combos.

**Entrada:** `{ atacante: {classe: "mago", elemento: "fogo", nivel: 15}, defensor: {classe: "guerreiro", resistencias: ["fogo"]}, habilidade: "bola_fogo" }`

<details>
<summary>💡 Solução</summary>

```javascript
function executarCombate({ atacante, defensor, habilidade, ambiente = "normal" }) {
    const HABILIDADES = {
        // Habilidades de Mago
        "bola_fogo": { elemento: "fogo", danoBase: 30, manaCusto: 15, tipo: "magico" },
        "raio_gelo": { elemento: "gelo", danoBase: 25, manaCusto: 12, tipo: "magico", efeito: "congelar" },
        "relampago": { elemento: "ar", danoBase: 35, manaCusto: 20, tipo: "magico" },
        
        // Habilidades de Guerreiro
        "golpe_espada": { elemento: "neutro", danoBase: 25, staminaCusto: 10, tipo: "fisico" },
        "investida": { elemento: "neutro", danoBase: 40, staminaCusto: 25, tipo: "fisico", efeito: "atordoar" },
        
        // Habilidades de Arqueiro
        "tiro_certeiro": { elemento: "neutro", danoBase: 30, staminaCusto: 15, tipo: "fisico", precisao: 95 },
        "chuva_flechas": { elemento: "neutro", danoBase: 20, staminaCusto: 20, tipo: "fisico", multiplo: true },
        
        // Habilidades de Clérigo
        "luz_sagrada": { elemento: "luz", danoBase: 28, manaCusto: 18, tipo: "magico", bonus_vs_mortos: 50 },
        "cura": { elemento: "luz", cura: 40, manaCusto: 20, tipo: "cura" }
    };
    
    const skill = HABILIDADES[habilidade];
    if (!skill) {
        return { erro: "Habilidade não encontrada" };
    }
    
    let dano = 0;
    let cura = 0;
    let efeitos = [];
    let multiplicador = 1;
    let mensagens = [];
    
    // Verificar se é cura
    if (skill.tipo === "cura") {
        cura = Math.floor(skill.cura * (1 + atacante.nivel * 0.05));
        return {
            sucesso: true,
            cura: cura,
            mensagem: `${atacante.classe} usa ${habilidade} e recupera ${cura} HP!`
        };
    }
    
    // Calcular dano base
    dano = skill.danoBase;
    
    // Modificadores por classe do atacante
    switch (atacante.classe.toLowerCase()) {
        case "mago":
            switch (skill.tipo) {
                case "magico":
                    multiplicador += 0.5; // Mago é especialista em magia
                    mensagens.push("Especialização em magia aplicada");
                    break;
                case "fisico":
                    multiplicador -= 0.3; // Mago é fraco em combate físico
                    mensagens.push("Penalidade por combate físico");
                    break;
            }
            
            // Verificar elemento especializado
            if (atacante.elemento === skill.elemento) {
                multiplicador += 0.3;
                mensagens.push(`Especialização em elemento ${skill.elemento}`);
            }
            break;
            
        case "guerreiro":
            switch (skill.tipo) {
                case "fisico":
                    multiplicador += 0.4;
                    mensagens.push("Especialização em combate físico");
                    break;
                case "magico":
                    multiplicador -= 0.4;
                    mensagens.push("Penalidade por uso de magia");
                    break;
            }
            break;
            
        case "arqueiro":
            if (skill.precisao) {
                const acerto = Math.random() * 100;
                if (acerto > skill.precisao) {
                    return {
                        sucesso: false,
                        mensagem: "O ataque errou o alvo!"
                    };
                }
                multiplicador += 0.2;
                mensagens.push("Tiro preciso!");
            }
            break;
            
        case "clerigo":
            if (skill.elemento === "luz") {
                multiplicador += 0.3;
                mensagens.push("Poder divino aplicado");
            }
            
            if (defensor.tipo === "morto_vivo" && skill.bonus_vs_mortos) {
                multiplicador += skill.bonus_vs_mortos / 100;
                mensagens.push("Dano massivo contra mortos-vivos!");
            }
            break;
    }
    
    // Resistências e fraquezas do defensor
    switch (defensor.classe?.toLowerCase()) {
        case "guerreiro":
            if (skill.tipo === "fisico") {
                multiplicador -= 0.2; // Resistência a ataques físicos
                mensagens.push("Resistência de guerreiro a ataques físicos");
            }
            break;
            
        case "mago":
            if (skill.tipo === "magico") {
                multiplicador -= 0.15; // Pequena resistência mágica
                mensagens.push("Resistência mágica natural");
            }
            break;
    }
    
    // Verificar resistências específicas
    if (defensor.resistencias && defensor.resistencias.includes(skill.elemento)) {
        multiplicador -= 0.4;
        mensagens.push(`Resistência ao elemento ${skill.elemento}`);
    }
    
    // Verificar fraquezas
    if (defensor.fraquezas && defensor.fraquezas.includes(skill.elemento)) {
        multiplicador += 0.6;
        mensagens.push(`Fraqueza ao elemento ${skill.elemento}!`);
    }
    
    // Modificadores de ambiente
    switch (ambiente) {
        case "chuva":
            switch (skill.elemento) {
                case "fogo":
                    multiplicador -= 0.3;
                    mensagens.push("Chuva enfraquece ataques de fogo");
                    break;
                case "ar":
                case "relampago":
                    multiplicador += 0.2;
                    mensagens.push("Chuva amplifica ataques elétricos");
                    break;
            }
            break;
            
        case "floresta":
            if (skill.elemento === "fogo") {
                multiplicador += 0.4;
                mensagens.push("Ambiente seco amplifica o fogo");
            }
            break;
            
        case "caverna":
            if (skill.elemento === "ar") {
                multiplicador -= 0.2;
                mensagens.push("Espaço confinado limita ataques de ar");
            }
            break;
    }
    
    // Aplicar multiplicador de nível
    const nivelMultiplicador = 1 + (atacante.nivel * 0.05);
    dano = Math.floor(dano * multiplicador * nivelMultiplicador);
    
    // Aplicar efeitos especiais
    if (skill.efeito) {
        switch (skill.efeito) {
            case "congelar":
                if (Math.random() > 0.7) {
                    efeitos.push("congelado");
                    mensagens.push("Alvo foi congelado!");
                }
                break;
                
            case "atordoar":
                if (Math.random() > 0.6) {
                    efeitos.push("atordoado");
                    mensagens.push("Alvo foi atordoado!");
                }
                break;
        }
    }
    
    // Chance de crítico baseada na classe
    let criticoChance = 0.1; // 10% base
    switch (atacante.classe.toLowerCase()) {
        case "arqueiro":
            criticoChance = 0.2;
            break;
        case "guerreiro":
            criticoChance = 0.15;
            break;
    }
    
    if (Math.random() < criticoChance) {
        dano = Math.floor(dano * 1.5);
        mensagens.push("ATAQUE CRÍTICO!");
    }
    
    // Preparar resultado
    const resultado = {
        sucesso: true,
        dano: Math.max(1, dano), // Dano mínimo de 1
        efeitos: efeitos,
        mensagem: `${atacante.classe} usa ${habilidade} causando ${dano} de dano!`,
        detalhes: mensagens,
        multiplicadorFinal: multiplicador.toFixed(2)
    };
    
    // Verificar se causou múltiplos hits
    if (skill.multiplo) {
        const hits = Math.floor(Math.random() * 3) + 2; // 2-4 hits
        resultado.dano = Math.floor(resultado.dano * hits * 0.7); // Cada hit individual é menor
        resultado.mensagem = `${atacante.classe} usa ${habilidade} com ${hits} hits causando ${resultado.dano} de dano total!`;
    }
    
    return resultado;
}

// Teste
console.log(executarCombate({
    atacante: {
        classe: "mago",
        elemento: "fogo",
        nivel: 15
    },
    defensor: {
        classe: "guerreiro",
        resistencias: ["fogo"]
    },
    habilidade: "bola_fogo",
    ambiente: "normal"
}));

console.log(executarCombate({
    atacante: {
        classe: "arqueiro",
        nivel: 12
    },
    defensor: {
        classe: "mago",
        fraquezas: ["fisico"]
    },
    habilidade: "tiro_certeiro",
    ambiente: "chuva"
}));
```
</details>

---

## 🔥 NÍVEL 5 - EXPERT
*Sistemas complexos com múltiplos switches aninhados*

### Exercício 5.1 - Sistema de IA para Trading
Crie um sistema de decisão para trading automatizado considerando múltiplos indicadores e condições de mercado.

**Entrada:** `{ indicadores: { rsi: 75, macd: "alta", volumeRelativo: 1.5 }, mercado: { tendencia: "alta", volatilidade: "media" }, posicao: { tipo: "comprado", quantidade: 100 } }`

<details>
<summary>💡 Solução</summary>

```javascript
function sistemaDecisaoTrading({ indicadores, mercado, posicao, configuracao = {} }) {
    const config = {
        rsiSobrecompra: configuracao.rsiSobrecompra || 70,
        rsiSobrevenda: configuracao.rsiSobrevenda || 30,
        stopLoss: configuracao.stopLoss || 0.05, // 5%
        takeProfit: configuracao.takeProfit || 0.15, // 15%
        riskTolerance: configuracao.riskTolerance || "medio", // baixo, medio, alto
        maxPositionSize: configuracao.maxPositionSize || 1000,
        ...configuracao
    };
    
    let decisao = "manter";
    let confianca = 0;
    let quantidade = 0;
    let prioridade = "baixa";
    let razoes = [];
    let alertas = [];
    
    // Análise do RSI (Relative Strength Index)
    let sinalRSI = "neutro";
    switch (true) {
        case indicadores.rsi >= config.rsiSobrecompra:
            sinalRSI = "vender";
            confianca += 25;
            razoes.push(`RSI em sobrecompra (${indicadores.rsi})`);
            break;
        case indicadores.rsi <= config.rsiSobrevenda:
            sinalRSI = "comprar";
            confianca += 25;
            razoes.push(`RSI em sobrevenda (${indicadores.rsi})`);
            break;
        case indicadores.rsi >= 50 && indicadores.rsi < config.rsiSobrecompra:
            sinalRSI = "comprar_fraco";
            confianca += 10;
            razoes.push(`RSI em zona positiva (${indicadores.rsi})`);
            break;
        case indicadores.rsi < 50 && indicadores.rsi > config.rsiSobrevenda:
            sinalRSI = "vender_fraco";
            confianca += 10;
            razoes.push(`RSI em zona negativa (${indicadores.rsi})`);
            break;
    }
    
    // Análise do MACD
    let sinalMACD = "neutro";
    switch (indicadores.macd?.toLowerCase()) {
        case "divergencia_alta":
            sinalMACD = "comprar";
            confianca += 30;
            razoes.push("MACD com divergência de alta");
            break;
        case "divergencia_baixa":
            sinalMACD = "vender";
            confianca += 30;
            razoes.push("MACD com divergência de baixa");
            break;
        case "cruzamento_alta":
            sinalMACD = "comprar";
            confianca += 20;
            razoes.push("MACD cruzou para cima");
            break;
        case "cruzamento_baixa":
            sinalMACD = "vender";
            confianca += 20;
            razoes.push("MACD cruzou para baixo");
            break;
        case "alta":
            sinalMACD = "comprar_fraco";
            confianca += 15;
            razoes.push("MACD em tendência de alta");
            break;
        case "baixa":
            sinalMACD = "vender_fraco";
            confianca += 15;
            razoes.push("MACD em tendência de baixa");
            break;
    }
    
    // Análise de Volume
    let sinalVolume = "neutro";
    switch (true) {
        case indicadores.volumeRelativo >= 2.0:
            sinalVolume = "forte";
            confianca += 15;
            razoes.push(`Volume muito alto (${indicadores.volumeRelativo}x)`);
            break;
        case indicadores.volumeRelativo >= 1.5:
            sinalVolume = "medio";
            confianca += 10;
            razoes.push(`Volume elevado (${indicadores.volumeRelativo}x)`);
            break;
        case indicadores.volumeRelativo < 0.5:
            sinalVolume = "fraco";
            confianca -= 10;
            alertas.push("Volume muito baixo - sinal menos confiável");
            break;
    }
    
    // Análise do contexto de mercado
    let contextoMercado = "neutro";
    switch (mercado.tendencia?.toLowerCase()) {
        case "alta_forte":
            contextoMercado = "altista";
            confianca += 20;
            razoes.push("Mercado em forte tendência de alta");
            break;
        case "alta":
            contextoMercado = "altista_moderado";
            confianca += 15;
            razoes.push("Mercado em tendência de alta");
            break;
        case "baixa_forte":
            contextoMercado = "baixista";
            confianca += 20;
            razoes.push("Mercado em forte tendência de baixa");
            break;
        case "baixa":
            contextoMercado = "baixista_moderado";
            confianca += 15;
            razoes.push("Mercado em tendência de baixa");
            break;
        case "lateral":
            contextoMercado = "lateral";
            confianca -= 5;
            alertas.push("Mercado lateral - menos oportunidades");
            break;
    }
    
    // Ajustar confiança baseado na volatilidade
    switch (mercado.volatilidade?.toLowerCase()) {
        case "alta":
            switch (config.riskTolerance) {
                case "baixo":
                    confianca -= 15;
                    alertas.push("Alta volatilidade incompatível com baixa tolerância ao risco");
                    break;
                case "alto":
                    confianca += 10;
                    razoes.push("Alta volatilidade favorável ao perfil de risco");
                    break;
            }
            break;
        case "baixa":
            if (config.riskTolerance === "baixo") {
                confianca += 10;
                razoes.push("Baixa volatilidade adequada ao perfil conservador");
            }
            break;
    }
    
    // Lógica de decisão principal baseada na combinação de sinais
    switch (true) {
        // Sinais de COMPRA forte
        case (sinalRSI === "comprar" && sinalMACD === "comprar" && contextoMercado.includes("altista")):
            decisao = "comprar";
            prioridade = "alta";
            quantidade = Math.floor(config.maxPositionSize * 0.8);
            razoes.push("Confluência de sinais altistas forte");
            break;
            
        // Sinais de VENDA forte
        case (sinalRSI === "vender" && sinalMACD === "vender" && contextoMercado.includes("baixista")):
            decisao = "vender";
            prioridade = "alta";
            quantidade = posicao.quantidade || Math.floor(config.maxPositionSize * 0.8);
            razoes.push("Confluência de sinais baixistas forte");
            break;
            
        // Sinais de COMPRA moderada
        case (sinalRSI === "comprar" || sinalMACD === "comprar") && !contextoMercado.includes("baixista"):
            decisao = "comprar";
            prioridade = "media";
            quantidade = Math.floor(config.maxPositionSize * 0.5);
            break;
            
        // Sinais de VENDA moderada
        case (sinalRSI === "vender" || sinalMACD === "vender") && !contextoMercado.includes("altista"):
            decisao = "vender";
            prioridade = "media";
            quantidade = Math.floor((posicao.quantidade || config.maxPositionSize) * 0.5);
            break;
            
        // Sinais fracos em mercado favorável
        case (sinalRSI === "comprar_fraco" && contextoMercado === "altista") || 
             (sinalMACD === "comprar" && sinalVolume === "forte"):
            decisao = "comprar";
            prioridade = "baixa";
            quantidade = Math.floor(config.maxPositionSize * 0.3);
            break;
            
        case (sinalRSI === "vender_fraco" && contextoMercado === "baixista") || 
             (sinalMACD === "vender" && sinalVolume === "forte"):
            decisao = "vender";
            prioridade = "baixa";
            quantidade = Math.floor((posicao.quantidade || config.maxPositionSize) * 0.3);
            break;
    }
    
    // Verificar posição atual e ajustar decisão
    if (posicao.tipo) {
        switch (posicao.tipo.toLowerCase()) {
            case "comprado":
                switch (decisao) {
                    case "comprar":
                        if (posicao.quantidade >= config.maxPositionSize * 0.9) {
                            decisao = "manter";
                            alertas.push("Posição já próxima do limite máximo");
                        } else {
                            quantidade = Math.min(quantidade, config.maxPositionSize - posicao.quantidade);
                            razoes.push("Aumentando posição comprada");
                        }
                        break;
                    case "vender":
                        razoes.push("Fechando posição comprada");
                        break;
                }
                break;
                
            case "vendido":
                switch (decisao) +
                    case "vender":
                        if (posicao.quantidade >= config.maxPositionSize * 0.9) {
                            decisao = "manter";
                            alertas.push("Posição vendida já próxima do limite");
                        }
                        break;
                    case "comprar":
                        razoes.push("Fechando posição vendida");
                        break;
                }
                break;
        }
    }
    
    // Verificar condições de stop loss e take profit
    if (posicao.precoEntrada && indicadores.precoAtual) {
        const variacao = (indicadores.precoAtual - posicao.precoEntrada) / posicao.precoEntrada;
        
        switch (posicao.tipo?.toLowerCase()) {
            case "comprado":
                if (variacao <= -config.stopLoss) {
                    decisao = "vender";
                    prioridade = "critica";
                    quantidade = posicao.quantidade;
                    razoes = ["STOP LOSS ACIONADO"];
                    confianca = 100;
                } else if (variacao >= config.takeProfit) {
                    decisao = "vender";
                    prioridade = "alta";
                    quantidade = Math.floor(posicao.quantidade * 0.7); // Realizar parcial
                    razoes.push("Take profit atingido - realizando parcial");
                }
                break;
                
            case "vendido":
                if (variacao >= config.stopLoss) {
                    decisao = "comprar";
                    prioridade = "critica";
                    quantidade = posicao.quantidade;
                    razoes = ["STOP LOSS ACIONADO"];
                    confianca = 100;
                } else if (variacao <= -config.takeProfit) {
                    decisao = "comprar";
                    prioridade = "alta";
                    quantidade = Math.floor(posicao.quantidade * 0.7);
                    razoes.push("Take profit atingido - fechando parcial");
                }
                break;
        }
    }
    
    // Normalizar confiança (0-100)
    confianca = Math.max(0, Math.min(100, confianca));
    
    // Determinar se deve executar baseado na confiança mínima
    const confiancaMinima = {
        "critica": 80,
        "alta": 60,
        "media": 40,
        "baixa": 20
    };
    
    const executar = confianca >= confiancaMinima[prioridade];
    
    return {
        decisao,
        executar,
        quantidade,
        prioridade,
        confianca: Math.round(confianca),
        razoes,
        alertas,
        analise: {
            rsi: sinalRSI,
            macd: sinalMACD,
            volume: sinalVolume,
            mercado: contextoMercado
        },
        timestamp: new Date().toISOString()
    };
}

// Teste
console.log(sistemaDecisaoTrading({
    indicadores: {
        rsi: 75,
        macd: "divergencia_baixa",
        volumeRelativo: 1.8,
        precoAtual: 105
    },
    mercado: {
        tendencia: "alta",
        volatilidade: "media"
    },
    posicao: {
        tipo: "comprado",
        quantidade: 100,
        precoEntrada: 100
    },
    configuracao: {
        riskTolerance: "medio",
        maxPositionSize: 500
    }
}));
```
</details>

### Exercício 5.2 - Sistema de Roteamento de Chamadas Inteligente
Crie um sistema complexo para rotear chamadas em um call center considerando múltiplos fatores.

**Entrada:** `{ chamada: { tipo: "reclamacao", prioridade: "alta", idioma: "pt", cliente: { vip: true, historico: "problematico" } }, agentes: [...], horario: "comercial" }`

<details>
<summary>💡 Solução</summary>

```javascript
function roteamentoChamadas({ chamada, agentes, horario, filaAtual = [] }) {
    let melhorAgente = null;
    let razaoRoteamento = "";
    let tempoEsperadoEstimado = 0;
    let prioridadeNaFila = "normal";
    let acaoAlternativa = null;
    
    // Determinar prioridade na fila
    switch (true) {
        case chamada.cliente?.vip && chamada.prioridade === "critica":
            prioridadeNaFila = "emergencia";
            break;
        case chamada.cliente?.vip || chamada.prioridade === "critica":
            prioridadeNaFila = "alta";
            break;
        case chamada.prioridade === "alta":
            prioridadeNaFila = "media_alta";
            break;
        case chamada.cliente?.historico === "problematico":
            prioridadeNaFila = "especial"; // Requer agente experiente
            break;
        default:
            prioridadeNaFila = "normal";
    }
    
    // Filtrar agentes disponíveis
    const agentesDisponiveis = agentes.filter(agente => {
        switch (agente.status) {
            case "disponivel":
                return true;
            case "pausa":
                // Apenas para emergências
                return prioridadeNaFila === "emergencia";
            case "ocupado":
            case "offline":
                return false;
            default:
                return false;
        }
    });
    
    if (agentesDisponiveis.length === 0) {
        // Nenhum agente disponível - lógica de fila
        switch (prioridadeNaFila) {
            case "emergencia":
                // Tentar interromper chamada de menor prioridade
                const agenteParaInterromper = agentes.find(a => 
                    a.status === "ocupado" && 
                    a.chamadaAtual?.prioridade !== "critica" &&
                    !a.chamadaAtual?.cliente?.vip
                );
                
                if (agenteParaInterromper) {
                    return {
                        roteamento: "interrupcao",
                        agente: agenteParaInterromper,
                        razao: "Emergência VIP - interrompendo chamada de menor prioridade",
                        tempoEspera: 0
                    };
                }
                break;
                
            case "alta":
                tempoEsperadoEstimado = Math.min(...filaAtual.map(f => f.tempoEstimado)) || 300; // 5 min
                break;
                
            default:
                tempoEsperadoEstimado = filaAtual.reduce((acc, f) => acc + f.tempoEstimado, 0) / filaAtual.length || 600; // 10 min
        }
        
        return {
            roteamento: "fila",
            posicaoFila: filaAtual.length + 1,
            prioridade: prioridadeNaFila,
            tempoEsperado: tempoEsperadoEstimado,
            razao: "Nenhum agente disponível no momento"
        };
    }
    
    // Calcular score para cada agente disponível
    const agentesComScore = agentesDisponiveis.map(agente => {
        let score = 0;
        let fatores = [];
        
        // Score base por experiência
        switch (true) {
            case agente.experiencia >= 5:
                score += 50;
                fatores.push("Muito experiente");
                break;
            case agente.experiencia >= 2:
                score += 35;
                fatores.push("Experiente");
                break;
            case agente.experiencia >= 1:
                score += 20;
                fatores.push("Experiência média");
                break;
            default:
                score += 10;
                fatores.push("Iniciante");
        }
        
        // Score por especialização