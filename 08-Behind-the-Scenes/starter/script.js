'use strict';

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear > 1981 && birthYear <= 1996) {
      const str = `Oh you a millenial, ${firstName}`;
      console.log(str);
      /*function add(a, b){
        return a + b;
      }
    }
  }
  printAge();
  return age;
}

const firstName = 'Jeff';
calcAge(1996); 

*/
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  //console.log(this); //this is birth year.
};

const parker = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

parker.calcAge();

const jeff = {
  year: 2017,
};

jeff.calcAge = parker.calcAge;
jeff.calcAge();
*/
/*
const jeff = {
  firstName: 'Jeff',
  year: 1996,

  calcAge: function () {
    console.log(2025 - this.year);
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jeff.greet();
jeff.calcAge();

*/
/*
const jeff = {
  firstName: 'Jeff',
  year: 1996,

  calcAge: function () {
    console.log(2025 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jeff.greet();
jeff.calcAge();



const addExpr = function (a, b) {
  console.log(arguements);
  return a + b;
};

*/
//honestly just skipping this stuff to get to the next lesson

const michelle2 = {
  firstName: 'Michelle',
  lastName: 'Stevens',
  age: 30,
};

function marryPerson(ogPerson, newLastName) {
  ogPerson.lastName = newLastName;
  return ogPerson;
}
const marriedMichelle = marryPerson(michelle2, 'Valodine');

//const marriedMichelle = michelle;
//marriedMichelle.lastName = 'Valodine';

console.log('Before', michelle2);
// this was already changed so its auto valodine here but we did change a const
// same as a function same thing would happen
console.log('After:', marriedMichelle);

const michelle = {
  firstName: 'Michelle',
  lastName: 'Stevens',
  age: 30,
  family: ['Wayne', 'Lisa'],
};

//shallow so shallow
const michelleCopy = { ...michelle }; // i guess the ... takes from the name and makes a new object
/*
michelleCopy.lastName = 'Valodine';
console.log(michelle, michelleCopy);
michelleCopy.family.push('Marilee');
michelleCopy.family.push('Katie');

//family is a new object so we need to do the same thing probs with michellecopy aka shallow copy aka basic asf

console.log('Before:', michelle);
console.log('After:', michelleCopy);
*/
//deep copy and new and this is what should you do

const michelleClone = structuredClone(michelle);

michelleClone.family.push('Marilee');
michelleClone.family.push('Katie');

console.log('Before clone:', michelle);
console.log('After clone:', michelleClone);
