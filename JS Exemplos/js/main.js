(function(win, doc){
	'use strict';

function on(element, event, callback){
  document.querySelector(element).addEventListener(event, callback, false);
}

function off(element, event, callback){
  document.querySelector(element).removeEventListener(event, callback, false);
}

function handleClick(event){
  event.preventDefault();
  alert('clicou no a');
}

on('[data-js=link]', 'click', handleClick);


on('[data-js="link"]', 'click', function(event){
  event.preventDefault();
  alert('Novo Evento de Click no a');
});

off('[data-js=link]', 'click', handleClick);

/*
on('[data-js="link"]', 'click', function(event){
  event.preventDefault();
  alert('clicou no a');
});

on('[data-js="link"]', 'click', function(event){
  event.preventDefault();
  alert('Novo Evento de Click no a');
});

on('[data-js="div"]','click', function(){
  alert('clickou na div');
});

on('[data-js="span"]', 'click', function(){
  alert('clickou no span ');
});


  var $a = document.querySelector('[data-js="link"]');
  document.querySelector('[data-js="div"]').addEventListener('click', function(event){
    alert('clicou na div');
  }, false);

$a.addEventListener('click',function(event){
  event.preventDefault();
  alert('clicou no a');
}, false);*/

})(window, document);
