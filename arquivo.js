function calcularCusto() {
    const horasTrabalhadas = document.getElementById('horas').value;
    const custoMateriais = document.getElementById('materiais').value;
    const margemLucro = document.getElementById('margem').value;
  
    // Validação dos campos
    if (horasTrabalhadas === "" || custoMateriais === "" || margemLucro === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const precoPorHora = 20; // Substitua pelo seu preço por hora
    const custoMaoDeObra = horasTrabalhadas * precoPorHora;
    const custoTotal = parseFloat(custoMaoDeObra) + parseFloat(custoMateriais);
    const precoVenda = custoTotal * (1 + margemLucro / 100);
  
    document.getElementById('resultado').innerHTML = `Custo Total: $${custoTotal.toFixed(2)} | Preço de Venda: $${precoVenda.toFixed(2)}`;
  }

  
  function calcularCusto2(){
    const horasTrabalhadas = document.getElementById('horas2').value;
  
    // Adicione sua lógica de cálculo aqui (preço por hora, etc.)
    var precoPorHora = document.getElementById('PrecoHora').value;
    const resultado = horasTrabalhadas * precoPorHora;
  
    document.getElementById('resultado2').innerHTML = `Mão de Obra Direta: $${resultado.toFixed(2)}`;
  }