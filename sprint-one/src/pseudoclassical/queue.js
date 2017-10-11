var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  keys.sort(function(a, b) {
    return a - b;
  });
  var key = +keys[keys.length - 1] + 1 || 0;
  this.storage[key] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  keys.sort(function(a, b) {
    return a - b;
  });
  var key = keys[0];
  var deleted = this.storage[key];
  delete this.storage[key];
  return deleted;
};

Queue.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};
