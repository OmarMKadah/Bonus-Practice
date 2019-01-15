var sentence = prompt ("enter a sentence below:");

function firstLastCapitalize(sentence) {
  //Snag First Letter of inputted sentence
  var firstLetter = sentence.charAt(0);
  //Snag Last Letter of inputted sentence
  var lastLetter = sentence.charAt(sentence.length -1);
  //return capitalize first and last letters
  var combine = firstLetter + lastLetter;
  var uppercase = combine.toUpperCase();
  return uppercase
}

//The re factored and more effecient method//
// function firstLast(string) {
//   var result =  string.charAt(0) + string.charAt(string.length - 1);
//   return result.toUpperCase();
// }


alert(firstLastCapitalize(sentence));
