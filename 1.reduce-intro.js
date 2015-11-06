var data = [100,200,300];

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log('Sum of the array', data, 'is: ', total);
