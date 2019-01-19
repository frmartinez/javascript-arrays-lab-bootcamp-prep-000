var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}
