
// Declaration 
let a;

// Defining 
a = 5;

// Declaration & Defining 
let b = 1;




x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {

  "use strict";


  x = 55 ; // This will cause an error because x is not declared

  /==========================================================================/

  y = {p1:10, p2:20}; // This will cause an error - Using an object, without declaring it, is not allowed:

  /==========================================================================/

  var z = 3.14;
  delete z; // This will cause an error - Deleting a variable (or object) is not allowed.

  /==========================================================================/

  function d(p1, p1) {}; // This will cause an error - Duplicating a parameter name is not allowed:

  /==========================================================================/

  var x = 010; // This will cause an error - Octal numeric literals are not allowed:

  /==========================================================================/

  var x = "\010"; // This will cause an error - Octal escape characters are not allowed:

  /==========================================================================/

  var obj = {};
  Object.defineProperty(obj, "x", {value:0, writable:false});
  obj.x = 3.14; // This will cause an error - Writing to a read-only property is not allowed:
  
  /==========================================================================/
  
//   The words eval + arguments +  cannot be used as a variable:
// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

}

