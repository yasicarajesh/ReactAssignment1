function check(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(check(50, 50))
console.log(check(20, 50))
console.log(check(20, 20))
console.log(check(20, 30))