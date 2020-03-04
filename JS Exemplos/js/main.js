(function(win, doc){
	'use strict';
	/*console.log('ínicio');
	setTimeout(function(){
		console.log('Executou o setTimeout em 1000ms');
	}, 1000);
	setInterval(function(){
		console.log('Executou o setInterval em 1000ms');
	}, 1000);
	var counter = 0;
	function timer(){
		console.log('Timer', counter++);
		if(counter > 10)
			return console.log('Fim da Função Timer!');
			setTimeout(timer, 1000);
	}
	timer();
	console.log('fim');
	var counter = 0;
	function timer(){
		console.log('Timer: ', counter++);
		if(counter > 10)
			return;
		setTimeout(timer, 1000);
	}
	timer();


	function timer(){
		console.log('Timer: ', counter++);

		setInterval(timer, 1000);
	}
	timer();*/

	var counter = 0;
	var $button = doc.querySelector('[data-js="button"]');
	var temporizador;
	function timer(){
		console.log('Timer: ', counter++);
		if(counter > 20)
			return;
		temporizador = setTimeout(timer, 1000);
		//console.log('temporizador: ', temporizador);
	}
	timer();

	$button.addEventListener('click', function(){
		clearTimeout(temporizador);
	}, false);
})(window, document);