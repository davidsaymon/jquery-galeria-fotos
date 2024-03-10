$(document).ready(function () {
  $('#form-tarefa').submit(function (e) {
    e.preventDefault();
    const nomeTarefa = $('#nome-tarefa').val();
    const novaTarefa = $('<li></li>').text(nomeTarefa);

    novaTarefa.click(function () {
      $(this).toggleClass('feito');
    });

    $('#lista-tarefas').append(novaTarefa);
    $('#nome-tarefa').val('');
  });
});