// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2){
      return num1;
    } else {
      return num2;
    }
}
console.assert(max(5, 7) === 7, "Max of 5 and 7 should be 7");
console.assert(max(22, 3) === 22, "Max of 22 and 3 should be 22");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
      return num1;
    } else if (num2 > num1 && num2 > num3){
      return num2;
    } else {
      return num3;
    }
}
console.assert(maxOfThree(5, 7, 9) === 9, "Max of 5, 7, 9 should be 9");
console.assert(maxOfThree(1, 33, 32) === 33, "Max of 1, 33, 32 should be 33");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return true;
      default:
        return false;
    }
}
console.assert(isVowel("a") === true, "'a' should be true");
console.assert(isVowel("d") === false, "'d' should be false");
console.assert(isVowel("i") === true, "'i' should be true");

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var newPhrase = "";
    for (var i = 0; i < phrase.length; i ++){
      switch (phrase.charAt(i)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case " ":
          newPhrase += phrase.charAt(i);
          break;
        default:
          newPhrase += phrase.charAt(i) + "o" + phrase.charAt(i);
      }
    }
    return newPhrase;
}
console.assert(rovarspraket("potato") === "popototatoto", "potato should become popototatoto");
console.assert(rovarspraket("Hello world") === "HoHelollolo wowororloldod",
  "Hello world should become 'HoHelollolo wowororloldod'");


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var newPhrase = "";
    for (var i = phrase.length - 1; i >=0; i --){
      newPhrase += phrase.charAt(i);
    }
    return newPhrase;
}
console.assert(reverse("Hello, world") === "dlrow ,olleH", "'Hello world' should be 'dlrow ,olleH'");
console.assert(reverse("Backwards") === "sdrawkcaB", "'Backwards' should be 'sdrawkcaB'");
