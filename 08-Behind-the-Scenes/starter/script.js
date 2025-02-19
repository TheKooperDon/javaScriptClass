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

*/

const addExpr = function (a, b) {
  console.log(arguements);
  return a + b;
};
