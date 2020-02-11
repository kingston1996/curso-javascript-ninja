(function(){
/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
  //console.log('TESTANDO SCRIPT CHALLENGE 15');
/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
  function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function (){
      return this.name + ' ' + this.lastName;
    }
    this.getAge = function (){
      return this.age;
    }
   this.addAge = function (){
      this.age = age + arguments[0];
      return this;
    }
  }
  var pessoa = new Person('Dalto', 'Dunga', 55);
  console.log(pessoa);
  console.log('getFullName ', pessoa.getFullName());
  console.log('getAge ', pessoa.getAge());
  console.log('addAge ', pessoa.addAge(10))

// ?

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
  var Tonho = new Person('Tonho', 'Dunga', 55);
  var Kikuzin = new Person('Kikuzin','Bahm', 62);
  var Zé = new Person('Zé','Squematics', 60);
console.log( 'Novas pessoas criadas à partir de Person:', Tonho );
console.log( 'Novas pessoas criadas à partir de Person:', Kikuzin );
console.log( 'Novas pessoas criadas à partir de Person:', Zé );
// ?

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:', Tonho.getFullName()+' '+ Kikuzin.getFullName()+ ' '+ Zé.getFullName());
// ?

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(Tonho.getFullName() + ' tem ' + Tonho.getAge() + ' anos.');
console.log(Kikuzin.getFullName() + ' tem ' + Kikuzin.getAge() + ' anos.');
console.log(Zé.getFullName() + ' tem ' + Zé.getAge() + ' anos.');

// ?

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
console.log(Tonho.addAge(10));
console.log(Tonho.getFullName() + ' agora tem a idade de ' + Tonho.getAge() + ' anos.');
console.log(Kikuzin.addAge(10));
console.log(Kikuzin.getFullName() + ' agora tem a idade de ' + Kikuzin.getAge() + ' anos.');
console.log(Zé.addAge(10));
console.log(Zé.getFullName() + ' agora tem a idade de ' + Zé.getAge() + ' anos.');
// ?
})();