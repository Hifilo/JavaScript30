const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's


const inventorsBornIn1500 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; // keep it
  }
});

// console.table(inventorsBornIn1500);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const giveFullNames = inventors.map((inventor) => {
  return (inventor.first + ` ` + inventor.last);
});

// console.table(giveFullNames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest


const sortOldToYoung = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

//same as above but with arrow function & ternary 
const sortOldToYoung2 = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);

// cond ? true : false;
// console.log('sortOldToYoung: ', sortOldToYoung);
// console.log('sortOldToYoung2: ', sortOldToYoung2);




// Array.prototype.reduce()
// 4. How many y'ear's did all the inventors live all together?

const timeAlive = inventors.reduce((previous, current) => {
  return previous + (current.passed - current.year);

}, 0);


// console.log(timeAlive);
// 5. Sort the inventors by years lived

const yearsLived = inventors.sort(function (a, b) {
  let calcA = a.passed - a.year;
  let calcB = b.passed - b.year;

  if (calcA < calcB) {
    return 1;
  } else {
    return -1;
  }
});


const yearsLived2 = inventors.sort((a, b) => {
  let calcA = a.passed - a.year;
  let calcB = b.passed - b.year;
  return calcA < calcB ? 1 : -1;
});


console.table(yearsLived);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//copy paste into console at the link to get info. This method returns `de` and `des`.
// const category = document.querySelector(`.mw-category`);
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map((link) => link.textContent)
//   .filter(streetName => streetName.includes(`de`));

//this method uses .split(), and does the same but returns only the `de` streets.

// const category2 = document.querySelector(`.mw-category`);
// const links2 = Array.from(category2.querySelectorAll('a'));
// const deStreets2 = links2.map((link) => link.textContent)
//   .filter(streetName => streetName.split(' ')[1] === 'de');

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortAlphaLastName = people.map((item) => {
  return item.split(', ')[0];
}).sort();

const people2 = ['Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel'];

// console.table(sortAlphaLastName);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const dataSums = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(dataSums);





function makeConst(peoples) { // dont use test a s a function.


  return _helper(peoples);

  function _helper(peoples) {
    let results = [];
    for (let i = 0; i < peoples.length; i++) {
      const { name, yearOfBirth: yob, yearOfDeath: yod } = peoples[i];
      results.push({ name, yob, yod });
    }
    // console.table(people); // dont console log inside a function.
    return results;
  }
  // return people; // return somethign out of your function. Place into your helper
};
// test(people);
console.table(makeConst(peoples));




// what is obj? obj is not very descriptive
// function getYearsLived(obj) {
//   return obj.passed - obj.year;
// }

// // what are a and b? these names are not descriptive at all
// const yearsLived2 = inventors.sort((a, b) =>
//   getYearsLived(a) < getYearsLived(b) ? 1 : -1
// );
// you're missing the entire essence of why we deliberate over rewriting code in the first place 
// the goal is to make the code as easy to understand as possible for the reader and future writer
// function getYearsLived(person) {
//   return person.passed - person.year;
// }

// function sortByYearsLived(personA, personB) {
//   return getYearsLived(personA) < getYearsLived(personB) ? 1 : -1;
// }
