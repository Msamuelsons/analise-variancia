function main() {
  const tabela = {
    "A": [5, 7, 8, 4, 9], // tempo de cada user no site 'A'
    "B": [6, 9, 7, 10, 6], // tempo de cada user no site 'B'
    "C": [8, 7, 6, 5, 9]  // tempo de cada user no site 'C'
  };

  console.table(tabela);

  const quadradosTabela = quadrados_fatores(tabela);
  const somasTabela = somatoria_fatores(tabela);
  
  const SQA = somatoria_quadrada_fatores(somasTabela);
  medias_quadrado(Object.values(somasTabela));
  const SQT = soma_quadrado_t(quadradosTabela);

  medias_quadraticas(SQA, SQT);
}

// O(n)
function somatoria_fatores(tabela) {
  const somas = {
    A: tabela.A.reduce((acc, val) => acc + val, 0),
    B: tabela.B.reduce((acc, val) => acc + val, 0),
    C: tabela.C.reduce((acc, val) => acc + val, 0),
  };

  const somatoria_total_fatores = somas.A + somas.B + somas.C;

  return somas;
}

// O(n)
function quadrados_fatores(tabela) {
  const t_dobrada = Object.values(tabela).flat().map(valor => Math.pow(valor, 2));
  
  const tamanho_split = 5;
  const dividir = [];
  for (let i = 0; i < t_dobrada.length; i += tamanho_split) {
    dividir.push(t_dobrada.slice(i, i + tamanho_split));
  }

  return dividir;
}

// O(1)
function somatoria_quadrada_fatores(somas) {
  const quadrados = {
    A: Math.pow(somas.A, 2),
    B: Math.pow(somas.B, 2),
    C: Math.pow(somas.C, 2),
  };

  return soma_quadrados(quadrados.A, quadrados.B, quadrados.C);
}

// O(1)
function tamanho_valores() {
  const TAMANHO_A = 5;
  const TAMANHO_B = 5;
  const TAMANHO_C = 5;
  const SOMA_TAMANHO = TAMANHO_A + TAMANHO_B + TAMANHO_C;

  return [TAMANHO_A, TAMANHO_B, TAMANHO_C, SOMA_TAMANHO];
}

// O(1)
function soma_quadrados(valA = 0, valB = 0, valC = 0) {
  const tam_abc = tamanho_valores();
  return soma_quadrado_fatorA(valA, valB, valC);
}

// O(n)
function medias_quadrado(lista_medias) {

  const d_medias_somatoria = lista_medias
    .map(e => Math.pow(e, 2))
    .reduce((acc, el) => acc + el, 0);
  
}

// O(n)
function soma_quadrado_fatorA(somaA, somaB, somaC) {
  const n_valores = tamanho_valores();
  const aux = [somaA, somaB, somaC];
  
  const d_medias_somatoria = aux.reduce((acc, el) => acc + el, 0);

  const SQA = (somaA / n_valores[0]) + (somaB / n_valores[1]) + (somaC / n_valores[2]) - (d_medias_somatoria / n_valores[3]).toFixed(3);
  return SQA;
}

// O(n)
function soma_quadrado_t(fatores_quadrado) {
  const aux = fatores_quadrado.flat();
  const SOMA_QUADRATICA = parseFloat(792);  
  const somatoria = aux.reduce((acc, el) => acc + el, 0);

  const n_valores = tamanho_valores();
  const SQT = somatoria - (SOMA_QUADRATICA / n_valores[3]);
  return SQT;
}

function medias_quadraticas(SQA, SQT) {
  let SQTL = 15 - 1; // total de elementos
  let SQAL = 3 - 1;  // total de observações no caso A, B e C
  let SQEL = SQTL - SQAL; // erro dos graus de liberdade
  const SQE = SQT - SQA;
  const MQA = SQA / SQAL;
  const MQE = SQE / SQEL;

  const f = MQA / MQE

  console.log(`SQA: ${SQA}\nSQT:${SQT}\nSQE:${SQE}\nMQE:${MQE}\nMQA:${MQA}`);

  console.log('Graus de Liberdade')

  console.log(`
    SQT: n-1| ${SQTL}\n
    SQA: k-1| ${SQAL}\n
    SQE: n-k| ${SQEL}

  `);
  console.log(`F0: ${f}`);
}

main();
