// 1.
// a.
// const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// const difference = ages[0] - ages[ages.length -1];

// console.log(difference);

// b.

// const newages = [1, 3, 9, 23, 64, 2, 8, 28, 93, 100];

// const difference = newages[0] - newages[newages.length -1];

// console.log(difference);

// c.

// const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// const averageAge = ages.reduce((sum, age) => {
//     return sum + age / ages.length;
//   }); 
  
//   console.log(averageAge);

// 2.
// a.
// const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// const totalLetters = names.reduce((total, name) => {
//     return total + name.length;
//   }, 0);
  
//   const averageLetters = totalLetters / names.length;
  
//   console.log(averageLetters);

// b.

// const names = ['Sam Tommy Tim Sally Buck Bob']; {
//     concat = names.join(" ");
// };

// console.log(names);

// 3. You are able to Access the last element of an array, by using the pop() method.

// 4. You are able to Access the first element of an array, by using the square bracket notation [], with a 0 in the middle of the brackets.

// 5.
// let names = [('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob')];
// let nameLength = [3, 5, 3, 5, 4, 3]; 

// console.log(nameLength);

// 6.

// let names = [('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob')];
// let nameLength = [3, 5, 3, 5, 4, 3];
// let sum = nameLength.reduce(function(a,b){
//     return a + b;
// });

// console.log(sum);

// 7. 
// function repeat(word, n) {
//     var result = " ";
//     for (var i = 0; i < n; i++) {
//         result += word;
//     }
//     return result;
// }

// console.log(repeat('Hello', 3));

// 8. 
// const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(createFullName('John','Smith'));

// 9.
// function x(array) {
//     let sum = 0;
//     for (let number of array) {
//         sum += number;
//     }
//     return sum > 100;
// }

// console.log(true);

// 10.
// function average(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
//   }

//11.

// function averageDifference(array1, array2) {
//     var average1 = array1.reduce((a, b) => a + b) / array1.length;
//     var average2 = array2.reduce((a, b) => a + b) / array1.length;
//     return average1 > average2;
// }

// 12.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
      return true;
    } else {
      return false;
    }
  }