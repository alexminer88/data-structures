var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    //if empty list
    if (list.head === null) {
      //add node to head/tail
      list.head = node;
      list.tail = node;
    }
    //else
    else {
      //list.tail.next = new node
      list.tail.next = node;
      //add node to tail
      list.tail = node;
      //assign tail as new node
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var output = list.head.value
      if (list.head === list.tail) {
        list.tail = null;
      }
      list.head = list.head.next
      return output;
    }
  };

  list.contains = function(target) {
    //loop through list
    var node = list.head;
    while (node !== null){
      //if value = target, return node
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  list.removeTail = function() {
    var node = list.head;
    // loop through list until we find node right before tail
    while (node.next !== list.tail) {
      node = node.next;
    }
    // save list.tail.value
    var oldTail = list.tail.value;
    // set tail to current node
    list.tail = node;
    list.tail.next = null;
    return oldTail;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addToTail : O(1)
  .removeHead : O(1)
  .contains : O(n)
 */
