const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  function listToArray(list) {
    let tmp = list;
    let arr = []
    while (tmp) {
      arr.push(tmp.value)
      tmp = tmp.next;
    }
    return arr
  }
  function convertArrayToList(arr) {
    class ListNode {
      constructor(x) {
        this.value = x;
        this.next = null;
      }
    }
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }

      return new ListNode(cur);
    }, null);
  }

  const result_1 = listToArray(l)
  const result_2 = result_1.filter(el => el != k)
  const result = convertArrayToList(result_2)
  return result
}

module.exports = {
  removeKFromList
};
