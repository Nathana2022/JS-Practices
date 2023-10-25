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

//Write function that returns number of vowels in string

// program to count the number of vowels in a string

function countVowel(str) { 

  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}
// take input
const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log(result);

//Write a function that takes an integer minutes and converts it to seconds
function converts(minutes){
  const seconds = minutes * 60;
  return seconds;
}

//Write a function that takes the age in years and returns the age in days. 
function convertAgeToDays(age) {
  return age * 365;
}

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function countingPoints(){
  let = two_point =0
  three_point = 0
  two_point * 2
  three_point * 3
  return two_point*2 + three_point*3;
  let total = two_point*2 + three_point*3;
  return total;
}

//34

//Create a function that takes the number of 'wins', 'draws', and 'loses' and calculates the number of points a football team has obtained so far.
let defaultWin = 3,
    defaultDraw = 1,
    defaultLoss = 0;

function footballPoints(wins, draws, losses) {
    return defaultWin * wins + defaultDraw * draws + defaultLoss * losses;
}

console.log(footballPoints(3, 4, 2)); // 13
console.log(footballPoints(5, 0, 2)); // 15
console.log(footballPoints(0, 0, 1)); // 0

//Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2){
  return [num1, num2];
}

//Write a function to reverse an array
//Reverse an Array using a for loop
function reverseArr(input){
  let ret = newArray;
  for(let i=input.length - 1; i>=0; i--){
    ret.push(input[i]);
  }
  return ret;
}
let a = [3,5,7,8]
let b = reverseArr(a);

//Array.reverse to reverse an array
function reverseArray(input){
  const array = [1, 2, 3, 4]
  array.reverse()
  return array;
}

//Write a javascript function to check whether an 'input' is an array or not
function isArray(input){
  return Array.isArray(input)
}
//Example usage : 
console.log(isArray([1, 2, 3])); //true
console.log(isArray('Hello')); //false

//Write a javascript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array
function getFirstElement(array, n){
  if(n=== undefined){
    return array[0];
  }else {
    return array.slice(0, n);
  }
}
//Example usage : 
const myArray = [1, 2, 3, 4, 5];
console.log(getFirstElement(myArray));
console.log(getFirstElement(myArray, 3))

//Write a simple Javascript program to join all elements of the following array into a string.
//Sample array : myColor=["Red", "Green", "White", "Black"]; 
//Expected Output : "Red, Green, Whrite, Black"
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());

//Write a Javascript program that accepts a numbers as input and inserts dashes (-) between each even number.
//For example if you accept 025468 the output should be 0-254-6-8

const strs = num.toString();
var results = [strs[0]];

for (var z = 1; z < strs.length; z++) {
  if (strs[z - 1] % 2 === 0 && strs[z] % 2 === 0) {
    results.push('-', strs[z]);
  } else {
    results.push(strs[z]);
  }
}
console.log(results.join(''));

//Write a Javascript program to compute the sum and product of an array of integer
function compute({
  
})
