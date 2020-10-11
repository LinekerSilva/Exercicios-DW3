document.querySelector('#Confirmar').addEventListener('click', function() {
    var nome = document.getElementById('Nome').value;
    document.getElementById('Saudacao').textContent = 'Olá ' + nome + ', seja bem vindo!'
});