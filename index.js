var recipes = {};
// function updateObjectWithKeyAndValue(object, key, value){
//   var objectClone = Object.assign({}, object);
//   objectClone[key] = value;
//   return objectClone;
// }
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  var objectClone = Object.assign({}, object ) ;
  
  return objectClone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  
  return object;
}
function deleteFromObjectByKey(object, key){
  var objTwo = Object.assign({}, object);
  delete objTwo[key];
 return objTwo;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete  object[key];
  return object;
}
function updateObjectWithKeyAndValue(object, key, value){
 object[key] =  value;
 return object;
}