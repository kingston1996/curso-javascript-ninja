(function(win, doc){
  'use strict';
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

//Revisando Conteúdo

function on(element, event, callback){
  document.querySelector(element).addEventListener(event, callback, false);
}

function off(element, event, callback){
  document.querySelector(element).removeEventListener(event, callback, false);
}

function handleClick(event){
  event.preventDefault();
  alert('Clicou no LINKKKKK!!!! :P');
}

on('[data-js="link"]', 'click', handleClick);

//passando um elemento a mais alternativo

on('[data-js="link"]', 'click', function(event){
  event.preventDefault();
  alert('Clicou no link e recebeu essa mensagem ALTERNATIVA!!');
});

//ignorando o 1º on passado na função
off('[data-js="link"]', 'click', handleClick);
/*
//input
on('[data-js="input"]', 'input', function(event){
  console.log(this.value);
});

//keyup
on('[data-js="input"]', 'keyup', function(event){
  console.log(this.value);
});*/

//keydown
on('[data-js="input"]', 'keydown', function(event){
  console.log(this.value);
});

//change
on('[data-js="select"]', 'change', function(event){
  document.querySelector('[data-js="input"]').value = this.value;
});

})(window, document);
