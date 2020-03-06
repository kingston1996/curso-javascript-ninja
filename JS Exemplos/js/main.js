(function(win, doc){
	'use strict';
 // debugger;
	function sum(){
		return Array.prototype.reduce.call(arguments, function(acumulado, item){
      return acumulado + item;
    });
	}

	console.log(sum(1,2,3,4,5));

console.time('Calculando tempo de execução do FOR...');
for (var i = 0; i < 10000; i++) {
  console.log('Calculando no For..');
}
console.timeEnd('Calculando tempo de execução do FOR...');

  var arr = [
  { item: 'Arroz', preco: 'R$10,00', peso: '5kg'},
  { item: 'Carne', preco: 'R$22,00', peso: '1kg'},
  { item: 'Bolo', preco: 'R$18,90', peso: '500g'},
  { item: 'Coca-Cola', preco: 'R$6,90', ml:'2L'}
  ];
  console.table(arr);
})(window, document);
