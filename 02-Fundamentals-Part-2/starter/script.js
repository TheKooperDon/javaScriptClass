//video 32
// scrict mode is more secure ha. 

'use strict';

//let hasDriversLicense = false;

//let passTest = true;

//if (passTest) hasDriverLicense = true;
//if (hasDriversLicense) console.log(`I can drive! `);

//const interface = `Audio`
//cant use interface because they are saving it
//same with private.
//ex const if = 23 . cant use if like that.



//without strict it just wont appear.
//with it. It will get an error saying its not defined.




//video 33 

function logger() {
    console.log(`My name is Jonas`);
}


//calling  / running / invoking
logger();//printed the phrase jonas. 
logger();
logger(23);//doesnt do anyhting when you do that 

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;//returned it back to the result. 
}

fruitProcessor(2, 0)

const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice); //this is so confusing on why now it prints juice but okay. 

console.log(fruitProcessor(5, 5)); //this also print that juice line. 

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// again little confusing but mainly its just the infor for the parameters. but console.loging it actaully shows  it. 
//sounds like return lets you use the variable in other places



/*
LECTURE: Functions
1. 
Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. 
Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`

    //again you do a return here. 

}

describeCountry(`USA`, 300, `DC`);

const myCountry = describeCountry(`USA`, 300, `DC`);

//the min I did a return. These 2 ^ dont show up anymore. Which is nuts

console.log(myCountry);

const bigCountry = describeCountry(`Mexico`, 300, `mex`);
console.log(bigCountry)

const countryTime = describeCountry(`Canada`, 3012, `Can`);
console.log(countryTime)



//now it shows up.
//so confusing .
//please make more sense. so used to console.logging stuff
//done


//video 34

// function declaration
function calcAge1(birthYear) {
    /*
    const age = 2023 - birthYear;
    return age; //to get it out of the function 

    lol nvm you dont need to this with returns cuz you can 
    do this. 
    */
    return 2023 - birthYear;

}


//lets call it now

calcAge1(1996); //this will create a value. 

//but we need to SAVE it. 

const age1 = calcAge1(1996);
console.log(age1);



//this is hidden function 
//function expression
const calcAge2 = function (birthYear) {

    return 2023 - birthYear;

}

const age2 = calcAge2(1996);

console.log(age1, age2);

//you can put a function dec before the calling but wouldnt do it . 







/*
LECTURE: Function Declarations vs. Expressions
1. 
The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. 
To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. 
Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. 
Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

*/

function percentageOfWorld1(population, country) {
    return `${country} has ${population} people, so its about ${population / 7900 * 100} `
}
const testChinaCountry = percentageOfWorld1(1441, `China`);
const testCountry1 = percentageOfWorld1(300, `USA`);
const testCountry2 = percentageOfWorld1(4, `Tiny World`);
console.log(testChinaCountry);
console.log(testCountry1);
console.log(testCountry2);


const percentageOfWorld2 = function (population, country) {
    return `${country} has ${population} million people, so its about ${population / 7900 * 100} `
}

const testChinaCountry1 = percentageOfWorld1(1441, `China`);
const testCountry3 = percentageOfWorld1(300, `USA`);
const testCountry4 = percentageOfWorld1(4, `Tiny World`);
console.log(testChinaCountry1);
console.log(testCountry3);
console.log(testCountry4);
//ha mine is fancier then the answer

//did it right. cool !


//video 35 Arrow Functions

//another way to make a function with a const
const calcAge3 = function (birthYearVideo35) {
    return 2023 - birthYearVideo35;
}

/*
creates function name with const with calcAge4
then you do what you want which is birth yearVideo35
=> is what happens with the fuction

*/
const calcAge4 = birthYearVideo35 => 2023 - birthYearVideo35;

const age3 = calcAge4(1996);
console.log(age3);

//const yearsUntilRetirement = function name
// = = (birthYearVideo35, firstName) what goes in the function
// => means function 
// put stuff that you want the function to do
//still need a return if its one thing. 
const yearsUntilRetirement = (birthYearVideo35, firstName) => {
    const age4 = 2023 - birthYearVideo35;
    const retirement = 65 - age4;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1996, `Jeff`));

//make variable name with const
//put thing in function()
//=> is now function maker and this thing  {}
//50 - daysTillLeaseEnds; is what the function does
const jeffFunction = daysTillLeaseEnds => 50 - daysTillLeaseEnds;

