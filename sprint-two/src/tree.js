var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.children = [];  // fix me
  
  //extend tree functionallity to include tree methods
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  //recursively travel through tree to find target
  //if there return true
  
    // return treeMethods.contains.apply(null,this.children);
  
  //if not there
    //look deeper
    //if no more, return false
    
  //if found return true, otherwise return false
  var output = false;
  
  if (this.value === target) {
    return true;
  }
  
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++){
      output = output || this.children[i].contains(target);
    }
  }

  return output;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
