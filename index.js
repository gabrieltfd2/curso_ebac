$(document).ready(function () {
    
    $('form').on('submit', function (e) {
        e.preventDefault();
    })

    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        messages: {
            nome: 'por favor digite seu nome',
            email: 'por favor digite seu email',
            telefone: 'por favor digite seu telefone',
            cpf: 'por favor digite seu cpf',
            endereco: 'por favor digite seu endereco',
            cep: 'por favor digite seu cep'
        }
    })
})
