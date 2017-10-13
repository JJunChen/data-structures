var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var res = false;
  var findTarget = function(child) {
    if (child.value === target) {
      res = true;
    } else {
      if (child.children) {
        for (let i of child.children) {
          findTarget(i);
        }
      }
    }
  };
  findTarget(this);
  return res;
};

treeMethods.removeFromParent = function(target) {
  var findTarget = function(node) {
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i].value === target) {
        node.children.splice(i, 1);
      }
    }
    for (let child of node.children) {
      findTarget(child);
    }
  };
  findTarget(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
