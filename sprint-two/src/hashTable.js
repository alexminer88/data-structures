

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currLocation = this._storage.get(index);
  // if location is empty
  if (currLocation === undefined) {
    //set input location as array
    this._storage.set(index,[[k,v]]);
  } else {
    currLocation.forEach(tuple => {
      if (tuple[0] === k) {
        //filter currLocation
        currLocation = currLocation.filter(el => el[0] !== k);
        //set location to currLocation
      }
    });
      currLocation.push([k,v]);
      this._storage.set(index, currLocation);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get array at index
  var locationArr = this._storage.get(index)
  var output = undefined;
  //find tuple with first value input
  if (locationArr !== undefined) {
    locationArr.forEach(tuple =>{
      if (tuple[0] === k){
        output = tuple[1];
      }
    });
  }
  //return second value of tuple
  return output;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get array at index
  //find tuple with first value input
  //reassign tuple to undefined
  this._storage.set(index,undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


