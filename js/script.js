$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#help').on('show.bs.modal', function () {
   $('#content').addClass('blur');
})

$('#help').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
})