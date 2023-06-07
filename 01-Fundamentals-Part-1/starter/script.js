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
let population = 332000000;

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


// done

//video 15

let z, j;

z = j = 25 - 10 - 5;
// z = j = 10, so z = 10 and j = 10 is how this is read.
//stuff like this is usally read to right to left. cuz the cp wouldnt get how to read the letter first. 

console.log(z, j);

const averageAge = (ageJeff + ageMichelle) / 2 //div happens before subtraction
console.log(ageJeff, ageMichelle, averageAge)


//VIDEO 17

const job3 = 'student';
const year1 = 2030;

const name2 = "I'm " + firstName + ', a ' + (year1 - birthYear) + ' years old ' + job3 + '!';
console.log(name2);

const name2New = `I'm ${firstName}, a ${year1 - birthYear} year old ${job3}!`;//this is alot better then doing + '' and keeps it all in one '' instead. TBH its a lot better as you see the string like this. Big fan. 

// `` you can use these for any string too. just saying.
//he said alot of devs just do `` like for everything. 


console.log('String with \n\
multiple \n\
lines')

//but with `` you dont have to do the \n\ just enter works

console.log(`String
multiple
lines`)


/*
LECTURE: Strings and Template Literals

1.
Recreate the 'description' variable from the last assignment, this time using the template literal syntax

*/

const description2 = `${country} is in ${continent} and its ${population} million people speak ${mainLanguage}.`;

console.log(description2);


//country + ' ' + 'is in ' + continent + ', and its ' + ' ' + population + ' ' + ' million people speak ' + mainLanguage;


//done


//Video 18

const age18 = 15;

const isOldEnough = age18 >= 15;

if (age18 >= 18) {
    console.log(`Sarah can start to get her drivers license.`)
} else {
    const yearsLeft = 18 - age18;
    console.log(`She is not old enough. Wait another ${yearsLeft} years.`)
}
//love this ^ this is a cool console log using the var in the log.

//whats nice about stuff in if else statements is that {} stuff inside makes it controlled. 


const birthYear18 = 1996;
let century;

if (birthYear18 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)





/* 
LECTURE: Taking Decisions: if / else Statements
1.
If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

2.
 After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
if (population >= 33000000) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33000000 - population} million below average`)
}

//done


