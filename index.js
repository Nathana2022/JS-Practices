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

//Write a function shout 
function shout(word){
  let result = word + word
  return result
}

//Que vaut X (K)
function double(name){
  return name + 'and' + name;
}
let K=double('Roy')
//The value of K is 'Roy and Roy'

//Write a function length 
function length(name){
  return name.length;
}

//Write a function toCase
function toCase(word){
  return word.toLowerCase() + '-' + word.toUpperCase();
}

//The function shortcut
function shortcut(word1, word2){
  return word1.charAt(0) + word2.charAt(0);
}

//The function firstChar

function firstChar(text) {
  let Text = text.trim();
  return Text.charAt(0);
}

//Function indexOfIgnoreCase
function indexOfIgnoreCase(s1, s2) {
  let s1Lower = s1.toLowerCase();
  let s2Lower = s2.toLowerCase();
  return s1Lower.indexOf(s2Lower);
}

//Function secondIndexOf
function secondIndexOf(s1, s2){
  let firstindex = s1.indexOf(s2);
  return s1.indexOf(s2, firstindex + 1);
}

//Function firstWord
function firstWord(s){
  let firstBlank = s.indexOf(' ');
  return s.substr(0, firstBlank);
}

//Write function normalize
function normalize(date){
  let newDate = date.replace('-', '/');
  newDate = newDate.replace('-', '/')
  return newDate;
}

//Write function add
function add(x, y){
  return x+y;
}

//Which value does x have after execution of the following code?
let b=3;
b++;
b=b*2;
b--;
//The value of b(x) is 7

//Write function toFahrenheit that converts a temperature from Celcius to Fahrenheit
function toFahrenheit(celcius){
  return 1.8 * celcius + 32;
}

//Write a function onesDigit that takes a natural number and returns the ones digit of that number
//Exemple : onesDigit(2674)
//should return 4
function onesDigit(n){
  return n % 10;
}

//Wrie a function mean that takes 2 numbers and returns their mean value.
//Example : mean(1,2)
//Should return 1.5
function mean(a,b){
  return (a+b)/2;
}