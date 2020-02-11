(function(){
	/*'use strict';
	var nome = 'Dalto Dunga';
	console.log(nome);*/
	'use strict';
	var obj = {
		prop1 : {
			prop2 : {
				prop3 :{
					prop31 : 'prop31',
					prop32 : 'prop32',
					prop33 : 'prop33'
				}

			}
		}
	}
	console.log(obj.prop1.prop2.prop3);
	/*with(obj.prop1.prop2.prop3){
		console.log(prop31, prop32, prop33);
	}*/

	var objeto = {
		prop1: 'prop1',
		prop2: 'prop2',
		prop3: 'prop3'
	}
	console.log(delete objeto.prop3);
	console.log(objeto);
	//console.log( delete objeto);

	var nome = 'Dalto';
	console.log('Tamanho da String: ', nome.length);
	console.log('Item no índice passado por parametro: ',nome.charAt(0));
	var sobrenome = 'Chupador de Lingua';
	console.log(sobrenome);
	console.log('String concatenada : ' + nome.concat(sobrenome));
	console.log(nome.indexOf('l'));
	if(nome.indexOf('lto') > -1){
		console.log('O elemento existe no array!!');
	}else{
		console.log('Não existe o elemento no array! :/');
	}

	if(nome.lastIndexOf('tolo') > -1){
		console.log('O elemento existe no array!!');
	}else{
		console.log('Não existe o elemento no array! :/');
	}
	console.log(nome.replace('a','o'));
	console.log(nome.slice(1, 5));
	console.log(nome.split());
	console.log(nome.split('l'));
	var arrNome = nome.split('l');
	console.log(arrNome);
	console.log(arrNome.join('l'));
	console.log(nome.substring(0, 3));
	console.log(nome.toLowerCase());
	console.log(nome.toUpperCase());
	console.log(sobrenome.charAt(0).toLowerCase());
	




})();
