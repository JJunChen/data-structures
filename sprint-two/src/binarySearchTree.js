var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.height = 1;
  return instance;
};

var BinarySearchTreeMethods = {
  insert: function(val) {
    var currentHeight = 1;
    var nodeLoc = function (node) {
      if (node.value > val) {
        if (node.left === null) {
          currentHeight++;
          node.left = BinarySearchTree(val);
          node.left.height = currentHeight;
        } else {
          currentHeight++;
          nodeLoc(node.left);
        }
      } else if (node.value < val) {
        if (node.right === null) {
          currentHeight++;
          node.right = BinarySearchTree(val);
          node.right.height = currentHeight;
        } else {
          currentHeight++;
          nodeLoc(node.right);
        }
      }
    };
    nodeLoc(this);
  },

  contains: function(target) {
    var findTarget = function (node) {
      if (node.value === target) {
        return true;
      } else if (node.value > target) {
        if (node.left !== null) {
          return findTarget(node.left);
        }
      } else if (node.value < target) {
        if (node.right !== null) {
          return findTarget(node.right);
        }
      }
      return false;
    };
    return findTarget(this);
  },

  depthFirstLog: function(cb) {
    var applyAll = function (node) {
      node.value = cb(node.value);
      if (node.left !== null) {
        applyAll(node.left);
      } 
      if (node.right !== null) {
        applyAll(node.right);
      }
    };
    applyAll(this);
  },
  
  breadthFirstLog: function(cb) {
    var queue = new Queue;
    queue.enqueue(this);
    var queueAndApply = function (node) {
      node.value = cb(node.value);
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
    };
    debugger;
    while (queue.size() > 0) {
      queueAndApply(queue.dequeue());
    }
  }
  
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
