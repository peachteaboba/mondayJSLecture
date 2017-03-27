var arr;
var x;

sayHello();


function sayHello(){
  var name;
  console.log("Hello World");
  console.log(arr);
  // arr.pop();
  name = "Andy";

  function logStuff(){
    var y = "asdasd";
    console.log(name);
    console.log(arr);

  }
  logStuff();
  // console.log(y);

}

console.log("Hello Worldddddd");

console.log(arr);

// Declaring and Assigning Variable
arr = [1,2,3,4,5];

// Just declaring


// Assign a value to that Variable
x = "hi";


// Stand-alone function


sayHello();

console.log(name);

// Anonyamous Function
var anonFunction = function(word, word2){
  console.log(word + "-----" + word2);
  console.log(arr);
}

anonFunction("Helloooooo", "Worldddddd");


function plusOne(num){
  return num+=1;
}

console.log(plusOne(1) + plusOne(5));

var result = plusOne(10);
console.log(result);

function retunNothing(arr){
  // return undefined by default
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  }

  var j = 0;
  while(j<arr.length){
    console.log(arr[j]);
    j++;
  }


  do {

    console.log("first");

  } while(false)






}
console.log(retunNothing([1,2,3,4,5]));

console.log(obj);



// Objects in JS
var obj = {
  name: "Andy",
  favMovie: "Matrix",
  favShow: "Black Mirror"
}

console.log(obj);
console.log(obj.name);
console.log(obj.favShow);









// end
