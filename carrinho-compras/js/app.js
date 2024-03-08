let totalGeral = 0; // preciso fazer fora para que nao influencia na hora que clicar
limpar();
function adicionar() {
    
    //recuperar produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //separador do valor e o nome
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;// valor esta value que e o numero que coloca quantidade
    if(quantidade == 0){
        alert('escreva um valor valido')
    }else{
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');//section representa no html o idem do carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    //atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
    }
}
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}