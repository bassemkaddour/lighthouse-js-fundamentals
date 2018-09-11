function howManyHundreds(num) {
  var count = 0
  for (var i = 0; num / 100 >= 1; i++) {
    num -= 100;
    count += 1;
  }
  return count
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);