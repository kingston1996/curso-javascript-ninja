(function(){
	var texto = 'O tempo é muito lento 30 minutos para os que esperam Muito rápido 1 hora para os que têm medo Muito longo para os que lamentam Muito curto para os que festejam para os que amam, o tempo é eterno.';
	console.log(texto);
	/*console.log(texto.match(/p/));
	console.log(texto.match(/m/g));
	console.log(texto.match(/\w/));
	console.log(texto.match(/\w/g));
	console.log(texto.match(/esperam/));
	console.log(texto.match(/dalto/));
	console.log(texto.match(/\d/));
	console.log(texto.match(/\d/g));
	console.log(texto.match(/\d\d/));
	console.log(texto.match(/\d\d/g));
	console.log(texto.match(/(ui)/g));
	console.log(texto.match(/[ab]/g));
	console.log(texto.match(/[(ab)(cd)]/g));
	console.log(texto.match(/[a-z]/g));
	console.log(texto.match(/[A-Za-z0-9]/g));
	console.log(texto.replace('O','o'));
	console.log(texto.replace(/O/,'Do'));
	console.log(texto.replace(/o/g,'Do'));*/
	console.log(texto.replace(/(para)/g, '--$1--'));
	console.log(texto.replace(/(l)(e)/g, '--$2--'));
	console.log(texto.replace(/(l)(e)/g,  function(){
		console.log(arguments);
	}));
	console.log(texto.replace(/(l)(e)/g,  function(capturaTotal, l, e){
		return (l + e).toUpperCase();
	}));
	var nome = 'Jonatas';
	console.log(nome);
	console.log(nome.replace(/(\w)/g, function(capturaTotal, letra){
		return letra.toUpperCase();
	}));
	console.log(nome.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2){
		return letra1.toUpperCase() + letra2.toLowerCase();
	}));



})();