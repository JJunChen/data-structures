var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var headVal = list.head.value;
    list.head = list.head.next;
    return headVal;
  };

  list.contains = function(target) {
    var findTarget = function (node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next !== null) {
          return findTarget(node.next);
        } else {
          return false;
        }
      } 
    };
    return findTarget(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
