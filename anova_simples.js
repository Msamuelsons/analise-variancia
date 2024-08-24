function main () {

    const tabela = {
        "A":[5, 7, 8, 4, 9], // tempo de cada user no site 'A'
        "B":[6, 9, 7, 10, 6], // tempo de cada user no site 'B'
        "C":[8, 7, 6, 5, 9] // tempo de cada user no site 'C'
    }

    console.table(tabela);
    
    quadrados_fatores(tabela);
    somatoria_fatores(tabela.A, tabela.B, tabela.C);
    
};

// O(n)
function somatoria_fatores(tabelaA, tabelaB, tabelaC) {
    let soma_tabelaA = 0;
    let soma_tabelaB = 0;
    let soma_tabelaC = 0;

    tabelaA.forEach(valores => soma_tabelaA += valores);
    tabelaB.forEach(valores => soma_tabelaB += valores);
    tabelaC.forEach(valores => soma_tabelaC += valores);

    let somatoria_total_fatores = soma_tabelaA + soma_tabelaB + soma_tabelaC;
    somatoria_quadrada_fatores(soma_tabelaA , soma_tabelaB , soma_tabelaC);
    console.log(soma_tabelaA, soma_tabelaB, soma_tabelaC, somatoria_total_fatores)
};



// O(n)
function quadrados_fatores(tabela) {
    let t_dobrada = [];

    Object.values(tabela).forEach(e => {
        e.forEach(valor => {
            t_dobrada.push(Math.pow(valor, 2));
        });
    })

   

    const dividir = [];
    const tamanho_split = 5;
    for (let i = 0; i < t_dobrada.length; i+=tamanho_split) {
        const chunk = t_dobrada.slice(i, i+tamanho_split);
        dividir.push(chunk);
    }
    console.log(dividir);
    somatoria_quadratica(dividir);
    return dividir
};


// O(n)
function somatoria_quadratica(tabela_dobrada) {
    let soma_dobradaA = 0;
    let soma_dobradaB = 0;
    let soma_dobradaC = 0;


    tabela_dobrada[0].forEach(valores => soma_dobradaA += valores);
    tabela_dobrada[1].forEach(valores => soma_dobradaB += valores);
    tabela_dobrada[2].forEach(valores => soma_dobradaC += valores);

    let somatoria_total_fatores = soma_dobradaA + soma_dobradaB + soma_dobradaC;
    

    console.log(soma_dobradaA, soma_dobradaB, soma_dobradaC, somatoria_total_fatores);

};

function somatoria_quadrada_fatores(somaColunaA, somaColunaB, somaColunaC){
   let valor_quadrado_colunaA = Math.pow(somaColunaA, 2);
   let valor_quadrado_colunaB = Math.pow(somaColunaB, 2);
   let valor_quadrado_colunaC = Math.pow(somaColunaC, 2);

   console.log(somaColunaA, valor_quadrado_colunaA, somaColunaB, valor_quadrado_colunaB, somaColunaC, valor_quadrado_colunaC);

   return soma_quadrados(valor_quadrado_colunaA, valor_quadrado_colunaB, valor_quadrado_colunaC);
};

function tamanho_valores() {
    const TAMANHO_A = 5;
    const TAMANHO_B = 5;
    const TAMANHO_C = 5;
    const SOMA_TAMANHO = TAMANHO_A + TAMANHO_B + TAMANHO_C;

    return [TAMANHO_A, TAMANHO_B, TAMANHO_C, SOMA_TAMANHO];
};

function soma_quadrados(valA=0, valB=0, valC=0){


    const tam_abc = tamanho_valores();

    console.log(valA , valB , valC, tam_abc);

    
};
main();
