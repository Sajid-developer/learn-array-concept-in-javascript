console.log("App running successfully...");

// array concept with javascript ✅


const fruits = ["apple", "orange", "grape", "guava", "pineapple", "banana", "papaya"];

// Different methods of array.....

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

// 7. Make new array of characters from a string using split method....

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


// declared and initialized a number array
const nums = [23, 3, 3, 7, 8, 7, 3, , 14, 7, 65, 43, 12, 97, 67, 76, 74, 65, 45, 70, 32, 39, 63];

function arrProb() {
    console.log(`Length of array is : ${nums.length}`);
    let maxNum = nums[0];
    let randNum = Math.floor(Math.random() * nums.length);
    console.log(randNum);
    let mRepNum = nums[randNum];
    let sum = 0, count = 0;

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
    }
    console.log(`sum of no.s of array is : ${sum}`);

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }
    console.log(`The largest no. in array is : ${maxNum}`);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == mRepNum) {
            mRepNum = nums[i];
            count++;
        }
    }
    console.log(`Most repeated no. in array is ${mRepNum} and repeated ${count} times`);

}
arrProb();

// declared and initialized words array
const words = ['good', 'better', 'best'];

function wordScramble() {
    let randNum = Math.floor(Math.random() * words.length);
    let randWord = words[randNum];
    let sWord = randWord.split('');
    console.log(sWord);
    console.log(sWord.length);
    let newWord;

    for (let i = 0; i < sWord.length; i++) {
        newWord = sWord.join('');
    }
    console.log(newWord);
}

wordScramble();


const students = [
    {
        id: 1,
        name: " Abhishek",
        class: "10th",
        rollNo: 12,
        course: "PCM",
        isActive: true
    },
    {
        id: 2,
        name: " Mukesh",
        class: "10th",
        rollNo: 34,
        course: "PCM",
        isActive: false
    },
    {
        id: 3,
        name: " Shahrukh",
        class: "10th",
        rollNo: 17,
        course: "PCB",
        isActive: true
    },
    {
        id: 4,
        name: " Kiara",
        class: "10th",
        rollNo: 20,
        course: "PCM",
        isActive: true
    },
    {
        id: 5,
        name: " Sansriti",
        class: "10th",
        rollNo: 14,
        course: "PCB",
        isActive: true
    }
];

// make a new array from student array with name ✅
// filter the name of student where status is active ✅
// make new array only with name where status is active and course is PCM ✅

console.table(students);
// solution - Level 1

const stuName = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].isActive && students[i].course === "PCM") {
        stuName.push(students[i].name);
    }
}
// console.log(stuName);

// Solution - Level 2

students.forEach((stu) => {
    if (stu.isActive && stu.course === "PCM") {
        stuName.push(stu.name);
    }
});
// console.log(stuName);

// Solution - Level 3

const newArray = students.filter(stu => stu.isActive).map(stu => stu.name);
console.log('');
console.log(newArray);
console.log('');

// document.write(`<h1> ${newArray.join(' | ')} <h1>`);


// Callback function... ✅

const greeting = (...params) => {
    console.log(`Hi ${params[0]}`);
    return params[1]();
}

const callMe = () => {
    console.log("Welcome Sajid bhai 👉🏼 ! I'm callback function");
}

greeting('Sajid', callMe);