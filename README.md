# Understand ``Array.reduce()``

This repository contains simple examples and snippets to understand ``Array.reduce()``

## [Reduce Introduction]("/1.reduce-intro.js")

```
var data = [100,200,300];

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log('Sum of the array', data, 'is: ', total);
```

## Array To Object

```
var votes = [
  'Rajini',
  'Rajini',
  'Kamal',
  'Vijay',
  'Vikram',
  'PowerStar',
  'Kamal',
  'Kamal',
  'Cocunut Sreenivasan',
  'Rajini',
  'JK Riteesh',
  'Mike Mohan',
  'Rajini',
  'Rajini',
  'Rajini',
  'Mike Mohan'
];


var reducer = function(result, actor) {
  if (!(result[actor])) {
    result[actor] = 1;
  } else {
    result[actor]++;
  }
  return result;
};


var initialValue = {};

var pollResult = votes.reduce(reducer, initialValue);

console.log('Nadigar Sangam Result', pollResult);

```

## Common Patterns

```
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

```

## Additional Reducer Arguments

```
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

```

## Common Mistakes

```
// 1. Always pass an initialValue

// 2. Always return the accumulator

var data = [100,200,300];

var reducer = function(accumulator, item) {
  console.log('typeof accumulator', typeof accumulator);
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log('Sum of the array', data, 'is: ', total);


console.log('---------------------------------');


var votes = [
  'Rajini',
  'Rajini',
  'Kamal',
  'Vijay',
  'Vikram',
  'PowerStar',
  'Kamal',
  'Mike Mohan'
];


var voteReducer = function(result, actor) {
  if (!(result[actor])) {
    result[actor] = 1;
  } else {
    result[actor]++;
  }
  console.log('typeof accumulator', typeof result);

  return result;
};


var initialValue = {};

var pollResult = votes.reduce(voteReducer, initialValue);

console.log('Nadigar Sangam Result', pollResult);

```

## Flatten - FlatMap - Reduce Right

```
var data = [1,2,3,4,"5"];

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduceRight(reducer, initialValue);

console.log('Sum of the array', data, 'is: ', total);

```

## Array Prototype Reduce by Example

```
// Try ES6 Examples

```
