var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  
  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  return bst;
};


BinarySearchTree.prototype.insert = function(input) {
  if (this.value < input){
    if (this.right){
      this.right.insert(input);
    } else {
      this.right = BinarySearchTree(input);
    }
  } else if (this.value > input) {
    if (this.left){
      this.left.insert(input);
    } else {
      this.left = BinarySearchTree(input);
    }
  }
}

BinarySearchTree.prototype.contains = function(input) {
  if (this.value === input){
    return true;
  } else if (this.left === null && this.right === null){
    return false;
  } else {
    if (this.value < input) {
      return this.right.contains(input);
    } else {
      return this.left.contains(input);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(fn) {
  //call fn on this.value
  fn(this.value);
  //check if this has children
  //if this.left !== null, 
  if (this.left !== null){
    //call .depthFirstLog on this.left
    this.left.depthFirstLog(fn);
  }
  //if this.right !== null
  if(this.right !== null){
    //call .depthFirstLog on this.right
    this.right.depthFirstLog(fn);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
  .insert : O(log(n))
  .contains : O(log(n))
  .depthFirstLog : O(n);
 */
