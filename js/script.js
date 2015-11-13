$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function showHelp() {
	document.getElementById('help').style.display='block';
	document.getElementById('close-help-button').style.display='block';
	document.getElementById('help-button').style.display='none';
}

function closeHelp() {
	document.getElementById('help').style.display='none';
	document.getElementById('close-help-button').style.display='none';
	document.getElementById('help-button').style.display='block';
}