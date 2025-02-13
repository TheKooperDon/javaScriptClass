'use strict';
function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear > 1981 && birthYear <= 1996) {
      const str = `Oh you a millenial, ${firstName}`;
      console.log(str);
      /*function add(a, b){
        return a + b;
      }*/
    }
  }
  printAge();
  return age;
}

const firstName = 'Jeff';
calcAge(1996);
