var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;

};
 var stackMethods = {
  push : function(value) {
      this.storage[Object.keys(this.storage).length] = value;
  },
  pop : function() {
        var result = this.storage[Object.keys(this.storage).length - 1];
        delete this.storage[Object.keys(this.storage).length - 1];
        return result;    
  },
  size : function() {
    return Object.keys(this.storage).length;
  }
 };

// Stack.prototype.push = function(value) {
//     	this.storage[Object.keys(this.storage).length] = value;
// };

// Stack.prototype.pop = function() {
//     		var result = this.storage[Object.keys(this.storage).length - 1];
//     		delete this.storage[Object.keys(this.storage).length - 1];
//     		return result;    
// };

// Stack.prototype.size = function() {
//     return Object.keys(this.storage).length;
// };





