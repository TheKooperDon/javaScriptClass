


// Remember, we're gonna use strict mode in all scripts now!
'use strict';





/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1.Create an array called bills containing all 10 test bill values.

2.Create empty arrays for the tips and the totals (tips and totals).

3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let tips = [];
let totals = [];
console.log(bills);
console.log(calcTip(bills[1]))
//for some reason you cant log this 
//console.log(calcTip(bills))

for (let i = 0; i <= bills.length - 1; i++) {
    const tipBullshit = calcTip(bills[i]);
    //console.log(tips);
    tips.push(tipBullshit);

    console.log(`The Bill is $${bills[i]} and the tip would be are $${tips[i]}.`);
    //his lazy ass way.
    //totals.push(tipBullshit + bills[i]);
    const total = bills[i] + tipBullshit;
    totals.push(total)

    console.log(`The Bill is $${bills[i]} and the tip would be are $${tips[i]}. So the total would be $${total}`);
}
    /*
     This was dumb too 

    
    const total = bills[i] + tipBullshit;
    totals.push(total)
    console.log(`So then total is $${total} `)

*/



    //NO NOT AT ALL
    /*
    for (let d = 10; d <= tips.length; d--) {
        let blah = tips[d] + bills[d];
        //tips[d] + bills[d];
        totals.push(blah);
        console.log(`So then total is ${totals[d]} `)
    }
    */

    //totals.push(total)
    // totals = tips + bills;
    //

    //YOU COULD HAVE DONE 


//console.log(totals)
