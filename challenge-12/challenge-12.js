(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
	var person = {
		name: 'Jonatas',
		lastname: 'Ferreira da Silva',
		age: 23
	};
// ?

console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
	console.log( 'Propriedades de "person":', Object.keys(person) );
// ?

/*
Crie um array vazio chamado `books`.
*/
	var books = [];
// ?

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
	var livro1 = {
		name: 'Narnia',
		pages:  1000
	};
	
	var livro2 = {
		name: 'Biblia',
		pages:  500
	};
	
	var livro3 = {
		name: 'Veja',
		pages:  100
	};
	
	books.push(livro1);
	books.push(livro2);
	books.push(livro3);
// ?
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
	console.log( '\nLista de livros:', books );
// ?

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
	books.pop();
	console.log( '\nLivro que está sendo removido:', books.pop());
// ?

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
	console.log( '\nLista de livros:', books );
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
	books = JSON.stringify(books);
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
	console.log( '\nLivros em formato string:', JSON.stringify(books));
// ?

/*
Converta os livros novamente para objeto.
*/
	books = JSON.parse(books);
// ?
console.log( '\nAgora os livros são objetos novamente:', books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
	console.log(Object.keys(person), ':', Object.keys(books));
	for(var props in books){
	console.log( props, books[props] );
}

	for(var i=0; i <= books.length; i++){
		for(var props in books[i]){
			console.log( props + ':' + books[i][props] );
	
		}
	}
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
	var myName = ['J','o','n','a','t','a','s'];
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
	myName = myName.join(' ');
	console.log( '\nMeu nome é:', myName.join(''));
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
	console.log( '\nMeu nome invertido é:', myName.reverse() );
	console.log( '\nMeu nome invertido é:', myName.reverse().join('') );
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
	console.log( '\nAgora em ordem alfabética:', myName.sort() );
// ?
})();