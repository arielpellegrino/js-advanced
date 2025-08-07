/**
 * Escopo Léxico
Escopo léxico em JavaScript é um conceito fundamental que determina onde 
variáveis podem ser acessadas no código com base em onde elas foram declaradas no momento da escrita do código, 
não onde são chamadas.
*/

let globalVar = "Variável Global";

function externa(){
    let variavelExterna = "Função externa";

    function interna(){
        let variavelInterna = "Função interna";

        console.log("----- 1", variavelExterna);
        console.log("----- 1",variavelInterna);
        console.log("----- 1",globalVar);

    }

        console.log("----- 2",variavelExterna);
        console.log("----- 2",variavelInterna);
        console.log("----- 2",globalVar);

}

externa();
