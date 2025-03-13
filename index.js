const cats = ["Milo", "Otis", "Garfield"];

// beforeEach(function () {
//     cats.length = 0;

//     cats.push('Milo', 'Otis', 'Garfield');
//   });



function destructivelyAppendCat(){
    cats.push("Ralph");
    
    return cats;
}



function destructivelyPrependCat(){
    cats.unshift("Bob");
    
    return cats;
}



function destructivelyRemoveLastCat() {
    cats.pop();
    
    return cats;
}



function destructivelyRemoveFirstCat(){
    cats.shift();
    
    return cats;
}



function appendCat(){
    const copyofCats = cats.slice();

    copyofCats.push("Broom");

    return copyofCats;
}



function prependCat(){
    const copyofCats = cats.slice();
    
    copyofCats.unshift("Arnold");
    
    return copyofCats;
}



function removeLastCat(){
  const copyofCats = cats.slice();
  
  copyofCats.pop();
  
  return copyofCats;
}



function removeFirstCat(){
  const copyofCats = cats.slice();
  
  copyofCats.shift();
  
  return copyofCats;
}





  