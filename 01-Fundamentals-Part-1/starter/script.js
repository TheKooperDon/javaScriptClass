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




//video 20


const inputYear = '1996';
console.log(Number(inputYear));//this helps change the string change to a number
console.log(inputYear + 18)
console.log(Number(inputYear) + 18);
console.log(Number(firstName) + 18); //NAN = not a number
console.log(typeof NaN);
console.log(typeof 13);
console.log(String(23), 23) //

console.log(`I am ` + 23 + ` years old`);
console.log(`I am ` + String(23) + ` years old`);

/* 
1.
Predict the result of these 5 operations without executing them:
'9' - '5'; = 4
'19' - '13' + '17'; = 617
'19' - '13' + 17; = 23
'123' < 57; false or undefined
5 + 6 + '4' + 9 - 4 - 2; = 1143
2. Execute the operations to check if you were right

*/

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617 number
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
console.log(`11` + `12`)

//boom i got them right but this makes alot of things into a string.

// using minus will do normal math.

// a plus with a string will just combine the two
// example of plus '11'+'12' would be 1112 not 23.


//done

//video 21


//false will be 0 '' undefined null NAN
console.log(Boolean(0));

console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
//all false ^
//it just cant be empty

console.log(Boolean(`hi`));
console.log(Boolean(population));
console.log(Boolean(21));

//^ will be true. 

const money = 0;

//see how money will make it true because it needs a if true statement but its 0 so its false. 
//if you change it to literally any number like 1 2 3 4 it will just be true. 
if (money) {
    console.log(`Don't spend it all ;`);

} else {
    console.log(`Get a job`)
}


//another example. 

let nothing; // since its undefined. then the same thing happens. 

if (nothing) {
    console.log('it cant be nothing')
} else {
    console.log(`nothing is nothing dude`)
}

let nothing0 = 0; // since its 0. then the same thing happens. 

if (nothing) {
    console.log('it cant be nothing')
} else {
    console.log(`nothing is nothing dude`)
}

//done

//video 22

const age22 = '18'; //if you do the '' then just the loose one appears cuz its in the '' === means like it must be that exactly. 

if (age22 === 18) console.log(`You are an adult. strict`); //strict

if (age22 == 18) console.log(`You are an adult. loose`); //loose

// is a comparsion . not just = is like equals.

//dont do  == do strict mainly




/*const fav = Number(prompt(`yo whats your fav number?`));

console.log(fav);

console.log(typeof fav);

if (fav === 23) {
    console.log(`23 is bigger then 21.`)
} else if (fav === 7) {
    console.log(`7 is cool`)
} else {
    console.log(`wrong number fool`)
}

if (fav !== 23) {
    console.log(`why not 23?`) //if you do 7 it still says 7 is cool and not wrong number but its like why not 23.
}

*/






//this is super cool cuz now you can store stuff in a var by the user no sql.

//this is good to make sure if like they dont put a name, or empty etc..

/*
LECTURE: Equality Operators: == vs. ===


1.
Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country
have?');


2.
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)

3.
Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1

4.
Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)

5.
Test the code with different values of 'numNeighbours', including 1 and 0.

6.
Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?


7.
Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1

8.
Reflect on why we should use the === operator and type conversion in this situation



const numNeighbors1 = Number(prompt(`How many neighbour countries does your country
have?`));


if (numNeighbors1 === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbors1 >= 2) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}

*/



//done


//video 23

//const ageExampleVideo23 = 16

//were talking about & and or for if else true or false statements



//video 24

let hasDriversLicense = true; //A
let hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //this is true if both true 

hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); //now its false cuz one is false


console.log(hasDriversLicense || hasGoodVision); // true cuz one is . || means or

console.log(!hasDriversLicense); //! inverts it . to false. 


const shouldDrive = hasDriversLicense && hasGoodVision;
/*
if (shouldDrive) {
    console.log(`Sarah can drive`);
} else {
    console.log(`Someone else should drive...`);
}

*/

//would be false

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);


if (hasDriversLicense && hasGoodVision && !isTired) /*and not tired. Good when you need no to be the yes. Because true doesnt mean yes and false tho*/ {
    console.log(`Sarah can drive`);
} else {
    console.log(`Someone else should drive...`);
}



/*
LECTURE: Logical Operators

1. 
Comment out the previous code so the prompt doesn't get in the way

2. 
Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an island.

3.
Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

4. 
If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('

5. 
Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in Canada :D)

*/

const newCountry = 'Mexico';
const newCountryPopulationBiggerThan30mil = true;
const isnewLanguageEnglish = true;
const isIsland2 = false;

if (newCountryPopulationBiggerThan30mil && isnewLanguageEnglish && !isIsland2) {
    console.log(`You found your magic place called Mexico`)
} else {
    console.log(`This ${country} aint the place.`)
}
//this wasnt the idea of the assignment but same idea. 


//done

//video 26


const videoDay26 = `friday`

switch (videoDay26) {
    case `monday`: //day === monday 
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare for job interview`);
        break;
    case `wednesday`:
    case `thursday`:
    case `friday`:
        console.log(`weekend starts`);
        break;
    case `saturday`:
        console.log(`party starts now. `)
    case `sunday`:
        console.log(`the lords day`)
        break;
    default:
        console.log(`theres only 7 day of the week`)

}

if (videoDay26 === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (videoDay26 === `tuesday`) {
    console.log(`its tues`);
} else if (videoDay26 === `wednesday`) {
    console.log(`wed`)
} else if (videoDay26 === `thrusday`) {
    console.log(`thrus`)
} else if (videoDay26 === `friday`) {
    console.log(`fri`)
} else if (videoDay26 === `saturday`) {
    console.log(`sat`)
} else if (videoDay26 === `sunday`) {
    console.log(`sun`)
} else {
    console.log(`invalid day`)
}

// this is more ugly but the switch statement is being less used



//if you dont put a break it will keep going to the next day. or the next case.

/*

LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'


*/



const challenge26lan = `english`;

switch (challenge26lan) {
    case `mandarin`: //this is like chinese or mandarin will work duh 
    case `chinese`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`)
    case `arabic`:
        console.log(`5th most spoken language`)
        break;
    default:
        console.log(`Great language too :D`)

}

//done yay


//video 27

if (23 > 10) {
    const str = `23 is bigger`;
}

console.log(`I am ${2037 - 1234} years old`); //works
// console.log(`I am ${if (dasjfh) {}} years old`); //does not work. 


//video 28
const videoAge28 = 27;
videoAge28 >= 18 ? console.log(`you can drink wine if you are not in the USA`) : console.log(`drink water loser`);/* if block with ? else blick is :*/
const drink = videoAge28 >= 18 ? `wine` : `water`;
console.log(`I like to drink `)

console.log(`I like to drink ${videoAge28 >= 28 ? `wine` : `water`} `)
/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

*/

console.log(`${country} is ${population >= 33000000 ? `above average` : `isbelow average`}`);

//i always forget about the damn pop again. But i did learn this.
//you can do if else to work inside of a ${} with the shorthand. not an if else.

//video 30




/*


*/


/*


*/


/*


*/


/*


*/


/*


*/

/*


*/

/*


*/

/*


*/
