(function(){
	function myFunction(){
		return this;
	}
	console.log('myFunction', myFunction(), myFunction() === window);

	var myObject = {
		myProperthy : 1,
		init : function init(){
			return this;
		}
	};
	console.log('myObject',myObject.init(), myObject.init() === myObject);

	var newObject = new Object();
	console.log(newObject);

	// criando meu próprio construtor
	function myContructor(){
		this.prop1 = 'prop1';
		this.prop2 = 'prop2';
	}
	var construtor = new myContructor();
	construtor.prop1 = 'Propriedade 1';
	console.log('Contructor', construtor.prop1, construtor.prop2);


	function myFunction(arg1, arg2){
		return arguments;
	}	
	console.log('myFunction' ,myFunction(1,2));
})();