// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function getLargest(){
  var largest = 0;
  for (var i = 0; i < numbers.length; i ++){
    if (numbers[i] > largest){
      largest = numbers[i];
    }
  }
  return largest;
}
console.assert(getLargest() === 101, "largest should be 101");


// ---------------------------
// 2. Find longest string
// ---------------------------
function getLongest(){
  var longest = "";
  for (var i = 0; i < strings.length; i ++){
    if (strings[i].length > longest.length){
      longest = strings[i];
    }
  }
  return longest;
}
console.assert(getLongest() === "collection", "longest should be 'collection'");


// ---------------------------
// 3. Find even numbers
// ---------------------------
function getEvens(){
  var evens = [];
  for (var i = 0; i < numbers.length; i ++){
    if (numbers[i] % 2 === 0){
      evens = evens.concat(numbers[i]);
    }
  }
  return evens;
}
// used array's toString method to compare result with expected answer
console.assert(getEvens().toString() === "12,4,18,6", "should contain 12, 4, 18, 6");

// ---------------------------
// 4. Find odd numbers
// ---------------------------
function getOdds(){
  var odds = [];
  for (var i = 0; i < numbers.length; i ++){
    if (numbers[i] % 2 === 1){
      odds = odds.concat(numbers[i]);
    }
  }
  return odds;
}
console.assert(getOdds().toString() === "1,9,7,11,3,101,5", "should contain 1, 9, 7, 11, 3, 101, 5");

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containsIs(){
  var hasIs = [];
  for (var i = 0; i < strings.length; i ++){
    if (strings[i].includes("is")){
      hasIs = hasIs.concat(strings[i]);
    }
  }
  return hasIs;
}
console.assert(containsIs().toString() === "this,is", "should contain 'this', 'is'");

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function join(){
  var newArray = [];
  for (var i = 0; i < numbers.length; i ++){
    newArray = newArray.concat(numbers[i]);
  }
  for (var j = 0; j < strings.length; j ++){
    newArray = newArray.concat(strings[j]);
  }
  return newArray;
}
console.assert(join().toString() === "1,12,4,18,9,7,11,3,101,5,6," +
  "this,is,a,collection,of,words", "should contain all 11 numbers and 6 words");


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
function jsTeachers(){
  var teachers = [];
  for (var i = 0; i < instructors.length; i ++){
    if (instructors[i].teaches === "JavaScript"){
      teachers = teachers.concat(instructors[i].firstname);
    }
  }
  teachers.sort();
  return teachers;
}
console.assert(jsTeachers().toString() === "Calvin,JD,Jake,Tim,Will", "Should contain Calvin, JD, Jake, Tim, Will");
