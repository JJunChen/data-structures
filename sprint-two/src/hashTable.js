

var HashTable = function() {
  this._limit = 8;
  this._occupied = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    var doublyLinkList = new DoublyLinkedList();
    doublyLinkList.addToTail([k, v]);
    this._storage.set(index, doublyLinkList);
    this._occupied++;
    if (this._occupied > 0.75 * this._limit) {
      this._limit *= 2;
      this.rehash();
    }
  } else {
    var bucket = this._storage.get(index);
    var findTarget = function (node) {
      if (node.value[0] === k) {
        node.value[1] = v;
      } else if (node.next === null) {
        bucket.addToTail([k, v]);
      } else {
        findTarget(node.next);
      }
    };
    findTarget(bucket.head);
    this._storage.set(index, bucket);
    this._occupied++;
    if (this._occupied > 0.75 * this._limit) {
      this._limit *= 2;
      this.rehash();
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var findTarget = function (node) {
      if (node.value[0] === k) {
        return node.value[1];
      } else {
        return findTarget(node.next);
      }
    };
    return findTarget(bucket.head);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var findTarget = function (node) {
    if (node.value[0] === k) {
      if (node.prev !== null && node.next !== null) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      } else if (node.prev !== null) {
        bucket.removeHead();
      } else if (node.next !== null) {
        bucket.removeTail();
      } else {
        bucket = undefined;
      }
    } else {
      findTarget(node.next);
    }
  };
  findTarget(bucket.head);
  this._storage.set(index, bucket);
  this._occupied--;
  if (this._occupied < 0.25 * this._limit) {
    this._limit /= 2;
    this.rehash();
  }
};

HashTable.prototype.rehash = function() {

  var self = this;
  var oldStorage = Object.assign({}, self._storage);
  self._storage = LimitedArray(self._limit);
  self._occupied = 0;
  oldStorage.each(function(bucket) {
    var applyAllNodes = function (node) {
      self.insert(node.value[0], node.value[1]);
      if (node.next !== null) {
        applyAllNodes (node.next);
      }
    };
    if (bucket !== undefined) {
      applyAllNodes(bucket.head);
    }
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


