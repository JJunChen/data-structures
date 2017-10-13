var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
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
  
  list.addToHead = function(value) {
    if (list.head === null) {
      list.addToTail(value);
    } else {
      var node = Node(value);
      list.head.prev = node;
      node.next = list.head;
      list.head = node;
    }
    
  };

  list.removeTail = function () {
    if (list.tail !== null) {
      var deleted = list.tail.value;
      if (list.tail.prev !== null) {
        list.tail = list.tail.prev;
        list.tail.next = null;
      } else {
        list.head = null;
        list.tail = null;
      }
      return deleted;
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */