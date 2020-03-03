(function(win, doc){
	'use strict';
	console.log('ínicio');
	document.addEventListener('click', function(){
		console.log('clickou no documento!');
	}, false);
	console.log('fim');

})(window, document);