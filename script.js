document.getElementById('adicionar-destaque').addEventListener('click', function() {
    alert('Produto em destaque adicionado ao carrinho!');
});

document.querySelectorAll('.adicionar').forEach(function(botao) {
    botao.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
});