

let scoreDolphins = ((96 + 108 + 89) / 3);
let scoreKoalas = ((88 + 91 + 110) / 3);

console.log(scoreKoalas, scoreDolphins);

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`)
} else if (scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`)
} else {
    console.log(`Koalas win the trophy`)
}

scoreDolphins = ((97 + 112 + 101) / 3);
scoreKoalas = ((109 + 95 + 123) / 3);


if (scoreDolphins > scoreKoalas && scoreDolphins || scoreKoalas >= 100) {
    console.log(`Dolphins win the trophy`)
} else if (scoreDolphins > scoreKoalas && scoreDolphins || scoreKoalas >= 100) {
    console.log(`Both win the trophy`)
} else if (scoreDolphins === scoreKoalas && scoreDolphins || scoreKoalas >= 100) {
    console.log(`Both win the trophy`)
} else {
    console.log(`sorry didnt score high enough`)
}

scoreKoalas = ((109 + 95 + 106) / 3);