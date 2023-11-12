function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);
    
    var mensagemElement = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagemElement.innerHTML = 'Formulário válido! B é maior que A.';
        mensagemElement.style.color = 'white';
        mensagemElement.style.backgroundColor = 'green';
        mensagemElement.style.padding = '8px';
    } else {
        mensagemElement.innerHTML = 'Formulário inválido! B deve ser maior que A.';
        mensagemElement.style.color = 'white';
        mensagemElement.style.backgroundColor = 'red';
        mensagemElement.style.padding = '8px';
    }
}