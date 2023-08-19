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
    if (temps[i] > max) max = temps[i];
    //if (temps[3] > 3) max =/ 3
    // temps -2 > 3 max=/3
    //we are just going to keep going till its greater then 3
    //that would be 9
    //if (temps[9] > 3 max NOW = 9
    //now its going to check if its greater then 9
    //this will continue tull the end of the legth.
  }

  for (let i = 0; i < temperatures.length; i++) {
    if (temps[i] < min) min = temps[i];
    //same thing just min now.

    //we could just make a var for curTemp = temps[i] to make it better looking but its fine.
  }
  console.log(max, min);
};

calcTempAmplitude([3, 7, 4, 23]);
calcTempAmplitude(temperatures); // 17 //-6
