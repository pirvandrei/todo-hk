// Syntax
// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

const palindrome = (string) => {
  return string.split('').reverse().join('');
};

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length;
};

//[[0, 1], [2, 3], [4, 5]]
// flattened is [0, 1, 2, 3, 4, 5]
const flattened = (array) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  };

  return array.reduce(reducer, []);
};


//Counting instances of values in an object
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
const countedNames = (arrayOfNames) => {
  const reducer = (accumulatorOfAllNames, currentName) => {
    if (currentName in accumulatorOfAllNames) {
      accumulatorOfAllNames[currentName]++;
    } else {
      accumulatorOfAllNames[currentName] = 1;
    }

    return accumulatorOfAllNames;
  };

  return a;
};

//Grouping objects by a property
// let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
const groupBy = (objectArray, objectProperty) => {
  const reducer = (accumulator, currentValueAsObject) => {
    const key = currentValueAsObject[objectProperty];

    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValueAsObject);
    return accumulator;
  };

  return objectArray.reduce(reducer, {});
};


// console.log(Infinity          ); /* Infinity */  
// console.log(- Infinity          ); /* Infinity */  

// console.log(Infinity + 1      ); /* Infinity */  
// console.log(Math.pow(10, 1000)); /* Infinity */  
// console.log(Math.log(0)       ); /* -Infinity */  
// console.log(1 / Infinity      ); /* 0 */  
// console.log(1 / 0             ); /* Infinity */ 
// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// console.log(countedNames(names));

// let people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 },
// ];
// console.log(groupBy(people, 'age'));

// console.log(flattened([[0, 1], [2, 3, 5, 10], [4, 5], [2, 3], [2, 3], [2, 3]]));



module.exports = {
  palindrome,
  average,
  flattened,
  countedNames,
  groupBy,
};
