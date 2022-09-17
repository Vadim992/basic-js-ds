const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (this.obj) {
      return this.obj;
    } else {
      return null;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
      function sortTree(parentNode, newElem) {
        if (parentNode.data > newElem.data) {
            if (parentNode.left === null) {
              parentNode.left = newElem;
            } else{
               sortTree(parentNode.left, newElem)
            }
 
        } else {
          if (parentNode.right === null) {
            parentNode.right = newElem;
        } else {
          sortTree(parentNode.right, newElem);
        }
      }
    }

    let newNode = new Node(data);
    if (! this.obj) {
      this.obj = newNode;
    } else {
      sortTree(this.obj, newNode);
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    if (this.obj) {
 
      let clone = this.obj;
       while (clone) {
        if (data === clone.data) {
          return true;
        } else if (data < clone.data) {
           clone = clone.left;
        } else if (data > clone.data) {
          clone = clone.right;
        } else {
          clone = null;
        }
      }
         return false;
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
  if (this.obj) {
 
   let clone = this.obj;
    while (clone) {
     if (data === clone.data) {
       return clone;
     } else if (data < clone.data) {
        clone = clone.left;
     } else if (data > clone.data) {
       clone = clone.right;
     } else {
       clone = null;
     }
   }
      return null;
 }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    if (this.has(data)) {
     function getMinRight(node) {
       
      let cloneNode = node;
      cloneNode = cloneNode.right;
      let prev = cloneNode;
      let result = 0;
       while (cloneNode) {
          if (cloneNode.left) {
            prev = cloneNode;
            cloneNode = cloneNode.left;
            
          } else {
            result = cloneNode.data;
            if (cloneNode.right) {
              prev.left = cloneNode.right;
         } else {
           prev.left = null;  
         }
            break;
          }
       }
       
        return result;
     }




      let clone = this.obj;
      let prevClone = clone;
      while (clone) {
        if (data === clone.data) {
           break;
        } else if (data < clone.data) {
           prevClone = clone; 
           clone = clone.left;
        } else if (data > clone.data) {
          prevClone = clone;
          clone = clone.right;
        }
      }

      if (!clone.left && !clone.right) {
         if (prevClone.left) {
         prevClone.left.data === data ? prevClone.left = null : prevClone.right = null;
         } else {
           prevClone.right = null;
         }
        return 
      } 
      if (! clone.left) {
         if (prevClone.left) {
         prevClone.left.data === data ? prevClone.left = clone.right : prevClone.right = clone.right;
         } else {
           prevClone.right = clone.right;
         }
        console.log(clone);
        console.log(this.obj);
        return;
      } else if (! clone.right) {
        if (prevClone.left) {
        prevClone.left.data === data ? prevClone.left = clone.left : prevClone.right = clone.left;
        } else {
          prevClone.right = clone.left;
        }
        return;
      }

      if (clone.left && clone.right) {
        clone.data = getMinRight(clone);
      }
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {

    let clone = this.obj; 
    while (clone.left) {
      clone = clone.left;
    }
    return clone.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {

    let clone = this.obj;
    while (clone.right) {
      clone = clone.right;
    }
    return clone.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};