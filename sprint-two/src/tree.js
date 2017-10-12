var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
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
          console.log(i);
          findTarget(i);
        }
      }
    }
  };
  findTarget(this);
  return res;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
