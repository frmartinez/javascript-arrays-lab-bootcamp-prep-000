var kittens = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendKitten(name){ 
kittens.push(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name){ 
kittens.unshift(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten(name){ 
kittens.pop(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten(name){ 
kittens.shift(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name){
var newArray = kittens.push(name)
return kittens;
}

function appendKitten(name){
  var newArray = kittens.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name)
  return newArray
}

