# Exercícios IF/ELSE - 5 Níveis de Complexidade

## 📝 Instruções
- Tente resolver cada exercício antes de ver a solução
- Os exercícios estão organizados em 5 níveis de dificuldade crescente
- Use JavaScript para implementar as soluções

---

## 🟢 NÍVEL 1 - BÁSICO
*Condicionais simples com operadores básicos*

### Exercício 1.1 - Verificador de Idade
Crie uma função que receba uma idade e retorne se a pessoa é maior ou menor de idade.

**Entrada:** `18`
**Saída esperada:** `"Maior de idade"`

<details>
<summary>💡 Solução</summary>

```javascript
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

// Teste
console.log(verificarIdade(18)); // "Maior de idade"
console.log(verificarIdade(16)); // "Menor de idade"
```
</details>

### Exercício 1.2 - Classificador de Notas
Crie uma função que classifique uma nota escolar:
- >= 7: "Aprovado"
- < 7: "Reprovado"

**Entrada:** `8.5`
**Saída esperada:** `"Aprovado"`

<details>
<summary>💡 Solução</summary>

```javascript
function classificarNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Teste
console.log(classificarNota(8.5)); // "Aprovado"
console.log(classificarNota(5.2)); // "Reprovado"
```
</details>

### Exercício 1.3 - Verificador de Paridade
Crie uma função que determine se um número é par ou ímpar.

**Entrada:** `10`
**Saída esperada:** `"Par"`

<details>
<summary>💡 Solução</summary>

```javascript
function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Teste
console.log(verificarParidade(10)); // "Par"
console.log(verificarParidade(7)); // "Ímpar"
```
</details>

---

## 🟡 NÍVEL 2 - INTERMEDIÁRIO
*Múltiplas condições e operadores lógicos*

### Exercício 2.1 - Sistema de Categorias por Idade
Crie uma função que categorize pessoas por faixa etária:
- 0-12: "Criança"
- 13-17: "Adolescente"
- 18-59: "Adulto"
- 60+: "Idoso"

**Entrada:** `25`
**Saída esperada:** `"Adulto"`

<details>
<summary>💡 Solução</summary>

```javascript
function categorizarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        return "Adulto";
    } else if (idade >= 60) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

// Teste
console.log(categorizarIdade(25)); // "Adulto"
console.log(categorizarIdade(8)); // "Criança"
console.log(categorizarIdade(65)); // "Idoso"
```
</details>

### Exercício 2.2 - Calculadora de IMC
Crie uma função que calcule o IMC e retorne a classificação:
- < 18.5: "Abaixo do peso"
- 18.5-24.9: "Peso normal"
- 25-29.9: "Sobrepeso"
- >= 30: "Obesidade"

**Entrada:** `peso: 70, altura: 1.75`
**Saída esperada:** `"Peso normal"`

<details>
<summary>💡 Solução</summary>

```javascript
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

// Teste
console.log(calcularIMC(70, 1.75)); // "Peso normal"
console.log(calcularIMC(90, 1.75)); // "Sobrepeso"
```
</details>

### Exercício 2.3 - Validador de Login
Crie uma função que valide login considerando:
- Username deve ter pelo menos 3 caracteres
- Password deve ter pelo menos 6 caracteres
- Retorne mensagem específica para cada erro

**Entrada:** `username: "jo", password: "12345"`
**Saída esperada:** `"Username muito curto e Password muito curta"`

<details>
<summary>💡 Solução</summary>

```javascript
function validarLogin(username, password) {
    const erros = [];
    
    if (username.length < 3) {
        erros.push("Username muito curto");
    }
    
    if (password.length < 6) {
        erros.push("Password muito curta");
    }
    
    if (erros.length === 0) {
        return "Login válido";
    } else {
        return erros.join(" e ");
    }
}

// Teste
console.log(validarLogin("jo", "12345")); // "Username muito curto e Password muito curta"
console.log(validarLogin("joao", "123456")); // "Login válido"
```
</details>

---

## 🟠 NÍVEL 3 - INTERMEDIÁRIO-AVANÇADO
*Lógica complexa e validações múltiplas*

