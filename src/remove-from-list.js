const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
// Решение ерез массивж
// function removeKFromList(l, k) {
//   let arr = [];
//   let clone = Object.assign(l);
//   while (clone !== null) {
//     arr.push(clone.value);
//     clone = clone.next;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === k) {
//       arr.splice(i,1);
//       i--;
//     } 
//   }
// let obj;
// let buf;
// arr.forEach((item,index) => {
//   if (index === 0) {
//     obj = new ListNode(item);
//     buf = obj;
//   } else {
//     buf.next = new ListNode(item);
//     buf = buf.next;
//   }
// });
// l = obj
// return l;
//   // throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function removeKFromList(l, k) {
  let obj = l;
 
  while (obj) {
    if (obj.value === k) {
        let clone = l;

       while (clone) {
         if (JSON.stringify(clone) === JSON.stringify(obj)) {
           l = obj.next;
           break;
         } else if (JSON.stringify(clone.next) === JSON.stringify(obj)) {
            if (!clone.next) {
              clone.next = null;
            } else {
              clone.next = obj.next;
            }
           break;
         } else {
           clone = clone.next;
         }
      }
    }
    obj = obj.next;
  }
  return l;
}
module.exports = {
  removeKFromList
};
