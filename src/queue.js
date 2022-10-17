const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

var items = []

class Queue {

  getUnderlyingList() {
    return items
  }

  enqueue(value) {
    items.push(value)
  }

  dequeue() {
    return items.shift()
  }
}

// function Queue() {
//   var items = [];

//   this.enqueue = function (element) {
//     items.push(element);
//   };

//   this.dequeue = function () {
//     return items.shift();
//   };

//   this.front = function () {
//     return items[0];
//   };

//   this.isEmpty = function () {
//     return items.length == 0;
//   };

//   this.clear = function () {
//     items = [];
//   };

//   this.size = function () {
//     return items.length;
//   };

//   this.print = function () {
//     console.log(items.toString());
//   }
// }

// var queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);

// queue.print(); // "1,2"


module.exports = {
  Queue
};
