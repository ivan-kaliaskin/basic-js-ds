const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

var items = []

class Stack {
  push(element) {
    items.push(element)
  }

  pop() {
    return items.pop()
  }

  peek() {
    return items[items.length - 1]
  }
}

// function Stack(){

//   var items = []; // Используется для сохранения элементов в стеке

// this.push = function (element) {
//  items.push(element);
// }

// this.pop = function () {
//  return items.pop();
// }

// this.peek = function () {
//  return items[items.length-1];
// }

// this.isEmpty = function () {
//  return items.length == 0;
// }

// this.size = function () {
//  return items.length;
// }

// this.clear = function () {
//  items = [];
// }

// this.print = function () {
//  console.log(items.toString());
// }
// }



module.exports = {
  Stack
};
