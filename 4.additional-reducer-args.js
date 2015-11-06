/** Additional Args of reduce
* 1. accumulator
* 2. item
* 3. index
* 4. array
*/

var reducer = function(accumulator, item, index, array) {
  var intermediaryValue = accumulator + item;
  return intermediaryValue;
}

var data = [1,2,3,4,5,6,7,3,3,5,2,3,5];

console.time('reducer');
var sum = data.reduce(reducer, 0);
console.timeEnd('reducer');
console.log('Sum:', sum, 'Mean:', sum/data.length);

var reducer2 = function(accumulator, item, index, array) {
  var intermediaryValue = accumulator + item;
  if(index === (array.length-1)) {
    return intermediaryValue/array.length;
  }
  return intermediaryValue;
}
console.time('reducer Effective');

var mean = data.reduce(reducer2, 0);
console.timeEnd('reducer Effective');
console.log('Sum:', sum, 'Mean:', mean);
