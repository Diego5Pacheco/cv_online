// Função para exibir mensagem quando o botão Enviar é clicado
document.getElementById('submit').addEventListener('click', function () {
    var msg = "Infelizmente, o botão de envio ainda não está operacional.";
    var msgElement = document.getElementById('msg');
    msgElement.textContent = msg; // Define o conteúdo de texto do elemento com a mensagem
    msgElement.style.display = 'inline-block'; // Exibe o elemento de mensagem como um bloco em linha
});