### Exercício 3.1 - Sistema de Descontos
Crie uma função que calcule desconto baseado em múltiplos critérios:
- Cliente VIP: 20% desconto
- Compra > R$500: 15% desconto adicional
- Primeira compra: 10% desconto adicional
- Descontos são cumulativos, mas máximo 40%

**Entrada:** `valor: 600, isVIP: true, isPrimeiraCompra: false`
**Saída esperada:** `{ valorFinal: 408, descontoTotal: 32 }`

<details>
<summary>💡 Solução</summary>

```javascript
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
```
</details>

### Exercício 3.2 - Validador de Senha Complexa
Crie uma função que valide senha com critérios:
- Mínimo 8 caracteres
- Pelo menos 1 letra maiúscula
- Pelo menos 1 letra minúscula
- Pelo menos 1 número
- Pelo menos 1 caractere especial (!@#$%^&*)

**Entrada:** `"MinhaSenh@123"`
**Saída esperada:** `{ valida: true, problemas: [] }`

<details>
<summary>💡 Solução</summary>

```javascript
function validarSenhaComplexa(senha) {
    const problemas = [];
    
    if (senha.length < 8) {
        problemas.push("Deve ter pelo menos 8 caracteres");
    }
    
    if (!/[A-Z]/.test(senha)) {
        problemas.push("Deve ter pelo menos 1 letra maiúscula");
    }
    
    if (!/[a-z]/.test(senha)) {
        problemas.push("Deve ter pelo menos 1 letra minúscula");
    }
    
    if (!/[0-9]/.test(senha)) {
        problemas.push("Deve ter pelo menos 1 número");
    }
    
    if (!/[!@#$%^&*]/.test(senha)) {
        problemas.push("Deve ter pelo menos 1 caractere especial (!@#$%^&*)");
    }
    
    return {
        valida: problemas.length === 0,
        problemas: problemas
    };
}

// Teste
console.log(validarSenhaComplexa("MinhaSenh@123")); // { valida: true, problemas: [] }
console.log(validarSenhaComplexa("senha123")); // { valida: false, problemas: [...] }
```
</details>

### Exercício 3.3 - Sistema de Aprovação de Crédito
Crie uma função que aprove crédito baseado em:
- Renda mínima: R$2000
- Score mínimo: 600
- Idade: 18-65 anos
- Se score > 800, pode ter renda menor (R$1500)
- Se idade > 60, score deve ser > 700

**Entrada:** `{ renda: 3000, score: 750, idade: 35 }`
**Saída esperada:** `{ aprovado: true, motivo: "Aprovado" }`

<details>
<summary>💡 Solução</summary>

```javascript
function aprovarCredito({ renda, score, idade }) {
    // Verificar idade
    if (idade < 18 || idade > 65) {
        return { aprovado: false, motivo: "Idade fora da faixa permitida (18-65 anos)" };
    }
    
    // Verificar score para idosos
    if (idade > 60 && score <= 700) {
        return { aprovado: false, motivo: "Score insuficiente para idade acima de 60 anos (mín: 700)" };
    }
    
    // Verificar score geral
    if (score < 600) {
        return { aprovado: false, motivo: "Score insuficiente (mín: 600)" };
    }
    
    // Verificar renda
    const rendaMinima = score > 800 ? 1500 : 2000;
    if (renda < rendaMinima) {
        return { 
            aprovado: false, 
            motivo: `Renda insuficiente (mín: R$${rendaMinima} para seu score)` 
        };
    }
    
    return { aprovado: true, motivo: "Aprovado" };
}

// Teste
console.log(aprovarCredito({ renda: 3000, score: 750, idade: 35 })); 
// { aprovado: true, motivo: "Aprovado" }

console.log(aprovarCredito({ renda: 1800, score: 850, idade: 30 })); 
// { aprovado: true, motivo: "Aprovado" }

console.log(aprovarCredito({ renda: 3000, score: 650, idade: 62 })); 
// { aprovado: false, motivo: "Score insuficiente para idade acima de 60 anos (mín: 700)" }
```
</details>

---

## 🔴 NÍVEL 4 - AVANÇADO
*Lógica complexa com múltiplas validações aninhadas*

### Exercício 4.1 - Sistema de Preços Dinâmico
Crie um sistema de preços que considere:
- Produto (eletrônicos: +10%, roupas: -5%, livros: preço normal)
- Quantidade (>10: -8%, >50: -15%, >100: -25%)
- Cliente (novo: sem desconto, regular: -3%, VIP: -8%, premium: -12%)
- Sazonalidade (alta: +20%, normal: 0%, baixa: -10%)
- Frete grátis se valor final > R$200

**Entrada:**
```javascript
{
  precoBase: 100,
  categoria: "eletrônicos",
  quantidade: 15,
  tipoCliente: "VIP",
  temporada: "alta"
}
```

<details>
<summary>💡 Solução</summary>

```javascript
function calcularPrecoFinal(dados) {
    const { precoBase, categoria, quantidade, tipoCliente, temporada } = dados;
    
    let preco = precoBase;
    let ajustes = [];
    
    // Ajuste por categoria
    if (categoria === "eletrônicos") {
        preco *= 1.10;
        ajustes.push("Eletrônicos: +10%");
    } else if (categoria === "roupas") {
        preco *= 0.95;
        ajustes.push("Roupas: -5%");
    }
    
    // Desconto por quantidade
    let descontoQuantidade = 0;
    if (quantidade > 100) {
        descontoQuantidade = 25;
    } else if (quantidade > 50) {
        descontoQuantidade = 15;
    } else if (quantidade > 10) {
        descontoQuantidade = 8;
    }
    
    if (descontoQuantidade > 0) {
        preco *= (1 - descontoQuantidade / 100);
        ajustes.push(`Quantidade (${quantidade}): -${descontoQuantidade}%`);
    }
    
    // Desconto por tipo de cliente
    let descontoCliente = 0;
    switch (tipoCliente) {
        case "premium":
            descontoCliente = 12;
            break;
        case "VIP":
            descontoCliente = 8;
            break;
        case "regular":
            descontoCliente = 3;
            break;
    }
    
    if (descontoCliente > 0) {
        preco *= (1 - descontoCliente / 100);
        ajustes.push(`Cliente ${tipoCliente}: -${descontoCliente}%`);
    }
    
    // Ajuste sazonal
    if (temporada === "alta") {
        preco *= 1.20;
        ajustes.push("Temporada alta: +20%");
    } else if (temporada === "baixa") {
        preco *= 0.90;
        ajustes.push("Temporada baixa: -10%");
    }
    
    const valorTotal = preco * quantidade;
    const freteGratis = valorTotal > 200;
    
    return {
        precoUnitario: Math.round(preco * 100) / 100,
        valorTotal: Math.round(valorTotal * 100) / 100,
        freteGratis: freteGratis,
        ajustesAplicados: ajustes
    };
}

// Teste
const resultado = calcularPrecoFinal({
    precoBase: 100,
    categoria: "eletrônicos",
    quantidade: 15,
    tipoCliente: "VIP",
    temporada: "alta"
});

console.log(resultado);
// {
//   precoUnitario: 111.76,
//   valorTotal: 1676.4,
//   freteGratis: true,
//   ajustesAplicados: [...]
// }
```
</details>

### Exercício 4.2 - Sistema de Aprovação de Documentos
Crie um sistema que aprove documentos baseado em múltiplos critérios:
- Tipo de documento (contrato, relatório, proposta)
- Valor envolvido (diferentes limites por cargo)
- Urgência (normal, alta, crítica)
- Aprovador disponível
- Histórico do solicitante

**Entrada:**
```javascript
{
  documento: { tipo: "contrato", valor: 50000, urgencia: "alta" },
  solicitante: { cargo: "analista", aprovacoesPendentes: 2, historicoRejeicoes: 1 },
  aprovadorDisponivel: { cargo: "gerente", limiteAprovacao: 100000, disponivel: true }
}
```

<details>
<summary>💡 Solução</summary>

```javascript
function aprovarDocumento(dados) {
    const { documento, solicitante, aprovadorDisponivel } = dados;
    const problemas = [];
    let nivelAprovacao = "automática";
    
    // Verificar se aprovador está disponível
    if (!aprovadorDisponivel.disponivel) {
        problemas.push("Aprovador não disponível");
    }
    
    // Verificar limite de aprovação
    if (documento.valor > aprovadorDisponivel.limiteAprovacao) {
        problemas.push(`Valor excede limite do aprovador (R$${aprovadorDisponivel.limiteAprovacao})`);
        nivelAprovacao = "superior";
    }
    
    // Verificar histórico do solicitante
    if (solicitante.aprovacoesPendentes > 3) {
        problemas.push("Muitas aprovações pendentes");
    }
    
    if (solicitante.historicoRejeicoes > 2) {
        problemas.push("Histórico de rejeições elevado");
        nivelAprovacao = "manual";
    }
    
    // Critérios por tipo de documento
    let limiteAutomatico = 10000;
    if (documento.tipo === "contrato") {
        limiteAutomatico = 25000;
        if (documento.valor > 100000) {
            nivelAprovacao = "diretoria";
        }
    } else if (documento.tipo === "proposta") {
        limiteAutomatico = 15000;
    }
    
    // Ajustar por urgência
    if (documento.urgencia === "crítica") {
        limiteAutomatico *= 0.5; // Mais rigoroso para urgência crítica
        if (problemas.length === 0) {
            nivelAprovacao = "expedita";
        }
    } else if (documento.urgencia === "alta") {
        limiteAutomatico *= 0.8;
    }
    
    // Definir aprovação
    let aprovado = false;
    let motivo = "";
    
    if (problemas.length > 0) {
        motivo = problemas.join("; ");
    } else if (documento.valor <= limiteAutomatico) {
        aprovado = true;
        motivo = "Aprovação automática";
    } else {
        motivo = `Requer aprovação ${nivelAprovacao}`;
    }
    
    return {
        aprovado: aprovado,
        nivelAprovacao: nivelAprovacao,
        motivo: motivo,
        valorLimite: limiteAutomatico,
        problemas: problemas
    };
}

// Teste
const resultado = aprovarDocumento({
    documento: { tipo: "contrato", valor: 50000, urgencia: "alta" },
    solicitante: { cargo: "analista", aprovacoesPendentes: 2, historicoRejeicoes: 1 },
    aprovadorDisponivel: { cargo: "gerente", limiteAprovacao: 100000, disponivel: true }
});

console.log(resultado);
```
</details>

---

## 🔥 NÍVEL 5 - EXPERT
*Sistemas complexos com múltiplas regras de negócio*

### Exercício 5.1 - Sistema de Matchmaking para Jogos
Crie um sistema que encontre partidas balanceadas considerando:
- Skill level (1-100)
- Ping/latência
- Região geográfica
- Modo de jogo preferido
- Tempo na fila
- Histórico de comportamento

**Entrada:** Array de jogadores esperando + novo jogador

<details>
<summary>💡 Solução</summary>

```javascript
function encontrarPartida(jogadorAtual, jogadoresNaFila) {
    const MAX_DIFERENCA_SKILL = 15;
    const MAX_PING = 100;
    const BONUS_TEMPO_FILA = 0.1; // Reduz critérios a cada minuto
    
    function calcularCompatibilidade(jogador1, jogador2) {
        let score = 100;
        
        // Diferença de skill (peso: 40%)
        const diferencaSkill = Math.abs(jogador1.skill - jogador2.skill);
        const bonusTempoFila = Math.min(jogador1.tempoNaFila, jogador2.tempoNaFila) * BONUS_TEMPO_FILA;
        const limitSkillAjustado = MAX_DIFERENCA_SKILL + bonusTempoFila;
        
        if (diferencaSkill > limitSkillAjustado) {
            return 0; // Incompatível
        }
        score -= (diferencaSkill / limitSkillAjustado) * 40;
        
        // Ping (peso: 25%)
        const pingMedio = (jogador1.ping + jogador2.ping) / 2;
        if (pingMedio > MAX_PING) {
            score -= 25;
        } else {
            score -= (pingMedio / MAX_PING) * 25;
        }
        
        // Região (peso: 20%)
        if (jogador1.regiao !== jogador2.regiao) {
            score -= 20;
        }
        
        // Modo de jogo (peso: 10%)
        const modosComuns = jogador1.modosPreferidos.filter(modo => 
            jogador2.modosPreferidos.includes(modo)
        );
        if (modosComuns.length === 0) {
            score -= 10;
        }
        
        // Comportamento (peso: 5%)
        if (jogador1.comportamento === "tóxico" || jogador2.comportamento === "tóxico") {
            score -= 5;
        }
        
        return Math.max(0, score);
    }
    
    function criarEquipes(jogadores) {
        // Ordenar por skill para balanceamento
        jogadores.sort((a, b) => b.skill - a.skill);
        
        const equipe1 = [];
        const equipe2 = [];
        let skillEquipe1 = 0;
        let skillEquipe2 = 0;
        
        for (const jogador of jogadores) {
            if (skillEquipe1 <= skillEquipe2) {
                equipe1.push(jogador);
                skillEquipe1 += jogador.skill;
            } else {
                equipe2.push(jogador);
                skillEquipe2 += jogador.skill;
            }
        }
        
        return {
            equipe1,
            equipe2,
            balanceamento: Math.abs(skillEquipe1 - skillEquipe2)
        };
    }
    
    // Encontrar jogadores compatíveis
    const jogadoresCompativeis = [];
    
    for (const jogador of jogadoresNaFila) {
        const compatibilidade = calcularCompatibilidade(jogadorAtual, jogador);
        if (compatibilidade > 60) { // Threshold mínimo
            jogadoresCompativeis.push({
                jogador,
                compatibilidade
            });
        }
    }
    
    // Ordenar por compatibilidade
    jogadoresCompativeis.sort((a, b) => b.compatibilidade - a.compatibilidade);
    
    // Selecionar melhores jogadores para uma partida (assumindo 4v4)
    if (jogadoresCompativeis.length >= 7) {
        const jogadoresSelecionados = [
            jogadorAtual,
            ...jogadoresCompativeis.slice(0, 7).map(item => item.jogador)
        ];
        
        const equipesBalanceadas = criarEquipes(jogadoresSelecionados);
        
        return {
            partidaEncontrada: true,
            equipes: equipesBalanceadas,
            compatibilidadeMedia: jogadoresCompativeis.slice(0, 7)
                .reduce((sum, item) => sum + item.compatibilidade, 0) / 7,
            tempoEspera: Math.max(...jogadoresSelecionados.map(j => j.tempoNaFila))
        };
    } else {
        return {
            partidaEncontrada: false,
            jogadoresCompativeis: jogadoresCompativeis.length,
            sugestaoEspera: Math.max(1, 5 - jogadoresCompativeis.length) + " minutos"
        };
    }
}

// Teste
const jogadorAtual = {
    id: "player1",
    skill: 75,
    ping: 45,
    regiao: "BR",
    modosPreferidos: ["ranked", "casual"],
    tempoNaFila: 3,
    comportamento: "bom"
};

const jogadoresNaFila = [
    { id: "p2", skill: 72, ping: 50, regiao: "BR", modosPreferidos: ["ranked"], tempoNaFila: 2, comportamento: "bom" },
    { id: "p3", skill: 78, ping: 40, regiao: "BR", modosPreferidos: ["ranked", "casual"], tempoNaFila: 1, comportamento: "bom" },
    // ... mais jogadores
];

console.log(encontrarPartida(jogadorAtual, jogadoresNaFila));
```
</details>

### Exercício 5.2 - Sistema de Roteamento Inteligente
Crie um sistema que escolha a melhor rota considerando:
- Distância
- Trânsito em tempo real
- Tipo de veículo
- Preferências do usuário
- Condições climáticas
- Preços de pedágio
- Segurança da região

**Entrada:** Origem, destino, preferências, condições atuais

<details>
<summary>💡 Solução</summary>

```javascript
function calcularMelhorRota(origem, destino, preferencias, condicoes) {
    const PESOS = {
        tempo: preferencias.prioridadeTempo || 0.4,
        custo: preferencias.prioridadeCusto || 0.2,
        seguranca: preferencias.prioridadeSeguranca || 0.2,
        conforto: preferencias.prioridadeConforto || 0.2
    };
    
    function avaliarRota(rota) {
        let score = 0;
        let detalhes = {};
        
        // Avaliar tempo
        let tempoBase = rota.distancia / rota.velocidadeMedia;
        
        // Ajustar por trânsito
        const multiplicadorTransito = {
            'leve': 1.1,
            'moderado': 1.3,
            'intenso': 1.6,
            'congestionado': 2.0
        };
        tempoBase *= multiplicadorTransito[condicoes.transito] || 1;
        
        // Ajustar por clima
        if (condicoes.clima === 'chuva') {
            tempoBase *= 1.2;
        } else if (condicoes.clima === 'neblina') {
            tempoBase *= 1.4;
        }
        
        // Ajustar por tipo de veículo
        if (preferencias.tipoVeiculo === 'caminhao') {
            tempoBase *= 1.15; // Caminhões são mais lentos
            if (rota.temRestricaoCaminhao) {
                tempoBase *= 1.5; // Penalidade por restrições
            }
        }
        
        detalhes.tempoEstimado = Math.round(tempoBase);
        score += (1 - (tempoBase / 180)) * PESOS.tempo * 100; // Normalizar para 3h máximas
        
        // Avaliar custo
        let custoTotal = rota.pedagios + (rota.distancia * preferencias.custoPorKm);
        
        // Ajustar combustível por tipo de veículo
        const consumoVeiculo = {
            'carro': 0.6,
            'moto': 0.3,
            'caminhao': 2.5
        };
        custoTotal += rota.distancia * (consumoVeiculo[preferencias.tipoVeiculo] || 0.6) * condicoes.precoCombustivel;
        
        detalhes.custoTotal = Math.round(custoTotal * 100) / 100;
        score += (1 - (custoTotal / 200)) * PESOS.custo * 100; // Normalizar para R$200 máximo
        
        // Avaliar segurança
        let scorSeguranca = rota.indiceSeguranca; // 0-100
        
        // Penalizar rotas noturnas em áreas perigosas
        if (condicoes.periodo === 'noite' && rota.indiceSeguranca < 70) {
            scorSeguranca *= 0.7;
        }
        
        // Bonificar rodovias federais
        if (rota.tipoVia.includes('federal')) {
            scorSeguranca = Math.min(100, scorSeguranca * 1.1);
        }
        
        detalhes.seguranca = scorSeguranca;
        score += (scorSeguranca / 100) * PESOS.seguranca * 100;
        
        // Avaliar conforto
        let scorConforto = rota.qualidadePavimento; // 0-100
        
        // Penalizar estradas de terra
        if (rota.tipoVia.includes('terra')) {
            scorConforto *= 0.5;
        }
        
        // Bonificar por número de faixas
        if (rota.numeroFaixas >= 4) {
            scorConforto = Math.min(100, scorConforto * 1.1);
        }
        
        // Penalizar por obras
        if (rota.temObras) {
            scorConforto *= 0.8;
            tempoBase *= 1.2; // Atualizar tempo também
        }
        
        detalhes.conforto = scorConforto;
        score += (scorConforto / 100) * PESOS.conforto * 100;
        
        // Aplicar filtros eliminatórios
        const restricoes = [];
        
        if (preferencias.evitarPedagios && rota.pedagios > 0) {
            restricoes.push('Possui pedágios');
            score *= 0.3; // Penalidade severa
        }
        
        if (preferencias.evitarEstradaTerra && rota.tipoVia.includes('terra')) {
            restricoes.push('Contém estradas de terra');
            score *= 0.4;
        }
        
        if (preferencias.tipoVeiculo === 'caminhao' && rota.temRestricaoVeiculo) {
            restricoes.push('Restrição para caminhões');
            score *= 0.2;
        }
        
        return {
            score: Math.max(0, Math.min(100, score)),
            detalhes: {
                ...detalhes,
                restricoes: restricoes,
                distancia: rota.distancia,
                viaPrincipal: rota.viaPrincipal
            }
        };
    }
    
    // Rotas disponíveis (simuladas)
    const rotasDisponiveis = [
        {
            id: 'rota1',
            nome: 'Via Expressa',
            distancia: 45,
            velocidadeMedia: 80,
            pedagios: 12.50,
            indiceSeguranca: 85,
            qualidadePavimento: 90,
            tipoVia: ['rodovia', 'federal'],
            numeroFaixas: 4,
            temObras: false,
            temRestricaoCaminhao: false,
            temRestricaoVeiculo: false,
            viaPrincipal: 'BR-101'
        },
        {
            id: 'rota2',
            nome: 'Rota Econômica',
            distancia: 52,
            velocidadeMedia: 60,
            pedagios: 3.00,
            indiceSeguranca: 70,
            qualidadePavimento: 75,
            tipoVia: ['estadual'],
            numeroFaixas: 2,
            temObras: true,
            temRestricaoCaminhao: false,
            temRestricaoVeiculo: false,
            viaPrincipal: 'SP-070'
        },
        {
            id: 'rota3',
            nome: 'Rota Alternativa',
            distancia: 38,
            velocidadeMedia: 45,
            pedagios: 0,
            indiceSeguranca: 60,
            qualidadePavimento: 60,
            tipoVia: ['municipal', 'terra'],
            numeroFaixas: 1,
            temObras: false,
            temRestricaoCaminhao: true,
            temRestricaoVeiculo: true,
            viaPrincipal: 'Estrada do Campo'
        }
    ];
    
    // Avaliar todas as rotas
    const rotasAvaliadas = rotasDisponiveis.map(rota => ({
        ...rota,
        avaliacao: avaliarRota(rota)
    }));
    
    // Ordenar por score
    rotasAvaliadas.sort((a, b) => b.avaliacao.score - a.avaliacao.score);
    
    // Preparar resultado
    const melhorRota = rotasAvaliadas[0];
    const alternativas = rotasAvaliadas.slice(1, 3);
    
    return {
        rotaRecomendada: {
            nome: melhorRota.nome,
            score: Math.round(melhorRota.avaliacao.score),
            ...melhorRota.avaliacao.detalhes
        },
        alternativas: alternativas.map(rota => ({
            nome: rota.nome,
            score: Math.round(rota.avaliacao.score),
            tempoEstimado: rota.avaliacao.detalhes.tempoEstimado,
            custoTotal: rota.avaliacao.detalhes.custoTotal,
            diferencaScore: Math.round(melhorRota.avaliacao.score - rota.avaliacao.score)
        })),
        condicoeConsideradas: {
            transito: condicoes.transito,
            clima: condicoes.clima,
            periodo: condicoes.periodo,
            precoCombustivel: condicoes.precoCombustivel
        },
        criteriosUtilizados: PESOS
    };
}

// Teste
const resultado = calcularMelhorRota(
    { lat: -23.5505, lng: -46.6333 }, // São Paulo
    { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
    {
        tipoVeiculo: 'carro',
        prioridadeTempo: 0.5,
        prioridadeCusto: 0.3,
        prioridadeSeguranca: 0.15,
        prioridadeConforto: 0.05,
        evitarPedagios: false,
        evitarEstradaTerra: true,
        custoPorKm: 0.8
    },
    {
        transito: 'moderado',
        clima: 'sol',
        periodo: 'dia',
        precoCombustivel: 5.50
    }
);

console.log(resultado);
```
</details>

---

## 🎯 Conclusão

Estes exercícios cobrem desde conceitos básicos até sistemas complexos de tomada de decisão. Cada nível introduz novos conceitos:

- **Nível 1**: Condicionais simples e operadores básicos
- **Nível 2**: Múltiplas condições e operadores lógicos
- **Nível 3**: Validações complexas e lógica de negócio
- **Nível 4**: Sistemas com múltiplas regras interdependentes
- **Nível 5**: Algoritmos de decisão complexos com pesos e scores

### 💡 Dicas para Evoluir

1. **Pratique refatoração**: Tente reescrever as soluções de forma mais concisa
2. **Adicione validação**: Sempre valide os dados de entrada
3. **Pense em edge cases**: Considere casos extremos e inesperados
4. **Use funções auxiliares**: Divida lógicas complexas em funções menores
5. **Documente sua lógica**: Comente o raciocínio por trás de decisões complexas

### 🚀 Próximos Passos

- Implemente tratamento de erros robusto
- Adicione testes unitários para suas soluções
- Experimente com diferentes estruturas de dados
- Pratique otimização de performance para casos com muitos dados