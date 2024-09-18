# Scope in JavaScript

## Introduction
In JavaScript, scope determines the accessibility or visibility of variables. There are different types of scope, including:

- Global Scope
- Local Scope
- Function Scope
- Block Scope

---

# Global Scope in JavaScript

## Introduction
In JavaScript, the **global scope** refers to variables that are accessible from anywhere in your program. These variables are defined outside of any function or block.

---

## What is Global Scope?
A variable declared in the **global scope** is available to all scripts and functions in the program. This means that it can be modified or accessed from any part of your code.

```javascript
let globalVar = "I am global";

function showGlobalVar() {
    console.log(globalVar); // "I am global"
}
```

## Declaring Global Variables
Global variables are declared outside any function or block. They can be declared using `var`, `let`, or `const`.

```javasript
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";
const globalConst = "I'm global with const";
```
***Note: Avoid using too many global variables, as it can lead to namespace pollution.***

## Accessing Global Variables
Global variables can be accessed from any function or block of code.
```javascript
let name = "Alice";

function greet() {
    console.log(`Hello, ${name}`); // "Hello, Alice"
}

greet();
```

## Modifying Global Variables
Global variables can be modified inside functions, and those changes are reflected globally.
```javascript 
let count = 0;

function increment() {
    count++;
    console.log(count); // Outputs updated count
}

increment(); // 1
increment(); // 2
console.log(count); // 2
```
## Global Scope and Browser
In a browser environment, global variables declared with `var` are properties of the `window` object, whereas those declared with `let` or `const` are not.

```javascript 
var globalVar = "I am global";
console.log(window.globalVar); // "I am global"

let globalLet = "I am also global";
console.log(window.globalLet); // undefined
```

## Problems with Global Variables
Using too many global variables can lead to issues like:
 - ***Namespace collisions:*** Two scripts may accidentally define global variables with the same name.
 - ***Hard to debug:*** Global variables can be changed from anywhere, making it hard to trace the source of bugs.

 # Local Scope in JavaScript
## Introduction
In JavaScript, **local scope** refers to variables that are accessible only within a specific function or block. These variables are not accessible outside their defining function or block.

## What is Local Scope?
A variable declared within a function or block is available only within that function or block. This means that it cannot be accessed or modified from outside its scope.
```javascript 
function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // Outputs: I am local
}
myFunction();
console.log(localVar); // ReferenceError: localVar is not defined
```

## Declaring Local Variables
Local variables are declared within a function or block using `var`, `let`, or `const`.
```javascript
function exampleFunction() {
    var functionScopedVar = "Function scoped";
    let blockScopedLet = "Block scoped with let";
    const blockScopedConst = "Block scoped with const";
    
    console.log(functionScopedVar); // Outputs: Function scoped
    console.log(blockScopedLet); // Outputs: Block scoped with let
    console.log(blockScopedConst); // Outputs: Block scoped with const
}
exampleFunction();
console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
```
***Note: Local variables are confined to the scope in which they are declared, and they do not affect the global scope.***

## Accessing Local Variables
Local variables can be accessed only within the function or block where they are declared.
```javascript
function greet() {
    let name = "Alice";
    console.log(`Hello, ${name}`); // Outputs: Hello, Alice
}
greet();
console.log(name); // ReferenceError: name is not defined
```
## Modifying Local Variables
Local variables can be modified within their scope, and those changes are reflected only within that scope.
```javascript 
function counter() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count); // Outputs updated count
    }
    
    increment(); // Outputs: 1
    increment(); // Outputs: 2
}
counter();
console.log(count); // ReferenceError: count is not defined
```
# Function Scope in JavaScript
## Introduction
In JavaScript, **function scope** refers to variables that are accessible only within the function in which they are declared. These variables are not accessible outside their defining function.

