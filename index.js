$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).find('p').css('text-decoration', 'line-through');
    }).on('mouseover', 'li', function () {
        $(this).css('cursor', 'pointer');
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeDaTarefa = $('#input-tarefa').val();

        if (nomeDaTarefa.trim() !== '') {
            const novoItem = $('<li></li>');
            novoItem.append(`<div class="todos-p"><p>${nomeDaTarefa}</p></div>`);
            $('#lista-tarefas').append(novoItem);
            $('#input-tarefa').val('');
        }
    })
})