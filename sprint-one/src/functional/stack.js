var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counts = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counts] = value;
    counts++;
  };

  someInstance.pop = function() {
    if (counts > 0) {
      counts--;
      var deleted = storage[counts];
      delete storage[counts];
      return deleted;
    }
  };

  someInstance.size = function() {
    return counts;
  };

  return someInstance;
};
