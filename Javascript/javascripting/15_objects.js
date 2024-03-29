/*  ## OBJECTS (Exercise 15 of 20)

  Objects are lists of values similar to arrays, except values are
  identified by keys instead of integers.

  Here is an example:

     const foodPreferences = {
       pizza: 'yum',
       salad: 'gross'
     }

 ## The challenge:

  Create a file named objects.js.

  In that file, define a variable named pizza like this:

     const pizza = {
       toppings: ['cheese', 'sauce', 'pepperoni'],
       crust: 'deep dish',
       serves: 2
     }

  Use console.log() to print the pizza object to the terminal.

  Check to see if your program is correct by running this command:

     javascripting verify objects.js */

const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
};

//let pizza = new Object();
//pizza.toppings = ['cheese', 'sauce', 'pepperoni'];
//pizza.crust = 'deep dish';
//pizza.serves = 2;

// function Pizza() {
//   this.toppings = ['cheese', 'sauce', 'pepperoni'];
//   this.crust = 'deep dish';
//   this.serves = 2;
// }

// const pizza = new Pizza();

console.log(pizza);
