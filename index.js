console.log("App running successfully...");

// array concept with javascript ✅


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