// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
let statement;
const someOverUnderNineteen = people.some((item) => {
  const date = new Date().getFullYear();
  if ((date - item.year) >= 19 || (date - item.year) <= 19) {
    return statement = (`some are over and under 19`);
  }
  else if ((date - item.year) >= 19) {
    return statement = (`some are over 19`);
  }
  else if ((date - item.year) <= 19) {
    statement = (`some are under 19`);
    return statement;
  };
  return;
});

console.log(statement);
const allOverNineteen = people.every((item) => {
  const date = new Date().getFullYear();
  if ((date - item.year) >= 19) {
    return true;
  }
});
console.log('allOverNineteen: ', allOverNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findID = comments.find((id) => {
  if (id[`id`] === 823423) {
    return id.text;
  }
});


console.log(findID);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(findID => findID.id === 823423);


const newComments = [...comments.slice(0, index),
...comments.slice(index + 1)];

console.table(newComments);

