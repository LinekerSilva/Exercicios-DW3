document.querySelector('#Pergunta').addEventListener('click', function() {
    switch (resp) {
        case 'a':
            document.getElementById('Resultado').textContent = 'Volte para a 1a série!'
            break;
    
        case 'b':
            document.getElementById('Resultado').textContent = 'Correto!'
            break;

        case 'c':
            document.getElementById('Resultado').textContent = 'MEU DEUS!'
            break;  

        case 'd':
            document.getElementById('Resultado').textContent = 'Não dá pra arriscar nada?!?!'
            break;
            
        default:
            document.getElementById('Resultado').textContent = 'Resposta inválida, digite uma letra entre "a" e "d"'
            break;
    }
});