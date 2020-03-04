(function(win, doc){
	'use strict';
	
	function myFunction(){
		Array.prototype.forEach.call(arguments, function(item, index){
			console.log(item);

		});
	}
	
	console.log(myFunction(1,2,3,4,5));






	/*
	function myFunction(nome, sobrenome){
		this.fullName = nome + ' ' + sobrenome;
	}
	var jonatas = new myFunction('Jonatas', 'Ferreira');
	console.log(jonatas.fullName);


	function myFunction(nome, sobrenome){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.age = 24;
	}

	myFunction.prototype.fullName = function(){
		return this.nome + ' ' + this.sobrenome + ' ' + this.age;
	}

	var jonatas = new myFunction('Jonatas', 'Ferreira');
	//myFunction.prototype.age = 23;
	console.log(jonatas.fullName());
	function myFunction(a,b,c,d, e){
		console.log(this.lastName, a, b, c, d, e);
	}
	var obj = {
		lastName: 'Dng'
	};

	var obj2 = {
		lastName: 'Dng 2'
	};
	var arr = [1,2,3,4,5]
	myFunction.call(obj2);
	myFunction.apply(obj2, arr);

	var arr = [1,2,3,4,5];
	var obj = {prop1: 1, pro2: 2};
	var myname = new myFunction();
	myname.lastName = 'Dng';
	console.log(myFunction.length);
	console.log(arr.toString());
	console.log(obj);
	console.log(myFunction.toString());
	console.log(myFunction.call());
	console.log(myFunction.call());*/
	
})(window, document);