## What is Function Scope?
A variable declared within a function is available only within that function. This means that it cannot be accessed or modified from outside the function.
```javascript 
function myFunction() {
    let functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Outputs: I am function scoped
}
myFunction();
console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
```
## Declaring Function Scoped Variables
Function-scoped variables are declared inside a function using `var`, `let`, or `const`.
```javascript
function exampleFunction() {
    var functionScopedVar = "Function scoped with var";
    let functionScopedLet = "Function scoped with let";
    const functionScopedConst = "Function scoped with const";
    
    console.log(functionScopedVar); // Outputs: Function scoped with var
    console.log(functionScopedLet); // Outputs: Function scoped with let
    console.log(functionScopedConst); // Outputs: Function scoped with const
}
exampleFunction();
console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
console.log(functionScopedLet); // ReferenceError: functionScopedLet is not defined
console.log(functionScopedConst); // ReferenceError: functionScopedConst is not defined
```
***Note: Function-scoped variables are only accessible within the function where they are declared, and they do not affect other parts of the code.***

## Accessing Function Scoped Variables
Function-scoped variables can be accessed only within the function where they are declared.

```javascript
function greet() {
    let name = "Alice";
    console.log(`Hello, ${name}`); // Outputs: Hello, Alice
}
greet();
console.log(name); // ReferenceError: name is not defined
```
## Modifying Function Scoped Variables
Function-scoped variables can be modified within their scope, and those changes are reflected only within that function.
```javascript 
function counter() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count); // Outputs updated count
    }
    
    increment(); // Outputs: 1
    increment(); // Outputs: 2
}
counter();
console.log(count); // ReferenceError: count is not defined
```
## Function Scope and Nested Functions
- Variables declared with `var`, `let`, or `const` inside a function are accessible to nested functions.
- This allows inner functions to access and modify the variables of their outer functions.
```javascript 
function outerFunction() {
    let outerVar = "Outer variable";
    
    function innerFunction() {
        console.log(outerVar); // Outputs: Outer variable
    }
    
    innerFunction();
}
outerFunction();
```

# Block Scope in JavaScript

## Introduction
In JavaScript, **block scope** refers to the visibility of variables within a specific block of code, such as those defined within `{}` brackets. Block scope restricts the access of variables to the block in which they are declared.

## What is Block Scope?
Variables declared within a block using `let` or `const` are only accessible within that block. This means that they are not accessible outside the block.
```JAVASCRIPT
{
    let blockScopedLet = "I am block scoped with let";
    const blockScopedConst = "I am block scoped with const";
    console.log(blockScopedLet); // Outputs: I am block scoped with let
    console.log(blockScopedConst); // Outputs: I am block scoped with const
}
console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
```

## Declaring Block Scoped Variables

Block-scoped variables are declared inside a block using `let` or `const`. They are not accessible outside the block.

```JAVASCRIPT 
{
    let blockScopedLet = "Inside block";
    const blockScopedConst = "Inside block";
    
    console.log(blockScopedLet); // Outputs: Inside block
    console.log(blockScopedConst); // Outputs: Inside block
}
console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
```
***Note: Variables declared with `var` are not block-scoped, but function-scoped.***

## Accessing Block Scoped Variables
Block-scoped variables can only be accessed within the block where they are declared.

```javascript 
function testBlockScope() {
    if (true) {
        let blockScopedLet = "I am inside the block";
        console.log(blockScopedLet); // Outputs: I am inside the block
    }
    console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
}
testBlockScope();
```
## Modifying Block Scoped Variables
Block-scoped variables can be modified within their block, and those changes are reflected only within that block.

```javascript
{
    let count = 0;
    
    function increment() {
        count++;
        console.log(count); // Outputs updated count
    }
    
    increment(); // Outputs: 1
    increment(); // Outputs: 2
}
console.log(count); // ReferenceError: count is not defined
```

## Block Scope and Loops
- **Block scope** is particularly useful within loops to create variables that are only accessible within each iteration of the loop.
```javascript 
for (let i = 0; i < 3; i++) {
    console.log(i); // Outputs: 0, 1, 2
}
console.log(i); // ReferenceError: i is not defined
```