function calcularCusto() {
  const diasTrabalho = document.getElementById('dias').value;
  const horasPorDia = document.getElementById('horas').value;
  const custoMateriais = document.getElementById('materiais').value;
  const quantidadeProdutos = document.getElementById('quantidade').value;
  const margemLucro = document.getElementById('margem').value;

  // Validação dos campos
  if (diasTrabalho === "" || horasPorDia === "" || custoMateriais === "" || quantidadeProdutos === "" || margemLucro === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const precoPorHora = 20; // Substitua pelo seu preço por hora
  const horasTotais = diasTrabalho * horasPorDia;
  const custoMaoDeObra = horasTotais * precoPorHora;
  const custoTotal = parseFloat(custoMaoDeObra) + parseFloat(custoMateriais);
  const custoPorUnidade = custoTotal / quantidadeProdutos;
  const precoVenda = custoTotal * (1 + margemLucro / 100);
  const precoVendaPorUnidade = precoVenda / quantidadeProdutos;

  document.getElementById('resultado').innerHTML = `Custo Total: $${custoTotal.toFixed(2)} | Custo por Unidade: $${custoPorUnidade.toFixed(2)} | Preço de Venda: $${precoVenda.toFixed(2)} | Preço de Venda por Unidade: $${precoVendaPorUnidade.toFixed(2)}`;
}



  
  function calcularCusto2(){
    const horasTrabalhadas = document.getElementById('horas2').value;
  
    // Adicione sua lógica de cálculo aqui (preço por hora, etc.)
    var precoPorHora = document.getElementById('PrecoHora').value;
    const resultado = horasTrabalhadas * precoPorHora;
  
    document.getElementById('resultado2').innerHTML = `Mão de Obra Direta: $${resultado.toFixed(2)}`;
  }
