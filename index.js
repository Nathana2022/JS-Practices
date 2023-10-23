//Wich value does x have after execution of the following code?
const x ='Geeta'
//value of x is Geeta

//Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'
let flower='rose';
let tree = 'maple'

//Which value does x have after execution of the following code?
let y='Tic';
y = 'Tac';
y = 'Toe';
console.log(y)
//Value does x after execution is Toe

let a='Laurel';
let b='Hardy';
let c=b;
b=a;
a=c // Value of x is Hardy

function a(){
  return 'Hello.';
}
let Salut = a();

function b(){
  return 'Hello.'
}
let Salut1 = b();

function greet(){
  return 'Haydo.';
}
let Salutation=greet();

function hello(){
  return 'Hi.'
}
let k=hello();
//The value of x is 'Hi.'

function echo(sound){
  return sound;
}

function reply(phrase) {
  return phrase;
}

let a = reply('How do you do?');
//The value of return is 'How do you do?

//Création de la fonction greet 
function greet(name) {
  return 'Hello ' + name + '!';
}

//Que vaut h(X) 
function whereIs(name){
  return 'Where is ' + name + '?'
}
let h = whereIs('Jacky')
//Where is Jacky, this is the value of X

function hi(name){
  return 'Hi ' + name + '!'  
}
let h1= hi('Selva');
let h2= hi('Pola');
let X = h1 + '' + h2
//The value of X after execution of code is : 'Hi Selva! Hi Pola!'