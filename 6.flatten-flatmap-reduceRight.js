var data = [1,2,3,4,"5"];

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduceRight(reducer, initialValue);

console.log('Sum of the array', data, 'is: ', total);