const jeffTestFunction = jeffFunction(48);
console.log(jeffTestFunction)
/*

LECTURE: Arrow Functions
1. 
Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

*/

const percentageOfWorld3 = (population, country) => {
    const newPopMath = (population / 7900) * 100;
    return `${country} has ${population} million  people, so its about ${newPopMath} percent `;
}

console.log(percentageOfWorld3(300, `usa`));
console.log(percentageOfWorld3(532, `usaadfasfa`));




//done

//video 36  Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}


//if we look at the fruitProcesser we did
//we can see that we did the same thing but now we printing the pieces with a new function.
//so we need to put the function that used apples and oranges to cut them. and the  `` has new info.
//its kind of like how p5 draw you can do functions inside of draw 


function fruitProcessor36(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} pieces oranges.`
    return juice;
}

fruitProcessor36(2, 3);
console.log(fruitProcessor36(2, 3));




/*
LECTURE: Functions Calling Other Functions
1. 
Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. 
To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. 
Call 'describePopulation' with data for 3 countries of your choice

*/



//fyi this how the percertageOfWorld was supposed to be the whole time. 
//so we make it here first
const percentageOfWorld4 = population => population / 7900 * 100;
//then we do the same thing we ahve been doing. But the matt for the % is already done. 
const describePopulation36 = (country, population) => {
    const pop = percentageOfWorld4(population)
    return `${country} has ${population} million people, which is about ${pop}% of the world.`
}
const popTest = describePopulation36(`USA`, 300);
console.log(popTest);

//function inssidee of a function
//i am a genius
// done

//video 37 Function review
const calcAge5 = function (birthYear) {
    return 2023 - birthYear;
}

//RETURN ENDS IT IF YOU USE IT SO YOU GOTTA BE BETTER WITH IT ON WHERE YOU PLACE IT. 
const yearsUntilRetirement37 = function (birthYear, firstName) {
    const age = calcAge5(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years `);
        return retirement;
        //console.log(`${firstName} retires in ${retirement} years `);
        //doesnt work cuz its not above the return 
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
        //console.log(`${firstName} has already retired`);
    }

    /*
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    */
    //return `${firstName} retires in ${retirement}`;
}
const testFunction2 = yearsUntilRetirement37(1996, `Jeff`);
console.log(testFunction2);
console.log(yearsUntilRetirement37(1950, `Fred`));

console.log(`test`);

//video 37 Function done.
//challenge 5 done


//arrays video 39

const friend1 = `Jeff`;
const friend2 = `Lino`;
const friend3 = `Michelle`;

//more common 
const friends = [`Jeff`, `Lino`, `Michelle`]
console.log(friends);

//less common
const years = new Array(1991, 1992, 1993, 1994, 1995);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 2);

//you can change the const info. but not like the actual name for it.
friends[2] = 'Jay';
console.log(friends);

const jonas = [`jonas`, `blah`, 2000 - 1000, `teacher`, friends]

console.log(jonas);
console.log(jonas.length);
//cant do this
//friends = ['bob', 'aclice']
//needs to be like a proper array change, 

const calcAge6 = function (birthYear) {
    return 2023 - birthYear;
}

const years39 = [1996, 1967, 2002, 2010, 2018]

//cant really do this.
//calcAge6(years39)

//you gotta do this
const ager1 = calcAge6(years39[0]);
const ager2 = calcAge6(years39[1]);
const ager3 = calcAge6(years39[years.length - 1]);
console.log(ager1, ager2, ager3);


const ages = [calcAge6(years39[0]), calcAge6(years39[1]), calcAge6(years39[years39.length - 1])];
console.log(ages);



/*
video 39
LECTURE: Introduction to Arrays
1. 
Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

2. 
Log to the console whether the array has 4 elements or not (true or false)
3. 
Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

*/


const arrayPopulation = [300, 10, 225, 500];
const arrayCountry = [`USA`, `Mexico`, `Cananda`, `North Korea`];


if (arrayPopulation.length === 4) {
    console.log(true)
} else {
    console.log(false)
}
// ORRRRRR

console.log(arrayPopulation.length === 4);

/*
const percentages = [percentageOfWorld4(arrayPopulation[0]), percentageOfWorld4(arrayPopulation[1]), percentageOfWorld4(arrayPopulation[2]), percentageOfWorld4(arrayPopulation[3])]
*/
//you can do it like this its cleaner if there big. 
const percentages = [
    percentageOfWorld4(arrayPopulation[0]),
    percentageOfWorld4(arrayPopulation[1]),
    percentageOfWorld4(arrayPopulation[2]),
    percentageOfWorld4(arrayPopulation[3])
]
console.log(percentages);

