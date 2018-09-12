function range(start, end, step) {
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    return [];
  } else if (start >= end || step <= 0){
    return [];
  } else {
    var range_array = []
    for (var i = start; i <= end; i += step) {
      range_array.push(i);
    }
    return range_array
  }
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range("blue", undefined, false));
console.log(range(10, 3, 3));
console.log(range(3, 10, -2));