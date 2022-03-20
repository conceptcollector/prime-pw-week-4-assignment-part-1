console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return name;
}
// Remember to call the function to test
console.log('Hello', helloName('Matt'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log(`${addNumbers(46, 2)} are just ahead of me.`); //A Tool reference


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Query: How many roads must a man walk down?');
console.log('Answer:', multiplyThree(2, 3, 7));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('Second test, 46 is positive:', isPositive(46));
console.log("Inititally thought 0 was positive since it's not negative:", isPositive(0));
console.log('And a gimme question. -9 is positive:', isPositive(-9));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = []
function getLast() {
  if (array.length > 0){
    return array[array.length - 1];
  }
  else {
    return undefined;
  }
}
console.log('When returning an empty array, that return would be', getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let lookingFor = ['Alaska', 'Mr. Goodbar', 'ward'];
function find( value, array ){
  found = false;
  for (i = 0; i < array.length; i++){
    if (value === array[i]){
      found = true;
      return found;
    }
}
}
//This took me a distressingly long time to figure out, so please excuse the Sam Jackson reference.
//This shall be the last time that Chris doesn't use the half hour rule discussed by alumni!
console.log('Hold onto your butts:', find('ward', lookingFor));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if (letter === string.charAt(0)){
    return true;
  } else {
    return false;
  }
  }
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numArray = [1, 2, 3, 4];
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log('The first four numbers added together equal', sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
numArray.push(0, -1, -2, -3, -4, -5);
let negArray = [0, -1, -2, -3, -4, -5];

function newArray(value) {
  return value > 0;
}

console.log('Filtering out the non-positive numbers in numArray:', numArray.filter(newArray));
console.log('Double checking:', negArray.filter(newArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Signed up for codewars just now and pulled the challenge "Create Phone Number".
//The example given is createPhoneNumber(numbers).
//This is supposed to be in the actual form of a phone number, so (xxx) xxx-xxxx.
//The trickiest part has been randomizing numbers in a string,
//but I found a Stack Overflow article that gave me the great idea of focusing on
//the length of the string rather than randomization.
//(I completely broke my half hour rule on this one... I just kept thinking I was close!)


function createPhoneNumber(numbers) {
  let numberGroup = '';
  // const oneToZero = '1234567890';
  // numbersLength = oneToZero.length;
  for (let i = 0; i < numbers; i++) {
  // while (numberGroup.length < numbers) {  
  // numberGroup += /*oneToZero.charAt(*/Math.floor(Math.random);
  numberGroup += parseInt(Math.random() * 10);
}
  // }
  return numberGroup;
}
  
  console.log(`[Automated voice]: Your new telephone number is (${createPhoneNumber(3)}) ${createPhoneNumber(3)}-${createPhoneNumber(4)}.`);

  //I spent WAY too long on this, but I think I got it!
  //Kept in some of my work, commented out, to show some of what I tried before.