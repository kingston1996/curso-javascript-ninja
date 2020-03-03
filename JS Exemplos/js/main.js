(function(win, doc){
	'use strict';
	/*if(win === window)
	console.log('win é um referência global');
	console.log('Essa mensagem sempre será exibida! ');

	
	var obj = {
		prop1: {
			prop2: { prop3: 1}
		}
	}
	with(obj.prop1.prop2){
		console.log(prop3);
	}

	alert('Exibindo mensagem no browser!');
	
	if(prompt('Você é top?'))
		console.log('Para de ser!');
	else
		console.log('Ainda bem até outro dia...');
	
	var pergunta = prompt('Salve, está bem?');
	if(pergunta)
		console.log('legal...');
	else
		console.log('Fala logo desgraça...');
	
	var perg = confirm('Deseja mesmo ser top?');
	if(perg)
		console.log('Se tornou top mesmo!!', perg)
	else
		console.log('Continua pé di rato então....', perg);
	console.log(doc.getElementById('my-link'));
	console.log(doc.getElementsByClassName('my-link'));
	
	
	var $inputs = doc.getElementsByTagName('input');
	console.log($inputs.length);
*/
	var $inputUsername = doc.querySelector('#username');
	var $inputPassword = doc.querySelector('#password');
	var $button 	   = doc.querySelector('#button');
	$inputUsername.value = 'Dalto Dunga';
	$inputPassword.value = 'senha';
	$button.addEventListener('click', function(event){
		event.preventDefault();
		console.log('Click no botão!');
	}, false);
	$inputUsername.addEventListener('click', function(event){
		alert('Clickou no input');
	}, false);
	console.log($inputUsername.value, $inputPassword.value);
})(window, document);