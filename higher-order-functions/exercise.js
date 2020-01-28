// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function multiplyByTwo(n){
  return n*2;
}

function map(array, callback) {
  var newArray = array.map(function(cv) {
    return callback(cv);
  });

  return newArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  array.forEach(function(cv) {
    callback(cv);
  });
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var myArray = [];
  array.forEach(function(cv) {
    myArray.push(callback(cv));
  });
  return myArray;
}

//Extension 2
function reduce(array, callback, initialValue) {
  array.push(initialValue);

  for (let i = 0; i < array.length - 1; i= i+2) {
    initialValue += callback(array[i], array[i + 1]);
  }
  // array.forEach(function(cv, i, array){
  //   initialValue += callback(array[i], array[i + 1]);
  // })
  return initialValue;
}
// ???
//Extension 3
function check(array1 , array2){
  return array1.filter(cv =>{
    for(let i=0;i<array2.length;i++){
      if(cv == array2[i]){return true;}
    }
    return false;
  })
}
function intersection(...arrays){
  return arrays.reduce((acc ,cv) => check(acc , cv) , acc = arrays[0]);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function unionArray(arr1 ,arr2){
  let arr = arr2;
  arr = arr1.reduce((acc,cv) =>{ 
           if(!arr2.includes(cv)){
             arr.push(cv);
           }
     return arr; 
        },acc = arr);  
 return arr;
}
function union(...arrays) {
  return arrays.reduce((acc , currentArray) => unionArray(acc , currentArray) ,acc = arrays[0] );
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let objectKeys = (array1.length > array2.length)?array2.length:array1.length;
  let newObj = {};  
 for(let i=0;i<objectKeys;i++){
   newObj[array1[i]] = callback(array2[i]);
 }
  return newObj;
}


// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc , cv)=>{
    acc[cv] = arrCallbacks.map(currentfunction => currentfunction(cv));
    return acc;
  },acc={})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
