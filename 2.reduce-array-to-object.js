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
