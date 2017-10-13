

// Instantiate a new graph
var Graph = function() {
  this.edgeSet = [];
  this.nodeSet = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeSet.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeSet.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.edgeSet.length; i++) {
    if (this.edgeSet[i][0] === node || this.edgeSet[i][1] === node) {
      this.edgeSet.splice(i, 1);
    }
  }
  var index = this.nodeSet.indexOf(node);
  var deleted = this.nodeSet.splice(index, 1);
  return deleted;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let edge of this.edgeSet) {
    if (edge[0] === fromNode && edge[1] === toNode) {
      return true;
    } else if (edge[0] === toNode && edge[1] === fromNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeSet.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var findIndex = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i[0] === fromNode && i[1] === toNode) {
        return i;
      } else if (i[0] === toNode && i[1] === fromNode) {
        return i;
      }
    }
  };
  var deleted = this.edgeSet.splice(findIndex(this.edgeSet, 1));
  return deleted;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeSet.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


