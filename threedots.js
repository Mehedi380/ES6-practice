const ages = [16, 17, 18];
const ages2 = [19, 20, 22, 23, 21];
const ages3 = [23, 24, 25];
const allAges = ages.concat(ages2, ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);


const business = 600;
const minister = 500;
const sochib = 300;
const takaOla = [600, 500, 300, 610, 700];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaOla);
console.log(maximum);
