/**
 * Um closure é quando uma função "lembra" e mantém acesso às variáveis do escopo em que foi criada, 
 * mesmo depois que esse escopo não existe mais.
 * É como se a função "capturasse" essas variáveis e as mantivesse vivas.
 * 
 */



function criarContador(valorInicial = 0) {
    let count = valorInicial; // Variável "privada"
    
    return {
        incrementar: function() {
            count++;
            return count;
        },
        decrementar: function() {
            count--;
            return count;
        },
        valor: function() {
            return count;
        }
    };
}

const contador1 = criarContador(10);
const contador2 = criarContador(0);

console.log(contador1.incrementar()); // 11
console.log(contador1.incrementar()); // 12
console.log(contador2.incrementar()); // 1

// Não conseguimos acessar 'count' diretamente
console.log(contador1.count); // undefined - privacidade!