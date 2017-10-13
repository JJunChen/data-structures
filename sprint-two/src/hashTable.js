

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    this._keys.push(k);
    var linkList = new LinkedList();
    linkList.addToTail([k, v]);
    this._storage.set(index, linkList);
  } else {
    if (this._keys.includes(k)) {
      var bucket = this._storage.get(index);
      bucket.addToTail([k, v]);
      bucket.removeHead();
    } else {
      var bucket = this._storage.get(index);
      bucket.addToTail([k, v]);
      this._storage.set(index, bucket);
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
  this._storage.set(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


