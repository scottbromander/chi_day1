var x = 5;
var y = "cat";

// console.log(x);
// console.log(x.toString());

// console.log(y.length);

parseInt("42.32");
parseFloat("42.32");

var z = [50,60,70];
z.push(80);

var f = [500,600,700];
f.push(800);

function someFunction(array){
  for(var i = 0; i < array.length; i++){
    array[i] += 1;
  }
}

someFunction(z);
console.log(z);
someFunction(f);
console.log(f);


function changeSomeNumber(cat){
  cat += 1;
  return cat;
}

var dog = 5;
dog = changeSomeNumber(dog);
console.log("WHAT IS IT!? : " , dog);
