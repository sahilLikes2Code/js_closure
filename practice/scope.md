## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
Output: undefined undefined 'no one'
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));

Output: "AryaStark";
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js
function addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);

Output: 1 2
```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);

Output: 1 2
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);

Output: 1 2
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);

Output: can't access lexical declaration `addOne' before initialization
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);

Output: can't access lexical declaration `addOne' before initialization
```

8. What will be the output of the following

```js
function isAwesome() {
  //undefined
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
output: undefined;
```

9. What will be the output of the following

```js
function isAwesome() {
  //undefined
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
//Output
output: true;
```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
//Output
output: undefined;
```

11. What will be the output of the following

```js
let firstName = "Arya"; //undefined
const lastName = "Stark"; //undefined
var knownAs = "no one"; //undefined

function fullName(a, b) {
  //undefined
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
//Output
output: AryaStark;
```

12. What will be the output of the following

```js
let firstName = "Arya"; //undefined
const lastName = "Stark"; //undefined
var knownAs = "no one"; //undefined

function fullName(a, b) {
  //undefined
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
//Output
output: AryaStark;
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name);
//output
output: <empty string>
```

14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);
//output
output: Arya Stark, after executing 'console.log(name);' name which is defined with 'var' keyword is available in the global memory
```

15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);
//output
output: Arya Stark, by default the condition will evaluate to true, hence the variable will be defined in global and 'console.log' can access it
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);
//output
output: 20, variable defined with var can be accessed in the global scope
```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);

output: undefined, variable defined with let can't be accessed in the global scope
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
output:
'20 first' will be printed after 100ms
'20 second' will be printed after 100ms

```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
output:
0 first
1 first
2 first
3 first
4 first
5 first
6 first
7 first
8 first
9 first
10 first
11 first
12 first
13 first
14 first
15 first
16 first
17 first
18 first
19 first

i is not defined for[console.log(i, "second");]. As it was defined with let keyword whose scope is limited to the for loop
```

20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}
output: undefined

sample();
output: John Snow
```

21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}

output: undefined

sample();
output: reference error
```

22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}

output: undefined

sample();
output:
John Snow
John Snow second

```

23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}

output: undefined;

sample();
output: undefined;
```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

output:
Hello I am First
Hello I am Second
Hello I am Third
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

output:
Hello I am First
Hello I am Second
Hello I am Third
```

26. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First");
  let username = "Hello World!";
  myFunc();
}

Output:
can't access lexical declaration `username' before initialization

```

27. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();

output:
"I love this movie called ${movie.toUpperCase()}"
${movie.toUpperCase() is printed as is because the string uses "" not ``. If `` were used:
output would have been 'I love this movie called MAD MAX FURY ROAD'
```

28. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();
output: I love this movie called ${movie.toUpperCase()}.
${movie.toUpperCase() is printed as is because the string uses "" not ``. If `` were used:
output would have been 'I love this movie called BEFORE SUNRISE'
```

29. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();

output: I love this movie called ${movie.toUpperCase()}
${movie.toUpperCase() is printed as is because the string uses "" not ``. If `` were used:
output would have been 'I love this movie called GONE GIRL'
```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, sub, multiply, divide];

//Answer
for (operands of allFunctions) {
  console.log(operands(10, 5));
}
```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];

//Answer

let a = 12,
    b = 10;
for (operands of allFunctions) {
  console.log(operands(a, b));
}
```
