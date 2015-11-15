$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('#help').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#help').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#lisboa').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#lisboa').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#lagos').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#lagos').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#açores').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#açores').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#porto').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#porto').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#aveiro').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#aveiro').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

$('#alentejo').on('show.bs.modal', function () {
   $('#content').addClass('blur');
});

$('#alentejo').on('hide.bs.modal', function () {
   $('#content').removeClass('blur');
});

function portuguesWrong1() {
	$('#portugues-wrong-1').addClass('red-cell');
};

function portuguesWrong2() {
	$('#portugues-wrong-2').addClass('red-cell');
};

function portuguesRight() {
	$('#portugues-right').addClass('green-cell');
};

function lisboaWrong1() {
	$('#lisboa-wrong-1').addClass('red-cell');
};

function lisboaWrong2() {
	$('#lisboa-wrong-2').addClass('red-cell');
};

function lisboaRight() {
	$('#lisboa-right').addClass('green-cell');
};

function aviaoWrong1() {
	$('#aviao-wrong-1').addClass('red-cell');
};

function aviaoWrong2() {
	$('#aviao-wrong-2').addClass('red-cell');
};

function aviaoRight() {
	$('#aviao-right').addClass('green-cell');
};

function semaforoWrong1() {
	$('#semaforo-wrong-1').addClass('red-cell');
};

function semaforoWrong2() {
	$('#semaforo-wrong-2').addClass('red-cell');
};

function semaforoWrong3() {
	$('#semaforo-wrong-3').addClass('red-cell');
};

function semaforoRight() {
	$('#semaforo-right').addClass('green-cell');
};

function otorrinoRight() {
	$('#otorrino-right').addClass('green-cell');
};

function otorrinoWrong1() {
	$('#otorrino-wrong-1').addClass('red-cell');
};

function otorrinoWrong2() {
	$('#otorrino-wrong-2').addClass('red-cell');
};

function otorrinoWrong3() {
	$('#otorrino-wrong-3').addClass('red-cell');
};

function otorrinoWrong4() {
	$('#otorrino-wrong-4').addClass('red-cell');
};

function otorrinoWrong5() {
	$('#otorrino-wrong-5').addClass('red-cell');
};

function otorrinoWrong6() {
	$('#otorrino-wrong-6').addClass('red-cell');
};

function otorrinoWrong7() {
	$('#otorrino-wrong-7').addClass('red-cell');
};

function otorrinoWrong8() {
	$('#otorrino-wrong-8').addClass('red-cell');
};

function otorrinoWrong9() {
	$('#otorrino-wrong-9').addClass('red-cell');
};

$('#vogais a[href="#vogalA"]').tab('show');
$('#vogais a[href="#vogalE"]').tab('show');
$('#vogais a[href="#vogalI"]').tab('show');
$('#vogais a[href="#vogalO"]').tab('show');
$('#vogais a[href="#vogalU"]').tab('show');