//video 40 Basic Array Operations


//adding
const friendsArray = [`Jeff`, `Michelle`, `Lino`];

const newLength = friendsArray.push(`Jay`); //adds it to the end. 



console.log(friendsArray);

console.log(newLength);

friendsArray.unshift('Freddy Mercury'); //start of the array 
console.log(friendsArray);


//removing 

friendsArray.pop() //removes last one and dont need info at in the ()
const popped = friendsArray.pop() // remove another 

console.log(friendsArray);
console.log(popped); //see what you just removed. 

friendsArray.shift();//removes the first one
console.log(friendsArray);

console.log(friendsArray.indexOf(`Michelle`)); //1

console.log(friendsArray.indexOf(`Jeff`)); //0


//ES6 WAY
friendsArray.push(7); //add 7
friendsArray.push(`jeff`); //add 7
console.log(friendsArray.includes(`Lino`)); //false
console.log(friendsArray.includes(`Jay`)); //false cuz they aint in there


console.log(friendsArray.includes(`7`)); //false cuz string
console.log(friendsArray.includes(7)); //true cuz its the number
console.log(friendsArray);
if (friendsArray.includes(`deff` || `jeff`)) {
    console.log(`You have a friend named ${friendsArray[0]}. `)//Jeff
} else {
    console.log(`You don't have friend named ${friendsArray[0]}`)
}

//







/*
40 LECTURE: Basic Array Operations (Methods)
1. 
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

2. 
At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array

3. 
Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array

4. 
If the 'neighbours' array does not include the countr ‘Germany’, log to the console: 'Probably not a central European country :D'

5. 
Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

*/

//1

const neighbors = [`USA`, `Cananda`, `Mexico`]; //no u

console.log(neighbors);


//2

neighbors.push(`Utopia`);

console.log(neighbors);


//3

neighbors.pop();

console.log(neighbors);

//4

//not equal. 
if (neighbors != `Germany`) {
    console.log(`Probs not Europe`);

}

// OR 

//not include 
if (!neighbors.includes(`Germany`)) {
    console.log(`Probs not Europe`);
}




//5

neighbors[1] = 'Change';

console.log(neighbors);

//ORRR

neighbors[neighbors.indexOf('USA')] = 'United States of America';

console.log(neighbors);

//doneee

//video 42 Objects

const jonasArray = [
    `Jonas`,
    `Blahblah`,
    2023 - 1996,
    `teacher`,
    [`Jeff`, `Huh`, `Boogers`]


];

const jonasVideo42 = {
    firstName: `Jeff`,
    lastName: `Valodine`,
    age: 2023 - 1996,
    job: `web designer`,
    friends: [`Jeff`, `Huh`, `Boogers`]
}

//this object has 5 properties.
//There are multiple ways to create objects




/*
LECTURE: Introduction to Objects
1.
Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

*/

const myCountryVideo42 = {
    country: `USA`,
    captial: `DC`,
    language: `English`,
    population: `330`,
    neighbors: [`Cananda`, `Mexico`, `Blah`]
}
//done



//video 43

//lets see our object from the last video

console.log(jonasVideo42);

console.log(jonasVideo42.lastName);
//that just says Valodine
//not lastName: Valodine like in the first one


console.log(jonasVideo42[`lastName`]);
//another way. to do it . but this is good for math stuff


const nameKey = `Name`;
console.log(jonasVideo42[`last` + nameKey]); //= lastName 

//cant do this below
//console.log(jonas.`last` + nameKey);

//use dot for most things unless math basically .

/*

const intrestedIn = prompt(`What do you want to know about Jeff? Choose between firstName, lastName, age, job, friends`);

*/

//console.log(jonasVideo42[intrestedIn]);


//look up this is good for the math 
//we also dont have intrestedIn in the object also 
//so it needs to be in a  []

