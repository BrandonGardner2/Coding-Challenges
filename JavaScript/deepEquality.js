//Write a function that, given two objects, returns whether or not the two are deeply equivalent - meaning the contents of the two objects are equal for all keys and sub-keys.

function deepEquals(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
