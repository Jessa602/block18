// //Write a func that takes a string and returns
// //an object which keys are disctinct characters and the value
// //is the number of ocurrences

// //numberOfOcurrences('aabczz')
// //return should be {a:2, b:1, c:1, z:2}

// function numberOfOccurences (str) {
// let letters = {}
// let char = 0;
// for (let i = 0; i < str.length; i++) {
// if(letters[str[i]] === undefined) {
// letters[str[i]] = 1;}
// else{letters[str[i]]++}
// }
// return letters
// }

// console.log(numberOfOccurences("hello"))
// numberOfOccurences("hello")

// useMapToUpperCase - use the Array.prototype.map within the useMapToUpperCase function. Remember, the map method can only be called on arrays (so you may need to convert the argument to an array). "map" each element so the strings are all upper case.
//

const useMapToUpperCase = (str) => {
  let eachLetter = str.split("");
  let newArray = eachLetter.map((letter) => {
    return letter.toUpperCase();
  });
  console.log(newArray.join(" "));
};

useMapToUpperCase("first friday");
