function mostrarMenu() {
  let opcao = "";

  while (opcao !== "5") {
    opcao = prompt(
      "CENTRAL DE UTILIDADES\n\n" +
      "Escolha uma opção:\n" +
      "1 - Calculadora de descontos\n" +
      "2 - Calculadora de parcelas\n" +
      "3 - Simulador de investimentos\n" +
      "4 - Divisor de despesas\n" +
      "5 - Sair"
    );

    if (opcao === "1") {
      calculadoraDescontos();
    } else if (opcao === "2") {
      calculadoraParcelas();
    } else if (opcao === "3") {
      simuladorInvestimentos();
    } else if (opcao === "4") {
      divisorDespesas();
    } else if (opcao === "5") {
      alert("Obrigada por usar a Central de Utilidades! Até logo!");
    } else {
      alert("Opção inválida! Digite um número de 1 a 5.");
    }
  }
}

function calculadoraDescontos() {
  let preco = Number(prompt("Digite o preço original:"));
  let desconto = Number(prompt("Digite o % de desconto:"));
  let valorDesconto = preco * (desconto / 100);
  let precoFinal = preco - valorDesconto;
  alert("Preço original: R$ " + preco.toFixed(2) + "\nDesconto: R$ " + valorDesconto.toFixed(2) + "\nPreço final: R$ " + precoFinal.toFixed(2));
}

function calculadoraParcelas() {
  let total = Number(prompt("Digite o valor total:"));
  let parcelas = Number(prompt("Digite o número de parcelas:"));
  let valorParcela = total / parcelas;
  alert("Valor total: R$ " + total.toFixed(2) + "\nParcelas: " + parcelas + "\nValor de cada parcela: R$ " + valorParcela.toFixed(2));
}

function simuladorInvestimentos() {
  let inicial = Number(prompt("Digite o valor inicial:"));
  let taxa = Number(prompt("Digite a taxa % ao mês:"));
  let meses = Number(prompt("Digite a quantidade de meses:"));
  let final = inicial * Math.pow(1 + taxa / 100, meses);
  let lucro = final - inicial;
  alert("Valor inicial: R$ " + inicial.toFixed(2) + "\nValor final: R$ " + final.toFixed(2) + "\nLucro: R$ " + lucro.toFixed(2));
}

function divisorDespesas() {
  let total = Number(prompt("Digite o valor total da despesa:"));
  let pessoas = Number(prompt("Digite o número de pessoas:"));
  let porPessoa = total / pessoas;
  alert("Valor total: R$ " + total.toFixed(2) + "\nPessoas: " + pessoas + "\nCada um paga: R$ " + porPessoa.toFixed(2));
}

mostrarMenu();
