"use strict";

const x = 23;
if (x === 23) console.log(23);

console.log(`dope`);

const calcAge = (birthYear) => 2023 - birthYear;

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the main problem

//what is even the amplitude..
// Answer the highest and the lowest temps

//how do we even get the max and min?
//What does a sensor error look like and what to do
//probs best to move on from it

// 2. Breaking into sub-problems
// make sure the sensor error is ignored. how do we ignore it.
// find the max value and min value
//then subtract min from max = amp

const calcTempAmplitude = function (temps) {
  //max = 3
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    //if (temps[3] > 3) max =/ 3
    // temps -2 > 3 max=/3
    //we are just going to keep going till its greater then 3
    //that would be 9
    //if (temps[9] > 3 max NOW = 9
    //now its going to check if its greater then 9
    //this will continue tull the end of the legth.
  }

  for (let i = 0; i < temperatures.length; i++) {
    //if (temps[i] < min) min = temps[i];
    //same thing just min now.
    //we could just make a var for curTemp = temps[i] to make it better looking but its fine.
  }
  console.log(max, min);
};

calcTempAmplitude([3, 7, 4, 23]);
console.log(`temp1`);
calcTempAmplitude(temperatures); // 17 //-6

const calcTempAmplitude2 = function (temps) {
  //max = 3
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue; //to check for that error
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude2([3, 7, 4, 23]);
console.log(`temp2`);
calcTempAmplitude2(temperatures); // 17 //-6

const amplitude = calcTempAmplitude2(temperatures);
console.log(amplitude);

//with 2 arrays should we implemetn functionals twice?

//nooo

//2 how to merge twice

//console.log(array3);

calcTempAmplitude([3, 7, 4, 23]);
console.log(`temp1`);
calcTempAmplitude(temperatures); // 17 //-6

const calcTempAmplitude3 = function (t1, t2) {
  //max = 3
  //const array1 = [`a`, `b`, `c`];
  //const array2 = [`d`, `e`, `f`];
  //const array3 = array1.concat(array2);
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue; //to check for that error
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const TempAmplitude3 = calcTempAmplitude3([2, 5, 4], [1, 5, 7]);
console.log(TempAmplitude3);

const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    //value: prompt(`Degrees celsius`),
    //prompt will always be a string.
    //fix
    value: Number(prompt(`Degrees in Celsius:`)),
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForeCast = function (daytemp) {
  let daytemp1 = [];
  for (let i = 0; i < daytemp.length; i++) {
    console.log(`${day[i]}`);
  }
};

const testrun = printForeCast([17, 21, 23]);
