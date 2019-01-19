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

appendKitten = function(name){
  var one = kittens.push(name)
  return one
}

kittens = ['Milo', 'Otis', 'Garfield']

prependKitten = function(name){
  var two = kittens.unshift(name)
  return two
}

