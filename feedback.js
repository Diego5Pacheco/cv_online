document.getElementById('submitBtn').addEventListener('click', function () {
    // Seleciona todos os inputs de rádio com o nome "feedback"
    var radios = document.querySelectorAll('input[name="feedback"]');
    var selectedValue;
    // Percorre os inputs de rádio para ver qual está selecionado
    radios.forEach(function (radio) {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });
    var messageElement = document.getElementById('message');
    // Verifica o valor selecionado e exibe a mensagem correspondente
    switch (selectedValue) {
        case '1':
            messageElement.textContent = "Lamento que sua experiência não tenha sido boa. Por favor, entre em contato para compartilhar sugestões de como posso melhorar o site.";
            break;
        case '2':
            messageElement.textContent = "Obrigado pelo seu feedback! Por favor, entre em contato para compartilhar sua experiência e sugestões de como posso melhorar o site.";
            break;
        default:
            messageElement.textContent = "Por favor, selecione uma opção de feedback antes de enviar.";
    }
    // Torna o elemento de mensagem visível
    messageElement.style.display = 'block';
});

document.getElementById('clearBtn').addEventListener('click', function () {
    // Seleciona todos os inputs de rádio com o nome "feedback"
    var radios = document.querySelectorAll('input[name="feedback"]');
    // Limpa a seleção de todos os inputs de rádio
    radios.forEach(function (radio) {
        radio.checked = false;
    });
    var messageElement = document.getElementById('message');
    messageElement.textContent = '';  // Limpa o texto da mensagem
    messageElement.style.display = 'none';  // Esconde o elemento da mensagem
});