## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal); //animal is not defined;
var animal = "monkey"; //undefined;
// Output or Error Message
output : undefined;

```

```js
console.log(animal);  //animal is not defined;
let animal = "monkey"; //undefined;
// Output or Error Message
can't access lexical declaration `animal' before initialization

```

```js
console.log(animal); //animal is not defined;
const animal = "monkey"; //undefined;
// Output or Error Message
can't access lexical declaration `animal' before initialization
```

```js
function sayHello(msg) {
  alert(msg); //undefined
}
sayHello("Hey Everyone"); // alerts Hey Everyone
// Output or Error Message
alerts 'Hey Everyone'
```

```js
sayHello("Hey Everyone"); //sayHello is not defined;
function sayHello(msg) { // undefined
  alert(msg);
}
// Output or Error Message
// if run after both the lines are written 
alerts 'Hey Everyone'; 
```

```js
sayHello("Hey Everyone"); //refrence error: sayHello is not defined;
var sayHello = msg => { //undefined
  alert(msg);
};
// Output or Error Message
// if run after both the lines are written 
sayHello is not a function
```

```js
sayHello("Hey Everyone");//refrence error: sayHello is not defined;
let sayHello = msg => { //undefined
  alert(msg);
};
can't access lexical declaration `sayHello' before initialization
```
