///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(num1, num2){
  return num1 + num2;
}
console.assert(sum(5, 7) === 12, "5 plus 7 should be 12");
console.assert(sum(10, 15) === 25, "10 plus 15 should be 25");

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
}
console.assert(avg(5, 7, 9) === 7, "average of 5, 7, 9 should be 7");
console.assert(avg(2, 22, 6) === 10, "average of 2, 22, 6 should be 10");


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(myString){
  return myString.length;
}
console.assert(getLength("words") === 5, "'words' should be 5 letters long");
console.assert(getLength("a longer string") === 15, "'a longer string' should be 15 letters long");


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(num1, num2){
  if (num2 > num1){
    return true;
  } else {
    return false;
  }
}
console.assert(greaterThan(5, 7) === true, "7 should be greater than 5 (true)");
console.assert(greaterThan(9, 50) === true, "50 should be greater than 9 (true)");

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(name){
  return "Hello, " + name + "!";
}
console.assert(greet("James") === "Hello, James!", "Should print 'Hello, James!'");
console.assert(greet("Bob") === "Hello, Bob!", "Should print 'Hello, Bob!'");


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(word1, word2, word3, word4){
  return "The quick " + word1 + " " + word2 + " jumps over the " + word3 + " " + word4;
}
console.assert(madlib("brown", "fox", "lazy", "dog") === "The quick brown fox jumps over the lazy dog",
              "should return 'The quick brown fox jumps over the lazy dog'");
console.assert(madlib("large", "pizza", "red", "raccoon") === "The quick large pizza jumps over the red raccoon",
              "should return 'The quick large pizza jumps over the red raccoon'");


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
