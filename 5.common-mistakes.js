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
