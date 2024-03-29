/* ## ACCESSING ARRAY VALUES (Exercise 13 of 20)

  Array elements can be accessed through index number.

  Index number starts from zero to array's property length minus one.

  Here is an example:

     const pets = ['cat', 'dog', 'rat']

     console.log(pets[0])

  The above code will print the first element of pets array - string cat.

  Array elements must be accessed through only using bracket notation.

  Dot notation is invalid.

  Valid notation:

     console.log(pets[0])

  Invalid notation:

     console.log(pets.1);

 ## The challenge:

  Create a file named accessing-array-values.js.

  In that file, define array food :

     const food = ['apple', 'pizza', 'pear']

  Use console.log() to print the second value of array to the terminal.

  Check to see if your program is correct by running this command:

     javascripting verify accessing-array-values.js */

const food = ["apple", "pizza", "pear"];

console.log(food[1]);
