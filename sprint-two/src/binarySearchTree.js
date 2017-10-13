var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

var BinarySearchTreeMethods = {
  insert: function(val) {
    var nodeLoc = function (node) {
      if (node.value > val) {
        if (node.left === null) {
          node.left = BinarySearchTree(val);
        } else {
          nodeLoc(node.left);
        }
      } else if (node.value < val) {
        if (node.right === null) {
          node.right = BinarySearchTree(val);
        } else {
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
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
