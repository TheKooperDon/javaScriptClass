let js = 'amazing';
//if (js === 'amazing') alert('js is FUN!');
console.log(40 + 2 + 2 + 2);

console.log('Jonas');

//let firstName = 'Bob';

//console.log(firstName);

let myFirstJob = 'Programmer'

let myCurrentJob = 'Teacher'

//vs doing it this way

let job1 = 'progammer'
let job2 = 'teacher'

//that way is ugly^

/*
LECTURE: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

*/


let country = 'USA';
let continent = 'North America';
let population = '332000000';

console.log(country);
console.log(continent);
console.log(population);

//done 


/*
LECTURE: Data Types
1. 
Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2.
Log the types of 'isIsland', 'population', 'country' and 'language' to the console
*/


let isIsland = 'false'
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

console.log(isIsland, population, country, language);

/*
this was undefined. No error tho. in the console log. Its an empty value because we did make it a variable.
*/

//typeof tells you what it is. a int a string or boolean. 
//check console. 

console.log(typeof isIsland); //bool
console.log(typeof 23); //int
console.log(typeof country); //string
console.log(typeof 'hi');



//done


let age = 30;

age = 31;

/*
its okay to change the var to mutate "let". aka change it. 
*/



const birthYear = 1996
//const job; 

/* 

this cant be change no matter what. 
its immutable. 

const cant be empty. like how let can be a thing. 


*/

var job = 'progammer'
job = 'teacher'

/*
is the old school way
you shouldnt be using it. 
let is the new way of doing things. 

let is function
and var is block 
we will learn that later. 

you can
*/



/* 
LECTURE: let, const and var

1. 
Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)

2. 
Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

3. 

Try to change one of the changed variables now, and observe what happens

*/

const mainLanguage = 'english';
const secondLanguage = 'American Sign Language';
let learningLanguage = 'Spanish';

//i would change the const and let but i know what happens from the lecture.

//done

const now = 2023;
const ageJeff = now - 1996;
const ageMichelle = now - 1995;
console.log(ageJeff, ageMichelle);
console.log(ageJeff * 2, ageMichelle / 10, 2 ** 3);

//* ** means the power of the number */


const firstName = 'Jeff';

const lastName = 'Valodine';

console.log(firstName + ' ' + lastName);
//you know this stuff. This adds things together and the space. 

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25 
x *= 4 // x = x * 4 = 100
x++ //x = x + 1
x-- // x = x -1 
console.log(x);


// Comparison Operators 

console.log(ageJeff > ageMichelle);
// this is quick to check if its true or false.

console.log(ageJeff >= 18)

console.log(now - 1991 > now - 2018)
//this is another way of checking both ages in a dif way.
//js knows to do do the math first then the > 

/*

LECTURE: Basic Operators

1. 
If your country split in half, and each half would contain half the population, then how many people would live in each half?

2.
Increase the population of your country by 1 and log the result to the console

3. 
Finland has a population of 6 million. Does your country have more people than Finland?

4. 
The average population of a country is 33 million people. Does your country have less people than the average country?
5. 
Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 

*/
// 1
console.log(population / 2 / 2);

//2
//you cant just put ++ in the console log. 
population++;
console.log(population);

//3

console.log(population > 6000000);

//4

const description1 = country + ' ' + 'is in ' + continent + ', and its ' + ' ' + population + ' ' + ' million people speak ' + mainLanguage;

console.log(description1);