/*
if (jonasVideo42[intrestedIn]) {
    console.log(jonasVideo42[intrestedIn]);
} else {
    console.log('Wrong Request: Choose between firstName, lastName, age, job, friends ')
}

jonasVideo42.location = `Mexico`;
jonasVideo42[`twitter`] = `@valodinejr`;

//thats how you add more things in object. 

console.log(jonasVideo42);

//challenge 
//jonas has 3 friends and his best friend is Lino.

console.log(`${jonasVideo42.firstName} ${jonasVideo42.lastName} has 3 friends and his best friend is ${jonasVideo42.friends[1]}.`);
//forgot the length damn it .

console.log(`${jonasVideo42.firstName} ${jonasVideo42.lastName} has ${jonasVideo42.friends.length} friends and his best friend is ${jonasVideo42.friends[1]}.`);
*/

/*
LECTURE: Dot vs. Bracket Notation
1. 
Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish speaking people, 3 neighbouring countries and a capital called Helsinki.'

2. 
Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

*/
console.log(`${myCountryVideo42.country} has ${myCountryVideo42.population} million ${myCountryVideo42.language} speaking people ${myCountryVideo42.neighbors.length} neighbor countries and a captial called ${myCountryVideo42.captial}.`)

console.log(myCountryVideo42.population);
myCountryVideo42.population = 600;

console.log(myCountryVideo42.population);

myCountryVideo42[`population`] = 600 - 300;

//right way for the seocnd part 

myCountryVideo42.population += 2;

myCountryVideo42[`population`] -= 2;



//done







//Lecture Object Methods

const jeffVideo44 = {
    firstName: `Jeff`,
    lastName: `Valodine`,
    birthYear: `1996`,
    job: `student`,
    friends: [`Michelle`, `Lino`, `Fred`],
    hasDriversLicense: true,

    /*
    calcAge: function (birthYear) {
        return 2023 - birthYear;
    }
    */
    /*
    calcAge: function () {

        return 2023 - this.birthYear;
    }
    */

    // "THIS" is nice if you gad to change jeffVideo44 to jeffVideo45 if its in the parent you would be fine. Less changing stuff. 

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year old ${jeffVideo44.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    },
};




console.log(jeffVideo44.calcAge());
console.log(jeffVideo44.calcAge());
console.log(jeffVideo44.calcAge());

console.log(jeffVideo44.getSummary());

/*
LECTURE: Object Methods

1. 
Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

2. 
Call the 'describe' method

3. 
Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.


*/

const myCountryVideo44 = {
    country: `USA`,
    capital: `DC`,
    language: `English`,
    population: `330`,
    neighbors: [`Cananda`, `Mexico`, `Blah`],


    describeCountry: function () { //(country, population, capitalCity)

        return `${this.country} has ${this.population} million people and its capital city is ${this.capital}.
        
        ${this.neighbors.length} are the neighbouring countries`
        //forgot to use length sorry i took a break on code. 

        //again you do a return here. 

    },

    checkIsland: function () {
        //return `${this.country} is ${this.island ? `a island` : `not an island`} `

        this.isIsland = this.neighbors.length === 0 ? true : false;
    }

}

//console.log(myCountryVideo44.describeCountry())
//console.log(myCountryVideo44.checkIsland())
myCountryVideo44.describeCountry();
myCountryVideo44.checkIsland();

console.log(myCountryVideo44);

//the console logs didnt make sense but i get why I should have seen if if neighbors === 0 means yes. 


//FOR LOOOOOP!!!!


console.log(`Lifting weights repetition 1`);
console.log(`Lifting weights repetition 2`);
console.log(`Lifting weights repetition 3`);
console.log(`Lifting weights repetition 4`);



//thats the ugly way.
//dont repeat it. 



//for has 3 parts
// the first is the counter
//let rep is the start of the count. 
//let rep = 1;

//part 2 
//what happens each time 
//this checks it to make sure its still less then 10 each time
//rep <= 10;


//part 3
//increase it by one till it hits 10 starting from the og spot
//rep++ or rep = rep + 1
for (let rep = 1; rep <= 10; rep++) {
    console.log(`REP GAINS ${rep}`)
}

