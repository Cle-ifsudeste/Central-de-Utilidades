function calcularDesconto() {
  let preco = Number(prompt("Preço original do produto:"));
  let percentual = Number(prompt("Percentual de desconto:"));
  let economizado = preco * percentual / 100;
  let final = preco - economizado;
  alert("Preço original: R$ " + preco.toFixed(2) + "\nDesconto: " + percentual + "%\nValor economizado: R$ " + economizado.toFixed(2) + "\nPreço final: R$ " + final.toFixed(2));
}

function calcularParcelas() {
  let total = Number(prompt("Valor total da compra:"));
  let parcelas = Number(prompt("Quantidade de parcelas:"));
  if (parcelas <= 0) {
    alert("Quantidade de parcelas inválida!");
    return;
  }
  let cada = total / parcelas;
  alert("Valor total: R$ " + total.toFixed(2) + "\nValor de cada parcela: R$ " + cada.toFixed(2));
}

function simularInvestimento() {
  let valor = Number(prompt("Valor inicial do investimento:"));
  let aporte = Number(prompt("Valor do aporte mensal:"));
  let taxa = Number(prompt("Taxa de rendimento mensal (%):"));
  let meses = Number(prompt("Período do investimento em meses:"));
  let saldo = valor;
  for (let i = 1; i <= meses; i++) {
    saldo = saldo + (saldo * taxa / 100);
    saldo = saldo + aporte;
  }
  let totalInvestido = valor + (aporte * meses);
  let rendimento = saldo - totalInvestido;
  alert("Saldo final: R$ " + saldo.toFixed(2) + "\nTotal investido: R$ " + totalInvestido.toFixed(2) + "\nRendimento obtido: R$ " + rendimento.toFixed(2));
}

function dividirDespesas() {
  let total = 0;
  let despesa;
  do {
    despesa = Number(prompt("Informe o valor da despesa (digite 0 para encerrar):"));
    total = total + despesa;
  } while (despesa != 0);
  let pessoas = Number(prompt("Quantidade de pessoas:"));
  let cada = total / pessoas;
  alert("Total das despesas: R$ " + total.toFixed(2) + "\nCada pessoa deverá pagar: R$ " + cada.toFixed(2));
}