'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);
  
  const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]);

// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex ]];

  },

  orderDelivery: function(obj){

  },

   
};

const {name1, openingHours, categories} = restaurant;

console.log(name1, openingHours, categories);

const {name1: restaurantName, openingHours: hours, categories: tags} = restaurant;
// since menu doesnt have anything yet its why we do the [] so at least its defined starter menu does have info


//default vals
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating vars

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c:14};

//we need to do the () to do this from some reason no {} allowed 
({a,b} = obj);
console.log(a, b);

// Nest objects

const {
  fri:{open: o, close: c}
} = openingHours;
console.log(o, c);

//







//practice 
/*


const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


[main, secondary] = [secondary, main]
console.log(main, secondary);

console.log(restaurant.order(2, 0));
// returning 2 vars in a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


const nested = [2,4,[5,6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k); 

//default values

const [p, q, r] = [8, 9];
console.log(p, q, r)

*/