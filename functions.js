//var dogFunction;
console.log(typeof catFunction());


//declared
function catFunction(){
  // console.log("Meow");
}

console.log(typeof dogFunction);

//expression
var dogFunction = function(){
  console.log("Woof");
};

console.log(typeof dogFunction);

function makeSandwich(fill, breadType){
  if(typeof breadType != "string"){
    breadType = "wheat";
  }
}

makeSandwich();

if(5 == "5"){
  console.log("Cat");
}

if(5 === "5"){
  console.log("Dog");
}