/*
LECTURE: Iteration: The for Loop
1. 
There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
};

//done 


//loop array

const jeffArray = [
    `Jeff`,
    `Valodine`,
    2023 - 1996,
    `student`,
    [`Michelle`, `Lino`, `Fred`],
    27,

];


const types = [];



//no middle makes it infinite. 
for (let i = 0; i < jeffArray.length; i++) {

    //reading jeff array 
    console.log(jeffArray[i], typeof jeffArray[i]);


    //filling an array. 
    //types[i] = typeof jeffArray[i];
    //this should be one to one then compares it againg for 2 and 2 

    types.push(typeof jeffArray[i])
};

console.log(types);


const yearsAug = [1991, 2007, 1969, 2020, 1996];
const agesAug = [];

for (let i = 0; i < years.length; i++) {
    agesAug.push(2023 - yearsAug[i]);
}

console.log(agesAug);

// continue and break


//this just shows the string of the jeffArray
//skips the rest 
console.log(`--- only strings ---`)
for (let i = 0; i < jeffArray.length; i++) {

    if (typeof jeffArray[i] !== `string`) continue

    console.log(jeffArray[i], typeof jeffArray[i])

}

console.log(`--- Break with number ---`)
for (let i = 0; i < jeffArray.length; i++) {

    if (typeof jeffArray[i] !== `number`) break

    console.log(jeffArray[i], typeof jeffArray[i])

}








/*

LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment

2. 
Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

3. 
Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is


*/

//const percentageOfWorld = population => population / 7900 * 100;
const percentages2 = [];

const arrayPopulation2 = [300, 10, 225, 500];
const arrayCountry2 = [`USA`, `Mexico`, `Cananda`, `North Korea`];

for (let i = 0; i < arrayPopulation2.length; i++) {
    //my way
    //percentages2.push(arrayPopulation2[i] / 7900 * 100)

    //answer from the pdf same thing

    const perc = percentageOfWorld4(arrayPopulation2[i]);
    percentages2.push(perc);

}

console.log(percentages2);

//done

//looping backwards and loops in loops

const jeffArray2 = [
    `Jeff`,
    `Valodine`,
    2023 - 1996,
    `student`,
    [`Michelle`, `Lino`, `Fred`],
    27,
    true,

];

//0 1 2 3 4....
//but we want 
//the -1 is for the reason that arrays start with 0 because theres technically 7 not 0-6. The length makkes it 7
for (let i = jeffArray2.length - 1; i >= 0; i--) {
    console.log(i, jeffArray2[i]);
    console.log(jeffArray2.length);// this makes it 7 
};

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`------ Starting Exercise ${exercise}`);

    //this does it for each excercise. A loop inside a loop. 
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weight rep ${rep}`)
    }

}








/*
LECTURE: Looping Backwards and Loops in Loops
1. 
Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. 
Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
3. 
You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

*/


//my way with chat gpt 
const test = [
    `What`, `huh`, `see`, `booger`, `fred`, `jeff`, `michelle`, `beans`, `toot`, `yes`
];

for (let i = 1; i < 10; i++) {
    console.log(test[i])
}


const listOfNeighbours2 = [
    [`Canada`, `Mexico`],
    [`Spain`],
    [`Norway`, `Sweden`, `Russia`]
];




console.log(listOfNeighbours2[0], listOfNeighbours2.length);

for (let i = 0; i <= listOfNeighbours2.length - 1; i++) {
    console.log(`These Are Countries that touch ${listOfNeighbours2[i][0]}`);


    for (let miniArray = 1; miniArray <= listOfNeighbours2[i].length - 1; miniArray++) {
        console.log(`: ${listOfNeighbours2[i][miniArray]}`)
    }
}

//the answer 

const listOfNeighbours4 = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours4.length; i++)
    for (let y = 0; y < listOfNeighbours4[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours4[i][y]}`);



//while loop.


for (let rep = 1; rep <= 10; rep++) {
    console.log(`REP BY ${rep}`);


}



//same thing just more ways to change it. You dont need to put the let rep = 1 inside of it
let rep = 1
while (rep <= 10) {
    console.log(`WHILE REP BY ${rep}`);
    rep++
}

//dice roll random maker!! 

let dice2 = Math.random() * 6;
console.log(dice2); //this is some whacky .12414 number. 

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

//!== different 
//if its 6 from the start it does not even start it. 
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a 6`)
}



/*
LECTURE: The while Loop
1. 
Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. 
Reflect on what solution you like better for this task: the for loop or the while loop?

*/

//old
const populations5 = [10, 1441, 332, 83];
const percentages5 = [];
for (let i = 0; i < populations5.length; i++) {
    const perc = percentageOfWorld4(populations5[i]);
    percentages5.push(perc);
}
console.log(percentages5);

//end of old to see it 

const populations6 = [10, 1441, 332, 83];
const percentages6 = [];
let b = 0
while (b < populations6.length) {
    const perc = percentageOfWorld4(populations6[b]);
    percentages6.push(perc);
    b++;
};

console.log(percentages6)

// there about the same.

