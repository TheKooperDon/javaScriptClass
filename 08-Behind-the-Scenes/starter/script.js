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
