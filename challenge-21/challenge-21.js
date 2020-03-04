(function(win, doc){
	'use strict';
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

var $timer = doc.querySelector('[data-js="timer"]');
var $start = doc.querySelector('[data-js="start"]');
var $stop = doc.querySelector('[data-js="stop"]');
var $reset = doc.querySelector('[data-js="reset"]');
var interval;

$start.addEventListener('click', startTimer, false);
 function startTimer(){
 	console.log($timer.value);
 	$timer.value = +$timer.value + 1; //+$ pra converter a String em Inteiro 
 	interval = setTimeout(startTimer, 1000);
 	//console.log('interval: ', interval);
 }

 $stop.addEventListener('click', stopTimer, false);
 function stopTimer(){
 	clearTimeout(interval); //função para parar o timeout
 }

 $reset.addEventListener('click', resetTimer, false);
 function resetTimer(){
 	$timer.value = 0;
 	//clearTimeout(interval);
 	stopTimer();
 }


})(window, document);