/* Common Patterns when using Map, Reduce, filter
Using reduce can save execution time */
var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('BigData Filter');
var filterBigData = bigData.filter(function(i) {
  return (i % 2 === 0);
}).map(function(j){
  return j * 2;
});
console.timeEnd('BigData Filter');


console.time('BigData Reduce');
var reducer = function(accumulator, item) {
  if(item%2 === 0 ){
    accumulator.push(item*2);
  }
  return accumulator;
};

var reduceBigData = bigData.reduce(reducer, []);
console.timeEnd('BigData Reduce');
