var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    keys.sort(function (a, b) {
      return a - b;
    });
    var key = +keys[keys.length - 1] + 1 || 0;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    keys.sort(function (a, b) {
      return a - b;
    });
    var key = keys[0];
    var deleted = storage[key];
    delete storage[key];
    return deleted;  
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;   
  };

  return someInstance;
};
