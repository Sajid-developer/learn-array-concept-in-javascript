# 🌟Learn Array Concept In JavaScript
An exercise to learn about array concept in JavaScript. 🧑🏼‍💻

## 🧑🏼‍💻Basic code

```javascript


// declared and initialized array of fruits
const fruits = ["apple", "orange", "grape", "guava", "pineapple", "banana", "papaya"];

// Different methods in array...

// 1. Length of the array

console.log("Length of array is : " + fruits.length);

// 2. Remove an element of the array from last

fruits.pop();
console.log(fruits);

// 3. Add an element in the array at last

fruits.push("coconut");
console.log(fruits);

// 4. Remove an element of the array from start

fruits.shift();
console.log(fruits);

// 5. Add an element in the array at start

fruits.unshift("pear");
console.log(fruits);

// 6. Remove element of array by specified index 

fruits.splice(3, 2);
console.log(fruits);

// 7. keep only the items of array from specified index 

fruits.slice(1, 4);
console.log(fruits);

// 8. Make new array of characters from a string using split method....

let randFruit = Math.floor(Math.random() * fruits.length);
let splitWord = fruits[randFruit].split("");
console.log(splitWord);

let newWord = "";

for (let i = splitWord.length - 1; i >= 0; --i) {
    newWord += splitWord[i];
}

console.log(newWord);

//  const numbers=[7,9,4,8,12,3,5,23,18,1,6,2,10];

function shuffleFruits() {
    let shuffledFruits = fruits.sort((a, b) => Math.random() - 0.5);
    console.log(shuffledFruits);
}

shuffleFruits();


```
